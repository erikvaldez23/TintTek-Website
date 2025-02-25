import { Box, Typography, Grid, Paper, Collapse, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  const features = [
    { text: "Professional-Grade Tinting", details: "We use only the highest-quality films that provide superior clarity, durability, and performance. Our professional-grade tint ensures a sleek finish without bubbles or peeling." },
    { text: "UV Protection", details: "Our premium window films block up to 99% of harmful UV rays, protecting you and your passengers from skin damage while also preserving your car's interior from fading and cracking." },
    { text: "Custom Tint Options", details: "We offer a variety of tint shades and finishes to match your style and preferences. Whether you're looking for a light touch or a sleek, dark tint, we customize the look to your needs." },
    { text: "Heat & Glare Reduction", details: "Experience a cooler, more comfortable ride with our heat-rejecting films. Reduce glare from the sun and headlights, improving visibility and reducing eye strain while driving." },
    { text: "Certified Technicians", details: "Our highly trained technicians have years of experience in precision tinting. We follow strict industry standards to ensure every application is flawless and long-lasting." },
    { text: "Privacy & Security", details: "Window tinting provides an added layer of privacy and security, keeping prying eyes away and reducing the risk of break-ins. Our films reinforce your glass, adding an extra level of protection." },
  ];

  return (
    <Box id="about"
      sx={{
        p: isMobile ? 4 : 4, // Reduce padding for mobile
        textAlign: "center",
        background: "#EEEEFF",
        color: "white",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          width: "100%",
          py: isMobile ? 5 : 7, // Adjust padding for mobile
        }}
      >
        {/* Header */}
        <Typography
          variant={isMobile ? "h4" : "h2"} // Adjust heading size
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#000" }}
        >
          Why Choose Us?
        </Typography>

        <Typography
          variant={isMobile ? "body1" : "h6"} // Adjust text size
          sx={{
            maxWidth: "800px",
            margin: "auto",
            color: "#000",
            lineHeight: 1.6,
            fontSize: isMobile ? "1rem" : "1.2rem", // Smaller font on mobile
          }}
        >
          At Tint Tek +, we offer premium window tinting designed for style,
          comfort, and protection. Our industry-leading films block 99% of UV
          rays, reduce glare, and keep your car cooler. Backed by certified
          technicians and a lifetime warranty, we guarantee unmatched quality
          and service.
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={isMobile ? 2 : 3} sx={{ mt: 4, justifyContent: "center" }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> {/* Full width on mobile */}
              <Paper
                elevation={6}
                onMouseEnter={() => !isMobile && setHoveredIndex(index)} // Disable hover on mobile
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)} // Tap to expand on mobile
                sx={{
                  p: isMobile ? 2 : 3, // Adjust padding
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  backgroundColor: hoveredIndex === index ? "#EEEEFF" : "#000",
                  color: hoveredIndex === index ? "black" : "white",
                  borderRadius: "10px",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  "&:hover": { transform: isMobile ? "none" : "scale(1.05)", border: "5px solid #000" },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon sx={{ fontSize: 32, color: hoveredIndex === index ? "black" : "white" }} />
                  <Typography variant="h6" fontWeight="bold">
                    {feature.text}
                  </Typography>
                </Box>

                {/* Expandable Details */}
                <Collapse in={hoveredIndex === index}>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      textAlign: "center",
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  >
                    {feature.details}
                  </Typography>
                </Collapse>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
