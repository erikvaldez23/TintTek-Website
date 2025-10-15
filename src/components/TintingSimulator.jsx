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

// Stable ordered options
const TINT_KEYS = ["5%", "15%", "30%", "50%", "80%"];

const tintOptions = {
  "5%": {
    name: "5% Tint",
    image: "/tint-viewer/5-tint.webp",
    description: "Extremely dark tint for maximum privacy and UV protection.",
  },
  "15%": {
    name: "15% Tint",
    image: "/tint-viewer/20-tint.webp",
    description: "Provides a balance of privacy and visibility.",
  },
  "30%": {
    name: "30% Tint",
    image: "/tint-viewer/35-tint.webp",
    description: "A medium tint that maintains a sleek, stylish look.",
  },
  "50%": {
    name: "50% Tint",
    image: "/tint-viewer/50-tint.webp",
    description: "Allows more visibility while still reducing glare and heat.",
  },
  "80%": {
    name: "80% Tint",
    image: "/tint-viewer/70-tint.webp",
    description: "A light tint for UV protection with high visibility.",
  },
};

const TintingSimulator = () => {
  const [selectedTint, setSelectedTint] = useState("5%"); // Default tint selection
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSelection = (tintKey) => setSelectedTint(tintKey);

  return (
    <Box>
      {/* Desktop buttons */}
      {!isMobile ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            py: 2,
            mt: 15,
          }}
        >
          {TINT_KEYS.map((key) => (
            <Button
              key={key}
              onClick={() => handleSelection(key)}
              sx={{
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
                "&:active": { transform: "translateY(1px)" },
              }}
            >
              {key} Tint
            </Button>
          ))}
        </Box>
      ) : (
        // Mobile dropdown (transparent trigger, #111 menu)
        <Box sx={{ width: "100%", px: 2, mt: 8, mb: 5 }}>
          <Select
            value={selectedTint}
            onChange={(e) => handleSelection(e.target.value)}
            fullWidth
            displayEmpty
            renderValue={(val) => (val ? `${val} Tint` : "Select Tint")}
            // Trigger (input) styles
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              color: "#fff",
              borderRadius: "30px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.35)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.5)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#2794d2",
              },
              "& .MuiSelect-select": {
                backgroundColor: "transparent",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
              },
              "& .MuiSelect-icon": { color: "#2794d2" },
            }}
            // Menu (portal) styles
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#111",
                  backgroundImage: "none",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                },
              },
              MenuListProps: { sx: { bgcolor: "#111" } },
            }}
          >
            {TINT_KEYS.map((key) => (
              <MenuItem
                key={key}
                value={key}
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#fff",
                  // don't set a base bgcolor here; let the Paper control the background
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #2794d2 0%, #1a78c2 100%)",
                    color: "#fff",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#222 !important",
                    color: "#fff",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "#2794d2 !important",
                    color: "#000",
                  },
                }}
              >
                {key} Tint
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      {/* Viewer */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", sm: "60vh", md: "60vh", lg: "60vh", xl: "60vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: isMobile ? 2 : 5,
        }}
      >
        {/* Title + description */}
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

        {/* Image */}
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

export default TintingSimulator;
