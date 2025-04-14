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
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Google Reviews URL and logo
const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/oUyTRQm7dfdzJmvy9";
const GOOGLE_LOGO = "/google-logo.png";

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
    centerMode: true,
    centerPadding: "8%",
    adaptiveHeight: true,
    appendDots: (dots) => (
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </Box>
    ),
    customPaging: (i) => (
      <Box
        component="div"
        sx={{
          width: "10px",
          height: "10px",
          backgroundColor: "#888",
          borderRadius: "50%",
          display: "inline-block",
          margin: "0 5px",
          transition: "background-color 0.3s ease",
          py: "5",
        }}
        className={`custom-dot-${i}`}
      />
    ),
  };

  // Parent container variant to stagger children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Adjust delay between each card's animation
      },
    },
  };

  // Individual card animation variant
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box
      id="reviews"
      sx={{ py: isMobile ? 4 : 8, textAlign: "center", backgroundColor: "#000" }}
    >
      <Container maxWidth="xl">
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ mb: 4, fontWeight: "bold", color: "#fff" }}
        >
          User Reviews
        </Typography>

        {isMobile ? (
          // Mobile View - Carousel remains the same
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    height: 350,
                    margin: "0 auto",
                    p: 2,
                    borderRadius: 3,
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    mb: 2,
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
                        overflowY: "auto",
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
          // Desktop View - Grid Layout with staggered animations
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
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
                <motion.div key={index} variants={cardVariants}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 6,
                      boxShadow: 3,
                      textAlign: "left",
                      minHeight: 350,
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      backgroundColor: "#EEEEFF",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.03)",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        flex: "1 1 auto",
                        display: "flex",
                        flexDirection: "column",
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

                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
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
                          fontStyle: "italic",
                          fontSize: "0.9rem",
                          lineHeight: 1.5,
                          flexGrow: 1,
                        }}
                      >
                        "{review.text}"
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
        <Button
          component={motion.a}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          sx={{
            mt: 5,
            backgroundColor: "#2794d2",
            color: "#000",
            fontWeight: "bold",
            px: isMobile ? 3 : 4,
            py: isMobile ? 1.2 : 1.5,
            borderRadius: "30px",
            textTransform: "uppercase",
            fontSize: isMobile ? "1rem" : "1.1rem",
            width: isMobile ? "80%" : "auto",
          }}
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW MORE REVIEWS
        </Button>
      </Container>
    </Box>
  );
};

export default Testimonials;
