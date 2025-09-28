// src/components/ImageCTA.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamic content for different services
const callToActionData = {
  "vehicle-paint-correction": {
    title: "Restore Your Vehicle's Shine with Professional Paint Correction",
    description: `At Tint Tek Plus, we specialize in restoring and enhancing your vehicle’s paint, bringing back its original shine and clarity. Whether you’re dealing with swirl marks, scratches, oxidation, or just want to boost the appearance of your car, our professional paint correction services will restore your vehicle’s exterior to a showroom-quality finish..
    Our commercial films are smart, sleek, and built to last. Perfect for offices, retail spaces, and buildings looking to improve energy efficiency.`,
    images: [
      "/", // replace with real assets
      "/",
      "/",
      "/",
      "/",
    ],
    // ✅ per-service form URL
    formUrl: "https://app.tintwiz.com/web/ce/ossbvx1pgf73ldzcej0iw4iryailzpad",
  },
};

const ImageCTA = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();

  // Safe fallback to a known key in the map
  const currentData =
    callToActionData[serviceId] || callToActionData["vehicle-paint-correction"];

  const { title, description, images = [], formUrl } = currentData;

  // Modal state for the iframe form
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
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
        settings: { slidesToShow: 1, centerPadding: "40px" },
      },
    ],
  };

  // Universal default if a service lacks a formUrl
  const defaultFormUrl =
    "https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t?service=default";
  const effectiveFormUrl = formUrl || defaultFormUrl;

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
          color: "#000",
          overflow: "hidden",
        }}
      >
        {/* Background dim (if any) */}
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
          {/* ✅ Mobile-only CTA at the very top */}
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              width: "90%",
              mx: "auto",
              mb: 3,
            }}
          >
            <Button
              onClick={handleOpenForm}
              variant="contained"
              aria-label="Open quote form"
              sx={{
                backgroundColor: "#2794d2 !important",
                color: "#fff",
                fontWeight: "bold",
                py: 1.2,
                borderRadius: "30px",
                textTransform: "uppercase",
                width: "100%",
              }}
            >
              Get a Free Quote
            </Button>
          </Box>

          {/* Image Carousel (hide for specific services if desired) */}
          {serviceId !== "vehicle-paint-correction" &&
            serviceId !== "vehicle-paint-protection" && (
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
                          minHeight: isMobile ? "200px" : "300px",
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
            )}

          <Box sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              component={motion.h3}
              variants={fadeSlideVariant}
              sx={{
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#fff",
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
                px: { xs: 2, sm: 2, md: 3 },
                fontSize: isMobile ? "1rem" : "1.2rem",
                lineHeight: "1.6",
                opacity: 0.9,
                color: "#fff",
              }}
            >
              {description}
            </Typography>

            {/* Existing CTA — hidden on mobile to avoid duplicate */}
            <Button
              component={motion.button}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                mt: 3,
                backgroundColor: "#2794d2 !important",
                color: "#fff",
                fontWeight: "bold",
                px: 4,
                py: 1.5,
                borderRadius: "30px",
                textTransform: "uppercase",
                fontSize: "1.1rem",
              }}
              onClick={handleOpenForm}
              aria-label="Open quote form"
            >
              Get a Free Quote
            </Button>
          </Box>
        </Box>

        {/* Dialog with per-service form (same pattern as TeslaCTA) */}
        <Dialog
          open={openForm}
          onClose={handleCloseForm}
          fullWidth
          maxWidth="lg"
          BackdropProps={{
            sx: {
              backdropFilter: "blur(6px)",
              backgroundColor: "rgba(0,0,0,0.45)",
            },
          }}
        >
          <DialogContent sx={{ position: "relative", p: 0 }}>
            <IconButton
              onClick={handleCloseForm}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 1,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.5)",
                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
              }}
              aria-label="Close quote dialog"
            >
              <CloseIcon />
            </IconButton>

            <iframe
              src={effectiveFormUrl}
              width="100%"
              height="800"
              style={{ border: "none" }}
              title={`${title} – Quote Form`}
              loading="lazy"
            />
          </DialogContent>
        </Dialog>
      </Box>
    </motion.div>
  );
};

export default ImageCTA;
