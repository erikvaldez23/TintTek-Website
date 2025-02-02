require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const { OpenAI } = require("openai"); // Assuming you are using OpenAI API

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// OpenAI API Configuration (if included in your existing server)
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Google Places API Configuration
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = "ChIJN9Jd21OhToYR5qmTZ5RDQeU";

// ChatGPT Route (From Your Existing Code)
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [{ role: "user", content: message }],
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Google Reviews Route (Newly Added)
app.get("/api/reviews", async (req, res) => {
    try {
        const API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.result && data.result.reviews) {
            res.json(data.result.reviews);
        } else {
            res.json([]); // Return empty array if no reviews are available
        }
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
