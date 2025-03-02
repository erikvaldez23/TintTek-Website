import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Box,
  Typography,
  Dialog,
  IconButton,
  Button,
} from "@mui/material";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Video from "../../public/compressed-output.mp4";
import { ChevronLeft, ChevronRight } from "@mui/icons-material"; // Import icons for arrows
import CallToAction from "../components/CallToAction"; // Import the CallToAction component
import { motion } from "framer-motion";

const images = [
  "/TintTek-Website/Tint Tek-2.jpeg",
  "/TintTek-Website/Tint Tek-4.jpeg",
  "/TintTek-Website/Tint Tek-6.jpeg",
  "/TintTek-Website/Tint Tek-25.jpeg",
  "/TintTek-Website/Tint Tek-28.jpeg",
  "/TintTek-Website/Tint Tek-32.jpeg",
  "/TintTek-Website/Tint Tek-33.jpeg",
  "/TintTek-Website/Tint Tek-37.jpeg",
  "/TintTek-Website/Tint Tek-42.jpeg",
  "/TintTek-Website/Tint Tek-46.jpeg",
  "/TintTek-Website/Tint Tek-63.jpeg",
  "/TintTek-Website/Tint Tek-64.jpeg",
  "/TintTek-Website/Tint Tek-69.jpeg",
  "/TintTek-Website/Tint Tek-72.jpeg",
  "/TintTek-Website/Tint Tek-80.jpeg",
  "/TintTek-Website/Tint Tek-82.jpeg",
  "/TintTek-Website/Tint Tek-85.jpeg",
  "/TintTek-Website/Tint Tek-87.jpeg",
  "/TintTek-Website/Tint Tek-92.jpeg",
  "/TintTek-Website/Tint Tek-97.jpeg",
  "/TintTek-Website/Tint Tek-99.jpeg",
  "/TintTek-Website/Tint Tek-102.jpeg",
  "/TintTek-Website/Tint Tek-103.jpeg",
  "/TintTek-Website/Tint Tek-104.jpeg",
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#EEEEFF",
      }}
    >
      {/* Hero Video Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "30vh",
          overflow: "hidden",
        }}
      >

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "#000",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Our Gallery
          </Typography>
        </Box>
      </Box>

      {/* Gallery Content */}
      <Box
        sx={{
          flex: "1",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: 2,
          mt: "20px",
          paddingBottom: 10,
        }}
      >
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Gallery image ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    borderRadius: "5px",
                    "&:hover": {
                      transform: "scale(1.05)",
                      cursor: "pointer",
                      opacity: 0.8,
                    },
                  }}
                  onClick={() => handleImageClick(index)} // On click, enlarge image
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* See More Button */}
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <Button
            component={motion.button}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              mt: 3,
              backgroundColor: "#2794d2",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "40px", // Increased for a softer button look
              textTransform: "uppercase",
              fontSize: "1.2rem", // Increased font size
              padding: "10px", // Increased padding
              width: "100%", // Makes it responsive
              maxWidth: "400px", // Prevents it from being too large on big screens
            }}
          >
            SEE MORE ON INSTAGRAM
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#ccc",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <CallToAction />
      </Box>

      {/* Contact Section */}
      <Box sx={{ width: "100%", color: "#000" }}>
        <Contact />
      </Box>

      {/* Footer Section */}
      <Footer />

      {/* Image Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <Box sx={{ position: "relative", padding: 0 }}>
          <img
            src={images[currentImageIndex]}
            alt={`Enlarged gallery image`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures the image fills the container and maintains its aspect ratio
              display: "block", // Prevents any extra spacing below the image (common with inline-block elements)
              margin: 0, // Removes any margin that might be causing extra space
            }}
          />
          {/* Left Arrow */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ChevronLeft sx={{ color: "white", fontSize: 50 }} />
          </IconButton>
          {/* Right Arrow */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <ChevronRight sx={{ color: "white", fontSize: 50 }} />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Gallery;
