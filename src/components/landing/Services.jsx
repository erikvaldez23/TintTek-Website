import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

const servicesData = [
  {
    id: "vehicle-window-tinting",
    title: "VEHICLE WINDOW TINTING",
    description: "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint/vehicle-window-tint.jpg",
  },
  {
    id: "tesla-window-tinting",
    title: "TESLA WINDOW TINTING",
    description: "Extend battery life, reduce heat in cabin, and enhance privacy.",
    image: "/TintTek-Website/gallery/Tint Tek-181-2.jpg",
  },
  {
    id: "commercial-window-tinting",
    title: "COMMERCIAL WINDOW TINTING",
    description: "Enhance energy savings, privacy, and security.",
    image: "/TintTek-Website/gallery/Tint Tek-146-2.jpg",
  },
  {
    id: "residential-window-tinting",
    title: "RESIDENTIAL WINDOW TINTING",
    description: "Lower your energy costs, get UV protection, enhance privacy and security.",
    image: "/TintTek-Website/residential/residential-service1.jpg",
  },
  {
    id: "vehicle-paint-correction",
    title: "VEHICLE PAINT CORRECTION",
    description: "Restore your vehicle’s original shine.",
    image: "/TintTek-Website/paint-correction/paint-correction1.jpg",
  },
  {
    id: "vehicle-paint-protection",
    title: "VEHICLE PAINT PROTECTION",
    description: "Shields paint from scratches, chips, stains, UV damage, and wear.",
    image: "/TintTek-Website/ppf/ppf-service.jpg",
  },
  {
    id: "headlight-services",
    title: "HEADLIGHT & TAILLIGHT SERVICES",
    description: "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
    image: "/TintTek-Website/headlight/taillight1.jpg",
  },
  {
    id: "windshield-protection-film",
    title: "WINDSHIELD PROTECTION FILM",
    description: "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
    image: "/TintTek-Website/windshield/windshield-service.jpg",
  },
  {
    id: "ceramic-coating",
    title: "CERAMIC COATING",
    description: "Elevate Your Vehicle's Protection With Unrivaled Ceramic Coating",
    image: "/TintTek-Website/ceramic/Tint Tek-111.jpg",
  },
];



const Services = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:768px)");

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const ServiceCard = React.memo(({ service }) => (
      <Card
        sx={{
          width: isMobile ? "80vw" : "100%",
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
          width="350"
          height="400"
          loading="lazy"
          sx={{
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            gap: 2,
            px: 2,
            scrollSnapType: "x mandatory",
          }}
        >
          {servicesData.map((service) => (
            <Box
              key={service.id}
              sx={{
                flex: "0 0 80%",
                scrollSnapAlign: "center",
              }}
            >
              <ServiceCard service={service} />
            </Box>
          ))}
        </Box>
      ) : (
        <Container maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
              {servicesData.map((service) => (
                <Grid item key={service.id} xs={12} sm={6} md={4}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
            </Grid>
        </Container>
      )}
    </Box>
  );
};

export default Services;
