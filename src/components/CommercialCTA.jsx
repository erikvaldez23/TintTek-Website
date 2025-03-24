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
          color: "#000",
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
            Transform Your Space with Tint Tek Plus and LLumar® Window Films
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
            The glass in your office, retail, or residential building should be
            an asset, not a source of discomfort or excessive cost. At Tint Tek
            Plus, we offer high-quality LLumar® window films, designed to solve
            a wide range of glass-related issues: high energy costs, tenant
            complaints, glare, fading furnishings, privacy concerns, security
            risks, and more. Whether you're improving an existing property or
            designing a new one, LLumar® provides the perfect solution to meet
            your needs.
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
