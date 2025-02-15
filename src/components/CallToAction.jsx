import React from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const CallToAction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <Box
      sx={{
        position: "relative",
        height: isMobile ? "auto" : "600px", // Adjust height for mobile
        display: "flex",
        flexDirection: "column", // Stack elements on mobile
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: isMobile ? "3rem 1.5rem" : "2rem",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
      }}
    >
      {/* Dark Overlay for Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content Section */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: isMobile ? "2rem" : "2.5rem", // Adjust for mobile
          }}
        >
          Upgrade Your Ride with Premium Window Tinting
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          sx={{
            mt: 2,
            fontSize: isMobile ? "1rem" : "1.2rem", // Adjust font size
            lineHeight: "1.6",
            opacity: 0.9,
            px: isMobile ? 2 : 0, // Add padding for small screens
          }}
        >
          Enhance Your Car’s Style, Comfort & Protection.  
          Say goodbye to blinding sunlight, excessive heat, and nosy strangers.  
          Our professional window tinting service blocks 99% of UV rays, reduces glare,  
          and keeps your car cooler & more energy-efficient.
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{
            mt: 1.5,
            fontSize: isMobile ? "1rem" : "1.1rem", // Adjust font size
            fontStyle: "italic",
            opacity: 0.9,
            px: isMobile ? 2 : 0,
          }}
        >
          Join thousands of satisfied customers who trust our expert technicians  
          for flawless and long-lasting window tinting
        </Typography>

        {/* <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          sx={{
            mt: 2,
            fontWeight: "bold",
            fontSize: isMobile ? "1.1rem" : "1.2rem", // Adjust font size
            color: "#2794d2",
          }}
        >
          Limited-Time Offer: Get $25 Off Your First Tinting Service!
        </Typography> */}

        {/* CTA Button */}
        <Button
          component={motion.button}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          sx={{
            mt: 3,
            backgroundColor: "#2794d2", // Vibrant color
            color: "#000",
            fontWeight: "bold",
            px: isMobile ? 3 : 4, // Adjust padding for mobile
            py: isMobile ? 1.2 : 1.5,
            borderRadius: "30px",
            textTransform: "uppercase",
            fontSize: isMobile ? "1rem" : "1.1rem",
            width: isMobile ? "100%" : "auto", // Make button full width on mobile
          }}
          href="/quote"
        >
          Get a Free Quote
        </Button>
      </Box>
    </Box>
  );
};

export default CallToAction;
