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

/* ---------- Styles (aligned to your Mockup.jsx palette) ---------- */

const SectionWrap = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(180deg, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.4) 100%)",
  color: "#fff",
  position: "relative",
}));

const Panel = styled(Box)(({ theme }) => ({
  borderRadius: 24,
  background:
    "radial-gradient(1200px 500px at -10% -40%, rgba(39,148,210,0.08) 0%, transparent 60%), #0f0f0f",
  border: "1px solid rgba(39,148,210,0.18)",
  boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
  overflow: "hidden",
}));

const VideoShell = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  backgroundColor: "#000",
  borderRadius: 20,
  overflow: "hidden",
  border: "1px solid rgba(39,148,210,0.2)",
  boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
}));

const BGVideo = styled("video")(({ theme }) => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
}));

const ControlBar = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.25),
  padding: theme.spacing(1, 1.5),
  borderRadius: 999,
  backgroundColor: "rgba(255,255,255,0.12)",
  border: "1px solid rgba(255,255,255,0.25)",
  backdropFilter: "blur(6px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
}));

const ControlButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  border: "1px solid rgba(255,255,255,0.25)",
  backgroundColor: "rgba(255,255,255,0.08)",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.18)" },
}));

const CTAButton = styled(Button)(({ theme, variant }) => ({
  fontWeight: 800,
  padding: variant === "large" ? "16px 40px" : "12px 28px",
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

const Overline = styled(Typography)(({ theme }) => ({
  color: "#2794d2",
  fontSize: "0.9rem",
  fontWeight: 800,
  letterSpacing: "0.12em",
}));

const GradientTitle = styled(Typography)(({ theme }) => ({
  background: "linear-gradient(135deg, #ffffff 0%, #2794d2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

/* ---------- Component ---------- */

export default function VideoCTA({
  videoSrc = "/videos/tesla-video.mov",
  poster = "/background.jpg",
  heading = "See the Difference in Minutes",
  subheading = "Premium Ceramic Tint • Faster, Cooler, Protected",
  bullets = [
    "Blocks 60%+ heat for instant comfort",
    "99% UV protection to safeguard interiors & skin",
    "Crystal-clear, signal-safe ceramic technology",
  ],
  primary = { label: "Get Free Quote", href: "/quote" },
  secondary = { label: "View Gallery", href: "/gallery" },
  dense = false, // tighter vertical spacing
}) {
  const videoRef = useRef(null);
  const isNarrow = useMediaQuery("(max-width:900px)");

  // Playback state
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Orientation detection
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
  const toggleMute = async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
    if (!v.muted && v.paused) await play();
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    // Portrait if height > width
    setIsPortrait(v.videoHeight > v.videoWidth);
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onVolume = () => setIsMuted(v.muted);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("volumechange", onVolume);

    v.muted = true;
    v.loop = true;
    play();

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("volumechange", onVolume);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionWrap sx={{ py: { xs: dense ? 4 : 8, md: dense ? 6 : 12 } }}>
      <Panel sx={{ p: { xs: 2.5, md: 4 } }}>
        <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
          {/* Left: Video */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <VideoShell
                aria-label="Tint Tek Plus showcase video"
                sx={{
                  // Auto aspect: 9/16 for portrait, 16/9 otherwise
                  aspectRatio: isPortrait ? "9 / 16" : "16 / 9",
                  // Give portrait videos a tasteful max height and narrower width
                  maxHeight: { xs: "75vh", md: "78vh" },
                  width: isPortrait ? { xs: "86%", md: "72%" } : "100%",
                  mx: "auto",
                }}
              >
                {/* Blurred poster pad for portrait to avoid harsh bars */}
                {isPortrait && (
                  <Box
                    aria-hidden
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${poster})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      filter: "blur(28px) saturate(120%)",
                      transform: "scale(1.12)",
                      opacity: 0.45,
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
                  onCanPlay={() => videoRef.current?.play?.().catch(() => {})}
                  onLoadedMetadata={handleLoadedMetadata}
                  style={{
                    objectFit: isPortrait ? "contain" : "cover",
                    backgroundColor: "#000",
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </BGVideo>

                <ControlBar
                  aria-label="Video controls"
                  sx={{ bottom: isPortrait ? 8 : 12 }}
                >
                  <Tooltip title={isPlaying ? "Pause" : "Play"}>
                    <ControlButton
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      onClick={togglePlay}
                      size={isPortrait && isNarrow ? "small" : "medium"}
                    >
                      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </ControlButton>
                  </Tooltip>
                  <Tooltip title={isMuted ? "Unmute" : "Mute"}>
                    <ControlButton
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      onClick={toggleMute}
                      size={isPortrait && isNarrow ? "small" : "medium"}
                    >
                      {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                    </ControlButton>
                  </Tooltip>
                </ControlBar>
              </VideoShell>
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
                <Overline variant="overline" component="div" sx={{ mb: 1.5 }}>
                  PREMIUM WINDOW TINTING
                </Overline>

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
                    mb: 2.5,
                  }}
                >
                  {subheading}
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    listStyle: "none",
                    pl: 0,
                    mb: 3.5,
                    "& li": {
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      mb: 1.25,
                      color: "rgba(255,255,255,0.9)",
                    },
                  }}
                >
                  {bullets.map((b, i) => (
                    <li key={i}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "#2794d2",
                          flexShrink: 0,
                        }}
                      />
                      <Typography component="span">{b}</Typography>
                    </li>
                  ))}
                </Box>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {primary?.label && (
                    <CTAButton
                      variant="large"
                      component="a"
                      href={primary.href || "#"}
                      aria-label={primary.label}
                    >
                      {primary.label}
                    </CTAButton>
                  )}
                  {secondary?.label && (
                    <CTAButton
                      variant="outline"
                      component="a"
                      href={secondary.href || "#"}
                      aria-label={secondary.label}
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
