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
          height: isMobile ? "auto" : "auto",
          py: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "#2794d2",
          color: "white",
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
            Why Choose Tint Tek Plus for Residential Window Tinting?
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
            At Tint Tek Plus, we offer the highest-quality LLumar American Made
            window films that enhance your comfort, save on energy costs, boost
            privacy, and protect your health and home. Our films improve your
            living environment by reducing glare, blocking harmful UV rays, and
            lowering energy bills. Plus, we provide a Lifetime Warranty on all
            residential window tinting jobs, so you can enjoy peace of mind
            knowing that your investment is protected for years to come.
          </Typography>
          {/* 
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
            Join thousands of satisfied customers who trust our expert
            technicians for flawless and long-lasting window tinting.
          </Typography> */}

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
              backgroundColor: "#000",
              color: "#fff",
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
