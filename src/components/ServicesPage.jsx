import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import PricingComponent from "./Pricing"; // Import Pricing model
import Contact from "./Contact"; // Import Contact component
import Footer from "./Footer";

// Define service details for each page
const serviceDetails = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    description: "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint.png",
    details: "We use high-quality films to protect your car windows and provide maximum UV protection.",
    servicesOffered: ["Standard Tint", "Ceramic Tint", "Nano-Ceramic Tint"],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    description: "Remove swirls and scratches for a flawless, mirror-like finish.",
    image: "/TintTek-Website/tesla-window-tint.jpg",
    details: "Specialized tinting for Tesla models, ensuring perfect heat rejection and premium clarity.",
    servicesOffered: ["Tesla Model S Tint", "Tesla Model 3 Tint", "Tesla Model X Tint", "Tesla Model Y Tint"],
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    description: "Protect your paint from chips, scratches, and environmental damage.",
    image: "/TintTek-Website/commercial-tint.jpeg",
    details: "Improve office comfort and energy efficiency with our high-quality commercial window tints.",
    servicesOffered: ["Office Window Tinting", "Retail Store Tinting", "Large Building Tinting"],
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting",
    description: "Long-lasting protection against dirt and contaminants.",
    image: "/TintTek-Website/residential-tint.png",
    details: "Enhance home privacy and block out harmful UV rays while maintaining natural light.",
    servicesOffered: ["Home Window Tinting", "Heat Reduction Films", "Privacy Films"],
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    description: "Restore your vehicle’s original shine inside and out.",
    image: "/TintTek-Website/paint-correction.jpeg",
    details: "Remove swirls, oxidation, and scratches to bring back the original shine of your vehicle.",
    servicesOffered: ["Scratch Removal", "Oxidation Removal", "Full Paint Correction"],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    description: "Customize your vehicle’s look with high-quality vinyl wraps.",
    image: "/TintTek-Website/paint-protection.jpg",
    details: "Protect your car's exterior from environmental damage with premium protective films.",
    servicesOffered: ["Clear Bra Protection", "Ceramic Coating", "Vinyl Wraps"],
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <Typography variant="h4" textAlign="center">Service not found</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "50vh",
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
        }}
      >
        <Typography variant="h3" fontWeight="bold">{service.title}</Typography>
      </Box>

      <Container maxWidth="lg">
        {/* What is it for Section */}
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 3 }}>
            What is {service.title} for?
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}>
            {service.details}
          </Typography>
        </Box>

        {/* How It Works Section */}
        <Box sx={{ py: 6, backgroundColor: "#ffffff", borderRadius: "10px", p: 4, textAlign: "center" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
            How It Works
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}>
            Our team of experienced professionals ensures every application is done with precision and care.
            Whether it's a vehicle, home, or office, our tinting process includes consultation, precise cutting,
            and flawless installation to give you long-lasting protection.
          </Typography>
        </Box>

        {/* Services Offered */}
        <Box sx={{ py: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 3 }}>
            Services We Offer
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {service.servicesOffered.map((serviceItem, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    p: 3,
                    textAlign: "center",
                    borderRadius: 2,
                    boxShadow: 3,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  }}
                >
                  {serviceItem}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Pricing Section */}
        <Box sx={{ py: 6 }}>
          <PricingComponent />
        </Box>

        {/* Do You Need Tint Section */}
        <Box
          sx={{
            py: 6,
            backgroundColor: "#007BFF",
            color: "white",
            textAlign: "center",
            borderRadius: "10px",
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            Do You Need {service.title}?
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", lineHeight: 1.6 }}>
            Whether you're looking for better privacy, UV protection, or enhanced aesthetics, we have the right
            solutions for you.
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#ffcc00",
              color: "#000",
              fontWeight: "bold",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "1.1rem",
              "&:hover": {
                backgroundColor: "#ffdb4d",
              },
            }}
          >
            Call for a Free Quote
          </Button>
        </Box>
      </Container>

      {/* Contact Section */}
      <Contact />
      <Footer />
    </Box>
  );
};

export default ServicePage;
