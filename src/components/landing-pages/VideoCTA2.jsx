// components/LocalVideoCTA.jsx
import React, { useRef, useState } from "react";
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
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// New: to match hero checkmark vibe
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

/* --------------------- Base Styles --------------------- */

const Wrapper = styled(Box)(() => ({
  color: "#fff",
  position: "relative",
  overflow: "visible",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
}));

const Glass = styled(Box)(() => ({
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px) saturate(130%)",
  WebkitBackdropFilter: "blur(10px) saturate(130%)",
  borderRadius: 24,
  boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
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

/* --------------------- Left: Phone Video --------------------- */

const PhoneShell = styled(Box)(() => ({
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
}));

const GlowWrap = styled(Box)(() => ({
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
}));

const VideoEl = styled("video")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundColor: "#101010",
}));

const Controls = styled(Box)(() => ({
  position: "absolute",
  right: 12,
  top: 12,
  display: "flex",
  gap: 8,
  zIndex: 2,
}));

const CTAButton = styled(Button)(({ variant }) => ({
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
        ? "0 6px 18px rgba(39,148,210,.18)"
        : "0 16px 34px rgba(39,148,210,.45)",
  },
}));

/* --------------------- Right: Hero-Style Feature List --------------------- */

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

/* Motion variants (staggered reveal for the list) */
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
  poster,
  eyebrow = "REAL RESULTS",
  title = "See It In Action",
  body = "Watch a quick before/after and how our nano-ceramic film cuts glare and heat on real vehicles.",
  /**
   * bullets can be:
   *  - string: "Title – Body" or "Title - Body"
   *  - object: { title, detail? | body? }
   */
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
  const mdUp = useMediaQuery("(min-width:900px)");
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const ref = useRef(null);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  // --- Normalize bullets into { title, body } ---
  const normalize = (b) => {
    if (typeof b === "object" && b) {
      const title = b.title ?? "";
      const body = b.detail ?? b.body ?? "";
      return { title: String(title), body: body ? String(body) : "" };
    }
    if (typeof b === "string") {
      // split by en dash, em dash, or " - "
      const parts =
        b.split(" – ").length > 1
          ? b.split(" – ")
          : b.split(" — ").length > 1
          ? b.split(" — ")
          : b.split(" - ");
      if (parts.length > 1) {
        return {
          title: parts[0].trim(),
          body: parts.slice(1).join(" - ").trim(),
        };
      }
      return { title: b.trim(), body: "" };
    }
    return { title: String(b ?? ""), body: "" };
  };
  const items = bullets.map(normalize);

  return (
    <Wrapper sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, md: 4 } }}>
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          {/* Right (Copy) first on desktop for better scan pattern */}
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
                sx={{ mt: 1, mb: 1.25, fontSize: { xs: "2rem", md: "2.8rem" } }}
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
                }}
              >
                {body}
              </Typography>

              {/* Hero-style Feature List (ported) */}
              <motion.div
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
              >
                <FeatureList aria-label="Key benefits">
                  {items.map((it, i) => (
                    <FeatureItem key={i} variants={itemVariants}>
                      <CheckBadge aria-hidden="true">
                        <TaskAltRoundedIcon
                          sx={{ fontSize: 18, color: "#e9f7ff" }}
                        />
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
              </motion.div>

              {/* Desktop CTAs */}
              {mdUp && (
                <Box
                  sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 3 }}
                >
                  <CTAButton component="a" onClick={handleScrollTop}>
                    {primaryText}
                  </CTAButton>
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

          {/* Left: Local video (phone mock) */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {/* Ambient underglow */}
                <Box
                  aria-hidden
                  sx={{
                    position: "absolute",
                    inset: "-8% -10% -14% -10%",
                    background:
                      "radial-gradient(60% 60% at 50% 80%, rgba(39,148,210,0.22), transparent 70%)",
                    filter: "blur(28px)",
                    zIndex: 0,
                  }}
                />

                <GlowWrap>
                  <PhoneShell
                    sx={{
                      zIndex: 1,
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: phoneMaxWidthMd,
                        lg: phoneMaxWidthLg,
                      },
                      mx: { xs: "auto", md: 0 },
                    }}
                  >
                    {/* Video controls */}
                    <Controls>
                      <Tooltip title={playing ? "Pause" : "Play"}>
                        <IconButton
                          size="small"
                          onClick={togglePlay}
                          sx={{
                            color: "#fff",
                            backgroundColor: "rgba(0,0,0,0.35)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                            border: "1px solid rgba(255,255,255,0.18)",
                          }}
                        >
                          {playing ? (
                            <PauseIcon fontSize="small" />
                          ) : (
                            <PlayArrowIcon fontSize="small" />
                          )}
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={muted ? "Unmute" : "Mute"}>
                        <IconButton
                          size="small"
                          onClick={toggleMute}
                          sx={{
                            color: "#fff",
                            backgroundColor: "rgba(0,0,0,0.35)",
                            "&:hover": { backgroundColor: "rgba(0,0,0,0.5)" },
                            border: "1px solid rgba(255,255,255,0.18)",
                          }}
                        >
                          {muted ? (
                            <VolumeOffIcon fontSize="small" />
                          ) : (
                            <VolumeUpIcon fontSize="small" />
                          )}
                        </IconButton>
                      </Tooltip>
                    </Controls>

                    {/* Loader */}
                    {!loaded && (
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(180deg, #0f0f0f 0%, #0c0c0c 100%)",
                        }}
                      >
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
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
                      ref={ref}
                      src={videoSrc}
                      poster={poster}
                      playsInline
                      muted={muted}
                      autoPlay
                      loop
                      preload="metadata"
                      onLoadedData={() => setLoaded(true)}
                    >
                      Your browser does not support the video tag.
                    </VideoEl>
                  </PhoneShell>
                </GlowWrap>
              </Box>
            </motion.div>

            {/* Mobile CTA under video */}
            {!mdUp && (
              <Box
                sx={{ mt: 2.25, display: "flex", gap: 1.25, flexWrap: "wrap" }}
              >
                <CTAButton
                  variant="outline"
                  component="a"
                  href={primaryHref}
                  startIcon={<OpenInNewIcon />}
                >
                  {secondaryText}
                </CTAButton>
                <CTAButton
                  component="a"
                  href={primaryHref}
                  onClick={handleScrollTop}
                >
                  {primaryText}
                </CTAButton>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}
