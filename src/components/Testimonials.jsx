import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography, Avatar, Rating, Container, CircularProgress, Button } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const API_URL = "http://localhost:5001/api/reviews"; // Call the backend server
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Tint+Tek+Plus/reviews"; // Replace with your Google Reviews URL
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
          setReviews(data.slice(0, 6)); // Only keep the first 6 reviews
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

  // Slick Carousel Settings
  const settings = {
    dots: true,
    infinite: false, // Stop infinite looping
    speed: 700,
    slidesToShow: 3, // Display 3 reviews per row
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Hide default arrows for a cleaner UI
    responsive: [
      {
        breakpoint: 1400, // For large tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#e3eff4" }}>
      <Container maxWidth="xl"> 
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
          <>
            <Slider {...settings}>
              {reviews.map((review, index) => (
                <Box key={index} sx={{ px: 2 }}> {/* Adds spacing between cards */}
                  <Card 
                    sx={{ 
                      width: "80%", 
                      mx: "auto", 
                      my: 2, 
                      p: 3, 
                      borderRadius: 3, 
                      boxShadow: 3, 
                      textAlign: "left",
                      minHeight: 350, 
                      maxHeight: 400, 
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flex: 1, overflowY: "auto", maxHeight: "300px", paddingRight: "10px" }}>
                      {/* Google Logo (Top-Right) */}
                      <Box 
                        sx={{ 
                          position: "absolute", 
                          top: 10, 
                          right: 10, 
                          width: 30, 
                          height: 30 
                        }}
                      >
                        <img src={GOOGLE_LOGO} alt="Google" width="100%" />
                      </Box>

                      {/* User Profile Info */}
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Avatar sx={{ width: 45, height: 45, mr: 2 }} src={review.profile_photo_url} alt={review.author_name} />
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            {review.author_name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {new Date(review.time * 1000).toLocaleDateString()}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Star Rating */}
                      <Rating value={review.rating} precision={0.5} readOnly sx={{ mb: 1 }} />

                      {/* Review Text (With Scrollable Logic) */}
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          fontStyle: "italic", 
                          fontSize: "1rem", 
                          lineHeight: 1.5, 
                          overflowY: "auto", 
                          maxHeight: "200px", 
                          paddingRight: "5px", 
                        }}
                      >
                        "{review.text}"
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Slider>

            {/* View More Reviews Button */}
            <Button 
              variant="contained" 
              sx={{
                mt: 4,
                backgroundColor: "#4285F4", 
                color: "white",
                fontWeight: "bold",
                padding: "12px 24px",
                borderRadius: "8px",
                marginTop:"50px",
                textTransform: "none",
                fontSize: "1rem",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#357ae8",
                }
              }}
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Reviews on Google
            </Button>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Testimonials;
