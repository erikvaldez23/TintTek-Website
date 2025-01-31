import React from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography, Container, Rating, IconButton } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Testimonial Data
const testimonials = [
  {
    id: 1,
    name: "MYLES PARTNERS",
    role: "Verified Customer",
    review: "Recently had car windows tinted at Tint Tek!!  …and I couldn't be happier with the results! From the moment I walked in, the staff was incredibly professional and friendly. They took the time to explain the different tint options and helped me choose the perfect one for my car. The quality of the work is outstanding. Highly recommended!!",
    rating: 5,
  },
  {
    id: 2,
    name: "LUKE RUSSEL",
    role: "Verified Customer",
    review: "Ryan and his team always give exceptional service. I don’t ever like leaving my cars with anyone but I always know Ryan will take the best care of it like it’s his own. Great tint job and customer service.",
    rating: 5,
  },
  {
    id: 3,
    name: "ARTHUR JOE",
    role: "Verified Customer",
    review: "Tint Tek Plus is amazing and I appreciate the work they did tinting my Infinity m37 sport the business is new I would highly recommend them for window tint or ceramic coatings or ppf thank you again Ryan and Tint Tek team.",
    rating: 5,
  },
];

// Custom Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#333",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
      zIndex: 2,
    }}
  >
    <FaArrowLeft size={20} />
  </IconButton>
);

const CustomNextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#333",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
      zIndex: 2,
    }}
  >
    <FaArrowRight size={20} />
  </IconButton>
);

const Testimonials = () => {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700, // Slightly slower transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000, // Increased time before auto-scrolling
    arrows: true, // Enable manual arrows
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box
      sx={{
        py: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        minHeight: "40vh", // Ensures it takes enough vertical space
        backgroundColor: "#e3eff4",
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif" }}>
          What Our Customers Say
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} sx={{ maxWidth: 700, mx: "auto", textAlign: "center", p: 4, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                {/* Star Rating */}
                <Rating value={testimonial.rating} precision={0.5} readOnly sx={{ mb: 2, fontSize: "2rem" }} />

                <Typography variant="body1" sx={{ fontStyle: "italic", fontSize: "1.2rem", mb: 2 }}>
                  "{testimonial.review}"
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
