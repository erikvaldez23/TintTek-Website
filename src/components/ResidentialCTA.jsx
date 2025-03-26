import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamic content for different services
const callToActionData = {
  "residential-window-tinting": {
    title: "Transform Your Home with Tint Tek Plus and LLumar® Window Film",
    description: `If you're feeling uncomfortable or dissatisfied with your home,
    start with your windows. Tint Tek Plus offers smart residential
    window film solutions using LLumar American Made products to address
    what may be bothering you—whether it’s the hot spots in a room, high
    cooling costs, or even the afternoon glare on your TV. Our team has
    over 10+ years of experience and provides a variety of window films
    that are quickly and professionally installed, delivering lasting
    lifestyle benefits without breaking the bank.`,
    images: [
      "/TintTek-Website/residential-1.png",
      "/TintTek-Website/residential-2.png",
      "/TintTek-Website/residential-3.png",
      "/TintTek-Website/residential-4.png",
    ],
  },
  "vehicle-paint-correction": {
    title: "Restore Your Vehicle's Shine with Professional Paint Correction",
    description: `At Tint Tek Plus, we specialize in restoring and enhancing your vehicle’s paint, bringing back its original shine and clarity. Whether you’re dealing with swirl marks, scratches, oxidation, or just want to boost the appearance of your car, our professional paint correction services will restore your vehicle’s exterior to a showroom-quality finish..
    Our commercial films are smart, sleek, and built to last. Perfect for offices, retail spaces, and buildings looking to improve energy efficiency.`,
    images: [
      "/TintTek-Website/commercial-1.png",
      "/TintTek-Website/commercial-2.png",
    ],
  },
};

const CallToAction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();
  const currentData =
    callToActionData[serviceId] ||
    callToActionData["residential-window-tinting"];

  const { title, description, images } = currentData;

  // Framer Motion animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeSlideVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sliderSettings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <Box
        sx={{
          position: "relative",
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#2794d2",
          color: "#000",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          {/* Image Carousel */}
          <Box sx={{ mb: 4 }}>
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <Box key={index} sx={{ px: 2 }} className="carousel-slide">
                  <Box
                    component="img"
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="carousel-img"
                    sx={{
                      width: "100%",
                      maxHeight: isMobile ? "300px" : "350px",
                      objectFit: "cover",
                      borderRadius: "24px",
                      transition: "all 0.4s ease",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                      "&:hover": {
                        cursor: "pointer",
                        transform: "scale(1.02)",
                      },
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>

          <Typography
            variant={isMobile ? "h4" : "h2"}
            component={motion.h3}
            variants={fadeSlideVariant}
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            component={motion.p}
            variants={fadeSlideVariant}
            transition={{ delay: 0.3 }}
            sx={{
              mt: 2,
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.6",
              opacity: 0.9,
            }}
          >
            {description}
          </Typography>

          <Button
            component={motion.button}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              mt: 3,
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: "bold",
              px: isMobile ? 3 : 4,
              py: isMobile ? 1.2 : 1.5,
              borderRadius: "30px",
              textTransform: "uppercase",
              fontSize: isMobile ? "1rem" : "1.1rem",
              width: isMobile ? "100%" : "auto",
            }}
            href="/quote"
          >
            Get a Free Quote
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CallToAction;
