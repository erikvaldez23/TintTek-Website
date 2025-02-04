import React, { useState } from "react";
import { Box, Container, Typography, Grid, Fade, Tooltip } from "@mui/material";
import { FaCarSide, FaSun, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Pricing Data
const pricingData = {
  COUPE: { ATC: "$179.00", CTX: "$229.00", IRX: "$279.00" },
  SEDAN: { ATC: "$199.00", CTX: "$259.00", IRX: "$309.00" },
  "FULL SUV": { ATC: "$229.00", CTX: "$279.00", IRX: "$349.00" },
  "2 WINDOWS": { ATC: "$99.00", CTX: "$129.00", IRX: "$149.00" },
};

// Feature Descriptions
const descriptions = {
  ATC: [
    "Budget-friendly dyed tint",
    "Blocks 99% of UV rays",
    "Adds privacy & reduces glare",
  ],
  CTX: ["Ceramic automotive tint", "99% UV ray block", "Reduces heat from sun"],
  IRX: [
    "Nano-ceramic construction",
    "Best heat reduction",
    "Superior clarity & comfort",
  ],
};

const pricingOptions = ["COUPE", "SEDAN", "FULL SUV", "2 WINDOWS"];

const PricingComponent = () => {
  const [selectedOption, setSelectedOption] = useState("COUPE");
  const [fadeIn, setFadeIn] = useState(true);

  // Handles selection change
  const handleOptionChange = (option) => {
    setFadeIn(false);
    setTimeout(() => {
      setSelectedOption(option);
      setFadeIn(true);
    }, 200);
  };

  return (
    <Box
      id="pricing"
      sx={{
        py: 8,
        textAlign: "center",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 3, textTransform: "uppercase", color: "#007BFF" }}
        >
          Car Window Tint Pricing
        </Typography>

        {/* Pricing Tabs */}
        <Grid container spacing={0} sx={{ borderBottom: "2px solid #555" }}>
          {pricingOptions.map((option) => (
            <Grid
              item
              xs={3}
              key={option}
              sx={{
                textAlign: "center",
                py: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
                cursor: "pointer",
                borderBottom:
                  selectedOption === option ? "4px solid #007BFF" : "none",
                backgroundColor:
                  selectedOption === option ? "#007BFF" : "transparent",
                color: selectedOption === option ? "white" : "#ddd",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor:
                    selectedOption === option ? "#007BFF" : "#222",
                  color: "white",
                },
              }}
              onClick={() => handleOptionChange(option)}
            >
              {option}
            </Grid>
          ))}
        </Grid>

        {/* Pricing Cards */}
        <Fade in={fadeIn} timeout={500}>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {["ATC", "CTX", "IRX"].map((tint, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      border: "2px solid #444",
                      borderRadius: 4,
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Tint Name */}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#007BFF", mb: 1 }}
                    >
                      LLUMAR {tint}
                    </Typography>

                    {/* Static Pricing (Only One-Time Payment) */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        transition: "opacity 0.3s ease-in-out",
                        color: "#00FF99",
                      }}
                    >
                      {pricingData[selectedOption][tint]}
                    </Typography>

                    {/* Features with Tooltips */}
                    <Box sx={{ mt: 2 }}>
                      {descriptions[tint].map((feature, i) => (
                        <Tooltip key={i} title="More info" arrow>
                          <Typography
                            variant="body2"
                            sx={{
                              mb: 1,
                              color: "#ccc",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {i === 0 ? (
                              <FaCarSide style={{ marginRight: "5px" }} />
                            ) : null}
                            {i === 1 ? (
                              <FaSun style={{ marginRight: "5px" }} />
                            ) : null}
                            {i === 2 ? (
                              <FaShieldAlt style={{ marginRight: "5px" }} />
                            ) : null}
                            {feature}
                          </Typography>
                        </Tooltip>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default PricingComponent;
