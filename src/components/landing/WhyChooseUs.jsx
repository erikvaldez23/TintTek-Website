import { Box, Typography, Grid, Paper, Collapse, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const features = [
    { text: "UV Protection", details: "Our top-quality window films block up to 99% of harmful UV rays, providing crucial protection against skin damage and reducing the risk of skin cancer. Not only does this safeguard you and your passengers, but it also helps preserve your car's interior by preventing fading, cracking, and deterioration." },
    { text: "Heat & Glare Reduction", details: "Enjoy a more comfortable drive with our heat-rejecting films. By significantly reducing solar heat, we help keep your car cooler, even on the hottest Texas days. Our films also reduce glare from the sun and headlights, improving visibility and reducing eye strain, making every drive safer and more enjoyable." },
    { text: "Certified Technicians", details: "Our team of certified technicians brings years of experience to every job. We adhere to the highest industry standards to ensure each installation is flawless, with a seamless finish that prevents bubbles, peeling, or imperfections. Your satisfaction and the durability of the tint are our top priorities." },
    { text: "Premium Quality", details: "We offer premium films made in the USA, which are rigorously tested by third-party organizations to guarantee the highest levels of clarity, performance, and durability. Our films deliver the heat rejection and UV protection we promise, ensuring that you get exactly what you expect." },
    { text: "Custom Tint Options", details: "Choose from a variety of tint shades and finishes to suit your style. Whether you prefer a subtle, sleek look or a bold, dark tint, we provide the flexibility to achieve the perfect aesthetic for your vehicle." },
    { text: "Privacy & Security", details: "Tinting your windows adds an extra layer of privacy and security, blocking prying eyes and protecting your valuables. Our films also help strengthen your glass, providing additional protection against break-ins and enhancing your overall safety." },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              maxWidth: "1200px",
              margin: "auto",
              color: "#000",
              lineHeight: 1.6,
              fontSize: isMobile ? "1rem" : "1.2rem",
            }}
          >
          At Tint Tek Plus, we are committed to offering premium window tinting that combines style, comfort, and superior protection. 
          Our expert-grade films are designed to block 99% of harmful UV rays, reduce glare, and keep your car cooler, ensuring an unmatched driving experience. 
          With certified technicians and a lifetime warranty, we promise top-tier quality and service every time, giving you peace of mind and confidence on the road.
          </Typography>
        </motion.div>

        {/* Features Grid with Staggered Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
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
                      <CheckCircleIcon sx={{ fontSize: 32, color: hoveredIndex === index ? "black" : "#2794d2" }} />
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
