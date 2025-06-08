import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";
import { PlayArrow, Pause, VolumeUp, VolumeOff } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

const callToActionData = {
  "tesla-window-tinting": {
    title: "UNLOCK YOUR TESLA'S FULL POTENTIAL WITH EXPERT WINDOW TINTING",
    description: `
      Imagine driving your Tesla with enhanced privacy, a cooler interior, and a sleek, customized look—all while protecting your vehicle from harmful UV rays. At Tint Tek Plus, we specialize in premium LLumar® window films tailored specifically for Tesla models. Our expert installation ensures your vehicle not only looks great but also offers superior comfort and protection.
      Reduce heat, minimize glare, and preserve your interior—all while enhancing your Tesla’s style and performance.
    `,
    video: "/videos/tesla-video.mov",
  },
  "vehicle-window-tinting": {
    title: "ENHANCE YOUR VEHICLE WITH PROFESSIONAL WINDOW TINTING",
    description: `
     At Tint Tek Plus, we specialize in transforming your vehicle’s appearance and functionality with high-quality LLumar® window films. Whether you’re looking to improve privacy, reduce interior heat, block harmful UV rays, or simply enhance the look of your car, our professional vehicle window tinting services will provide the perfect solution. Our premium window films are designed for durability, offering both style and performance. They not only enhance the aesthetic of your car but also protect you and your passengers from glare, heat, and UV damage — keeping your interior cool and your vehicle looking sleek.
    `,
    video: "/videos/v-window-tint2.mp4",
  },
};

const F1Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openModal, setOpenModal] = useState(false);
  const { serviceId } = useParams();
  const currentData =
    callToActionData[serviceId] || callToActionData["tesla-window-tinting"];

  const { title, description, video } = currentData;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
          {/* Video with Controls */}
          <Box sx={{ mb: 4, position: "relative" }}>
            <video
              ref={videoRef}
              src={video}
              muted={isMuted}
              loop
              playsInline
              poster="/gallery/Tint Tek-108.jpg"
              onEnded={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{
                width: "100%",
                minHeight: isMobile ? "200px" : "400px",
                maxHeight: isMobile ? "300px" : "400px",
                objectFit: "cover",
                borderRadius: "24px",
                transition: "all 0.4s ease",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
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

            {/* Mute/Unmute Button */}
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

          <Box sx={{ px: { xs: 1, sm: 2, md: 3 } }}>
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
                px: { xs: 2, sm: 2, md: 3 },
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
              onClick={handleOpenModal}
            >
              Get a Free Quote
            </Button>
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
      </Box>
    </motion.div>
  );
};

export default F1Banner;
