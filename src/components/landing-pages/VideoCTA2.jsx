// components/LocalVideoCTA.jsx
import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
  Container, // 👈 added
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

/* --------------------- Base Styles --------------------- */

const Wrapper = styled(Box)(() => ({
  color: "#fff",
  position: "relative",
  overflow: "visible",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
}));

const Eyebrow = styled(Typography)(() => ({
  color: "#53b4eb",
  fontSize: ".78rem",
  fontWeight: 800,
  letterSpacing: ".12em",
}));

const GradientHeadline = styled(Typography)(() => ({
  fontWeight: 900,
  lineHeight: 1.08,
  background: "linear-gradient(135deg, #ffffff 0%, #53b4eb 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

/* --------------------- Phone Video Styles --------------------- */

const PhoneShell = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "9 / 16",
  borderRadius: 28,
  overflow: "hidden",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.10)",
  boxShadow:
    "0 12px 40px rgba(0,0,0,0.55), inset 0 0 0 2px rgba(255,255,255,0.04)",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 20,
    boxShadow:
      "0 8px 30px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
  },
}));

const GlowWrap = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  borderRadius: 28,
  filter: "drop-shadow(0 12px 40px rgba(0,0,0,.55))",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -32,
    borderRadius: 44,
    pointerEvents: "none",
    background:
      "radial-gradient(50% 65% at 55% 75%, rgba(39,148,210,.65), rgba(77,184,240,.35) 40%, transparent 75%)",
    filter: "blur(36px)",
    opacity: 0.9,
    transition: "opacity .8s ease, transform .8s ease",
    animation: "pulseGlow 4s ease-in-out infinite",
    zIndex: -2,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: -18,
    borderRadius: 36,
    pointerEvents: "none",
    background:
      "radial-gradient(40% 50% at 50% 70%, rgba(83,180,235,.85), rgba(39,148,210,.45) 45%, transparent 80%)",
    filter: "blur(20px)",
    opacity: 0.75,
    transition: "opacity .6s ease, transform .6s ease",
    animation: "innerGlow 3s ease-in-out infinite alternate",
    zIndex: -1,
  },
  "@keyframes pulseGlow": {
    "0%,100%": { opacity: 0.8, transform: "scale(1) rotate(0deg)" },
    "33%": { opacity: 1, transform: "scale(1.06) rotate(0.5deg)" },
    "66%": { opacity: 0.9, transform: "scale(1.03) rotate(-0.3deg)" },
  },
  "@keyframes innerGlow": {
    "0%": { opacity: 0.6, transform: "scale(0.98)" },
    "100%": { opacity: 0.9, transform: "scale(1.02)" },
  },
  "&:hover::before": {
    opacity: 1.1,
    transform: "scale(1.08) rotate(1deg)",
    filter: "blur(42px)",
  },
  "&:hover::after": {
    opacity: 1,
    transform: "scale(1.04)",
    filter: "blur(24px)",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: 20,
    "&::before": { inset: -20, borderRadius: 32, filter: "blur(24px)" },
    "&::after": { inset: -12, borderRadius: 24, filter: "blur(16px)" },
  },
}));

const VideoEl = styled("video")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#101010",
}));

const Controls = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 12,
  top: 12,
  display: "flex",
  gap: 8,
  zIndex: 2,
  [theme.breakpoints.down("sm")]: { right: 8, top: 8, gap: 6 },
}));

const ControlButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.35)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.18)",
  "&:hover": { backgroundColor: "rgba(0,0,0,0.5)", transform: "scale(1.05)" },
  transition: "all 0.2s ease",
  [theme.breakpoints.down("sm")]: {
    padding: "6px",
    "& svg": { fontSize: "1rem" },
  },
}));

/* --------- CTA BUTTON (mobile ergonomic) --------- */
const CTAButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variant",
})(({ variant, theme }) => ({
  fontWeight: 800,
  padding: "11px 22px",
  borderRadius: 999,
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  transition:
    "transform .28s cubic-bezier(.175,.885,.32,1.275), box-shadow .28s",
  background:
    variant === "outline"
      ? "transparent"
      : "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)",
  border: variant === "outline" ? "2px solid #2794d2" : "none",
  color: variant === "outline" ? "#bfe7ff" : "#fff",
  boxShadow:
    variant === "outline" ? "none" : "0 10px 26px rgba(39,148,210,.35)",
  "&:hover": {
    transform: "translateY(-2px)",
    background:
      variant === "outline"
        ? "linear-gradient(135deg, rgba(39,148,210,.2), rgba(77,184,240,.2))"
        : "linear-gradient(135deg, #4db8f0 0%, #2794d2 100%)",
    boxShadow:
      variant === "outline"
        ? "0 16px 34px rgba(39,148,210,.25)"
        : "0 16px 34px rgba(39,148,210,.45)",
  },

  /* --- Mobile polish --- */
  [theme.breakpoints.down("md")]: {
    width: "100%",
    minHeight: 50,
    borderRadius: 16,
    textTransform: "none",
    fontWeight: 700,
    letterSpacing: 0,
    padding: "14px 16px",
    fontSize: "0.98rem",
    justifyContent: "center",
    gap: 8,
    ...(variant !== "outline" && {
      background:
        "linear-gradient(180deg, rgba(77,184,240,0.95), rgba(39,148,210,0.95))",
      boxShadow:
        "0 10px 24px rgba(39,148,210,.35), 0 1px 0 rgba(255,255,255,0.06) inset",
    }),
    ...(variant === "outline" && {
      background: "rgba(15, 17, 22, 0.45)",
      backdropFilter: "blur(8px)",
      border: "1.5px solid rgba(113, 191, 242, 0.7)",
      color: "#e9f7ff",
      boxShadow: "0 8px 18px rgba(12, 18, 24, .5)",
      "&:hover": { background: "rgba(26, 32, 41, 0.55)" },
    }),
    "& .MuiButton-startIcon": { marginRight: 6, marginLeft: -2 },
    "&:active": { transform: "translateY(0)" },
  },
}));

