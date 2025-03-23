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
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useSwipeable } from "react-swipeable"; // For mobile gestures
import { motion } from "framer-motion";
import Footer from "../key-components/Footer";
import Contact from "../key-components/Contact";
import CallToAction from "../key-components/CallToAction";
import QuickLinks from "../key-components/QuickLinks";

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

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2, // Stagger each card's animation
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { duration: 0.5 } 
//   },
// };

// const modalVariants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     scale: 1, 
//     transition: { duration: 0.3 } 
//   },
// };

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");

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
          height: { xs: "35vh", md: "35vh", lg: "25vh", xl: "25vh" },
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        {/* Title & Subheader Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            px: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                sm: "2.5rem",
                md: "3.5rem",
                lg: "4rem",
              },
            }}
          >
            OUR GALLERY
          </Typography>
          {/* <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
            }}
          >
            See Our Work in Action
          </Typography> */}
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
        {/* Wrap grid container with motion.div to stagger animations */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        > */}
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                {/* <motion.div variants={cardVariants}> */}
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
                      onClick={() => handleImageClick(index)}
                    />
                  </Card>
                {/* </motion.div> */}
              </Grid>
            ))}
          </Grid>
        {/* </motion.div> */}

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
              color: "#000",
              fontWeight: "bold",
              borderRadius: "40px",
              textTransform: "uppercase",
              fontSize: "1.2rem",
              padding: "10px",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            SEE MORE ON INSTAGRAM
          </Button>
        </Box>
      </Box>

      {/* Call To Action Section */}
      <Box sx={{ backgroundColor: "#ccc", width: "100%", margin: "0 auto" }}>
        <CallToAction />
      </Box>

      {/* Contact Section */}
      <Box sx={{ width: "100%", color: "#000" }}>
        <Contact />
      </Box>

      <QuickLinks />

      {/* Footer Section */}
      <Footer />

      {/* Image Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        {/* Animate modal content */}
        {/* <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        > */}
          <Box sx={{ position: "relative", padding: 0 }}>
            <img
              src={images[currentImageIndex]}
              alt={`Enlarged gallery image`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                margin: 0,
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
        {/* </motion.div> */}
      </Dialog>
    </Box>
  );
};

export default Gallery;
