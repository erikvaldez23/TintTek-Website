import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Container,
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
  "/gallery/Tint Tek-2.jpeg",
  "/gallery/Tint Tek-4.jpeg",
  "/gallery/Tint Tek-6.jpeg",
  "/gallery/Tint Tek-25.jpeg",
  "/gallery/Tint Tek-28.jpeg",
  "/gallery/Tint Tek-32.jpeg",
  "/gallery/Tint Tek-33.jpeg",
  "/gallery/Tint Tek-37.jpeg",
  "/gallery/Tint Tek-42.jpeg",
  "/gallery/Tint Tek-46.jpeg",
  "/gallery/Tint Tek-63.jpeg",
  "/gallery/Tint Tek-64.jpeg",
  "/gallery/Tint Tek-69.jpeg",
  "/gallery/Tint Tek-72.jpeg",
  "/gallery/Tint Tek-80.jpeg",
  "/gallery/Tint Tek-82.jpeg",
  "/gallery/Tint Tek-85.jpeg",
  "/gallery/Tint Tek-87.jpeg",
  "/gallery/Tint Tek-92.jpeg",
  "/gallery/Tint Tek-97.jpeg",
  "/gallery/Tint Tek-99.jpeg",
  "/gallery/Tint Tek-102.jpeg",
  "/gallery/Tint Tek-103.jpeg",
  "/gallery/Tint Tek-104.jpeg",
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
      backgroundColor: "#0a0a10",
      color: "#FFFFFF",
      minHeight: "100vh",
    }}
  >
    {/* Hero Section with Parallax Effect */}
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "50vh", md: "60vh" },
        overflow: "hidden",
        background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1f 100%)",
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(39, 148, 210, 0.2) 0%, rgba(35, 10, 89, 0.2) 100%)",
          animation: "gradientShift 10s ease infinite",
          "@keyframes gradientShift": {
            "0%": { opacity: 0.4 },
            "50%": { opacity: 0.7 },
            "100%": { opacity: 0.4 },
          },
        }}
      />

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "70%" },
            animation: "fadeInUp 1s ease-out",
            "@keyframes fadeInUp": {
              "0%": {
                opacity: 0,
                transform: "translateY(20px)",
              },
              "100%": {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "#2794d2",
              fontWeight: 600,
              letterSpacing: 2,
              mb: 1,
              display: "block",
            }}
          >
            TINT TEK + INSIGHTS
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#fff",
              mb: 2,
              fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3.5rem" },
              lineHeight: 1.1,
            }}
          >
            OUR GALLERY
          </Typography>

          {/* <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.8)",
              maxWidth: "600px",
              mb: 4,
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            See our work in action!
          </Typography> */}
        </Box>
      </Container>
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
