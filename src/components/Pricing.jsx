import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Fade, Tooltip, useMediaQuery } from "@mui/material";
import { FaCarSide, FaSun, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Pricing Data Configuration
const pricingConfig = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    pricingData: {
      COUPE: { ATC: "$179.00", CTX: "$229.00", IRX: "$279.00" },
      SEDAN: { ATC: "$199.00", CTX: "$259.00", IRX: "$309.00" },
      "FULL SUV": { ATC: "$229.00", CTX: "$279.00", IRX: "$349.00" },
      "2 WINDOWS": { ATC: "$99.00", CTX: "$129.00", IRX: "$149.00" },
    },
    pricingOptions: ["COUPE", "SEDAN", "FULL SUV", "2 WINDOWS"],
    descriptions: {
      ATC: [
        "Budget-friendly dyed tint",
        "Blocks 99% of UV rays",
        "Adds privacy & reduces glare",
      ],
      CTX: [
        "Ceramic automotive tint",
        "99% UV ray block",
        "Reduces heat from sun",
      ],
      IRX: [
        "Nano-ceramic construction",
        "Best heat reduction",
        "Superior clarity & comfort",
      ],
    },
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    pricingData: {
      MODEL3: { ATC: "$199.00", CTX: "$259.00", IRX: "$319.00" },
      MODELX: { ATC: "$249.00", CTX: "$299.00", IRX: "$359.00" },
      "MODEL S": { ATC: "$229.00", CTX: "$279.00", IRX: "$339.00" },
    },
    pricingOptions: ["MODEL3", "MODELX", "MODEL S"],
    descriptions: {
      ATC: [
        "Entry-level Tesla tinting",
        "Reduces glare & improves privacy",
        "Blocks 99% of UV rays",
      ],
      CTX: [
        "Mid-range ceramic tint",
        "Superior heat rejection",
        "99% UV ray protection",
      ],
      IRX: [
        "Premium nano-ceramic tint",
        "Best clarity & heat reduction",
        "Advanced infrared blocking",
      ],
    },
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    pricingData: {
      "SMALL OFFICE": { BASIC: "$299.00", PRO: "$399.00", ULTRA: "$499.00" },
      "LARGE BUILDING": { BASIC: "$499.00", PRO: "$699.00", ULTRA: "$899.00" },
    },
    pricingOptions: ["SMALL OFFICE", "LARGE BUILDING"],
    descriptions: {
      BASIC: [
        "Standard tinting for offices",
        "Blocks UV rays & reduces glare",
        "Affordable pricing",
      ],
      PRO: [
        "Improved heat rejection",
        "Enhanced privacy & security",
        "Energy-efficient",
      ],
      ULTRA: [
        "High-end commercial film",
        "Best sun protection",
        "Long-lasting durability",
      ],
    },
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting",
    pricingData: {
      "1-5 WINDOWS": { BASIC: "$199.00", PRO: "$299.00", ULTRA: "$399.00" },
      "6+ WINDOWS": { BASIC: "$349.00", PRO: "$499.00", ULTRA: "$649.00" },
    },
    pricingOptions: ["1-5 WINDOWS", "6+ WINDOWS"],
    descriptions: {
      BASIC: ["Basic home tinting", "Blocks harmful UV rays", "Reduces glare"],
      PRO: ["Better heat rejection", "Improved privacy", "3-year warranty"],
      ULTRA: [
        "Premium tint with superior clarity",
        "Highest heat & glare reduction",
        "Lifetime warranty",
      ],
    },
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    pricingData: {
      "STAGE 1": { BASIC: "$249.00", PRO: "$349.00", ULTRA: "$449.00" },
      "STAGE 2": { BASIC: "$349.00", PRO: "$449.00", ULTRA: "$549.00" },
    },
    pricingOptions: ["STAGE 1", "STAGE 2"],
    descriptions: {
      BASIC: [
        "Light paint correction",
        "Removes minor scratches",
        "Enhances gloss",
      ],
      PRO: [
        "Moderate paint correction",
        "Eliminates swirl marks",
        "Deep shine restoration",
      ],
      ULTRA: [
        "Advanced correction",
        "Removes heavy imperfections",
        "Superior clarity & shine",
      ],
    },
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    pricingData: {
      HOOD: { BASIC: "$199.00", PRO: "$299.00", ULTRA: "$399.00" },
      FULL_BODY: { BASIC: "$999.00", PRO: "$1299.00", ULTRA: "$1599.00" },
    },
    pricingOptions: ["HOOD", "FULL_BODY"],
    descriptions: {
      BASIC: [
        "Basic paint protection film",
        "Prevents minor scratches",
        "1-year warranty",
      ],
      PRO: [
        "Mid-tier protection film",
        "Better durability & shine",
        "3-year warranty",
      ],
      ULTRA: [
        "Premium self-healing PPF",
        "Best scratch resistance",
        "5-year warranty",
      ],
    },
  },
};

const PricingComponent = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  console.log("Current path:", path);

  // Use the extracted path or default to vehicle window tinting
  const service = pricingConfig[path] || pricingConfig["vehicle-window-tinting"];

  // ✅ UseEffect to reset selected option when service changes
  const [selectedOption, setSelectedOption] = useState(service.pricingOptions[0]);
  const [fadeIn, setFadeIn] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // ✅ Update selectedOption when service changes
    setSelectedOption(service.pricingOptions[0]);
  }, [service]); // Runs whenever service updates (route changes)

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
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}
        >
          {service.title}
        </Typography>

        {/* Pricing Options Tabs */}
        <Grid container spacing={0} sx={{ borderBottom: "2px solid #555" }}>
          {service.pricingOptions.map((option) => (
            <Grid
              item xs={12 / service.pricingOptions.length} key={option}
              sx={{
                textAlign: "center", py: 2, fontWeight: "bold", textTransform: "uppercase",
                cursor: "pointer", borderBottom: selectedOption === option ? "4px solid #2794d2" : "none",
                backgroundColor: selectedOption === option ? "#2794d2" : "transparent",
                color: selectedOption === option ? "white" : "#ddd",
                transition: "all 0.3s ease-in-out",
                "&:hover": { backgroundColor: selectedOption === option ? "#2794d2" : "#222", color: "white" },
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
            {Object.keys(service.descriptions).map((tier) => (
              <Grid item xs={12} sm={6} md={4} key={tier}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Box sx={{ textAlign: "center", p: 3, border: "2px solid #444", borderRadius: 4, background: "rgba(255,255,255,0.1)" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2794d2" }}>{tier}</Typography>

                    {/* ✅ Check if selectedOption exists in pricingData */}
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#00FF99" }}>
                      {service.pricingData[selectedOption]?.[tier] || "N/A"}
                    </Typography>

                    {/* Feature Descriptions */}
                    <Box sx={{ mt: 2 }}>
                      {service.descriptions[tier]?.map((feature, i) => (
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
                            {i === 0 && <FaCarSide style={{ marginRight: "5px" }} />}
                            {i === 1 && <FaSun style={{ marginRight: "5px" }} />}
                            {i === 2 && <FaShieldAlt style={{ marginRight: "5px" }} />}
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