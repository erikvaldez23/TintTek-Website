import { Box, Typography, Grid, Paper, Collapse, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const features = [
    { text: "Professional-Grade Tinting", details: "We use premium films that guarantee superior clarity, durability, and performance. Our expert-grade tint provides a smooth, seamless finish without bubbles or peeling." },
    { text: "UV Protection", details: "Our top-quality window films block up to 99% of harmful UV rays, safeguarding you and your passengers from skin damage while helping to protect your car's interior from fading and cracking." },
    { text: "Custom Tint Options", details: "We offer a range of tint shades and finishes to suit your style and preferences. Whether you want a subtle touch or a bold, dark tint, we tailor the look to fit your needs perfectly." },
    { text: "Heat & Glare Reduction", details: "Enjoy a more comfortable drive with our heat-rejecting films. They minimize glare from the sun and headlights, boosting visibility and reducing eye strain on the road." },
    { text: "Certified Technicians", details: "Our skilled technicians bring years of expertise to every tinting job. We adhere to the highest industry standards to ensure each application is perfect and built to last." },
    { text: "Privacy & Security", details: "Window tinting adds an extra layer of privacy and security by blocking prying eyes and lowering the risk of break-ins. Our films also strengthen your glass, providing additional protection." },
  ];

  // Container variant for staggering child animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation for each feature card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Box
      id="about"
      sx={{
        p: isMobile ? 4 : 4,
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
          py: isMobile ? 5 : 7,
        }}
      >
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#000" }}
          >
            Why Choose Us?
          </Typography>
        </motion.div>

        {/* Description Animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              maxWidth: "1100px",
              margin: "auto",
              color: "#000",
              lineHeight: 1.6,
              fontSize: isMobile ? "1rem" : "1.2rem",
            }}
          >
            At Tint Tek Plus, we specialize in premium window tinting that enhances your car’s style, comfort, 
            and protection. Our top-of-the-line films block 99% of harmful UV rays, reduce glare, and help keep your car cooler, 
            even on the hottest days. With certified technicians and a lifetime warranty, we’re committed to delivering unmatched quality and service every time. 
            Drive with confidence knowing your car is protected.
          </Typography>
        </motion.div>

        {/* Features Grid with Staggered Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Grid container spacing={isMobile ? 2 : 3} sx={{ mt: 4, justifyContent: "center" }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <Paper
                    elevation={6}
                    onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                    onClick={() => isMobile && setHoveredIndex(hoveredIndex === index ? null : index)}
                    sx={{
                      p: isMobile ? 2 : 3,
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
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
}
