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
          content: "You are a helpful customer support assistant.",
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

// ✅ Chatbot Route
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        console.log("📩 User Input:", message);

        // ✅ Step 1: Try to find the best matching FAQ answer
        const { bestMatch, similarityScore } = await findBestMatchAI(message);

        if (bestMatch && similarityScore > 0.95) {
            console.log("✅ Strong FAQ Match Found:", bestMatch);
            return res.json({ reply: bestMatch.answer });
        }

        console.log("⚡ No Strong FAQ Match - Using AI to Generate Answer");

        // ✅ Step 2: Try AI-Generated Response
        const aiGeneratedResponse = await generateAIResponse(message);

        // ✅ Step 3: If AI Response is Empty or Useless, Send Contact Info
        if (!aiGeneratedResponse || aiGeneratedResponse.trim() === "" || aiGeneratedResponse.includes("I don't know")) {
            console.log("⚠ AI failed to generate a response - Showing fallback message");

            return res.json({
                reply: "**I'm sorry, but I couldn't find an exact answer to your question.**\n\n"
                    + "For more details, please contact our customer support team:\n\n"
                    + "📍 **Location:** 123 Tint Street, Tint City, TX\n"
                    + "📞 **Phone:** (123) 456-7890\n"
                    + "📧 **Email:** support@windowtinting.com\n\n"
                    + "You can also visit our [website](https://windowtinting.com) for more information."
            });
        }

        // ✅ Step 4: Return AI Response if it's Valid
        return res.json({ reply: aiGeneratedResponse });

    } catch (error) {
        console.error("❌ Error in chatbot:", error);

        // ✅ Step 5: If an Unexpected Error Occurs, Also Show Contact Info
        return res.json({
            reply: "**Oops! Something went wrong.**\n\n"
                + "For immediate assistance, please contact us:\n\n"
                + "📞 **Phone:** (123) 456-7890\n"
                + "📧 **Email:** support@windowtinting.com\n\n"
                + "We apologize for the inconvenience."
        });
    }
});



// ✅ Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
