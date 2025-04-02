import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Container,
  Grid,
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
    image: "/TintTek-Website/v-window-tint/vehicle-window-tint.webp",
  },
  {
    id: "tesla-window-tinting",
    title: "TESLA WINDOW TINTING",
    description:
      "Extend battery life, reduce heat in cabin, and enhance privacy.",
    image: "/TintTek-Website/gallery/Tint Tek-181.webp",
  },
  {
    id: "commercial-window-tinting",
    title: "COMMERCIAL WINDOW TINTING",
    description: "Enhance energy savings, privacy, and security.",
    image: "/TintTek-Website/gallery/Tint Tek-146.webp",
  },
  {
    id: "residential-window-tinting",
    title: "RESIDENTIAL WINDOW TINTING",
    description:
      "Lower your energy costs, get UV protection, enhance privacy and security.",
    image: "/TintTek-Website/residential/residential-service.webp",
  },
  {
    id: "vehicle-paint-correction",
    title: "VEHICLE PAINT CORRECTION",
    description: "Restore your vehicle’s original shine.",
    image: "/TintTek-Website/paint-correction/paint-correction1.webp",
  },
  {
    id: "vehicle-paint-protection",
    title: "VEHICLE PAINT PROTECTION",
    description:
      "Shields paint from scratches, chips, stains, UV damage, and wear.",
    image: "/TintTek-Website/ppf/ppf-service.webp",
  },
  {
    id: "headlight-services",
    title: "HEADLIGHT & TAILLIGHT SERVICES",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
    image: "/TintTek-Website/headlight/taillight1.webp",
  },
  {
    id: "windshield-protection-film",
    title: "WINDSHIELD PROTECTION FILM",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
    image: "/TintTek-Website/windshield/windshield-service.webp",
  },
  {
    id: "ceramic-coating",
    title: "CERAMIC COATING",
    description: "Ceramic Coating Description",
    image: "/TintTek-Website/windshield/windshield-protection.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Services = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: !isMobile,
      speed: 500,
      slidesToShow: isMobile ? 1 : 1.2,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      centerPadding: isMobile ? "15%" : "0px",
    }),
    [isMobile]
  );

  const ServiceCard = React.memo(({ service }) => (
    <motion.div variants={cardVariants}>
      <Card
        sx={{
          width: isMobile ? "65vw" : "100%",
          height: 400,
          borderRadius: 5,
          overflow: "hidden",
          position: "relative",
          cursor: "pointer",
          backgroundColor: isMobile ? "#1C1C1E" : "black",
          margin: isMobile ? "0 auto" : "inherit",
          border: isMobile ? "none" : "5px solid transparent",
          transition: "all 0.3s ease",
          "&:hover": {
            border: isMobile ? "none" : "5px solid #2794d2",
            boxShadow: isMobile ? "none" : "0 10px 20px rgba(0, 0, 0, 0.3)",
            transform: isMobile ? "none" : "scale(1.05)",
          },
        }}
        onClick={() => handleServiceClick(service.id)}
      >
        <CardMedia
          component="img"
          image={service.image}
          alt={service.title}
          loading={service.id === "commercial-window-tinting" ? "eager" : "lazy"} // ✅ No lazy loading for LCP
          width="400"
          height="400"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: isMobile ? "none" : "scale(1.05)",
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isMobile ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0.55)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "flex-end" : "center",
            textAlign: "center",
            padding: 0,
          }}
        >
          <Box
            sx={{
              width: "100%",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "transparent",
            }}
          >
            <Typography variant={isMobile ? "h6" : "h5"} fontWeight="bold">
              {service.title}
            </Typography>
            <Typography variant="body1">{service.description}</Typography>
            {isMobile && (
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                  width: "90%",
                  borderRadius: 50,
                }}
              >
                See Details
              </Button>
            )}
          </Box>
        </Box>
      </Card>
    </motion.div>
  ));

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
          mb: 4,
          fontWeight: "bold",
          color: "#fff",
          fontFamily: "'NoizeSport', sans-serif",
        }}
      >
        SERVICES
      </Typography>

      {isMobile ? (
        <Box sx={{ position: "relative" }}>
          <Slider {...sliderSettings}>
            {servicesData.map((service) => (
              <Box key={service.id} sx={{ px: 2 }}>
                <ServiceCard service={service} />
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Grid container spacing={2} justifyContent="center">
              {servicesData.map((service) => (
                <Grid item key={service.id} xs={12} sm={6} md={4}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      )}
    </Box>
  );
};

export default Services;
