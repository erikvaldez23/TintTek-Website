import React from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Video from "../../public/car.mp4";

const images = [
  "https://source.unsplash.com/random/300x300?sig=1",
  "https://source.unsplash.com/random/300x300?sig=2",
  "https://source.unsplash.com/random/300x300?sig=3",
  "https://source.unsplash.com/random/300x300?sig=4",
  "https://source.unsplash.com/random/300x300?sig=5",
  "https://source.unsplash.com/random/300x300?sig=6",
  "https://source.unsplash.com/random/300x300?sig=7",
  "https://source.unsplash.com/random/300x300?sig=8",
  "https://source.unsplash.com/random/300x300?sig=9",
];

const Gallery = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#000" }}>
      {/* Hero Video Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "30vh",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
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

        {/* ✅ Gradient Overlay (Now Visible) */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0, // Place it at the bottom of the video
            left: 0,
            width: "100%",
            height: "50%", // Make it big enough to be visible
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%)",
            pointerEvents: "none", // Prevent it from blocking interactions
          }}
        />

        {/* Overlay Text */}
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
          <Typography variant="h3" sx={{ fontWeight: "bold", textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
            Our Gallery
          </Typography>
        </Box>
      </Box>

      {/* Gallery Content */}
      <Box sx={{ flex: "1", maxWidth: "1200px", margin: "0 auto", padding: 2, mt: "20px" }}>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image={image}
                  alt={`Gallery image ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </Box>
  );
};

export default Gallery;
