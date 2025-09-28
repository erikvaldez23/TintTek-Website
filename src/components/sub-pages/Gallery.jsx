// src/components/gallery/Gallery.jsx
import React, { useState, useMemo, useCallback, useEffect } from "react";
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
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import Footer from "../key-components/Footer";
import Contact from "../SubContact";
import CallToAction from "../SubCTA";
import QuickLinks from "../SubQuickLinks";

// ---- SITE SETTINGS ----
const SITE = "https://tinttekplus.com";

const images = [
  "/gallery/gallery1-output.jpg",
  "/gallery/gallery3-output.jpg",
  "/gallery/gallery4-output.jpg",
  "/gallery/gallery5-output.jpg",
  "/gallery/gallery6-output.jpg",
  "/gallery/gallery7-output.jpg",
  "/gallery/gallery8-output.jpg",
  "/gallery/gallery9-output.jpg",
  "/gallery/gallery10-output.jpg",
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

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width:600px)");
  const isDialogFull = useMediaQuery("(max-width:900px)");

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = useCallback(
    () => setCurrentImageIndex((i) => (i + 1) % images.length),
    []
  );
  const handlePrev = useCallback(
    () => setCurrentImageIndex((i) => (i - 1 + images.length) % images.length),
    []
  );

  // Keyboard nav inside dialog
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, handleNext, handlePrev]);

  // Swipe handlers (mobile)
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  // -------- Helmet (SEO) --------
  const { title, description, canonical, ldJson } = useMemo(() => {
    const url = `${SITE}/gallery`;
    const metaTitle =
      "Gallery | Window Tint, PPF & Detailing Work | Tint Tek Plus";
    const metaDesc =
      "Browse our photo gallery of window tint, paint protection film (PPF), ceramic coating, and detailing projects completed by Tint Tek Plus in Dallas–Fort Worth.";
    const imageObjs = images.map((src) => ({
      "@type": "ImageObject",
      contentUrl: `${SITE}${src.startsWith("/") ? src : `/${src}`}`,
      url: `${SITE}${src.startsWith("/") ? src : `/${src}`}`,
      description: "Tint Tek Plus project photo",
    }));
    const ld = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url,
      name: "Tint Tek Plus Gallery",
      description: metaDesc,
      hasPart: imageObjs,
    };
    return {
      title: metaTitle,
      description: metaDesc,
      canonical: url,
      ldJson: ld,
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: `
      radial-gradient(circle at top left, rgba(39,148,210,0.15), transparent 50%),
      radial-gradient(circle at bottom right, rgba(77,184,240,0.15), transparent 50%),
      linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)
    `,
      }}
    >
      <Box
        sx={{
          background: `
          radial-gradient(circle at top left, rgba(39,148,210,0.15), transparent 50%),
          radial-gradient(circle at bottom right, rgba(77,184,240,0.15), transparent 50%),
          linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)
        `,
          color: "#FFFFFF",
          minHeight: "100vh",
        }}
      >
        {/* HEAD */}
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonical} />
          <meta name="robots" content="index, follow" />
          {/* Social */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonical} />
          <meta name="twitter:card" content="summary_large_image" />
          {/* JSON-LD */}
          <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
        </Helmet>

        {/* Hero */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "50vh", md: "60vh" },
            overflow: "hidden",
            background: "transparent",
          }}
          aria-label="Tint Tek Plus project gallery"
        >
          {/* Background Pattern */}
          {/* <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        /> */}
          {/* Animated Gradient Overlay */}
          {/* <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(39, 148, 210, 0.2) 0%, rgba(35, 10, 89, 0.2) 100%)",
            animation: "gradientShift 10s ease infinite",
            "@keyframes gradientShift": {
              "0%": { opacity: 0.4 },
              "50%": { opacity: 0.7 },
              "100%": { opacity: 0.4 },
            },
          }}
        /> */}

          {/* Content */}
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
            <Box
              sx={{
                maxWidth: { xs: "100%", md: "70%" },
                animation: "fadeInUp 1s ease-out",
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
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
                TINT TEK + PROJECTS
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
                Our Gallery
              </Typography>
              <Box
                sx={{
                  mt: 5,
                  width: { xs: 120, sm: 120 },
                  height: 5,
                  borderRadius: 999,
                  background:
                    "linear-gradient(90deg, #1e90ff 0%, #2794d2 50%, #1e90ff 100%)",
                  boxShadow: "0 0 16px rgba(39,148,210,0.35)",
                }}
              />
            </Box>
          </Container>
        </Box>

        {/* Gallery Grid */}
        <Box
          sx={{
            flex: "1",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: 2,
            mt: "20px",
            pb: 10,
          }}
        >
          <Grid container spacing={2}>
            {images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={image}>
                <Card
                  sx={{
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    bgcolor: "rgba(20, 20, 30, 0.5)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                  aria-label={`Gallery thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                >
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Tint Tek Plus project ${index + 1}`}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      borderRadius: "5px",
                      transition: "transform 0.25s ease, opacity 0.25s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        cursor: "pointer",
                        opacity: 0.9,
                      },
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CTA to Instagram */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              component={motion.a}
              href="https://www.instagram.com/tinttekplus"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              sx={{
                mt: 3,
                backgroundColor: "#2794d2",
                color: "#000",
                fontWeight: "bold",
                borderRadius: "40px",
                textTransform: "uppercase",
                fontSize: "1.1rem",
                px: 4,
                py: 1.5,
              }}
            >
              See More on Instagram
            </Button>
          </Box>
        </Box>

        <CallToAction />

        {/* Contact Section */}
        <Box sx={{ width: "100%", color: "#000" }}>
          <Contact />
        </Box>

        <QuickLinks />
        <Footer />

        {/* Lightbox / Image Modal */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          fullScreen={isDialogFull}
          PaperProps={{ sx: { backgroundColor: "black" } }}
        >
          <Box
            {...swipeHandlers}
            sx={{
              position: "relative",
              p: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: isDialogFull ? "100vh" : 600,
            }}
            aria-label="Image lightbox viewer"
          >
            <img
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1} of ${images.length}`}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: isDialogFull ? "100vh" : "calc(100vh - 120px)",
                objectFit: "contain",
                display: "block",
                margin: 0,
              }}
            />

            {/* Left Arrow */}
            <IconButton
              onClick={handlePrev}
              aria-label="Previous image"
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                zIndex: 1,
                bgcolor: "rgba(255,255,255,0.15)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
              }}
            >
              <ChevronLeft sx={{ color: "white", fontSize: 44 }} />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              onClick={handleNext}
              aria-label="Next image"
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                zIndex: 1,
                bgcolor: "rgba(255,255,255,0.15)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
              }}
            >
              <ChevronRight sx={{ color: "white", fontSize: 44 }} />
            </IconButton>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Gallery;
