import { Box, Typography, Grid, Paper, Collapse, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // <-- JS, no generic
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const ACCENT = "#2794d2";

  const features = [
    { text: "UV Protection", details: "Our top-quality window films block up to 99% of harmful UV rays, providing crucial protection against skin damage and reducing the risk of skin cancer. Not only does this safeguard you and your passengers, but it also helps preserve your car's interior by preventing fading, cracking, and deterioration." },
    { text: "Heat & Glare Reduction", details: "Enjoy a more comfortable drive with our heat-rejecting films. By significantly reducing solar heat, we help keep your car cooler, even on the hottest Texas days. Our films also reduce glare from the sun and headlights, improving visibility and reducing eye strain, making every drive safer and more enjoyable." },
    { text: "Certified Technicians", details: "Our team of certified technicians brings years of experience to every job. We adhere to the highest industry standards to ensure each installation is flawless, with a seamless finish that prevents bubbles, peeling, or imperfections. Your satisfaction and the durability of the tint are our top priorities." },
    { text: "Premium Quality", details: "We offer premium films made in the USA, which are rigorously tested by third-party organizations to guarantee the highest levels of clarity, performance, and durability. Our films deliver the heat rejection and UV protection we promise, ensuring that you get exactly what you expect." },
    { text: "Custom Tint Options", details: "Choose from a variety of tint shades and finishes to suit your style. Whether you prefer a subtle, sleek look or a bold, dark tint, we provide the flexibility to achieve the perfect aesthetic for your vehicle." },
    { text: "Privacy & Security", details: "Tinting your windows adds an extra layer of privacy and security, blocking prying eyes and protecting your valuables. Our films also help strengthen your glass, providing additional protection against break-ins and enhancing your overall safety." },
  ];

  const glassSX = (active) => ({
    backgroundColor: active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)",
    border: `1px solid ${active ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.16)"}`,
    backdropFilter: "blur(14px) saturate(120%)",
    WebkitBackdropFilter: "blur(14px) saturate(120%)",
    boxShadow: active ? "0 14px 40px rgba(0,0,0,0.45)" : "0 10px 28px rgba(0,0,0,0.35)",
    transition: "transform .3s ease, box-shadow .3s ease, background-color .3s ease, border-color .3s ease",
    color: "#fff",
  });

  return (
    <Box
      id="about"
      sx={{
        p: isMobile ? 2 : 4,
        textAlign: "center",
        background: "transparent",
        color: "white",
        isolation: "isolate",
      }}
    >
      <Box sx={{ maxWidth: 1200, m: "auto", width: "100%", py: isMobile ? 5 : 7 }}>
        <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold" gutterBottom sx={{ color: "#fff" }}>
          Why Choose Us?
        </Typography>

        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ maxWidth: 1200, m: "auto", color: "#fff", lineHeight: 1.6, fontSize: isMobile ? "1rem" : "1.2rem" }}
        >
          At Tint Tek Plus, we are committed to offering premium window tinting that combines style, comfort, and superior protection. 
          Our expert-grade films are designed to block 99% of harmful UV rays, reduce glare, and keep your car cooler, ensuring an unmatched driving experience. 
          With certified technicians and a lifetime warranty, we promise top-tier quality and service every time, giving you peace of mind and confidence on the road.
        </Typography>

        <Grid container spacing={isMobile ? 2 : 3} sx={{ mt: 4, justifyContent: "center" }}>
          {features.map((feature, index) => {
            const active = hoveredIndex === index;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                  onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  onClick={() => isMobile && setHoveredIndex(active ? null : index)}
                  sx={{
                    ...glassSX(active),
                    p: isMobile ? 2.25 : 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    borderRadius: "14px",
                    cursor: "pointer",
                    transform: active && !isMobile ? "scale(1.04)" : "none",
                    outline: "none",
                    "&:focus-visible": {
                      boxShadow: `0 0 0 2px rgba(255,255,255,0.25), 0 0 0 5px ${ACCENT}55`,
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CheckCircleIcon
                      sx={{
                        fontSize: 32,
                        color: ACCENT,
                        filter: active ? "drop-shadow(0 0 6px rgba(39,148,210,0.6))" : "none",
                        transition: "filter .3s ease",
                      }}
                    />
                    <Typography variant="h6" fontWeight="bold">
                      {feature.text}
                    </Typography>
                  </Box>

                  <Collapse in={active} unmountOnExit>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, textAlign: "center", fontSize: isMobile ? "0.95rem" : "1rem", color: "rgba(255,255,255,0.85)" }}
                    >
                      {feature.details}
                    </Typography>
                  </Collapse>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
