require("dotenv").config();
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

  for (const faq of faqData) {
    const faqEmbedding = await getEmbedding(faq.question);
    if (!faqEmbedding) continue;

    const similarity = cosineSimilarity(userEmbedding, faqEmbedding);

    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      bestMatch = faq;
    }
  }

  return { bestMatch, similarityScore: highestSimilarity };
};

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
      model: "gpt-4",
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
const LOW_SIMILARITY_THRESHOLD = 0.6; // Too far from training data

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("📩 User Input:", message);

    // ✅ Step 1: Try to find the best matching FAQ answer
    const { bestMatch, similarityScore } = await findBestMatchAI(message);

    if (bestMatch && similarityScore > HIGH_SIMILARITY_THRESHOLD) {
      console.log("✅ Strong FAQ Match Found:", bestMatch);
      return res.json({ reply: bestMatch.answer });
    }

    console.log("⚡ No Strong FAQ Match - Checking Similarity Score");

    // ✅ Step 2: If the similarity score is below LOW_SIMILARITY_THRESHOLD, suggest live support
    if (!bestMatch || similarityScore < LOW_SIMILARITY_THRESHOLD) {
      console.log("⚠ Too Personal or Unrelated - Redirecting to Live Support.");

      return res.json({
        reply:
        "Hmm, looks like I couldn’t find a good answer to that.\n" +
        "But don’t worry — we’ve got your back!\n" +
        "Need immediate help? You can reach us at:\n" +
        "Phone: (972) 362-8468\n" +
        "Email: info@tinttekplus.com\n",
      });
    }

    console.log("⚡ No strong FAQ match - Generating AI Response");

    // ✅ Step 3: Try AI-Generated Response
    const aiGeneratedResponse = await generateAIResponse(message);

    // ✅ Step 4: If AI Response is Empty or Useless, Suggest Live Support
    // ✅ Step 4: If AI Response is Empty or Useless, Suggest Live Support
    if (
      !aiGeneratedResponse ||
      aiGeneratedResponse.trim() === "" ||
      aiGeneratedResponse.includes("I don't know") ||
      aiGeneratedResponse.includes("I'm sorry") ||
      aiGeneratedResponse.includes("doesn't contain information")
    ) {
      console.log(
        "⚠ AI generated a vague response - Replacing with live support message."
      );

      return res.json({
        reply:
        "Hmm, looks like I couldn’t find a good answer to that.\n" +
        "But don’t worry — we’ve got your back!\n" +
        "Need immediate help? You can reach us at:\n" +
        "Phone: (972) 362-8468\n" +
        "Email: info@tinttekplus.com\n",
      });
    }

    // ✅ Step 5: Return AI Response if it's Valid
    return res.json({ reply: aiGeneratedResponse });
  } catch (error) {
    console.error("❌ Error in chatbot:", error);

    // ✅ Step 6: If an Unexpected Error Occurs, Show Contact Info
    return res.json({
      reply:
      "Hmm, looks like I couldn’t find a good answer to that.\n" +
      "But don’t worry — we’ve got your back!\n" +
      "Need immediate help? You can reach us at:\n" +
      "Phone: (972) 362-8468\n" +
      "Email: info@tinttekplus.com\n",
    });
  }
});

// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
