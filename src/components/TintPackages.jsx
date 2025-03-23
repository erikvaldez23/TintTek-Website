import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const tintPackages = [
  {
    title: "Window Strip",
    price: "Starting at $125",
    image: "/TintTek-Website/window-strip1.png",
    description:
      "A narrow strip across the top of the windshield to block excessive glare.",
  },
  {
    title: "Front 2 Window Match",
    price: "Starting at $149",
    image: "/TintTek-Website/front-two1.png",
    description:
      "Match the front windows to the factory tint of the rear windows.",
  },
  {
    title: "Full Windshield",
    price: "Starting at $275",
    image: "/TintTek-Website/full-windshield1.png",
    description:
      "A full-tint windshield package for optimal UV and heat rejection.",
  },
  {
    title: "Full Vehicle Surround",
    price: "Starting at $399",
    image: "/TintTek-Website/full-surround.png",
    description:
      "Complete tint coverage for maximum privacy, comfort, and style.",
  },
];

const TintPackages = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#000", // Dark background
      }}
    >
      {/* Section Title */}
      <Typography
        variant={isMobile ? "h4" : "h2"}
        align="center"
        sx={{
          color: "#fff",
          mb: 1,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Standard Package Pricing
      </Typography>

      {/* Card Grid */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          {tintPackages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: "#111", // Slightly lighter than the background
                  color: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)", // Subtle lift on hover
                  },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Card Media (Vehicle Image) */}
                <CardMedia
                  component="img"
                  height="250"
                  image={pkg.image}
                  alt={pkg.title}
                  sx={{
                    objectFit: "contain",
                  }}
                />

                {/* Card Content */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        textTransform: "uppercase",
                      }}
                    >
                      {pkg.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#00FF99", mb: 1 }}
                    >
                      {pkg.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", lineHeight: 1.5 }}
                    >
                      {pkg.description}
                    </Typography>
                  </Box>

                  {/* Call-to-Action Button */}
                  {/* <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#2794d2",
                    color: "#000",
                    fontWeight: "bold",
                    borderRadius: "30px",
                    textTransform: "uppercase",
                    "&:hover": {
                      backgroundColor: "#1a78c2",
                    },
                  }}
                >
                  Get an Estimate
                </Button> */}
                  <Button
                    component={motion.a}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    sx={{
                      mt: 3,
                      backgroundColor: "#2794d2",
                      color: "#000",
                      fontWeight: "bold",
                      px: isMobile ? 3 : 4,
                      py: isMobile ? 1.2 : 1.5,
                      borderRadius: "30px",
                      textTransform: "uppercase",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      width: isMobile ? "100%" : "auto",
                    }}
                    onClick={() => handleLearnMoreClick(step)}
                  >
                    Get an Estimate
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TintPackages;
