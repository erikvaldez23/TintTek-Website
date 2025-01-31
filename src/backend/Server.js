const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001; // Use port 5001 instead

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_ID = "ChIJN9Jd21OhToYR5qmTZ5RDQeU";

app.get("/api/reviews", async (req, res) => {
  try {
    const API_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.result && data.result.reviews) {
      res.json(data.result.reviews);
    } else {
      res.json([]); // Return empty array if no reviews
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
