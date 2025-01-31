import React, { useState } from "react";
import { Box, Container, Typography, Grid, Fade } from "@mui/material";

// Pricing Data (Changes Based on Selection)
const pricingData = {
  COUPE: { ATC: "$179.00", CTX: "$229.00", IRX: "$279.00" },
  SEDAN: { ATC: "$199.00", CTX: "$259.00", IRX: "$309.00" },
  "FULL SUV": { ATC: "$229.00", CTX: "$279.00", IRX: "$349.00" },
  "2 WINDOWS": { ATC: "$99.00", CTX: "$129.00", IRX: "$149.00" },
};

// Descriptions (Same for All Selections)
const descriptions = {
  ATC: [
    "Budget-friendly dyed tint",
    "Blocks 99% of harmful UV rays",
    "Adds privacy and reduces glare",
  ],
  CTX: [
    "Ceramic automotive tint",
    "Blocks 99% of harmful UV rays",
    "Reduces heat from the sun",
  ],
  IRX: [
    "Nano-ceramic construction",
    "Blocks 99% of harmful UV rays",
    "Best heat reduction option we offer",
  ],
};

// Selection Options
const pricingOptions = ["COUPE", "SEDAN", "FULL SUV", "2 WINDOWS"];

const PricingComponent = () => {
  const [selectedOption, setSelectedOption] = useState("COUPE");
  const [fadeIn, setFadeIn] = useState(true); // Controls fade effect

  // Handles user selection with animation
  const handleOptionChange = (option) => {
    setFadeIn(false); // Fade out current price
    setTimeout(() => {
      setSelectedOption(option);
      setFadeIn(true); // Fade in new price
    }, 200); // Delay for smooth transition
  };

  return (
    <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#e3eff4" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3, textTransform: "uppercase" }}>
          Car Window Tint Pricing
        </Typography>

        {/* Pricing Selection Tabs */}
        <Grid container spacing={0} sx={{ borderBottom: "2px solid #ddd" }}>
          {pricingOptions.map((option) => (
            <Grid
              item xs={3}
              key={option}
              sx={{
                textAlign: "center",
                py: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
                cursor: "pointer",
                borderBottom: selectedOption === option ? "4px solid #2196F3" : "none",
                backgroundColor: selectedOption === option ? "#2196F3" : "transparent",
                color: selectedOption === option ? "white" : "#333",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: selectedOption === option ? "#2196F3" : "#f0f0f0", // FIXED: Selected tab stays blue
                  color: selectedOption === option ? "white" : "#000", // Text remains visible
                },
              }}
              onClick={() => handleOptionChange(option)}
            >
              {option}
            </Grid>
          ))}
        </Grid>

        {/* Pricing Content - Three Column Layout with Animation */}
        <Fade in={fadeIn} timeout={500}>
          <Grid container spacing={3} sx={{ mt: 3 }}>
            {["ATC", "CTX", "IRX"].map((tint, index) => (
              <Grid item xs={4} key={index}>
                <Box sx={{ textAlign: "center", p: 3, border: "1px solid #ddd", borderRadius: 2 }}>
                  {/* Tint Name */}
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#007BFF" }}>
                    LLUMAR {tint}
                  </Typography>

                  {/* Dynamic Price with Fade Animation */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mt: 1,
                      transition: "opacity 0.3s ease-in-out",
                    }}
                  >
                    {pricingData[selectedOption][tint]}
                  </Typography>

                  {/* Static Description */}
                  <Box sx={{ mt: 2 }}>
                    {descriptions[tint].map((feature, i) => (
                      <Typography key={i} variant="body2" sx={{ mb: 1, color: "#555" }}>
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Fade>
      </Container>
    </Box>
  );
};

export default PricingComponent;
