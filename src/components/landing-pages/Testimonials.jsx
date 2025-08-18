import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// ===== Wrapper uses the SAME background as Mockup content area =====
const TestimonialsWrapper = styled(Box)(({ theme }) => ({
  background: "transparent",
  color: "#fff",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
}));

const TestimonialCard = styled(motion.div)(({ theme }) => ({
  position: "relative",
  height: "100%",
  borderRadius: 20,
  padding: theme.spacing(3),
  // background: "rgba(255,255,255,0.06)",
  background: "#fff",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
}));

const QuoteBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -16,
  right: 16,
  width: 48,
  height: 48,
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  background: "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)", // brand blues
  color: "#000",
  boxShadow: "0 10px 30px rgba(39,148,210,0.5)",
}));

const AvatarRing = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: "50%",
  padding: 2,
  background:
    "conic-gradient(from 0deg, rgba(39,148,210,0.85), rgba(77,184,240,0.85))", // brand blues
}));

// Match CTA styling in your Mockup (kept here for local use)
const CTAButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$style" && prop !== "$size",
})(({ theme, ownerState }) => {
  const { $style, $size } = ownerState || {};
  return {
    fontWeight: 700,
    padding: $size === "large" ? "16px 40px" : "12px 32px",
    borderRadius: "50px",
    fontSize: $size === "large" ? "1.1rem" : "1rem",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    boxShadow: "0 8px 32px rgba(39,148,210,0.3)",
    background:
      $style === "outline"
        ? "transparent"
        : "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)",
    border: $style === "outline" ? "2px solid #2794d2" : "none",
    color: $style === "outline" ? "#2794d2" : "#fff",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 40px rgba(39,148,210,0.4)",
      background:
        $style === "outline"
          ? "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)"
          : "linear-gradient(135deg, #4db8f0 0%, #2794d2 100%)",
      color: "#fff",
    },
  };
});

const Testimonials = () => {
  const testimonials = [
    {
      name: "User 1",
      role: "Car Make/Model/Year",
      rating: 5,
      quote:
        "Testimonial",
      avatar: "/avatars/miguel.jpg",
    },
    {
      name: "User 2",
      role: "Car Make/Model/Year",
      rating: 5,
      quote:
        "Testimonial",
      avatar: "/avatars/aubrey.jpg",
    },
    {
      name: "User 3",
      role: "Car Make/Model/Year",
      rating: 5,
      quote:
        "Testimonial",
      avatar: "/avatars/jordan.jpg",
    },
  ];

  return (
    <TestimonialsWrapper sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#2794d2",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            REAL RESULTS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            What Drivers Are Saying
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 700, mx: "auto" }}
          >
            Verified customer feedback on comfort, clarity, and craftsmanship.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} md={4} key={i}>
              <TestimonialCard
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <QuoteBadge>
                  <FormatQuoteIcon />
                </QuoteBadge>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    mt: 1,
                  }}
                >
                  <AvatarRing>
                    <Avatar
                      src={t.avatar}
                      alt={t.name}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </AvatarRing>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {t.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#000" }}
                    >
                      {t.role}
                    </Typography>
                  </Box>
                </Box>

                <Rating
                  value={t.rating}
                  precision={0.5}
                  readOnly
                  sx={{ mb: 1, color: "#4db8f0" }} // brand blue
                />

                <Typography
                  variant="body1"
                  sx={{ color: "#000", lineHeight: 1.7 }}
                >
                  {t.quote}
                </Typography>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>

        {/* CTA under testimonials */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <CTAButton ownerState={{ $size: "large" }}>
            Get a Free Quote
          </CTAButton>
          <CTAButton ownerState={{ $style: "outline" }}>See Pricing</CTAButton>
        </Box>
      </Container>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
