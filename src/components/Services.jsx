import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Box, Grid, Card, CardMedia, CardContent, Typography, useMediaQuery, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesData = [
  {
    id: "vehicle-window-tinting",
    title: "VEHICLE WINDOW TINTING",
    description: "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint.png",
  },
  {
    id: "tesla-window-tinting",
    title: "TESLA WINDOW TINTING",
    description: "Remove swirls and scratches for a flawless, mirror-like finish.",
    image: "/TintTek-Website/tesla-window-tint.jpg",
  },
  {
    id: "commercial-window-tinting",
    title: "COMMERCIAL WINDOW TINTING",
    description: "Protect your paint from chips, scratches, and environmental damage.",
    image: "/TintTek-Website/commercial-tint.jpeg",
  },
  {
    id: "residential-window-tinting",
    title: "RESIDENTIAL WINDOW TINTING",
    description: "Long-lasting protection against dirt and contaminants.",
    image: "/TintTek-Website/residential-tint.png",
  },
  {
    id: "vehicle-paint-correction",
    title: "VEHICLE PAINT CORRECTION",
    description: "Restore your vehicle’s original shine inside and out.",
    image: "/TintTek-Website/paint-correction.jpeg",
  },
  {
    id: "vehicle-paint-protection",
    title: "VEHICLE PAINT PROTECTION",
    description: "Customize your vehicle’s look with high-quality vinyl wraps.",
    image: "/TintTek-Website/paint-protection.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box id="services" sx={{ py: 6, textAlign: "center", backgroundColor: "#000", color: "#fff" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        TINTEK+ SERVICES
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
        Premium automotive care to enhance, protect, and maintain your vehicle.
      </Typography>

      {isMobile ? (
        /** 🎠 MUI Carousel for Mobile */
        <Slider {...sliderSettings} className="services-slider">
          {servicesData.map((service) => (
            <Box key={service.id} sx={{ px: 2 }}>
              <Card
                sx={{
                  maxWidth: 400,
                  margin: "0 auto",
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardMedia component="img" height="250" image={service.image} alt={service.title} />
                <CardContent
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.5)", // Dark overlay (Always Visible)
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      ) : (
        /** 🖥️ MUI Grid Layout for Desktop */
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2} // Controls the gap between cards
            justifyContent="center" // Centers the grid on the page
            alignItems="stretch" // Ensures equal card heights
          >
            {servicesData.map((service) => (
              <Grid item key={service.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    maxWidth: 350,
                    borderRadius: 5,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    "&:hover": { 
                      transform: "scale(1.05)", 
                      border: "5px solid #007bff"
                    },
                  }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardMedia component="img" height="250" image={service.image} alt={service.title} />
                  <CardContent
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.5)", // Dark overlay (Always Visible)
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>{service.title}</Typography>
                    <Typography variant="body2">{service.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default Services;
