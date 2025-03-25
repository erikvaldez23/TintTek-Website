import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
} from "@mui/material";
import { PlayArrow, Pause, VolumeUp, VolumeOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CloseIcon from "@mui/icons-material/Close";

export default function CombinedVideoCTA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const { serviceId } = useParams();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleToggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const images = [
    "/TintTek-Website/Tint Tek-146.jpg",
    "/TintTek-Website/commercial2.jpg",
    "/TintTek-Website/commercial3.jpg",
    "/TintTek-Website/commercial4.jpg",
    "/TintTek-Website/commercial5.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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

  return (
    <Box sx={{ background: "#2794d2" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <Box
          sx={{
            backgroundColor: "#2794d2",
            width: "100%",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "stretch",
            maxWidth: "1500px",
            mx: "auto",
            px: 2,
            py: 4,
          }}
        >
          {/* Left Column: Video (1/4 width) */}
          {/* Left Column: Video in Modern Frame */}
          <Box
            sx={{
              width: isMobile ? "100%" : "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                background: "linear-gradient(145deg, #1b1b1b, #3a3a3a)", // modern frame look
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.6), inset 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              <video
                ref={videoRef}
                src={
                  serviceId === "commercial-window-tinting"
                    ? "/TintTek-Website/commercial-video1.mov"
                    : "/TintTek-Website/Windshield-Film.mov"
                }
                autoPlay
                muted={isMuted}
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Play/Pause Button */}
              <IconButton
                onClick={handleToggleVideo}
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  backgroundColor: "#000",
                  color: "#2794d2",
                  "&:hover": { backgroundColor: "#2794d2", color: "#000" },
                }}
              >
                {isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>

              {/* Mute Button */}
              <IconButton
                onClick={handleToggleMute}
                sx={{
                  position: "absolute",
                  bottom: 16,
                  left: 64,
                  backgroundColor: "#000",
                  color: "#2794d2",
                  "&:hover": { backgroundColor: "#2794d2", color: "#000" },
                }}
              >
                {isMuted ? <VolumeOff /> : <VolumeUp />}
              </IconButton>
            </Box>
          </Box>

          {/* Right Column: Call to Action (3/4 width) */}
          <Box
            sx={{
              width: isMobile ? "100%" : "75%",
              color: "#000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              px: 3,
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h2"}
              component={motion.h3}
              variants={fadeSlideVariant}
              sx={{
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Transform Your Space with Tint Tek Plus and LLumar® Window Films
            </Typography>

            <Typography
              variant="body1"
              component={motion.p}
              variants={fadeSlideVariant}
              sx={{
                mt: 2,
                fontSize: isMobile ? "1rem" : "1.2rem",
                lineHeight: "1.6",
                opacity: 0.9,
              }}
            >
              The glass in your office, retail, or residential building should
              be an asset, not a source of discomfort or excessive cost. At Tint
              Tek Plus, we offer high-quality LLumar® window films, designed to
              solve a wide range of glass-related issues: high energy costs,
              tenant complaints, glare, fading furnishings, privacy concerns,
              security risks, and more.
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
              onClick={handleOpenModal}
            >
              Get a Free Quote
            </Button>

            {/* Image carousel - logic kept, commented out for future use */}
            {/**
          <Box sx={{ width: "100%", maxWidth: 600, mt: 4 }}>
            <Slider {...sliderSettings}>
              {images.map((src, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={src}
                    alt={`Project ${index + 1}`}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
          */}
            {/* Modal Dialog with the Iframe */}
            <Dialog
              open={openModal}
              onClose={handleCloseModal}
              fullWidth
              maxWidth="lg"
            >
              <Box sx={{ position: "relative" }}>
                {/* Close Button */}
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 1,
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <iframe
                  src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
                  width="100%"
                  height="800px"
                  style={{ border: "none" }}
                  title="Fast Quote"
                ></iframe>
              </Box>
            </Dialog>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
}
