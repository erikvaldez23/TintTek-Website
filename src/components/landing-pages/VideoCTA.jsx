// src/components/sections/VideoCTA.jsx
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import ScrollToTop from "../ScrollToTop";

/* ---------- Styles ---------- */

const SectionWrap = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.4) 100%)",
  color: "#fff",
  position: "relative",
}));

const Panel = styled(Box)(() => ({
  borderRadius: 24,
  background:
    "radial-gradient(1200px 500px at -10% -40%, rgba(39,148,210,0.08) 0%, transparent 60%), #0f0f0f",
  border: "1px solid rgba(39,148,210,0.18)",
  boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
  overflow: "hidden",
}));

/* ----- Left (Video Frame) ----- */
const VideoFrame = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow:
    "0 30px 80px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.04)",
  background:
    "radial-gradient(1200px 500px at -10% -40%, rgba(39,148,210,0.10) 0%, transparent 60%), #0a0a0a",
}));

const EdgeStroke = styled("div")(() => ({
  pointerEvents: "none",
  position: "absolute",
  inset: 0,
  borderRadius: 20,
  padding: 1,
  background:
    "linear-gradient(135deg, rgba(39,148,210,0.45), rgba(255,255,255,0.06))",
  WebkitMask:
    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
}));

const BottomGradient = styled("div")(() => ({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "26%",
  background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.0))",
  pointerEvents: "none",
  zIndex: 1,
}));

const BGVideo = styled("video")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
}));

const PosterBackplate = styled(Box)(() => ({
  position: "absolute",
  inset: 0,
  filter: "blur(28px) saturate(120%)",
  transform: "scale(1.12)",
  opacity: 0.45,
  zIndex: 0,
}));

const FloatingControls = styled(Box)(() => ({
  position: "absolute",
  left: "50%",
  bottom: 18,
  transform: "translateX(-50%) translateY(6px)",
  display: "flex",
  alignItems: "center",
  gap: 12,
  padding: "8px 14px",
  borderRadius: 999,
  backgroundColor: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  backdropFilter: "blur(6px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
  opacity: 0,
  transition: "opacity .25s ease, transform .25s ease",
  ".video-hover:hover &, .video-hover:focus-within &": {
    opacity: 1,
    transform: "translateX(-50%) translateY(0)",
  },
}));

const ControlButton = styled(IconButton)(() => ({
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.25)",
  backgroundColor: "rgba(255,255,255,0.08)",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.18)" },
}));

/* ----- Right (Text) ----- */
const Overline = styled(Typography)(() => ({
  color: "#2794d2",
  fontSize: "0.9rem",
  fontWeight: 800,
  letterSpacing: "0.12em",
}));

const GradientTitle = styled(Typography)(() => ({
  background: "linear-gradient(135deg, #ffffff 0%, #2794d2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const CTAButton = styled(Button)(({ variant }) => ({
  fontWeight: 800,
  padding: variant === "large" ? "16px 30px" : "12px 28px",
  borderRadius: 999,
  fontSize: variant === "large" ? "1.05rem" : "1rem",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  boxShadow: "0 10px 34px rgba(39,148,210,0.35)",
  background:
    variant === "outline"
      ? "transparent"
      : "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)",
  border: variant === "outline" ? "2px solid #2794d2" : "none",
  color: variant === "outline" ? "#2794d2" : "#fff",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 16px 44px rgba(39,148,210,0.45)",
    background:
      variant === "outline"
        ? "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)"
        : "linear-gradient(135deg, #4db8f0 0%, #2794d2 100%)",
    color: "#fff",
  },
}));

/* ----- Feature list (ported from Hero) ----- */
const FeatureList = styled("ul")(() => ({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 12,
}));

const FeatureItem = styled(motion.li)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 12,
}));

const CheckBadge = styled(Box)(() => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: 999,
  background:
    "linear-gradient(135deg, rgba(39,148,210,0.25), rgba(77,184,240,0.25))",
  border: "1px solid rgba(77,184,240,0.35)",
  boxShadow:
    "0 8px 24px rgba(39,148,210,.35), inset 0 0 0 1px rgba(255,255,255,0.06)",
  flexShrink: 0,
}));

const FeatureTitle = styled(Typography)(() => ({
  fontWeight: 800,
  lineHeight: 1.2,
  color: "#ffffff",
}));

const FeatureBody = styled(Typography)(() => ({
  color: "rgba(255,255,255,0.80)",
  lineHeight: 1.6,
  marginTop: 2,
}));

const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

