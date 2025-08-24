// components/LocalVideoCTA.jsx
import React, { useMemo, useRef, useState } from "react";
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

const Wrapper = styled(Box)(() => ({
  color: "#fff",
  position: "relative",
  overflow: "visible",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
}));

const Glass = styled(Box)(() => ({
  // background: "rgba(255,255,255,0.06)",
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
  /* nice base shadow under the device */
  filter: "drop-shadow(0 12px 40px rgba(0,0,0,.55))",

  /* OUTER BLUE GLOW - Primary layer */
  "&::before": {
    content: '""',
    position: "absolute",
    inset: -32,                 // lets the glow extend outside
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

  /* SECONDARY GLOW - Inner intense layer */
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

  /* Enhanced hover effects */
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

const CTAOverlay = styled(Glass)(() => ({
  position: "absolute",
  left: 14,
  bottom: 14,
  padding: 14,
  borderRadius: 18,
  width: "min(92%, 360px)",
  pointerEvents: "auto",
  boxShadow: "0 18px 36px rgba(0,0,0,0.5)",
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
  transition: "transform .28s cubic-bezier(.175,.885,.32,1.275), box-shadow .28s",
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

/**
 * Props:
 * - videoSrc: string (local file url or imported module)
 * - poster?: string (optional poster image)
 * - eyebrow, title, body
 * - primaryHref/primaryText, secondaryHref/secondaryText
 * - phoneMaxWidthMd, phoneMaxWidthLg (numbers in px)
 */
export default function LocalVideoCTA({
  videoSrc = "/videos/ceramic-coating.mov", // if using /public/videos/reel.mp4
  poster,
  eyebrow = "REAL RESULTS",
  title = "See It In Action",
  body = "Watch a quick before/after and how our nano-ceramic film cuts glare and heat on real vehicles.",
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

  return (
    <Wrapper sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      <Box sx={{ maxWidth: 1280, mx: "auto", px: { xs: 2.5, md: 4 } }}>
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          {/* Copy first on desktop */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.35 }}
            >
               <Eyebrow component="span">REAL RESULTS</Eyebrow>
<GradientHeadline
  variant="h3"
  sx={{ mt: 1, mb: 1.5, fontSize: { xs: "2rem", md: "2.8rem" } }}
>
  See It In Action
</GradientHeadline>
<Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 400, lineHeight: 1.7 }}>
  Watch how our nano-ceramic film transforms real vehicles:
</Typography>
<Box component="ul" sx={{ mt: 2, pl: 2, color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
  <li>Rejects up to 99% of harmful UV rays</li>
  <li>Reduces glare for safer, clearer driving</li>
  <li>Keeps cabins cooler with advanced heat blocking</li>
  <li>Maintains a sleek, factory-tinted look</li>
</Box>
<Typography variant="body2" sx={{ mt: 2, color: "#53b4eb", fontWeight: 500 }}>
  Trusted by thousands of Dallas drivers ★★★★★
</Typography>

                {mdUp && (
                  <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mt: 3 }}>
                    <CTAButton component="a" href={primaryHref}>
                      {primaryText}
                    </CTAButton>
                    <CTAButton
                      variant="outline"
                      component="a"
                      href={secondaryHref}
                      startIcon={<OpenInNewIcon />}
                    >
                      {secondaryText}
                    </CTAButton>
                  </Box>
                )}
            </motion.div>
          </Grid>

          {/* Local video (small) */}
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
                    width: { xs: "100%", sm: "100%", md: phoneMaxWidthMd, lg: phoneMaxWidthLg },
                    mx: { xs: "auto", md: 0 },
                  }}
                >
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
                        {playing ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
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
                        {muted ? <VolumeOffIcon fontSize="small" /> : <VolumeUpIcon fontSize="small" />}
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
                    {/* Optional additional formats */}
                    {/* <source src={videoWebm} type="video/webm" /> */}
                    {/* <source src={videoMp4} type="video/mp4" /> */}
                    Your browser does not support the video tag.
                  </VideoEl>

                </PhoneShell>
                </GlowWrap>
              </Box>
            </motion.div>

            {/* Mobile actions (below video) */}
            {!mdUp && (
              <Box sx={{ mt: 2.25, display: "flex", gap: 1.25, flexWrap: "wrap" }}>
                <CTAButton
                  variant="outline"
                  component="a"
                  href={secondaryHref}
                  startIcon={<OpenInNewIcon />}
                >
                  {secondaryText}
                </CTAButton>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}
