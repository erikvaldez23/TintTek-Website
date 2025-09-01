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

/* ===== Compact styles ===== */
const TestimonialsWrapper = styled(Box)({
  background: "transparent",
  color: "#fff",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
});

const TestimonialCard = styled(motion.div)(({ theme }) => ({
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 16,
  padding: theme.spacing(2),
  background: "#fff",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 14px 36px rgba(0,0,0,0.28)",
  color: "#000",
}));

const QuoteBadge = styled(Box)({
  position: "absolute",
  top: -12,
  right: 12,
  width: 36,
  height: 36,
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  background: "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)",
  color: "#000",
  boxShadow: "0 8px 22px rgba(39,148,210,0.45)",
});

const AvatarRing = styled(Box)(({ theme }) => ({
  width: 52,
  height: 52,
  borderRadius: "50%",
  padding: 2,
}));

const CTAButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "$style" && prop !== "$size",
})(({ ownerState }) => {
  const { $style, $size } = ownerState || {};
  return {
    fontWeight: 700,
    padding: $size === "large" ? "12px 26px" : "10px 22px",
    borderRadius: 40,
    fontSize: $size === "large" ? "1rem" : "0.95rem",
    transition: "all 0.25s ease",
    boxShadow: "0 6px 22px rgba(39,148,210,0.28)",
    background:
      $style === "outline"
        ? "transparent"
        : "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)",
    border: $style === "outline" ? "2px solid #2794d2" : "none",
    color: $style === "outline" ? "#2794d2" : "#fff",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 28px rgba(39,148,210,0.35)",
      background:
        $style === "outline"
          ? "linear-gradient(135deg, #2794d2 0%, #4db8f0 100%)"
          : "linear-gradient(135deg, #4db8f0 0%, #2794d2 100%)",
      color: "#fff",
    },
  };
});

/** Scrollable area for long quotes */
const ScrollArea = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(1),
  maxHeight: 140, // adjust per your desired card height
  [theme.breakpoints.up("sm")]: { maxHeight: 150 },
  [theme.breakpoints.up("md")]: { maxHeight: 160 },
  overflowY: "auto",
  paddingRight: 4,
  WebkitOverflowScrolling: "touch",
  // subtle scrollbar
  "&::-webkit-scrollbar": { width: 6 },
  "&::-webkit-scrollbar-track": { background: "transparent" },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(0,0,0,0.25)",
    borderRadius: 999,
  },
  "&:hover::-webkit-scrollbar-thumb": {
    background: "rgba(0,0,0,0.45)",
  },
  // gentle bottom fade; OK if unsupported
  position: "relative",
  maskImage:
    "linear-gradient(to bottom, black 85%, rgba(0,0,0,0.85) 95%, transparent 100%)",
}));

const handleScrollTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Andrew Pham",
      role: "Google Review",
      rating: 5,
      quote:
        "I had a fantastic experience with this tint company! Their timing was spot on, and they communicated with me every step of the way. They offer great prices on a variety of tint options, making it easy to find exactly what I needed.",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Josue Chavez",
      role: "Google Review",
      rating: 5,
      quote:
        "Left my Tesla looking great! No problems whatsoever! Definitely recommend you bring your car here! Their customer service is top notch. I’ve never had a customer experience as good as this one!",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Richanda Bryant",
      role: "Google Review",
      rating: 5,
      quote:
        "I had a great experience at Tint Tek Plus! This is the first car I've had to purchase tint for as previous vehicles had it from the factory. I was very impressed with Ryan and team!",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <TestimonialsWrapper sx={{ pt: { xs: 5, md: 12 }, pb: { xs: 5, md: 10 } }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }} id="testimonials">
          <Typography
            variant="overline"
            sx={{
              color: "#2794d2",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            REAL RESULTS
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mt: 0.5,
              mb: 0.5,
              fontSize: { xs: "1.7rem", md: "2rem" },
              lineHeight: 1.2,
            }}
          >
            What Drivers Are Saying
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(255,255,255,0.72)",
              maxWidth: 640,
              mx: "auto",
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Verified customer feedback on comfort, clarity, and craftsmanship.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {testimonials.map((t, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <TestimonialCard
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
              >
                <QuoteBadge>
                  <FormatQuoteIcon fontSize="small" />
                </QuoteBadge>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1.25,
                    mt: 0.5,
                  }}
                >
                  <AvatarRing>
                    <Avatar
                      src={t.avatar}
                      alt={t.name}
                      sx={{ width: "100%", height: "100%", background: "rgba(77,184,240)", }}
                    />
                  </AvatarRing>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 800, lineHeight: 1.1 }}
                    >
                      {t.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(0,0,0,0.72)" }}
                    >
                      {t.role}
                    </Typography>
                  </Box>
                </Box>

                <Rating
                  size="small"
                  value={t.rating}
                  precision={0.5}
                  readOnly
                  sx={{ mb: 0.75 }}
                  aria-label={`${t.rating} star rating`}
                />

                {/* Scrollable quote */}
                <ScrollArea role="region" aria-label={`${t.name} review`}>
                  <Typography variant="body2" sx={{ color: "#000", lineHeight: 1.6 }}>
                    {t.quote}
                  </Typography>
                </ScrollArea>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>

        {/* CTAs */}
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <CTAButton ownerState={{ $size: "large" }} onClick={handleScrollTop}>
            Get Free Quote
          </CTAButton>
          {/* <CTAButton ownerState={{ $style: "outline" }}>See Pricing</CTAButton> */}
        </Box>
      </Container>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
