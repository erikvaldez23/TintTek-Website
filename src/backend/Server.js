require("dotenv").config(); // ✅ Load environment variables at the very top

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const fs = require("fs");
const { OpenAI } = require("openai");
const levenshtein = require("fast-levenshtein"); // ✅ Import Levenshtein for fuzzy matching

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// ✅ OpenAI API Configuration
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ✅ Ensure PLACE_ID and GOOGLE_API_KEY are Loaded
const PLACE_ID = process.env.PLACE_ID;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// 🔍 Debugging Logs (Check if values are loaded)
console.log("✅ PLACE_ID:", PLACE_ID || "PLACE_ID is undefined!");
console.log("✅ GOOGLE_API_KEY:", GOOGLE_API_KEY || "GOOGLE_API_KEY is undefined!");

// ✅ Load Training Data from JSON
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

// ✅ Fuzzy Matching with Levenshtein Distance
const findBestMatch = (userMessage) => {
    let bestMatch = null;
    let lowestDistance = Infinity;
    const THRESHOLD = 4; // Maximum allowable word distance for a match

    userMessage = userMessage.toLowerCase().trim();

    faqData.forEach((faq) => {
        const question = faq.question.toLowerCase().trim();
        const distance = levenshtein.get(userMessage, question);

        if (distance < lowestDistance) {
            lowestDistance = distance;
            bestMatch = faq;
        }
    });

    // ✅ Return best match only if it's within the threshold, otherwise return null
    return lowestDistance <= THRESHOLD ? bestMatch : null;
};

// ✅ Chatbot Route (FAQ First, GPT Fallback)
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const normalizedMessage = message.toLowerCase().trim();

        console.log("📩 User Input:", normalizedMessage);

        // Find the best FAQ match
        const matchedFAQ = findBestMatch(normalizedMessage);

        if (matchedFAQ) {
            console.log("✅ Matched FAQ:", matchedFAQ);
            return res.json({ reply: matchedFAQ.answer });
        }

        console.log("❌ No FAQ Match - Using ChatGPT");

        // If no match is found, fallback to ChatGPT
        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [{ role: "user", content: message }],
        });

        res.json({ reply: response.choices[0].message.content });

    } catch (error) {
        console.error("❌ Error in chatbot:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// ✅ Google Reviews Route (Handles Undefined PLACE_ID)
app.get("/api/reviews", async (req, res) => {
    try {
        if (!PLACE_ID) {
            return res.status(500).json({ error: "PLACE_ID is not set in environment variables." });
        }
        if (!GOOGLE_API_KEY) {
            return res.status(500).json({ error: "GOOGLE_API_KEY is not set in environment variables." });
        }

        const API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
        console.log("Fetching from:", API_URL);

        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.result && data.result.reviews) {
            res.json(data.result.reviews);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error("❌ Error fetching Google Reviews:", error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
