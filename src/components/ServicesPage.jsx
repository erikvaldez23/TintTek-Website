import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import PricingComponent from "./Pricing"; // Import Pricing model
import Contact from "./Contact"; // Import Contact component
import Footer from "./Footer";
import BenefitsSection from "./BenefitsSection";
import HowItWorks from "./HowItWorks";
import ServicesOffered from "./ServicesOffered";

// Define service details for each page
const serviceDetails = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    description:
      "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint.png",
    details:
      "We use high-quality films to protect your car windows and provide maximum UV protection.",
    benefits: [
      "Increased privacy",
      "Blocks harmful UV rays",
      "Reduces heat inside the vehicle",
      "Protects interior from fading",
      "Enhances vehicle aesthetics",
    ],
    servicesOffered: ["Standard Tint", "Ceramic Tint", "Nano-Ceramic Tint"],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    description:
      "Specialized tinting for Tesla models, ensuring perfect heat rejection and premium clarity.",
    image: "/TintTek-Website/cybertruck.jpg",
    details:
      "High-quality window tinting designed specifically for Tesla vehicles.",
    benefits: [
      "Increased milage per batter charge.",
      "Heat reduction in cabin.",
      "Blocks 99% of harmful UV rays.",
      "Reduces glare from the sun and headlights.",
      "Provides increased privacy.",
      "Prevents unnecessary battery drain.",
    ],
    servicesOffered: [
      "Tesla Model S Tint",
      "Tesla Model 3 Tint",
      "Tesla Model X Tint",
      "Tesla Model Y Tint",
    ],
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <Typography variant="h4" textAlign="center">
        Service not found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* ✅ Hero Section (Image, Header, and Subhead) */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "40vh",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, #000), url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          px: 2, // Padding for responsiveness
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          {service.title}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1, maxWidth: "800px" }}>
          {service.description}
        </Typography>
      </Box>

      {/* ✅ What are the Benefits? Section */}
      <BenefitsSection benefits={service.benefits} />

      {/* ✅ How It Works Section */}

      <HowItWorks serviceId={serviceId} />

      {/* ✅ Services We Offer Section */}
      <ServicesOffered serviceId={serviceId} />

      {/* ✅ Pricing Section */}
      <Box sx={{ width: "100vw" }}>
        <PricingComponent />
      </Box>

      {/* ✅ Do You Need Tint? Call to Action Section */}
      <Box
  sx={{
    width: "100vw", // Full viewport width
    backgroundColor: "#007BFF",
    textAlign: "center",
    color: "white",
  }}
>
  {/* Inner Box for Content Centering */}
  <Box sx={{ py: 6, px: 4, maxWidth: "1200px", mx: "auto" }}>
    <Typography variant="h4" fontWeight="bold">
      Do You Need Window Tint?
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
      If you want to reduce the heat that comes into your vehicle, protect yourself and your car's interior from harmful UV rays, or just want more privacy, window tint might be a good option for you. At TintTek+, we provide comprehensive heat and UV protection, including tinting for windshields and sunroofs, to ensure optimal heat rejection, especially in the intense Dallas heat.
    </Typography>
    <Button
      variant="contained"
      sx={{
        backgroundColor: "white",
        color: "#007BFF",
        fontWeight: "bold",
        px: 4,
        py: 1.5,
      }}
      href="tel:+1234567890" // Replace with actual phone number
    >
      Call Now
    </Button>
  </Box>
</Box>


      {/* ✅ Contact Section */}
      <Box sx={{ backgroundColor: "#f9f9f9", width: "100vw" }}>
        <Contact />
      </Box>

      {/* ✅ Footer */}
      <Footer />
    </Box>
  );
};

export default ServicePage;
