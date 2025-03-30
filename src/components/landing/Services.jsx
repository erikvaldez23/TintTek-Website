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
    image: "/TintTek-Website/vehicle-window-tint.JPEG",
  },
  {
    id: "tesla-window-tinting",
    title: "TESLA WINDOW TINTING",
    description:
      "Extend battery life, reduce heat in cabin, and enhance privacy.",
    image: "/TintTek-Website/Tint Tek-181.jpg",
  },
  {
    id: "commercial-window-tinting",
    title: "COMMERCIAL WINDOW TINTING",
    description: "Enhance energy savings, privacy, and security.",
    image: "/TintTek-Website/Tint Tek-146.jpg",
  },
  {
    id: "residential-window-tinting",
    title: "RESIDENTIAL WINDOW TINTING",
    description:
      "Lower your energy costs, get UV protection, enhance privacy and security.",
    image: "/TintTek-Website/residential-service.png",
  },
  {
    id: "vehicle-paint-correction",
    title: "VEHICLE PAINT CORRECTION",
    description: "Restore your vehicle’s original shine.",
    image: "/TintTek-Website/paint-correction1.JPG",
  },
  {
    id: "vehicle-paint-protection",
    title: "VEHICLE PAINT PROTECTION",
    description:
      "Shields paint from scratches, chips, stains, UV damage, and wear.",
    image: "/TintTek-Website/ppf-service.png",
  },
  {
    id: "headlight-services",
    title: "HEADLIGHT & TAILLIGHT SERVICES",
    description: "Headlight and Taillight Description",
    image: "/TintTek-Website/tailLight-services2.JPG",
  },
  {
    id: "windshield-protection-film",
    title: "WINDSHIELD PROTECTION FILM",
    description: "Windshield Protection Film Description",
    image: "/TintTek-Website/windshield-service.png",
  },
  {
    id: "ceramic-coating",
    title: "CERAMIC COATING",
    description: "Ceramic Coating Description",
    image: "/TintTek-Website/windshield-protection.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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

  const mobileSliderSettings = {
    dots: false,
    infinite: true, // Loop so that there is always a previous slide visible
    speed: 500,
    slidesToShow: 1, // Show one slide fully
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // Center the active slide
    centerPadding: "15%", // Adjust this value to show equal portions of adjacent slides
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
            <Grid item key={service.id} xs={12} sm={6} md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    maxWidth: 400,
                    borderRadius: 5,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    backgroundColor: "black",
                    transition: "all 0.3s ease", 
                    border: "5px solid transparent",
                    "& .cardMedia": {
                      transition: "transform 0.3s ease", 
                    },
                    "& .cardOverlay": {
                      transition: "background 0.3s ease", 
                    },
                    "&:hover .cardMedia": {
                      transform: "scale(1.1)",
                    },
                    "&:hover .cardOverlay": {
                      background: "rgba(0, 0, 0, 0.1)",
                    },
                    "&:hover": {
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                      border: "5px solid #2794d2",
                    },
                  }}
                  onClick={() => handleServiceClick(service.id)}
                >
                  <CardMedia
                    component="img"
                    className="cardMedia"
                    height="400"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <CardContent
                    className="cardOverlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.55)",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transition: "background 0.5s ease",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1">
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

  const mobileContent = (
    <Box sx={{ position: "relative" }}>
      <Slider {...(isMobile ? mobileSliderSettings : sliderSettings)}>
        {servicesData.map((service) => (
          <Box key={service.id} sx={{ px: 2 }}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card
                sx={{
                  width: "65vw", // Adjust as needed
                  height: 400,
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
