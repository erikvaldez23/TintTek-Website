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
import CallToAction from "../CallToAction";
import Contact from "../Contact";
import QuickLinks from "../QuickLinks";
import Footer from "../Footer";

// Define Tint Options with Images
const tintOptions = {
  "5%": {
    name: "5% Tint",
    image: "/TintTek-Website/tesla-5.png",
    description: "Extremely dark tint for maximum privacy and UV protection.",
  },
  "20%": {
    name: "20% Tint",
    image: "/TintTek-Website/tesla-20.png",
    description: "Provides a balance of privacy and visibility.",
  },
  "35%": {
    name: "35% Tint",
    image: "/TintTek-Website/tesla-35.png",
    description: "A medium tint that maintains a sleek, stylish look.",
  },
  "50%": {
    name: "50% Tint",
    image: "/TintTek-Website/tesla-50.png",
    description: "Allows more visibility while still reducing glare and heat.",
  },
  "70%": {
    name: "70% Tint",
    image: "/TintTek-Website/tesla-70.png",
    description: "A light tint for UV protection with high visibility.",
  },
};

const TeslaTintingPage = () => {
  const [selectedTint, setSelectedTint] = useState("5%"); // Default tint selection

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  // Handle Tint Selection with animation trigger
  const handleSelection = (tintKey) => {
    setSelectedTint(tintKey);
  };

  return (
      <>
          {/* Header Section with 35vh height */}
          <Box
            sx={{
                position: "relative",
                width: "100%",
                height: { xs: "35vh", md: "35vh" },
                overflow: "hidden",
                backgroundColor: "#000",
              }}
          >
               <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: "white",
                        px: 2,
                      }}
                    >
                  <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign: "center",
                  fontSize: {
                    xs: "2.5rem",
                    sm: "2.5rem",
                    md: "3.5rem",
                    lg: "4rem",
                  },
                }}
              >
                TESLA WINDOW TINT VIEWER
              </Typography>
          </Box>
          </Box>
    <Box>
      {/* Navigation Tabs for Larger Screens */}
      {!isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            py: 2,
            background: "#2e2e2e",
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
            backgroundColor: "#2E2E2E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
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
                      background:
                        "linear-gradient(90deg, #2794d2, #1a78c2)",
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
          height: isMobile ? "50vh" : "60vh",
          background: "#2e2e2e",
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

    <CallToAction />
    <Contact />
    <QuickLinks />
    <Footer />
    </>
  );
};

export default TeslaTintingPage;
