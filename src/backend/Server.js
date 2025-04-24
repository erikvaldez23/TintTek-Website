require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
const { OpenAI } = require("openai");
const Message = require("./models/Message"); // Message model

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ File paths
const FAQ_PATH = __dirname + "/data/training_data.json";
const USER_MESSAGES_PATH = __dirname + "/data/user_messages.json";
const conversationHistory = []; // Stores an array of messages [{ role: "user", content: "..." }, ...]


// ✅ Store in JSON file (optional local backup)
const storeUserMessageToFile = (userMessage, botReply) => {
  const newEntry = {
    timestamp: new Date().toISOString(),
    userMessage,
    botReply,
  };

  let currentData = [];

  try {
    if (fs.existsSync(USER_MESSAGES_PATH)) {
      const raw = fs.readFileSync(USER_MESSAGES_PATH, "utf8");
      currentData = JSON.parse(raw);
    }
  } catch (err) {
    console.error("❌ Error reading user messages file:", err);
  }

  currentData.push(newEntry);

  try {
    fs.writeFileSync(USER_MESSAGES_PATH, JSON.stringify(currentData, null, 2));
    console.log("📝 Stored user message to file.");
  } catch (err) {
    console.error("❌ Error writing user message file:", err);
  }
};

// ✅ Load FAQ JSON
let faqData = [];
let faqEmbeddings = [];

const loadFAQData = () => {
  try {
    const data = fs.readFileSync(FAQ_PATH, "utf8");
    faqData = JSON.parse(data);
    console.log("✅ Loaded FAQ Data:", faqData.length, "entries");
  } catch (error) {
    console.error("❌ Error loading FAQ data:", error);
  }
};

// ✅ Get Embedding
const getEmbedding = async (text) => {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error("❌ Error generating embedding:", error);
    return null;
  }
};

// ✅ Preload all FAQ Embeddings
const preloadEmbeddings = async () => {
  for (const faq of faqData) {
    const embedding = await getEmbedding(faq.question);
    if (embedding) {
      faqEmbeddings.push({ ...faq, embedding });
    }
  }
  console.log("✅ Preloaded FAQ Embeddings");
};

// ✅ Cosine Similarity
const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};

// ✅ Find Best Match
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

// ✅ Generate Response
const generateAIResponse = async (userMessage, history = []) => {
  try {
    const { bestMatch, similarityScore } = await findBestMatchAI(userMessage);

    const systemMessage = {
      role: "system",
      content:
        "You are a helpful assistant for a tinting business. Use the FAQ when available. If there's no FAQ match, do your best to respond and include a warm suggestion to contact our tinting experts at (972) 362-8468.",
    };

    const messages = [systemMessage, ...history];

    if (bestMatch && similarityScore >= 0.5) {
      messages.push({
        role: "assistant",
        content: `Here is a FAQ that might help:\nQ: ${bestMatch.question}\nA: ${bestMatch.answer}`,
      });
    }

    messages.push({ role: "user", content: userMessage });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 300,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("❌ Error generating AI response:", error);
    return "Oops! Something went wrong. Please try again later or contact us directly.";
  }
};



// ✅ Load and Start Server
loadFAQData();

preloadEmbeddings().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});

// ✅ Chat Endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("📩 User Input:", message);

    // Add user message to memory
    conversationHistory.push({ role: "user", content: message });

    // Get AI reply using previous conversation context
    const botReply = await generateAIResponse(message, conversationHistory);

    // Add assistant reply to memory
    conversationHistory.push({ role: "assistant", content: botReply });

    // Store message
    await Message.create({ userMessage: message, botReply });
    storeUserMessageToFile(message, botReply);

    res.json({ reply: botReply });
  } catch (error) {
    console.error("❌ Error in /chat endpoint:", error);
    res.status(500).json({
      reply: "Oops! Something went wrong. Please contact us at (972) 362-8468.",
    });
  }
});
