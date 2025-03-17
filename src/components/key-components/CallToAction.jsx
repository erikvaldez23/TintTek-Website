import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const CallToAction = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Variants for staggering children (title, paragraphs, button)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variant for fading and sliding in each element
  const fadeSlideVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    // Wrap the entire section so the animations trigger on scroll
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <Box
        sx={{
          position: "relative",
          height: isMobile ? "auto" : "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: isMobile ? "3rem 1.5rem" : "1rem",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        }}
      >
        {/* Animate the dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          style={{
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
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            component={motion.h3}
            variants={fadeSlideVariant}
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            DO YOU NEED WINDOW TINT?
          </Typography>
  
          <Typography
            variant="body1"
            component={motion.p}
            variants={fadeSlideVariant}
            transition={{ delay: 0.3 }}
            sx={{
              mt: 2,
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.6",
              opacity: 0.9,
              px: isMobile ? 0 : 0,
            }}
          >
            Looking to block out intense heat, protect your car’s interior from UV damage, or add some extra privacy? 
            Window tinting is the solution! At TintTek+, we offer top-tier heat and UV protection, including tinting for windshields and sunroofs, 
            to keep you comfortable and shielded from the harsh Dallas heat. With our advanced tinting options, you can enjoy cooler temperatures, 
            a more private ride, and longer-lasting protection for your vehicle’s interior.
          </Typography>
  
          <Typography
            variant="body1"
            component={motion.p}
            variants={fadeSlideVariant}
            transition={{ delay: 0.5 }}
            sx={{
              mt: 1.5,
              fontSize: isMobile ? "1rem" : "1.1rem",
              fontStyle: "italic",
              opacity: 0.9,
              px: isMobile ? 0 : 0,
            }}
          >
            Join thousands of satisfied customers who trust our expert technicians for flawless and long-lasting window tinting.
          </Typography>
  
          {/* CTA Button with hover and tap animations */}
          <Button
            component={motion.button}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              mt: 3,
              backgroundColor: "#2794d2",
              color: "#000",
              fontWeight: "bold",
              px: isMobile ? 3 : 4,
              py: isMobile ? 1.2 : 1.5,
              borderRadius: "30px",
              textTransform: "uppercase",
              fontSize: isMobile ? "1rem" : "1.1rem",
              width: isMobile ? "100%" : "auto",
            }}
            href="/quote"
          >
            Get a Free Quote
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default CallToAction;
