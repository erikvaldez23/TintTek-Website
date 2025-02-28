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

// Define PPF Options with Images, Prices, and Descriptions
const ppfOptions = {
  "front-end": {
    name: "Front End PPF",
    image: "/TintTek-Website/front-ppf1.png",
    description:
      "Provides essential front-end protection against road debris and scratches.",
    price: "$$$",
  },
  extended: {
    name: "Extended PPF",
    image: "/images/platinum-gloss.jpg",
    description:
      "Covers additional areas for enhanced protection and longevity.",
    price: "$$$",
  },
  "track-package": {
    name: "Track Package PPF",
    image: "/TintTek-Website/track-package1.png",
    description:
      "Designed for track performance with maximum coverage and durability.",
    price: "$$$",
  },
  "full-car": {
    name: "Full Car PPF",
    image: "/TintTek-Website/full-ppf1.png",
    description: "Complete vehicle protection with hydrophobic properties.",
    price: "$$$",
  },
  "color-change": {
    name: "Color Change PPF",
    image: "/images/select-black.jpg",
    description:
      "Transform your car's look while maintaining superior protection.",
    price: "$$$",
  },
  "stealth-matte": {
    name: "Stealth/Matte PPF",
    image: "/images/select-black.jpg",
    description:
      "Gives your car a sleek matte finish while shielding against damage.",
    price: "$$$",
  },
};

const PPFSelector = () => {
  const [selectedPPF, setSelectedPPF] = useState("full-car"); // Default selection
  const [fade, setFade] = useState(true); // State for fade effect

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  // Handle PPF Selection with Smooth Transition
  const handleSelection = (ppfKey) => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setSelectedPPF(ppfKey); // Change PPF selection
      setFade(true); // Fade-in effect
    }, 200);
  };

  return (
    <Box sx={{ textAlign: "center", width: "100vw", overflowX: "hidden" }}>
      {/* Navigation Tabs for Larger Screens */}
      {!isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            py: 2,
            backgroundColor: "#888",
          }}
        >
          {Object.entries(ppfOptions).map(([key, option]) => (
            <Button
              key={key}
              onClick={() => handleSelection(key)}
              sx={{
                backgroundColor: selectedPPF === key ? "#2794d2" : "#fff",
                color: selectedPPF === key ? "#000" : "#000",
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
              {option.name}
            </Button>
          ))}
        </Box>
      ) : (
        // Dropdown for Mobile Screens
        <Box sx={{ width: "90%", mx: "auto", my: 2 }}>
          <Select
            value={selectedPPF}
            onChange={(e) => handleSelection(e.target.value)}
            fullWidth
            sx={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              "& .MuiSelect-select": {
                padding: "12px",
              },
            }}
          >
            {Object.entries(ppfOptions).map(([key, option]) => (
              <MenuItem key={key} value={key}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      {/* Large Background Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: isMobile ? "60vh" : "50vh", // Increased height for proper spacing
          backgroundColor: "#888",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: isMobile ? 2 : 5,
        }}
      >
        {/* Price and Title Section */}
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? "5%" : "10%", // Adjusted to move above the image
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
            variant={isMobile ? "h5" : "h4"}
            fontWeight="bold"
            sx={{ color: "#fff" }}
          >
            {ppfOptions[selectedPPF].name}
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            Price
          </Typography>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            sx={{ fontWeight: "bold", color: "#fff" }}
          >
            {ppfOptions[selectedPPF].price}
          </Typography>
        </Box>

        {/* Image Display with Fade Effect */}
        <Fade in={fade} timeout={500}>
          <Box
            component="img"
            src={ppfOptions[selectedPPF].image}
            alt={ppfOptions[selectedPPF].name}
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

export default PPFSelector;