/* --------------------- Feature List Styles --------------------- */

const FeatureList = styled("ul")(() => ({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 12,
}));

const FeatureItem = styled(motion.li)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 12,
  [theme.breakpoints.down("sm")]: { gap: 10 },
}));

const CheckBadge = styled(Box)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    width: 24,
    height: 24,
    "& svg": { fontSize: 16 },
  },
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.2,
  color: "#ffffff",
  [theme.breakpoints.down("sm")]: { fontSize: "0.95rem" },
}));

const FeatureBody = styled(Typography)(({ theme }) => ({
  color: "rgba(255,255,255,0.80)",
  lineHeight: 1.6,
  marginTop: 2,
  [theme.breakpoints.down("sm")]: { fontSize: "0.85rem" },
}));

/* Motion variants */
const listVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
};

const handleScrollTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

/* --------------------- Component --------------------- */

export default function LocalVideoCTA({
  videoSrc = "/testimonial-videos/testimonial1.mov",
  eyebrow = "REAL RESULTS",
  title = "See It In Action",
  body = "A customer shares the service, communication, and care that sealed the deal.",
  bullets = [
    "Llumar Certified Installers — Professionally trained and accredited for flawless results every time.",
    "Customer Satisfaction Guaranteed — We stand behind every tint job with a no-hassle guarantee.",
    "Lifetime Warranty Options — Coverage you can trust, backed by manufacturer support.",
    "Fast, Clean Installation — Most jobs completed in under 3 hours with showroom-quality finish.",
  ],
  primaryHref = "/quote",
  primaryText = "Get Free Quote",
  secondaryHref = "/gallery",
  secondaryText = "View on Instagram",
  phoneMaxWidthMd = 340,
  phoneMaxWidthLg = 380,
  sx,
}) {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // In-view is used only to PAUSE when out of view (no autoplay)
  const isInView = useInView(containerRef, {
    threshold: 0.3,
    margin: "-10% 0px -10% 0px",
  });

  // Pause when out of view
  useEffect(() => {
    if (!isInView && playing) {
      videoRef.current?.pause();
      setPlaying(false);
    }
  }, [isInView, playing]);

  // Preload when near viewport
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !loaded) {
            videoRef.current.load();
          }
        });
      },
      { rootMargin: "50px 0px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [loaded]);

  const togglePlay = useCallback(async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    try {
      if (video.paused) {
        await video.play();
        setPlaying(true);
      } else {
        video.pause();
        setPlaying(false);
      }
    } catch (error) {
      console.warn("Play/pause failed:", error);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    video.muted = !video.muted;
    setMuted(video.muted);
  }, []);

  const handleVideoLoad = useCallback(() => setLoaded(true), []);
  const handleVideoError = useCallback((error) => {
    console.error("Video loading error:", error);
  }, []);

  // Normalize bullets into { title, body }
  const normalize = (b) => {
    if (typeof b === "object" && b) {
      const title = b.title ?? "";
      const body = b.detail ?? b.body ?? "";
      return { title: String(title), body: body ? String(body) : "" };
    }
    if (typeof b === "string") {
      const parts =
        b.split(" – ").length > 1
          ? b.split(" – ")
          : b.split(" — ").length > 1
          ? b.split(" — ")
          : b.split(" - ");
      if (parts.length > 1) {
        return { title: parts[0].trim(), body: parts.slice(1).join(" - ").trim() };
      }
      return { title: b.trim(), body: "" };
    }
    return { title: String(b ?? ""), body: "" };
  };
  const items = bullets.map(normalize);

  return (
    <Wrapper
      ref={containerRef}
      sx={{ py: { xs: 6, sm: 8, md: 12 }, px: { xs: 1, sm: 2 }, ...sx }}
    >
      {/* 👇 Wrapped inner content in a Container with maxWidth="xl" */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 2.5, md: 4 } }}>
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} alignItems="center">
          {/* Content Section */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <Eyebrow component="span">{eyebrow}</Eyebrow>

              <GradientHeadline
                variant="h3"
                sx={{ mt: 1, mb: 1.25, fontSize: { xs: "1.75rem", sm: "2rem", md: "2.8rem" } }}
              >
                {title}
              </GradientHeadline>

              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 600,
                  lineHeight: 1.55,
                  mb: 2.25,
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                }}
              >
                {body}
              </Typography>

              {/* Feature List */}
              <motion.div variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
                <FeatureList aria-label="Key benefits">
                  {items.map((item, i) => (
                    <FeatureItem key={i} variants={itemVariants}>
                      <CheckBadge aria-hidden="true">
                        <TaskAltRoundedIcon sx={{ fontSize: { xs: 16, sm: 18 }, color: "#e9f7ff" }} />
                      </CheckBadge>
                      <Box>
                        <FeatureTitle variant="subtitle1">{item.title}</FeatureTitle>
                        {item.body && <FeatureBody variant="body2">{item.body}</FeatureBody>}
                      </Box>
                    </FeatureItem>
                  ))}
                </FeatureList>
              </motion.div>

              {/* Desktop CTAs */}
              {mdUp && (
                <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 3 }}>
                  <CTAButton component="a" onClick={handleScrollTop}>{primaryText}</CTAButton>
                  <CTAButton
                    variant="outline"
                    component="a"
                    href="https://www.instagram.com/tinttekplus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<OpenInNewIcon />}
                  >
                    View More On Instagram
                  </CTAButton>
                </Box>
              )}
            </motion.div>
          </Grid>

          {/* Video Section */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box sx={{ position: "relative", display: "flex", justifyContent: { xs: "center", md: "flex-end" }, mr: 4 }}>
                <Box
                  sx={{
                    position: "absolute",
                    inset: { xs: "-6% -8% -10% -8%", md: "-8% -10% -14% -10%" },
                    background: "radial-gradient(60% 60% at 50% 80%, rgba(39,148,210,0.22), transparent 70%)",
                    filter: { xs: "blur(20px)", md: "blur(28px)" },
                    zIndex: 0,
                  }}
                />

                <GlowWrap>
                  <PhoneShell
                    sx={{
                      zIndex: 1,
                      width: { xs: "280px", sm: "320px", md: phoneMaxWidthMd, lg: phoneMaxWidthLg },
                      mx: { xs: "auto", md: 0 },
                    }}
                  >
                    {/* Video controls */}
                    <Controls>
                      <Tooltip title={playing ? "Pause" : "Play"}>
                        <ControlButton size={smDown ? "small" : "medium"} onClick={togglePlay}>
                          {playing ? <PauseIcon fontSize={smDown ? "small" : "medium"} /> : <PlayArrowIcon fontSize={smDown ? "small" : "medium"} />}
                        </ControlButton>
                      </Tooltip>
                      <Tooltip title={muted ? "Unmute" : "Mute"}>
                        <ControlButton size={smDown ? "small" : "medium"} onClick={toggleMute}>
                          {muted ? <VolumeOffIcon fontSize={smDown ? "small" : "medium"} /> : <VolumeUpIcon fontSize={smDown ? "small" : "medium"} />}
                        </ControlButton>
                      </Tooltip>
                    </Controls>

                    {/* Loading indicator */}
                    {!loaded && (
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "linear-gradient(180deg, #0f0f0f 0%, #0c0c0c 100%)",
                        }}
                      >
                        <Box
                          sx={{
                            width: { xs: 40, sm: 52 },
                            height: { xs: 40, sm: 52 },
                            borderRadius: "50%",
                            border: "3px solid rgba(255,255,255,0.18)",
                            borderTopColor: "#2794d2",
                            animation: "spin 1s linear infinite",
                            "@keyframes spin": {
                              "0%": { transform: "rotate(0deg)" },
                              "100%": { transform: "rotate(360deg)" },
                            },
                          }}
                          aria-label="Loading video"
                        />
                      </Box>
                    )}

                    <VideoEl
                      ref={videoRef}
                      src={videoSrc}
                      playsInline
                      muted={muted}
                      loop
                      preload="metadata"
                      onLoadedData={handleVideoLoad}
                      onError={handleVideoError}
                      onPlay={() => setPlaying(true)}
                      onPause={() => setPlaying(false)}
                    >
                      Your browser does not support the video tag.
                    </VideoEl>
                  </PhoneShell>
                </GlowWrap>
              </Box>
            </motion.div>

            {/* Mobile CTA buttons (reduced spacing) */}
            {!mdUp && (
              <Box
                sx={{
                  mt: 2.5,
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: "1fr",
                  px: 0.5,
                }}
              >
                <CTAButton component="a" href={primaryHref} onClick={handleScrollTop} aria-label={primaryText}>
                  {primaryText}
                </CTAButton>
                <CTAButton
                  variant="outline"
                  component="a"
                  href="https://www.instagram.com/tinttekplus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<OpenInNewIcon />}
                  aria-label={secondaryText}
                >
                  {secondaryText}
                </CTAButton>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}
