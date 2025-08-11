import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  IconButton,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import QuickLinks from "../key-components/QuickLinks";
import Footer from "../key-components/Footer";
import CallToAction from "../key-components/CallToAction";
import Testimonials from "../landing-pages/Testimonials";
import FAQ from "../landing-pages/FAQ";

// ===== Video hero styles =====
const VideoSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#000",
}));

const BackgroundVideo = styled("video")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
}));

const VideoOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  zIndex: 1,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  pointerEvents: "none", // let clicks pass through EXCEPT our controls
}));

const SwipeIndicator = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(16),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
  color: "#fff",
  textAlign: "center",
  userSelect: "none",
  pointerEvents: "auto",
}));

// Custom control bar (glassmorphism)
const ControlBar = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(3),
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1, 1.5),
  borderRadius: 999,
  backgroundColor: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  backdropFilter: "blur(6px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
  pointerEvents: "auto", // enable clicking
}));

const ControlButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.25)",
  backgroundColor: "rgba(255,255,255,0.08)",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.18)" },
}));

// ===== Existing styles =====
const CTAButton = styled(Button)(({ theme, variant }) => ({
  fontWeight: 700,
  padding: variant === "large" ? "16px 40px" : "12px 32px",
  borderRadius: "50px",
  fontSize: variant === "large" ? "1.1rem" : "1rem",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  boxShadow: "0 8px 32px rgba(39, 148, 210, 0.3)",
  background:
    variant === "outline"
      ? "transparent"
      : "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)",
  border: variant === "outline" ? "2px solid #2794d2" : "none",
  color: variant === "outline" ? "#2794d2" : "#fff",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 40px rgba(39, 148, 210, 0.4)",
    background:
      variant === "outline"
        ? "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)"
        : "linear-gradient(135deg, #4db8f0 0%, #2794d2 100%)",
    color: "#fff",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    transition: "left 0.6s",
  },
  "&:hover::before": { left: "100%" },
}));

const Metric = styled(Box)(({ theme }) => ({
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(12px) saturate(140%)",
  WebkitBackdropFilter: "blur(12px) saturate(140%)",
  borderRadius: 20,
  padding: theme.spacing(3),
  height: "100%",
  textAlign: "center",
  boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
  position: "relative",
  overflow: "hidden",

  // Soft gradient overlay
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(39,148,210,0.15), rgba(77,184,240,0.05))",
    pointerEvents: "none",
    zIndex: 0,
  },

  // Inner glow effect
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "2px",
    borderRadius: "inherit",
    background: "rgba(255,255,255,0.02)",
    boxShadow: "inset 0 0 40px rgba(255,255,255,0.05)",
    pointerEvents: "none",
    zIndex: 0,
  },

  // Ensure content is above overlays
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
}));

const BenefitCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#111111",
  padding: "32px 24px",
  borderRadius: "20px",
  textAlign: "center",
  border: "1px solid rgba(39, 148, 210, 0.1)",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s ease",
  "&:hover": {
    backgroundColor: "#1a1a1a",
    border: "1px solid rgba(39, 148, 210, 0.3)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "linear-gradient(90deg, #2794d2, #4db8f0)",
    transform: "scaleX(0)",
    transition: "transform 0.4s ease",
  },
  "&:hover::before": { transform: "scaleX(1)" },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff 0%, #2794d2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  "@supports not (background-clip: text)": { color: "#2794d2" },
}));

const FloatingElement = styled(motion.div)(({ theme }) => ({
  position: "absolute",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(39, 148, 210, 0.1) 0%, transparent 70%)",
  filter: "blur(1px)",
  pointerEvents: "none",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
    background:
      "linear-gradient(135deg, rgba(39, 148, 210, 0.1) 0%, transparent 50%)",
    borderRadius: "24px",
    zIndex: -1,
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "300px",
  objectFit: "cover",
  borderRadius: "20px",
  boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
  border: "1px solid rgba(39, 148, 210, 0.2)",
  [theme.breakpoints.up("md")]: { height: "450px" },
}));

