import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Google Reviews URL and logo
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/oUyTRQm7dfdzJmvy9";
const GOOGLE_LOGO = "/TintTek-Website/google-logo.png";

const reviews = [
  {
    author_name: "Andrew Pham",
    profile_photo_url: "https://via.placeholder.com/40",
    rating: 5,
    time: new Date().setDate(new Date().getDate() - 7) / 1000,
    text: "I had a fantastic experience with this tint company! Their timing was spot on, and they communicated with me every step of the way. They offer great prices on a variety of tint options, making it easy to find exactly what I needed.",
  },
  {
    author_name: "Josue Chavez",
    profile_photo_url: "https://via.placeholder.com/40",
    rating: 5,
    time: new Date().setDate(new Date().getDate() - 30) / 1000,
    text: "Left my Tesla looking great! No problems whatsoever! Definitely recommend you bring your car here! Their customer service is top notch. I’ve never had a customer experience as good as this one!",
  },
  {
    author_name: "Richanda Bryant",
    profile_photo_url: "https://via.placeholder.com/40",
    rating: 5,
    time: new Date().setDate(new Date().getDate() - 21) / 1000,
    text: "I had a great experience at Tint Tek Plus! This is the first car I've had to purchase tint for as previous vehicles had it from the factory. I was very impressed with Ryan and team!",
  },
  {
    author_name: "Giovanni Romero",
    profile_photo_url: "https://via.placeholder.com/40",
    rating: 5,
    time: new Date().setDate(new Date().getDate() - 60) / 1000,
    text: "I recently had the pleasure of working with Tint Tek Plus, and I couldn't be more satisfied with the entire experience! From the moment I contacted them, their customer service was outstanding. They were knowledgeable, friendly, and took care of everything!",
  },
];

const Testimonials = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,  // Enable center mode
    centerPadding: "20px",  // Adjust this value to control how much of the next review is visible
  };
  

  return (
    <Box
      id="reviews"
      sx={{ py: 8, textAlign: "center", backgroundColor: "#000" }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", paddingBottom: "30px", color: "#fff" }}
        >
          What Our Customers Say (Google Reviews)
        </Typography>

        {/* Mobile View - Carousel */}
        {isMobile ? (
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 300, // Limit max width but allow it to shrink
                    height: 350,
                    margin: "0 auto",
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: "1 1 auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      overflow: "scroll",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        width: 25,
                        height: 25,
                      }}
                    >
                      <img src={GOOGLE_LOGO} alt="Google" width="100%" />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Avatar
                        sx={{ width: 40, height: 40, mr: 2 }}
                        src={review.profile_photo_url}
                        alt={review.author_name}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
                        >
                          {review.author_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {new Date(review.time * 1000).toLocaleDateString()}
                        </Typography>
                      </Box>
                    </Box>

                    <Rating
                      value={review.rating}
                      precision={0.5}
                      readOnly
                      sx={{ mb: 1 }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
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
              </Box>
            ))}
          </Slider>
        ) : (
          // Desktop View - Grid Layout
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
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
                  minHeight: 300,
                  maxHeight: 350,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <CardContent
                  sx={{
                    flex: "1 1 auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      width: 25,
                      height: 25,
                    }}
                  >
                    <img src={GOOGLE_LOGO} alt="Google" width="100%" />
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar
                      sx={{ width: 40, height: 40, mr: 2 }}
                      src={review.profile_photo_url}
                      alt={review.author_name}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
                      >
                        {review.author_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    sx={{ mb: 1 }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      display: "-webkit-box",
                      overflowY: "auto",
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

        {/* View More Button */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "#4285F4",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "0.9rem",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#fff",
              border: "5px solid #000",
              color: "#000",
            },
          }}
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW MORE REVIEWS ON GOOGLE
        </Button>
      </Container>
    </Box>
  );
};

export default Testimonials;
