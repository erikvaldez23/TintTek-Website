import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Fade,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Define Tint Options with Images
const tintOptions = {
  "5%": {
    name: "5% Tint",
    image: "/TintTek-Website/front-ppf1.png",
    description: "Extremely dark tint for maximum privacy and UV protection.",
  },
  "20%": {
    name: "20% Tint",
    image: "/tint-images/20-percent.png",
    description: "Provides a balance of privacy and visibility.",
  },
  "35%": {
    name: "35% Tint",
    image: "/tint-images/35-percent.png",
    description: "A medium tint that maintains a sleek, stylish look.",
  },
  "50%": {
    name: "50% Tint",
    image: "/tint-images/50-percent.png",
    description: "Allows more visibility while still reducing glare and heat.",
  },
  "70%": {
    name: "70% Tint",
    image: "/tint-images/70-percent.png",
    description: "A light tint for UV protection with high visibility.",
  },
};

const TintingSimulator = () => {
  const [selectedTint, setSelectedTint] = useState("5%"); // Default tint selection
  const [fade, setFade] = useState(true); // State for fade effect

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  // Handle Tint Selection with Smooth Transition
  const handleSelection = (tintKey) => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setSelectedTint(tintKey); // Change tint selection
      setFade(true); // Fade-in effect
    }, 200);
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
            background: "#999",
          }}
        >
          {Object.entries(tintOptions).map(([key, option]) => (
            <Button
              key={key}
              onClick={() => handleSelection(key)}
              sx={{
                backgroundColor: selectedTint === key ? "#2794d2" : "#fff",
                color: selectedTint === key ? "#000" : "#000",
                borderRadius: "20px",
                fontWeight: "bold",
                px: 3,
                py: 1,
                fontSize: "1rem",
                textTransform: "uppercase",
                transition: "0.3s ease",
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
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
            backgroundColor: "#000", // Force black background
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center content
            padding: "20px", // Add padding to prevent cutoff
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
                    backgroundColor: "#444", // Grey background for dropdown menu
                    color: "#fff", // White text inside the dropdown
                  },
                },
              }}
              sx={{
                background: "#000", // Black background for the select field itself
                backdropFilter: "blur(12px)", // Frosted background effect
                border: "1px solid #ccc", // Light border to make it visible
                borderRadius: "30px",
                color: "#fff", // White text for contrast
                fontWeight: "500",
                fontSize: "16px",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.2)", // Slight brightness increase
                },
                "& .MuiSelect-icon": {
                  color: "#2794d2", // Custom dropdown arrow color
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
                    backgroundColor: "#444", // Grey background for dropdown menu items
                    color: "#fff", // White text for contrast
                    "&:hover": {
                      background: "linear-gradient(90deg, #2794d2, #1a78c2)", // Gradient hover effect
                      color: "#fff",
                      transform: "scale(1.03)", // Subtle scale effect
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
          height: isMobile ? "60vh" : "50vh", // Increased height for proper spacing
          background: "#999",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: isMobile ? 2 : 5,
        }}
      >
        {/* Tint Name and Description */}
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? "2%" : "5%", // Moves text closer to navigation buttons
            left: "50%",
            transform: "translateX(-50%)", // Center horizontally
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center text items
            textAlign: "center",
            zIndex: 3, // Ensures it's above the image
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

        {/* Image Display with Fade Effect */}
        <Fade in={fade} timeout={500}>
          <Box
            component="img"
            src={tintOptions[selectedTint].image}
            alt={tintOptions[selectedTint].name}
            sx={{
              width: isMobile ? "90%" : "80%",
              height: isMobile ? "45vh" : "35vh",
              objectFit: "contain",
              zIndex: 2,
              marginTop: isMobile ? "5vh" : "10vh", // Moves image lower to prevent overlap
            }}
          />
        </Fade>
      </Box>
    </Box>
  );
};

export default TintingSimulator;
