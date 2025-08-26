// src/components/landing-pages/Hero.jsx
import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

/* ---------- Local styles (scoped to Hero) ---------- */
const FeatureList = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: 10,
});

const FeatureItem = styled(motion.li)({
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
});

const CheckBadge = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24,
  height: 24,
  borderRadius: 999,
  background:
    "linear-gradient(135deg, rgba(39,148,210,0.25), rgba(77,184,240,0.25))",
  border: "1px solid rgba(77,184,240,0.35)",
  boxShadow:
    "0 6px 18px rgba(39,148,210,.32), inset 0 0 0 1px rgba(255,255,255,0.06)",
  flexShrink: 0,
});

const FeatureTitle = styled(Typography)({
  fontWeight: 800,
  lineHeight: 1.2,
  color: "#ffffff",
});

const FeatureBody = styled(Typography)({
  color: "rgba(255,255,255,0.80)",
  lineHeight: 1.6,
  marginTop: 2,
});

const Metric = styled(Box)(({ theme }) => ({
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(12px) saturate(140%)",
  WebkitBackdropFilter: "blur(12px) saturate(140%)",
  borderRadius: 16,
  padding: theme.spacing(2.25),
  height: "100%",
  textAlign: "center",
  boxShadow: "0 10px 28px rgba(0,0,0,0.32)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(39,148,210,0.12), rgba(77,184,240,0.04))",
    pointerEvents: "none",
    zIndex: 0,
  },
  "& > *": { position: "relative", zIndex: 1 },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: -16,
    left: -16,
    right: -16,
    bottom: -16,
    background:
      "linear-gradient(135deg, rgba(39, 148, 210, 0.1) 0%, transparent 50%)",
    borderRadius: "20px",
    zIndex: -1,
  },
}));

const StyledFrame = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: 440, // shorter on mobile
  border: "1px solid rgba(39, 148, 210, 0.2)",
  borderRadius: "18px",
  boxShadow: "0 18px 56px rgba(0,0,0,0.5)",
  background: "transparent",
  outline: "none",
  overflow: "auto",
  loading: "lazy",
  [theme.breakpoints.up("md")]: { height: 600 },
}));

const CTAButton = styled(Button)(({ variant }) => ({
  fontWeight: 700,
  padding: variant === "large" ? "14px 32px" : "10px 26px",
  borderRadius: "40px",
  fontSize: variant === "large" ? "1rem" : "0.95rem",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
  boxShadow: "0 8px 28px rgba(39, 148, 210, 0.28)",
  background:
    variant === "outline"
      ? "transparent"
      : "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)",
  border: variant === "outline" ? "2px solid #2794d2" : "none",
  color: variant === "outline" ? "#2794d2" : "#fff",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 36px rgba(39, 148, 210, 0.38)",
    background:
      variant === "outline"
        ? "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)"
        : "linear-gradient(135deg, #4db8f0 0%, #2794d2 100%)",
    color: "#fff",
  },
}));

/* ---------- Animations ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
};

/* ---------- Component ---------- */
export default function Hero({
  iframeSrc = "https://app.tintwiz.com/web/ce/mm78aa3rvkulrmu65oesvsa63ywubpq3",
}) {
 const handleScrollTo = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  const yOffset = -100; // adjust this value to move further up
  const y =
    section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};


  return (
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
      <Box
        sx={{
          py: { xs: 10, md: 10 }, // compact vertical space
          maxHeight: { md: "100vh" }, // cap hero height on desktop
        }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Iframe FIRST on mobile, SECOND on desktop */}
            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
              <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} transition={{ duration: 0.35 }}>
                <ImageContainer>
                  <StyledFrame
                    src={iframeSrc}
                    title="Get Your Free Quote"
                    loading="lazy"
                    allow="encrypted-media; clipboard-read; clipboard-write; fullscreen; geolocation"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </ImageContainer>
              </motion.div>
            </Grid>

            {/* Text SECOND on mobile, FIRST on desktop */}
            <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
              <motion.div variants={itemVariants}>
                <Box sx={{ mb: { xs: 2, md: 3 } }}>
                  {/* Stars + review count */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 22 }} />
                    ))}
                    <Typography
                      variant="overline"
                      sx={{
                        color: "#2794d2",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        ml: 1,
                      }}
                    >
                      250+ 5 STAR REVIEWS
                    </Typography>
                  </Box>

                  {/* Headline */}
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: { xs: "2.2rem", md: "3.1rem", lg: "3.4rem" },
                      lineHeight: 1.12,
                      mb: { xs: 2.5, md: 3 },
                    }}
                  >
                    Block 88% Of Heat.
                    <br />
                    <Box component="span" sx={{ color: "#fff" }}>
                      Drive Cooler In
                    </Box>
                    <br />
                    <Box component="span" sx={{ color: "#fff" }}>
                      3 Hours!
                    </Box>
                  </Typography>

                  {/* Feature list */}
                  <FeatureList aria-label="Key benefits" sx={{ mb: { xs: 2.5, md: 3 } }}>
                    {[
                      {
                        title: "Superior Heat Rejection",
                        body:
                          "Advanced nano-ceramic tech blocks up to 89% of heat so you stay cool and save your A/C.",
                      },
                      {
                        title: "Reduce Glare • Boost Safety",
                        body: "Cut harsh glare for clearer vision and safer driving—day or night.",
                      },
                      {
                        title: "Privacy + Style Upgrade",
                        body:
                          "A sleek, modern look that keeps prying eyes out without sacrificing clarity.",
                      },
                    ].map((f, i) => (
                      <FeatureItem
                        key={f.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.06 }}
                        viewport={{ once: true }}
                      >
                        <CheckBadge>
                          <TaskAltRoundedIcon sx={{ fontSize: 16, color: "#e9f7ff" }} />
                        </CheckBadge>
                        <Box>
                          <FeatureTitle variant="subtitle1">{f.title}</FeatureTitle>
                          <FeatureBody variant="body2">{f.body}</FeatureBody>
                        </Box>
                      </FeatureItem>
                    ))}
                  </FeatureList>

                  {/* CTAs */}
                  <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: { xs: 2.5, md: 3 } }}>
                    <CTAButton variant="large" onClick={() => handleScrollTo("testimonials")}>
                      Learn More
                    </CTAButton>
                    <CTAButton variant="outline" component="a" href="/gallery">
                      View Gallery
                    </CTAButton>
                  </Box>

                  {/* Stats / Metrics */}
                  <Grid container spacing={2.25}>
                    {[
                      ["89%+", "Heat Rejection"],
                      ["99%", "UV Protection"],
                      ["Lifetime", "Warranty Included"],
                    ].map(([val, label], i) => (
                      <Grid item xs={12} sm={4} key={label}>
                        <Metric
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.45, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          component={motion.div}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1, mb: 0.5 }}>
                            {val}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
                            {label}
                          </Typography>
                        </Metric>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
}
