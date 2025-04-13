require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { OpenAI } = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ✅ Load FAQ Data from JSON
const FAQ_PATH = __dirname + "/data/training_data.json";

let faqEmbeddings = [];

const loadFAQData = () => {
  try {
    const data = fs.readFileSync(FAQ_PATH, "utf8");
    faqData = JSON.parse(data);
    console.log("✅ Loaded FAQ Data:", faqData.length, "entries");
  } catch (error) {
    console.error("❌ Error loading training data:", error);
  }
};

const preloadEmbeddings = async () => {
  for (const faq of faqData) {
    const embedding = await getEmbedding(faq.question);
    if (embedding) {
      faqEmbeddings.push({ ...faq, embedding });
    }
  }
  console.log("✅ Preloaded FAQ Embeddings");
};




// ✅ Get Embedding for a Given Text
const getEmbedding = async (text) => {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
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

  for (const faq of faqEmbeddings) {
    const similarity = cosineSimilarity(userEmbedding, faq.embedding);
    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      bestMatch = faq;
    }
  }

  return { bestMatch, similarityScore: highestSimilarity };
};


// Load FAQ Data at Startup
loadFAQData();
preloadEmbeddings(); // async call


// ✅ Generate AI-Based Answer Using GPT-4
const generateAIResponse = async (userMessage) => {
  try {
    const context = faqData
      .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
      .join("\n\n");

    const prompt = `
You are a helpful FAQ assistant. Answer the following user question using the provided FAQ data. 
Keep the response under 3 sentences and concise. Avoid unnecessary details.

### FAQ Data:
${context}

### User Question:
${userMessage}

### Answer (Max 3 sentences):
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful customer support assistant. With all of the information that you need given to you in training_data.json.\
          If you do not know the answer to a users question then just say that you do not know and then route the user to contact a live agent.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 200,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("❌ Error generating AI response:", error);
    return "I'm sorry, I couldn't generate an answer at this moment.";
  }
};

// ✅ Define Similarity Thresholds
const HIGH_SIMILARITY_THRESHOLD = 0.95; // Strong match
const LOW_SIMILARITY_THRESHOLD = 0.0; // Too far from training data

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("📩 User Input:", message);

    const aiGeneratedResponse = await generateAIResponse(message);

    // Return AI response as-is
    return res.json({ reply: aiGeneratedResponse });
  } catch (error) {
    console.error("❌ Error in chatbot:", error);

    // Return a basic error message only if the AI call fails entirely
    return res.json({
      reply:
        "Oops! Something went wrong on our end. Please try again later or contact us at (972) 362-8468.",
    });
  }
});



// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
