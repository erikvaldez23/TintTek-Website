import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Fade,
  Tooltip,
  useMediaQuery,
  MenuItem,
  Select,
} from "@mui/material";
import { FaCarSide, FaSun, FaShieldAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

// Pricing Data Configuration
const pricingConfig = {
  "vehicle-window-tinting": {
    title: "PRICING",
    pricingData: {
      COUPE: { CLASSIC: "$189.00", CTX: "$289.00", PINNACLE: "$389.00" },
      SEDAN: { CLASSIC: "$199.00", CTX: "$329.00", PINNACLE: "$529.00" },
      TRUCK: { CLASSIC: "$249.00", CTX: "$349.00", PINNACLE: "$549.00" },
      "FULL SUV": { CLASSIC: "$289.00", CTX: "$389.00", PINNACLE: "$589.00" },
      "2 WINDOWS": { CLASSIC: "$85.00", CTX: "$119.00", PINNACLE: "$149.00" },
    },
    pricingOptions: ["COUPE", "SEDAN", "TRUCK", "FULL SUV", "2 WINDOWS"],
    descriptions: {
      CLASSIC: [
        "Budget-friendly dyed tint",
        "Blocks 99% of UV rays",
        "Adds privacy & reduces glare",
      ],
      CTX: [
        "Ceramic automotive tint",
        "99% UV ray block",
        "Reduces heat from sun",
      ],
      PINNACLE: [
        "Nano-ceramic construction",
        "Best heat reduction",
        "Superior clarity & comfort",
      ],
    },
  },
  "tesla-window-tinting": {
    title: "PRICING",
    pricingData: {
      "MODEL S": { CTX: "$329.00", PINNACLE: "$529.00" },
      "MODEL 3": { CTX: "$449.00", PINNACLE: "$589.00" },
      "MODEL X": { CTX: "$589.00", PINNACLE: "$749.00" },
      "MODEL Y": { CTX: "$389.00", PINNACLE: "$589.00" },
      "CYBER TRUCK": { CTX: "$485.00", PINNACLE: "$685.00" },
    },
    pricingOptions: ["MODEL S", "MODEL 3", "MODEL X", "MODEL Y", "CYBER TRUCK"],
    descriptions: {
      CTX: [
        "Mid-range ceramic tint",
        "Superior heat rejection",
        "99% UV ray protection",
      ],
      PINNACLE: [
        "Premium nano-ceramic tint",
        "Best clarity & heat reduction",
        "Advanced infrared blocking",
      ],
    },
  },
  "commercial-window-tinting": {
    title: "PRICING",
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
    title: "PRICING",
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
    title: "PRICING",
    pricingData: {
      "STAGE 1": { BASIC: "$249.00", PRO: "$349.00", ULTRA: "$449.00" },
      "STAGE 2": { BASIC: "$349.00", PRO: "$449.00", ULTRA: "$549.00" },
    },
    pricingOptions: ["STAGE 1", "STAGE 2"],
    descriptions: {
      BASIC: [
        "Light paint correction",
        "Removes minor scrCLASSIChes",
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
    title: "PRICING",
    pricingData: {
      HOOD: { BASIC: "$199.00", PRO: "$299.00", ULTRA: "$399.00" },
      "FULL BODY": { BASIC: "$999.00", PRO: "$1299.00", ULTRA: "$1599.00" },
    },
    pricingOptions: ["HOOD", "FULL BODY"],
    descriptions: {
      BASIC: [
        "Basic paint protection film",
        "Prevents minor scrCLASSIChes",
        "1-year warranty",
      ],
      PRO: [
        "Mid-tier protection film",
        "Better durability & shine",
        "3-year warranty",
      ],
      ULTRA: [
        "Premium self-healing PPF",
        "Best scrCLASSICh resistance",
        "5-year warranty",
      ],
    },
  },
};

const PricingComponent = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();

  const service =
    pricingConfig[path] || pricingConfig["vehicle-window-tinting"];
  const [selectedOption, setSelectedOption] = useState(
    service.pricingOptions[0]
  );
  const [fadeIn, setFadeIn] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  useEffect(() => {
    setSelectedOption(service.pricingOptions[0]);
  }, [service]);

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
        py: isMobile ? 2 : 15,
        textAlign: "center",
        color: "#fff",
        minHeight: "20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ mb: 2, fontWeight: "bold", color: "#fff" }}
        >
          {service.title}
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h5"}
          align="center"
          sx={{
            color: "#ccc",
            mb: 4,
            fontWeight: "bold",
          }}
        >
          **All Side Windows and Back Glass are Included in Standard Package**
        </Typography>

        {/* ✅ Show Tabs on Desktop | Show Dropdown on Mobile */}
        {isMobile ? (
          <Select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            fullWidth
            displayEmpty
            // the menu lives in a portal → style it here
            MenuProps={{
              disableScrollLock: true,
              PaperProps: {
                sx: {
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                  backdropFilter: "blur(0px)", // set to 'blur(8px)' if you want frosted look
                  WebkitBackdropFilter: "blur(0px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                },
                elevation: 0,
              },
              MenuListProps: {
                sx: {
                  backgroundColor: "#111",
                  "& .MuiMenuItem-root": {
                    backgroundColor: "transparent !important",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.06) !important",
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                      backgroundColor: "rgba(39,148,210,0.18) !important",
                    },
                  },
                },
              },
            }}
            sx={{
              // trigger looks transparent
              backgroundColor: "transparent",
              backgroundImage: "none",
              backdropFilter: "none",
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: "30px",
              color: "#fff",
              fontWeight: 500,
              fontSize: "16px",
              textTransform: "uppercase",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // we’re already drawing a custom border above
              },
              "& .MuiSelect-icon": { color: "#2794d2" },
              "& .MuiSelect-select": {
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            {service.pricingOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <Grid container spacing={0} sx={{ borderBottom: "2px solid #555" }}>
            {service.pricingOptions.map((option) => (
              <Grid
                item
                xs={12 / service.pricingOptions.length}
                key={option}
                sx={{
                  textAlign: "center",
                  py: 2,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderBottom:
                    selectedOption === option ? "4px solid #2794d2" : "none",
                  backgroundColor:
                    selectedOption === option ? "#2794d2" : "transparent",
                  color: selectedOption === option ? "white" : "#ddd",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor:
                      selectedOption === option ? "#2794d2" : "#222",
                    color: "white",
                  },
                }}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </Grid>
            ))}
          </Grid>
        )}

        {/* Pricing Cards */}
        <Fade in={fadeIn} timeout={500}>
          <Box
            sx={{
              mt: 3,
              overflowX: isMobile ? "auto" : "unset",
              display: "flex",
              flexDirection: isMobile ? "row" : "row",
              gap: 2,
              p: isMobile ? 1 : 0,
            }}
          >
            {Object.keys(service.descriptions).map((tier) => (
              <Box
                key={tier}
                sx={{
                  flex: isMobile ? "0 0 90%" : "1",
                  minWidth: isMobile ? "90%" : "auto",
                  maxWidth: isMobile ? "90%" : "100%",
                  textAlign: "center",
                  p: 3,
                  border: "2px solid #444",
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2794d2" }}
                >
                  {tier}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#00FF99" }}
                >
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
                        {i === 0 && (
                          <FaCarSide style={{ marginRight: "5px" }} />
                        )}
                        {i === 1 && <FaSun style={{ marginRight: "5px" }} />}
                        {i === 2 && (
                          <FaShieldAlt style={{ marginRight: "5px" }} />
                        )}
                        {feature}
                      </Typography>
                    </Tooltip>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default PricingComponent;
