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
import Video from "../../public/car.mp4";
import { ChevronLeft, ChevronRight } from "@mui/icons-material"; // Import icons for arrows

const images = [
  "/TintTek-Website/picture1.jpeg",
  "/TintTek-Website/picture2.jpeg",
  "/TintTek-Website/picture3.jpeg",
  "/TintTek-Website/picture4.jpeg",
  "/TintTek-Website/picture5.jpeg",
  "/TintTek-Website/picture6.jpeg",
  "/TintTek-Website/picture7.jpeg",
  "/TintTek-Website/picture9.jpeg",
  "/TintTek-Website/picture1.jpeg",
  "/TintTek-Website/picture2.jpeg",
  "/TintTek-Website/picture3.jpeg",
  "/TintTek-Website/picture4.jpeg",
  "/TintTek-Website/picture5.jpeg",
  "/TintTek-Website/picture6.jpeg",
  "/TintTek-Website/picture7.jpeg",
  "/TintTek-Website/picture9.jpeg",
  "/TintTek-Website/picture1.jpeg",
  "/TintTek-Website/picture2.jpeg",
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
        backgroundColor: "#000",
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
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%)",
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
            background: "rgba(0, 0, 0, 0.3)",
            color: "white",
          }}
        >
          <Typography
            variant="h3"
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
          paddingTop: 20,
          paddingBottom: 20,
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
                      opacity: 0.4,
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
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 10,
              backgroundColor: "#2794d2",
              color: "#fff",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "1.3rem",
              padding: "10px 30px",
              "&:hover": {
                backgroundColor: "#000",
                border: "5px solid #fff",
              },
            }}
            href="https://www.instagram.com/tinttekplus/" // Replace with actual Instagram link
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
          >
            SEE MORE PHOTOS ON INSTAGRAM
          </Button>
        </Box>
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
