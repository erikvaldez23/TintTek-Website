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

let faqData = [];
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

// ✅ Get Embedding for a Given Text
const getEmbedding = async (text) => {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002", // ✅ valid model
      input: text,
    });
    return response.data[0].embedding;
  } catch (error) {
    console.error("❌ Error generating embedding:", error);
    return null;
  }
};

// ✅ Preload Embeddings for FAQ Questions
const preloadEmbeddings = async () => {
  for (const faq of faqData) {
    const embedding = await getEmbedding(faq.question);
    if (embedding) {
      faqEmbeddings.push({ ...faq, embedding });
    }
  }
  console.log("✅ Preloaded FAQ Embeddings");
};

// ✅ Compute Cosine Similarity
const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dotProduct / (magnitudeA * magnitudeB);
};

// ✅ Find Best Match Using Embeddings
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

// ✅ Generate AI-Based Answer Using GPT
const generateAIResponse = async (userMessage) => {
  try {
    const { bestMatch, similarityScore } = await findBestMatchAI(userMessage);

    if (!bestMatch || similarityScore < 0.75) {
      return "I'm not totally sure about that – for the most accurate answer, feel free to give us a call at (972) 362-8468 or check the Services page!";
    }

    const context = `Q: ${bestMatch.question}\nA: ${bestMatch.answer}`;

    const prompt = `
You are a helpful FAQ assistant. Use the FAQ data below to answer the user's question.
Keep it under 3 sentences. Be clear, professional, and concise.

### FAQ Data:
${context}

### User Question:
${userMessage}

### Answer:
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful customer support assistant. If no relevant FAQ is available, direct users to contact support. Answer clearly based on the FAQ context provided.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 300,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error("❌ Error generating AI response:", error);
    return "Oops! Something went wrong. Please try again later or contact us directly.";
  }
};

// ✅ Load FAQ and Embeddings at Startup
loadFAQData();

preloadEmbeddings().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});

// ✅ Chat Endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("📩 User Input:", message);

    const aiGeneratedResponse = await generateAIResponse(message);

    return res.json({ reply: aiGeneratedResponse });
  } catch (error) {
    console.error("❌ Error in chatbot:", error);
    return res.json({
      reply: "Oops! Something went wrong. Please contact us at (972) 362-8468.",
    });
  }
});
