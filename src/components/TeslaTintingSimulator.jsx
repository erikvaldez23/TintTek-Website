import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

// Define Tint Options with Images
const tintOptions = {
  "5%": {
    name: "5% Tint",
    image: "/tesla-tint-model/tesla-5.webp",
    description: "Extremely dark tint for maximum privacy and UV protection.",
  },
  "15%": {
    name: "15% Tint",
    image: "/tesla-tint-model/tesla-20.webp",
    description: "Provides a balance of privacy and visibility.",
  },
  "30%": {
    name: "30% Tint",
    image: "/tesla-tint-model/tesla-35.webp",
    description: "A medium tint that maintains a sleek, stylish look.",
  },
  "50%": {
    name: "50% Tint",
    image: "/tesla-tint-model/tesla-50.webp",
    description: "Allows more visibility while still reducing glare and heat.",
  },
  "80%": {
    name: "80% Tint",
    image: "/tesla-tint-model/tesla-70.webp",
    description: "A light tint for UV protection with high visibility.",
  },
};

const TeslaTintingSimulator = () => {
  const [selectedTint, setSelectedTint] = useState("5%"); // Default tint selection

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  // Handle Tint Selection with animation trigger
  const handleSelection = (tintKey) => {
    setSelectedTint(tintKey);
  };

  return (
    <Box>
      {/* Navigation Tabs for Larger Screens */}
      {!isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            py: 2,
            mt: 15
          }}
        >
          {Object.entries(tintOptions).map(([key, option]) => (
            <Button
              key={key}
              onClick={() => handleSelection(key)}
              sx={{
                // glassy base
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor:
                  selectedTint === key
                    ? "rgba(39,148,210,0.25)"
                    : "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",

                borderRadius: "20px",
                fontWeight: "bold",
                px: 3,
                py: 1,
                fontSize: "1rem",
                textTransform: "uppercase",

                // subtle state styles
                boxShadow:
                  selectedTint === key
                    ? "0 0 0 2px rgba(39,148,210,0.25) inset"
                    : "none",

                "&:hover": {
                  backgroundColor:
                    selectedTint === key
                      ? "rgba(39,148,210,0.35)"
                      : "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.25)",
                },
                "&:active": {
                  transform: "translateY(1px)",
                },
              }}
            >
              {key} Tint
            </Button>
          ))}
        </Box>
      ) : (
        // Dropdown for Mobile Screens
        <Box
          sx={{
            backgroundColor: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            mt: 8
          }}
        >
          <Box sx={{ width: "90%", mx: "auto" }}>
            <Select
              value={selectedTint}
              onChange={(e) => handleSelection(e.target.value)}
              fullWidth
              displayEmpty
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: "#444",
                    color: "#fff",
                  },
                },
              }}
              sx={{
                background: "#000",
                backdropFilter: "blur(12px)",
                border: "1px solid #ccc",
                borderRadius: "30px",
                color: "#fff",
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)",
                },
                "& .MuiSelect-icon": {
                  color: "#2794d2",
                },
                "& .MuiSelect-select": {
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              {Object.entries(tintOptions).map(([key, option]) => (
                <MenuItem
                  key={key}
                  value={key}
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    padding: "12px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    backgroundColor: "#444",
                    color: "#fff",
                    "&:hover": {
                      background: "linear-gradient(90deg, #2794d2, #1a78c2)",
                      color: "#fff",
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  {key} Tint
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      )}

      {/* Large Background Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: {
            xs: "50vh", // Extra-small screens (mobile)
            sm: "60vh", // Small screens
            md: "60vh", // Medium desktop screens
            lg: "60vh", // Large desktop screens
            xl: "60vh", // Extra-large screens
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: {
            xs: 2,
            md: 5,
          },
        }}
      >
        {/* Tint Name and Description */}
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? "2%" : "5%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 3,
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h3"}
            fontWeight="bold"
            sx={{ color: "#fff" }}
          >
            {tintOptions[selectedTint].name}
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ fontWeight: "bold", color: "#fff", maxWidth: "80%" }}
          >
            {tintOptions[selectedTint].description}
          </Typography>
        </Box>

        {/* Animated Image Transition */}
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedTint}
            src={tintOptions[selectedTint].image}
            alt={tintOptions[selectedTint].name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{
              width: isMobile ? "100%" : "80%",
              height: isMobile ? "45vh" : "35vh",
              objectFit: "contain",
              zIndex: 2,
              marginTop: isMobile ? "5vh" : "10vh",
            }}
          />
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default TeslaTintingSimulator;