const StyledFrame = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "800px",
  border: "1px solid rgba(39, 148, 210, 0.2)",
  borderRadius: "20px",
  boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
  background: "transparent",
  // Remove default iframe border
  outline: "none",
  // Make sure scrolling works nicely for long forms
  overflow: "auto",
  [theme.breakpoints.up("md")]: { height: "650px" },
}));

const Mockup = () => {
  // --- Animation variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] },
    },
  };
  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };
  const cardHoverVariants = {
    hover: { y: -8, transition: { duration: 0.3, ease: "easeOut" } },
  };

  // --- Video + audio handling ---
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true); // autoplay starts playing
  const [isMuted, setIsMuted] = useState(true); // autoplay must be muted

  const play = async () => {
    try {
      await videoRef.current?.play();
      setIsPlaying(true);
    } catch (e) {
      // ignored: browser may still require user gesture
    }
  };

  const pause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => (isPlaying ? pause() : play());

  const toggleMute = async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    if (!v.muted && v.paused) {
      // if unmuting and paused, try to resume
      await play();
    }
  };

  // keep React state in sync with actual video element (e.g., if OS/media controls change it)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolume = () => setIsMuted(v.muted);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("volumechange", onVolume);

    // initialize desired flags for autoplay
    v.muted = true;
    v.loop = true;
    play();

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("volumechange", onVolume);
    };
  }, []);

  // --- Scroll + swipe handling ---
  const contentRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [touchStart, setTouchStart] = useState({ y: 0, x: 0 });

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const onTouchStart = (e) => {
    const t = e.touches?.[0];
    if (!t) return;
    setTouchStart({ y: t.clientY, x: t.clientX });
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches?.[0];
    if (!t) return;
    const dy = touchStart.y - t.clientY; // positive if user swiped up
    const dx = Math.abs(touchStart.x - t.clientX);
    if (dy > 70 && dx < 60) scrollToContent();
  };

  const benefits = [
    {
      title: "Heat & UV Rejection",
      description:
        "Advanced ceramic technology blocks up to 99% of harmful UV rays and reduces interior heat by 60%.",
      icon: "☀️",
    },
    {
      title: "Enhanced Privacy & Security",
      description:
        "Premium tinting provides discretion and protection while maintaining optimal visibility.",
      icon: "🔒",
    },
    {
      title: "Improved Aesthetic Appeal",
      description:
        "Transform your vehicle with a sleek, sophisticated look that turns heads everywhere.",
      icon: "✨",
    },
    {
      title: "Lifetime Warranty",
      description:
        "Comprehensive lifetime warranty on all installations with professional service guarantee.",
      icon: "🛡️",
    },
  ];

  return (
    <>
      {/* ===== Video Hero at the very top ===== */}
      <VideoSection onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <BackgroundVideo
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          ref={videoRef}
          onCanPlay={() => videoRef.current?.play?.().catch(() => {})}
        >
          <source src="/videos/v-window-tint2.mp4" type="video/mp4" />
          {/* <source src="/hero-video.webm" type="video/webm" /> */}
        </BackgroundVideo>

        <VideoOverlay>
          {/* Scroll hint */}
          <SwipeIndicator
            initial={{ y: 0, opacity: 0.9 }}
            animate={{ y: [0, -8, 0], opacity: 1 }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <IconButton
              aria-label={
                isMobile ? "Swipe up for details" : "Click to continue"
              }
              onClick={!isMobile ? scrollToContent : undefined}
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(6px)",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.18)" },
                color: "#fff",
              }}
            >
              <KeyboardDoubleArrowUpIcon />
            </IconButton>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {isMobile ? "Swipe up for details" : "Click to continue"}
            </Typography>
          </SwipeIndicator>

          {/* Custom controls */}
          <ControlBar>
            <Tooltip title={isPlaying ? "Pause" : "Play"}>
              <ControlButton
                aria-label={isPlaying ? "Pause video" : "Play video"}
                onClick={togglePlay}
              >
                {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
              </ControlButton>
            </Tooltip>
            <Tooltip title={isMuted ? "Unmute" : "Mute"}>
              <ControlButton
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                onClick={toggleMute}
              >
                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </ControlButton>
            </Tooltip>
          </ControlBar>
        </VideoOverlay>
      </VideoSection>

      {/* ===== Landing content ===== */}
      <Box
        ref={contentRef}
        sx={{
          background: `
      radial-gradient(circle at top left, rgba(39,148,210,0.15), transparent 50%),
      radial-gradient(circle at bottom right, rgba(77,184,240,0.15), transparent 50%),
      linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)
    `,
          color: "#fff",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Background Elements */}
        <FloatingElement
          variants={floatVariants}
          animate="animate"
          sx={{ top: "10%", right: "10%", width: "200px", height: "200px" }}
        />
        <FloatingElement
          variants={floatVariants}
          animate="animate"
          sx={{ bottom: "20%", left: "5%", width: "150px", height: "150px" }}
          transition={{ delay: 2 }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          {/* Hero Section */}
          <Box sx={{ py: { xs: 8, md: 25 } }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} lg={6}>
                  <motion.div variants={itemVariants}>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "#2794d2",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          mb: 2,
                          display: "block",
                        }}
                      >
                        PREMIUM WINDOW TINTING
                      </Typography>
                      <GradientText
                        variant="h2"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                          lineHeight: 1.1,
                          mb: 3,
                        }}
                      >
                        Transform Your Drive with
                        <br />
                        <Box component="span" sx={{ color: "#2794d2" }}>
                          Professional Tinting
                        </Box>
                      </GradientText>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: { xs: "1.1rem", md: "1.25rem" },
                          lineHeight: 1.6,
                          maxWidth: "500px",
                          mb: 4,
                          fontWeight: 400,
                        }}
                      >
                        Experience unmatched comfort, style, and protection with
                        our premium window tinting solutions. Engineered for
                        perfection, designed for luxury.
                      </Typography>
                      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <CTAButton variant="large">Get Free Quote</CTAButton>
                        <CTAButton variant="outline">View Gallery</CTAButton>
                      </Box>
                      <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={4}>
                            <Metric
                              initial={{ opacity: 0, y: 16 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: true }}
                            >
                              <Typography
                                variant="h4"
                                sx={{ fontWeight: 800, lineHeight: 1, mb: 0.5 }}
                              >
                                60%+
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "rgba(255,255,255,0.8)" }}
                              >
                                Heat Rejection
                              </Typography>
                            </Metric>
                          </Grid>

                          <Grid item xs={12} sm={4}>
                            <Metric
                              initial={{ opacity: 0, y: 16 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.05 }}
                              viewport={{ once: true }}
                            >
                              <Typography
                                variant="h4"
                                sx={{ fontWeight: 800, lineHeight: 1, mb: 0.5 }}
                              >
                                99%
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "rgba(255,255,255,0.8)" }}
                              >
                                UV Protection
                              </Typography>
                            </Metric>
                          </Grid>

                          <Grid item xs={12} sm={4}>
                            <Metric
                              initial={{ opacity: 0, y: 16 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Typography
                                variant="h4"
                                sx={{ fontWeight: 800, lineHeight: 1, mb: 0.5 }}
                              >
                                Lifetime
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "rgba(255,255,255,0.8)" }}
                              >
                                Warranty Included
                              </Typography>
                            </Metric>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageContainer>
                      <StyledFrame
                        src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
                        title="Get Your Free Quote"
                        loading="lazy"
                        allow="encrypted-media; clipboard-read; clipboard-write; fullscreen; geolocation"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </ImageContainer>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Box>

          {/* Benefits Section */}
          <Box sx={{ py: { xs: 8, md: 12 } }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: "#2794d2",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    mb: 2,
                    display: "block",
                  }}
                >
                  WHY CHOOSE US
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "2rem", md: "2.75rem" },
                    mb: 2,
                  }}
                >
                  Premium Quality,
                  <Box component="span" sx={{ color: "#2794d2" }}>
                    {" "}
                    Guaranteed Results
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    maxWidth: "600px",
                    mx: "auto",
                    fontWeight: 400,
                  }}
                >
                  Our expert team delivers exceptional results with
                  industry-leading materials and techniques
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {benefits.map((benefit, index) => (
                  <Grid item xs={12} sm={6} lg={3} key={index}>
                    <BenefitCard
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      variants={cardHoverVariants}
                      whileHover="hover"
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "2.5rem",
                          mb: 2,
                          filter: "grayscale(0.3)",
                        }}
                      >
                        {benefit.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 2, color: "#fff" }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}
                      >
                        {benefit.description}
                      </Typography>
                    </BenefitCard>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>

          {/* Advanced Technology Section */}
          <Box sx={{ py: { xs: 8, md: 12 } }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ImageContainer>
                      <StyledImage
                        src="/background.jpg"
                        alt="Advanced Tinting Technology"
                        onError={(e) => {
                          e.currentTarget.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTExMTExIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMjc5NGQyIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkFkdmFuY2VkIFRlY2hub2xvZ3k8L3RleHQ+Cjwvc3ZnPgo=";
                        }}
                      />
                    </ImageContainer>
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ pl: { md: 4 } }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "#2794d2",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          mb: 2,
                          display: "block",
                        }}
                      >
                        CUTTING-EDGE INNOVATION
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: "2rem", md: "2.75rem" },
                          mb: 3,
                          lineHeight: 1.2,
                        }}
                      >
                        Advanced Ceramic
                        <br />
                        <Box component="span" sx={{ color: "#2794d2" }}>
                          Technology
                        </Box>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                          mb: 4,
                        }}
                      >
                        Our state-of-the-art ceramic window films utilize
                        nano-ceramic particles to provide superior heat
                        rejection without interference with electronic devices.
                        Experience the perfect balance of performance and
                        clarity with industry-leading technology that keeps your
                        vehicle cooler and more comfortable year-round.
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {[
                          "99% UV protection for enhanced safety",
                          "Superior heat rejection up to 60%",
                          "Signal-friendly, no interference",
                        ].map((t, i) => (
                          <Box
                            key={i}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: i < 2 ? 2 : 0,
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#2794d2",
                                mr: 2,
                              }}
                            />
                            <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                              {t}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      <CTAButton>Schedule Service</CTAButton>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Box>

          {/* Professional Installation Section */}
          <Box sx={{ py: { xs: 8, md: 12 } }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ pr: { md: 4 } }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: "#2794d2",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          mb: 2,
                          display: "block",
                        }}
                      >
                        EXPERT CRAFTSMANSHIP
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: "2rem", md: "2.75rem" },
                          mb: 3,
                          lineHeight: 1.2,
                        }}
                      >
                        Professional
                        <br />
                        <Box component="span" sx={{ color: "#2794d2" }}>
                          Installation
                        </Box>
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "rgba(255,255,255,0.8)",
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                          mb: 4,
                        }}
                      >
                        Our certified technicians bring years of expertise and
                        precision to every installation. Using specialized tools
                        and techniques, we ensure perfect application with no
                        bubbles, wrinkles, or imperfections. Each project is
                        backed by our comprehensive lifetime warranty for
                        complete peace of mind.
                      </Typography>
                      <Box sx={{ mb: 3 }}>
                        {[
                          "Certified and experienced technicians",
                          "Dust-free, climate-controlled environment",
                          "Lifetime warranty on all services",
                        ].map((t, i) => (
                          <Box
                            key={i}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mb: i < 2 ? 2 : 0,
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                backgroundColor: "#2794d2",
                                mr: 2,
                              }}
                            />
                            <Typography sx={{ color: "rgba(255,255,255,0.9)" }}>
                              {t}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      <CTAButton>Schedule Service</CTAButton>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ImageContainer>
                      <StyledImage
                        src="/background.jpg"
                        alt="Professional Installation Process"
                        onError={(e) => {
                          e.currentTarget.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTExMTExIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMjc5NGQyIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPlByb2Zlc3Npb25hbCBJbnN0YWxsYXRpb248L3RleHQ+Cjwvc3ZnPgo=";
                        }}
                      />
                    </ImageContainer>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
          <Testimonials />
          <FAQ />
        </Container>
      </Box>

      <CallToAction />
      <QuickLinks />
      <Footer />
    </>
  );
};

export default Mockup;
