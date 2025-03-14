

import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const servicesData = [
  {
    id: "vehicle-window-tinting",
    title: "VEHICLE WINDOW TINTING",
    description:
      "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint.jpg",
  },
  {
    id: "tesla-window-tinting",
    title: "TESLA WINDOW TINTING",
    description:
      "Remove swirls and scratches for a flawless, mirror-like finish.",
    image: "/TintTek-Website/tesla.jpg",
  },
  {
    id: "commercial-window-tinting",
    title: "COMMERCIAL WINDOW TINTING",
    description:
      "Protect your paint from chips, scratches, and environmental damage.",
    image: "/TintTek-Website/commercial.jpg",
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
    image: "/TintTek-Website/paint-protection1.jpg",
  },
  {
    id: "headlight-services",
    title: "HEADLIGHT SERVICES",
    description: "Filler Quote",
    image: "/TintTek-Website/paint-protection.jpg",
  },
  {
    id: "windshield-protection-film",
    title: "WINDSHIELD PROTECTION FILM",
    description: "Filler Quote",
    image: "/TintTek-Website/windshield-protection.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Delay between each card animation
    },
  },
};

const Services = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  // Desktop layout with staggered animations for each card
  const desktopContent = (
    <Container maxWidth="lg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {servicesData.map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={3}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    maxWidth: 350,
                    borderRadius: 5,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    backgroundColor: "black",
                    "&:hover": {
                      transform: "scale(1.05)",
                      outline: "5px solid #2794d2",
                      backgroundColor: "black",
                    },
                  }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardMedia
                    component="img"
                    height="450"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.3)",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );

  // Mobile layout: apply the same animation to each slide if desired
  const mobileContent = (
    <Box sx={{ position: "relative", px: 2 }}>
      <Slider {...sliderSettings}>
        {servicesData.map((service) => (
          <Box key={service.id} sx={{ px: 2 }}>
            <motion.div variants={cardVariants} initial="hidden" animate="visible">
              <Card
                sx={{
                  width: "100%",
                  height: 400,
                  maxWidth: 500, // Increased maxWidth for a wider card
                  margin: "0 auto",
                  borderRadius: 4,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  backgroundColor: "#1C1C1E",
                }}
                onClick={() => handleServiceClick(service.id)}
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.2)",
                  }}
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "20px",
                    color: "#EEEEFF",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {service.title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      color: "#EEEEFF",
                      width: "90%",
                      borderRadius: 50,
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.3)",
                      },
                    }}
                  >
                    See Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
  

  return (
    <Box
      id="services"
      sx={{
        py: 4,
        textAlign: "center",
        backgroundColor: "#000",
        color: "#EEEEFF",
        paddingBottom: "80px",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#fff",
          fontFamily: "'NoizeSport', sans-serif",
        }}
      >
        SERVICES
      </Typography>
      {isMobile ? mobileContent : desktopContent}
    </Box>
  );
};

export default Services;