/* ---------- Component ---------- */
export default function VideoCTA({
  videoSrc = "/videos/tesla-video.mov",
  poster = "/background.jpg",
  heading = "See the Difference in Minutes",
  subheading = "Premium Ceramic Tint • Faster, Cooler, Protected",
  /**
   * bullets can be:
   * - string: "Title – Body" or "Title - Body" (smart split)
   * - object: { title: string, body?: string }
   */
  bullets = [
    "Stay Cooler Instantly – Blocks up to 89%+ of heat so you drive in comfort, not sweat.",
    "Protect What Matters Most – 99% UV rejection shields your skin, family, and interior from damage.",
    "Built to Last – Premium Llumar ceramic films, tested and proven by 3rd-party labs.",
    "Lifetime Peace of Mind – Warranty-backed protection against bubbling, fading, or peeling.",
  ],
  primary = { label: "Get Free Quote", href: "/quote" },
  secondary = { label: "View Gallery", href: "/gallery" },
}) {
  const videoRef = useRef(null);
  const isNarrow = useMediaQuery("(max-width:900px)");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPortrait, setIsPortrait] = useState(false);

  const play = async () => {
    try {
      await videoRef.current?.play();
      setIsPlaying(true);
    } catch {}
  };
  const pause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };
  const togglePlay = () => (isPlaying ? pause() : play());
  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    if (!v.muted && v.paused) play();
  };
  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPortrait(v.videoHeight > v.videoWidth);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    play();
  }, []);

  // ---- Motion variants (for list) ----
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: i * 0.06 },
    }),
  };

  // ---- Normalize bullets into {title, body} ----
  const normalize = (b) => {
    if (typeof b === "object" && b?.title) return b;
    if (typeof b === "string") {
      // split by en dash OR hyphen surrounded by spaces
      const parts =
        b.split(" – ").length > 1
          ? b.split(" – ")
          : b.split(" — ").length > 1
          ? b.split(" — ")
          : b.split(" - ");
      if (parts.length > 1) {
        return { title: parts[0].trim(), body: parts.slice(1).join(" - ").trim() };
      }
      return { title: b.trim() };
    }
    return { title: String(b) };
  };
  const items = bullets.map(normalize);

  return (
    <SectionWrap sx={{ py: { xs: 6, md: 12 } }}>
      <Panel sx={{ p: { xs: 2.5, md: 4 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left: Video */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <VideoFrame
                className="video-hover"
                sx={{
                  aspectRatio: isPortrait ? "9 / 16" : "16 / 9",
                  maxHeight: { xs: "75vh", md: "78vh" },
                  width: isPortrait ? { xs: "86%", md: "72%" } : "100%",
                  mx: "auto",
                }}
              >
                <EdgeStroke />
                <BottomGradient />
                {isPortrait && (
                  <PosterBackplate
                    aria-hidden
                    sx={{
                      background: `url(${poster}) center/cover no-repeat`,
                    }}
                  />
                )}
                <BGVideo
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  ref={videoRef}
                  poster={poster}
                  onLoadedMetadata={handleLoadedMetadata}
                  style={{
                    objectFit: isPortrait ? "contain" : "cover",
                    backgroundColor: "#000",
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </BGVideo>

                <FloatingControls>
                  <Tooltip title={isPlaying ? "Pause" : "Play"}>
                    <ControlButton onClick={togglePlay}>
                      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </ControlButton>
                  </Tooltip>
                  <Tooltip title={isMuted ? "Unmute" : "Mute"}>
                    <ControlButton onClick={toggleMute}>
                      {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </ControlButton>
                  </Tooltip>
                </FloatingControls>
              </VideoFrame>
            </motion.div>
          </Grid>

          {/* Right: Copy + CTAs */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Box sx={{ maxWidth: 640, ml: { md: 1 } }}>
                <Overline sx={{ mb: 1.5 }}>PREMIUM WINDOW TINTING</Overline>

                <GradientTitle
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2rem", md: "2.75rem" },
                    lineHeight: 1.12,
                    mb: 1,
                  }}
                >
                  {heading}
                </GradientTitle>

                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    fontWeight: 500,
                    mb: 3,
                  }}
                >
                  {subheading}
                </Typography>

                {/* --- Ported Feature List --- */}
                <FeatureList aria-label="Key benefits" style={{ marginBottom: 16 }}>
                  {items.map((it, i) => (
                    <FeatureItem
                      key={i}
                      custom={i}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <CheckBadge aria-hidden="true">
                        <TaskAltRoundedIcon sx={{ fontSize: 18, color: "#e9f7ff" }} />
                      </CheckBadge>
                      <Box>
                        <FeatureTitle variant="subtitle1">
                          {it.title}
                        </FeatureTitle>
                        {it.body && (
                          <FeatureBody variant="body2">{it.body}</FeatureBody>
                        )}
                      </Box>
                    </FeatureItem>
                  ))}
                </FeatureList>

                {/* CTAs */}
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 2 }}>
                  {primary?.label && (
                    <CTAButton
                      variant="large"
                      component="a"
                      onClick={handleScrollTop}
                    >
                      {primary.label}
                    </CTAButton>
                  )}
                  {secondary?.label && (
                    <CTAButton
                      variant="outline"
                      component="a"
                      href={secondary.href || "#"}
                    >
                      {secondary.label}
                    </CTAButton>
                  )}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Panel>
    </SectionWrap>
  );
}
