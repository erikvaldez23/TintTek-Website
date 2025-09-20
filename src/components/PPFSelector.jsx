import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  FormControl,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

// Define PPF Options with Images, Prices, and Descriptions
const ppfOptions = {
  "front-end": {
    name: "Front End PPF",
    image: "/ppf-model/ppf-front.webp",
    description:
      "Provides essential front-end protection against road debris and scratches.",
    price: "$1750",
  },
  extended: {
    name: "Extended PPF",
    image: "/ppf-model/ppf-extended.webp",
    description:
      "Covers additional areas for enhanced protection and longevity.",
    price: "$2500",
  },
  "full-car": {
    name: "Full Car PPF",
    image: "/ppf-model/ppf-full.webp",
    description: "Complete vehicle protection with hydrophobic properties.",
    price: "**Call For Pricing**",
  },
};

const PPFSelector = () => {
  const [selectedPPF, setSelectedPPF] = useState("front-end");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSelection = (ppfKey) => setSelectedPPF(ppfKey);

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "100%", // avoid 100vw overflow
        overflowX: "hidden",
      }}
    >
      {/* Desktop buttons — styled to match TintingSimulator */}
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
          {Object.entries(ppfOptions).map(([key, option]) => (
            <Button
              key={key}
              onClick={() => handleSelection(key)}
              sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor:
                  selectedPPF === key
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
                  selectedPPF === key
                    ? "0 0 0 2px rgba(39,148,210,0.25) inset"
                    : "none",
                "&:hover": {
                  backgroundColor:
                    selectedPPF === key
                      ? "rgba(39,148,210,0.35)"
                      : "rgba(255,255,255,0.12)",
                  borderColor: "rgba(255,255,255,0.25)",
                },
                "&:active": { transform: "translateY(1px)" },
              }}
            >
              {option.name}
            </Button>
          ))}
        </Box>
      ) : (
        // Mobile dropdown — true full-bleed and full width
        <Box
          sx={{
            width: "100vw",
            ml: "calc(50% - 50vw)",
            mr: "calc(50% - 50vw)",
            pl: "max(16px, env(safe-area-inset-left))",
            pr: "max(16px, env(safe-area-inset-right))",
            py: 2,
            mt: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#111",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
            <FormControl fullWidth>
              <Select
                value={selectedPPF}
                onChange={(e) => handleSelection(e.target.value)}
                displayEmpty
                sx={{
                  width: "100%",
                  background: "#000",
                  backdropFilter: "blur(12px)",
                  border: "1px solid #ccc",
                  borderRadius: "30px",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: "16px",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  "&:hover": { background: "rgba(255, 255, 255, 0.2)" },
                  "& .MuiSelect-icon": { color: "#2794d2" },
                  "& .MuiSelect-select": {
                    padding: "14px 18px",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: { backgroundColor: "#444", color: "#fff" },
                  },
                }}
              >
                {Object.entries(ppfOptions).map(([key, option]) => (
                  <MenuItem
                    key={key}
                    value={key}
                    sx={{
                      fontSize: "15px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      p: "12px",
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
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      )}

      {/* Text Section */}
      <Box sx={{ py: 2, color: "#fff" }}>
        <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold">
          {ppfOptions[selectedPPF].name}
        </Typography>
        <Typography variant={isMobile ? "body1" : "h6"} fontWeight="bold">
          Price
        </Typography>
        <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold">
          {ppfOptions[selectedPPF].price}
        </Typography>
      </Box>

      {/* Image Display with Animated Transition */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: isMobile ? 2 : 5,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedPPF}
            src={ppfOptions[selectedPPF].image}
            alt={ppfOptions[selectedPPF].name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{
              width: isMobile ? "90%" : "80%",
              height: isMobile ? "45vh" : "35vh",
              objectFit: "contain",
            }}
          />
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default PPFSelector;
