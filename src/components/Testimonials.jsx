import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Avatar, Rating, Container, CircularProgress, Button } from "@mui/material";

const API_URL = "http://localhost:5001/api/reviews"; // Call the backend server
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/oUyTRQm7dfdzJmvy9"; // Google Reviews URL
const GOOGLE_LOGO = "/TintTek-Website/google-logo.png"; // Local Google logo in 'public/' folder

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Google API Response:", data);
        
        if (data.length > 0) {
          setReviews(data.slice(0, 4)); // ✅ Show only 4 reviews
        } else {
          setError("No reviews found.");
        }
      } catch (error) {
        setError("Error fetching reviews.");
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <Box id="reviews" sx={{ py: 8, textAlign: "center", backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="xl"> {/* ✅ Keeps section centered & max width 1200px */}
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          What Our Customers Say (Google Reviews)
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography variant="body1" color="text.secondary">
            {error}
          </Typography>
        ) : (
          <Box 
            sx={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(4, 1fr)", // ✅ Show exactly 4 reviews in a row
              gap: 2, 
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            {reviews.map((review, index) => (
              <Card 
                key={index}
                sx={{ 
                  p: 3, 
                  borderRadius: 3, 
                  boxShadow: 3, 
                  textAlign: "left",
                  minHeight: 300, // ✅ Smaller square cards
                  maxHeight: 350, // ✅ Ensures uniform card height
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    flex: "1 1 auto", // ✅ Ensures text section expands fully
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // ✅ Pushes text down
                    overflow: "hidden",
                  }}
                >
                  {/* ✅ Google Logo (Top-Right) */}
                  <Box sx={{ position: "absolute", top: 10, right: 10, width: 25, height: 25 }}>
                    <img src={GOOGLE_LOGO} alt="Google" width="100%" />
                  </Box>

                  {/* ✅ User Profile Info */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar sx={{ width: 40, height: 40, mr: 2 }} src={review.profile_photo_url} alt={review.author_name} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                        {review.author_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>

                  {/* ✅ Star Rating */}
                  <Rating value={review.rating} precision={0.5} readOnly sx={{ mb: 1 }} />

                  {/* ✅ Review Text (No Scrolling) */}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      flexGrow: 1, // ✅ Ensures text takes full space
                      display: "-webkit-box",
                      overflowY: "scroll",
                      textOverflow: "ellipsis",
                      fontStyle: "italic",
                      fontSize: "0.9rem",
                      lineHeight: 1.5,
                    }}
                  >
                    "{review.text}"
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}

        {/* ✅ View More Reviews Button */}
        <Button 
          variant="contained" 
          sx={{
            mt: 4,
            backgroundColor: "#4285F4", 
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            textTransform: "none",
            fontSize: "0.9rem",
            transition: "0.3s",
            "&:hover": { backgroundColor: "#357ae8" },
          }}
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View More Reviews on Google
        </Button>
      </Container>
    </Box>
  );
};

export default Testimonials;
