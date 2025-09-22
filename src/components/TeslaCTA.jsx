// src/components/TeslaCTA.jsx
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
  "vehicle-paint-protection": {
    title: "ULTIMATE PROTECTION. UNMATCHED CLARITY. LONG-LASTING RESULTS.",
    description: `At Tint Tek Plus, we are committed to providing the highest level of protection for your vehicle, and that's why we offer Stek Paint Protection Film (PPF). This advanced, clear film acts as a shield for your car’s paint, protecting it from scratches, rock chips, road debris, and environmental contaminants. Stek PPF delivers an invisible, self-healing layer that keeps your car’s paint looking flawless, day after day.`,
    video: "/videos/ppf.mov",
  },
  "residential-window-tinting": {
    title: "TRANSFORM YOUR HOME WITH TINT TEK PLUS AND LLUMAR® WINDOW FILM",
    description: `If you're feeling uncomfortable or dissatisfied with your home, start with your windows. Tint Tek Plus offers smart residential window film solutions using LLumar American Made products to address what may be bothering you—whether it’s the hot spots in a room, high cooling costs, or even the afternoon glare on your TV. Our team has over 10+ years of experience and provides a variety of window films that are quickly and professionally installed, delivering lasting lifestyle benefits without breaking the bank.`,
    video: "/videos/residential-page.mov",
  },
};

export default function TeslaCTA() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { serviceId } = useParams();
  const currentData =
    callToActionData[serviceId] || callToActionData["tesla-window-tinting"];

  const { title, description, video } = currentData;

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const handleToggleVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleToggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", maxWidth: "1100px", width: "100%",  }}>
        {/* Video */}
        <Box sx={{ mb: 4, position: "relative",  }}>
          <video
            ref={videoRef}
            src={video}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"      // ✅ lighter initial load
            poster="/gallery/Tint Tek-108.jpg"
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{
              boxShadow: `
      0 0 20px rgba(39,148,210,0.7),
      0 0 40px rgba(39,148,210,0.5),
      0 0 60px rgba(39,148,210,0.3),
      0 10px 25px rgba(0,0,0,0.6),
      inset 0 0 10px rgba(255,255,255,0.1)
    `,
              width: "100%",
              minHeight: isMobile ? "200px" : "400px",
              maxHeight: isMobile ? "300px" : "400px",
              objectFit: "cover",
              borderRadius: "24px",
              // ✅ No transitions/shadows to avoid extra paints
              backgroundColor: "transparent",
            }}
          />

          {/* Controls (no bg paints) */}
          <IconButton
            onClick={handleToggleVideo}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
            }}
          >
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>

          <IconButton
            onClick={handleToggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            sx={{
              position: "absolute",
              bottom: 16,
              left: 64,
            }}
          >
            {isMuted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>
        </Box>

        {/* Text */}
        <Box sx={{ px: { xs: 1, sm: 2, md: 3, color: "#fff" } }}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
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
            sx={{
              mt: 2,
              px: { xs: 2, sm: 2, md: 3 },
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            {description}
          </Typography>

          <Button
            sx={{
              background: "#2794d2 !important",
              mt: 3,
              // ✅ no custom background; uses theme defaults
              fontWeight: "bold",
              px: isMobile ? 3 : 4,
              py: isMobile ? 1.2 : 1.5,
              borderRadius: "30px",
              textTransform: "uppercase",
              fontSize: isMobile ? "1rem" : "1.1rem",
              width: isMobile ? "100%" : "auto",
            }}
            onClick={() => setOpenModal(true)}
            variant="contained"   // Keep for usability; remove if parent overrides Paper/Buttons
          >
            Get a Free Quote
          </Button>

          <Dialog
            open={openModal}
            onClose={() => setOpenModal(false)}
            fullWidth
            maxWidth="lg"
          >
            <Box sx={{ position: "relative" }}>
              <IconButton
                onClick={() => setOpenModal(false)}
                aria-label="Close quote dialog"
                sx={{ position: "absolute", top: 8, right: 8, zIndex: 1 }}
              >
                <CloseIcon />
              </IconButton>
              <iframe
                src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
                width="100%"
                height="800"
                style={{ border: "none" }}
                title="Fast Quote"
                loading="lazy"
              />
            </Box>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}
