require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { OpenAI } = require("openai");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY; // Add your API key to the .env file
const PLACE_ID = process.env.PLACE_ID; // Replace with your business's Google Place ID

// ✅ Load FAQ Data from JSON
const FAQ_PATH = __dirname + "/data/training_data.json";

let faqData = [];

const loadFAQData = () => {
    try {
        const data = fs.readFileSync(FAQ_PATH, "utf8");
        faqData = JSON.parse(data);
        console.log("✅ Loaded FAQ Data:", faqData.length, "entries");
    } catch (error) {
        console.error("❌ Error loading training data:", error);
    }
};

// Load FAQ Data at Startup
loadFAQData();

// ✅ Get Embedding for a Given Text
const getEmbedding = async (text) => {
    try {
        const response = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: text
        });
        return response.data[0].embedding;
    } catch (error) {
        console.error("❌ Error generating embedding:", error);
        return null;
    }
};

// ✅ Compute Cosine Similarity
const cosineSimilarity = (vecA, vecB) => {
    const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
};

// ✅ Find Best FAQ Match Using AI
const findBestMatchAI = async (userMessage) => {
    const userEmbedding = await getEmbedding(userMessage);
    if (!userEmbedding) return null;

    let bestMatch = null;
    let highestSimilarity = -1;

    for (const faq of faqData) {
        const faqEmbedding = await getEmbedding(faq.question);
        if (!faqEmbedding) continue;

        const similarity = cosineSimilarity(userEmbedding, faqEmbedding);

        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            bestMatch = faq;
        }
    }

    return bestMatch;
};

// ✅ Chatbot Route
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        console.log("📩 User Input:", message);

        // ✅ Find the best matching FAQ answer
        const matchedFAQ = await findBestMatchAI(message);

        if (matchedFAQ) {
            console.log("✅ Matched FAQ:", matchedFAQ);
            return res.json({ reply: matchedFAQ.answer });
        }

        console.log("❌ No FAQ Match - Returning Default Response");

        return res.json({ reply: "I'm sorry, I don't understand that question. Please rephrase or check our FAQ." });

    } catch (error) {
        console.error("❌ Error in chatbot:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

app.get("/api/reviews", async (req, res) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
            params: {
                place_id: PLACE_ID,
                key: GOOGLE_API_KEY,
                fields: "reviews" // Ensure you're requesting the right field
            }
        });

        // Log the entire response to see if the structure is what we expect
        console.log("✅ Google API Full Response:", response.data);

        // Check if the 'result' object and 'reviews' exist
        if (response.data.result && response.data.result.reviews) {
            const reviews = response.data.result.reviews;
            console.log(`✅ Fetched ${reviews.length} reviews from Google`);
            res.json(reviews);
        } else {
            console.warn("⚠️ No 'reviews' field found in the Google API response.");
            res.json([]); // Send empty array if no reviews are found
        }

    } catch (error) {
        console.error("❌ Error fetching Google reviews:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch reviews from Google" });
    }
});



// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
