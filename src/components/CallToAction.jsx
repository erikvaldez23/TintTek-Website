import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#000",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "2rem",
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
      <Box sx={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
        <Typography
          variant="h3"
          component={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ fontWeight: "bold", letterSpacing: "1px", textTransform: "uppercase" }}
        >
          Upgrade Your Ride with Premium Window Tinting
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          sx={{ mt: 2, fontSize: "18px", lineHeight: "1.6", opacity: 0.9 }}
        >
          Enhance Your Car’s Style, Comfort & Protection  
          Say goodbye to blinding sunlight, excessive heat, and nosy strangers.  
          Our professional window tinting service blocks 99% of UV rays**, reduces glare,  
          and keeps your car cooler & more energy-efficient.
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          sx={{ mt: 1.5, fontSize: "18px", fontStyle: "italic", opacity: 0.9 }}
        >
          "Join **thousands** of satisfied customers who trust our expert technicians  
          for **flawless** and long-lasting window tinting."
        </Typography>

        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          sx={{ mt: 2, fontWeight: "bold", fontSize: "19px", color: "#2794d2" }}
        >
          Limited-Time Offer: Get $25 Off Your First Tinting Service!
        </Typography>

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
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            textTransform: "uppercase",
            fontSize: "1.1rem",
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
