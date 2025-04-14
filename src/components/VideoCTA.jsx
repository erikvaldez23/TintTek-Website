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

const videoContent = {
  // "vehicle-window-tinting": {
  //   title:
  //     "Premium automotive care to enhance, protect, and maintain your vehicle.",
  //   description: `Drive in comfort, privacy, and style with LLumar® automotive window tinting. Whether you're looking to reduce interior heat, block harmful UV rays, or upgrade your car’s appearance, Tint Tek Plus offers precision installation with premium film technology. Our professional-grade tints not only protect your interior and passengers, but also deliver a sleek, high-end look that turns heads — all while keeping you cool on the road. (SUBJECT TO CHANGE!!!!!!!!!!!!!!)`,
  //   video: "/",
  // },
  // "tesla-window-tinting": {
  //   title: "Elevate Your Tesla with Premium Window Film",
  //   description: `Your Tesla deserves the best — and so do you. At Tint Tek Plus, we specialize in Tesla window tinting using precision-cut LLumar® films that perfectly match your vehicle’s design. Our tints offer advanced heat rejection, UV protection, enhanced privacy, and a refined look that complements Tesla’s futuristic aesthetic. Enjoy a cooler cabin, reduced glare, and preserved interior — all without sacrificing signal performance or style. (SUBJECT TO CHANGE!!!!!!!!!!!!!!)`,
  //   video: "/",
  // },
  "residential-window-tinting": {
    title: "Superior Protection for Texas Roads. Clarity. Durability. Safety.",
    description: `At Tint Tek Plus, we specialize in providing superior windshield protection services using ExoShield GT3, a cutting-edge film designed to offer exceptional durability, clarity, and protection against environmental hazards. Whether you're navigating through the bustling city or driving on Texas' rugged highways, ExoShield GT3 provides an invisible yet robust layer of defense for your windshield.`,
    video: "/videos/Windshield-Film.mov",
  },
  "commercial-window-tinting": {
    title: "Transform Your Business with LLumar® Commercial Films",
    description: `The glass in your office, retail, or residential building should be an asset, not a source of discomfort or excessive cost. At Tint Tek Plus, we offer high-quality LLumar® window films, designed to solve a wide range of glass-related issues: high energy costs, tenant complaints, glare, fading furnishings, privacy concerns, security risks, and more. Whether you're improving an existing property or designing a new one, LLumar® provides the perfect solution to meet your needs.`,
    video: "/videos/commercial-video1.mov",
  },
  // "vehicle-paint-correction": {
  //   title: "Restore Your Vehicle’s Shine with Professional Paint Correction",
  //   description: `Eliminate scratches, swirls, and oxidation to bring back that showroom finish. Our multi-stage correction process ensures a mirror-like gloss.`,
  //   video: "/videos/paint-correction.mov",
  // },
  // "vehicle-paint-protection": {
  //   title: "Ultimate Protection. Unmatched Clarity. Long-Lasting Results.",
  //   description: `At Tint Tek Plus, we are committed to providing the highest level of protection for your vehicle, and that's why we offer Stek Paint Protection Film (PPF). This advanced, clear film acts as a shield for your car’s paint, protecting it from scratches, rock chips, road debris, and environmental contaminants. Stek PPF delivers an invisible, self-healing layer that keeps your car’s paint looking flawless, day after day.`,
  //   video: "/",
  // },
  "headlight-services": {
    title: "TRANSFORM YOUR VEHICLE WITH STEK DARKENED HEADLIGHT & TAILLIGHT PPF",
    description: `Enhancing your vehicle's aesthetics while providing protection to your headlights and taillights is a specialty at Tint Tek Plus. We offer professional installation of STEK Light Protection Films (LPF), a premium Paint Protection Film (PPF) designed to safeguard and customize your automotive lights.`,
    video: "/videos/headlight.mov",
  },
  "ceramic-coating": {
    title: "Unmatched Protection. Brilliant Shine. Lasting Durability.",
    description: `At Tint Tek Plus, we believe in offering the highest level of protection for your vehicle. That’s why we specialize in advanced ceramic and graphene coatings. These coatings create a durable, hydrophobic barrier that repels water, dirt, and contaminants while enhancing your car’s appearance with a glossy, showroom-like finish.`,
    video: "/videos/ceramic-coating.mov",
  },
  "windshield-protection-film": {
    title: "Drive Texas Roads with Confidence: Experience Superior Protection, Clarity, and Durability.",
    description: `At Tint Tek Plus, we specialize in providing superior windshield protection services using ExoShield GT3, a cutting-edge film designed to offer exceptional durability, clarity, and protection against environmental hazards. Whether you're navigating through the bustling city or driving on Texas' rugged highways, ExoShield GT3 provides an invisible yet robust layer of defense for your windshield.`,
    video: "/videos/Windshield-Film.mov",
  },
};

export default function VideoCTA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const { serviceId } = useParams();

  const content =
    videoContent[serviceId] || videoContent["residential-window-tinting"];

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
            px: { xs: 1, sm: 2, md: 2 },
            py: 4,
          }}
        >
          <Box
            sx={{
              width: isMobile ? "90%" : "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: "auto",
              p: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                background: "linear-gradient(145deg, #1b1b1b, #3a3a3a)", 
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.6), inset 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              <video
                ref={videoRef}
                src={content.video}
                muted={isMuted}
                playsInline
                controls={false}
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                poster="/gallery/Tint Tek-107-2.jpg" 
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
              px: { xs: 1, sm: 2, md: 3 },
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
              {content.title}
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
              {content.description}
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
