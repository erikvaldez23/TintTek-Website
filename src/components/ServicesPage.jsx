import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
} from "@mui/material";
import PricingComponent from "./Pricing"; // Import Pricing model
import Contact from "./Contact"; // Import Contact component
import Topbar from "./Topbar";
import Footer from "./Footer";
import BenefitsSection from "./BenefitsSection";
import HowItWorks from "./HowItWorks";
import ServicesOffered from "./ServicesOffered";
import { motion } from "framer-motion";
import CallToAction from "./CallToAction";
import TintingSimulator from "./TintingSimulator";
import PPFSelector from "./PPFSelector"
import Commercial from "./commercial";
import FAQSection from "./FAQSection";
import TintPackages from "./TintPackages";

// Define service details for each page
const serviceDetails = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    description:
      "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/tint",
    details:
      "We use high-quality films to protect your car windows and provide maximum UV protection.",
    benefits: [
      "Blocks 99% of harmful UV rays",
      "Heat Rejection",
      "Improved Privacy and Security",
      "Reduces glare from the sun and headlights",
      "Protects interiors from fading",
      "Elevate overall appearance",
    ],
    servicesOffered: [
      "Full SUV Tinting",
      "Full Sedan Tinting",
      "Full Coupe Tinting",
      "2 Windows Only",
      "Front Windshield and Sunroof",
    ],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    description:
      "Specialized tinting for Tesla models, ensuring perfect heat rejection and premium clarity.",
    image: "/TintTek-Website/cybertruck.jpg",
    details:
      "High-quality window tinting designed specifically for Tesla vehicles.",
    benefits: [
      "Increased mileage per battery charge",
      "Heat reduction in cabin",
      "Blocks 99% of harmful UV rays",
      "Reduces glare from the sun and headlights",
      "Provides increased privacy",
      "Prevents unnecessary battery drainage",
    ],
    servicesOffered: [
      "Full Model S window tinting, windshield, pano sunroof, single sunroof",
      "Full Model 3 window tinting, windshield, sunroof",
      "Full Model X window tinting, windshield",
      "Full Model Y window tinting, windshield, pano sunroof, single sunroof",
      "Full Cybertruck window tinting, windshield",
    ],
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    description:
      "Protect your building's windows from UV rays, reduce glare, and improve energy efficiency.",
    image: "/TintTek-Website/commercial-tint.jpg",
    details:
      "Our commercial window tinting services provide superior heat rejection and protection from environmental damage.",
    benefits: [
      "Energy savings by reducing cooling costs",
      "Blocks 99% of harmful UV rays",
      "Reduces glare in office spaces",
      "Protects interiors from fading",
      "Enhances building appearance",
      "Improves privacy for employees",
    ],
    servicesOffered: [
      "Office Window Tinting",
      "Storefront Window Tinting",
      "Skyscraper Window Tinting",
      "Conference Room Tinting",
      "Custom Business Tinting Solutions",
    ],
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting",
    description:
      "Long-lasting protection for your home’s windows against dirt, heat, and UV rays.",
    image: "/TintTek-Website/residential-tint.png",
    details:
      "Keep your home cool, protect your furniture from fading, and improve privacy with our residential tinting services.",
    benefits: [
      "Reduces indoor heat",
      "Blocks 99% of harmful UV rays",
      "Protects furniture and flooring from fading",
      "Improves energy efficiency",
      "Enhances privacy without sacrificing light",
      "Adds aesthetic appeal to your home",
    ],
    servicesOffered: [
      "Full Home Window Tinting",
      "Single Room Window Tinting",
      "Sunroom Tinting",
      "Patio Door Tinting",
      "Custom Home Tinting Solutions",
    ],
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    description:
      "Restore your vehicle’s original shine and remove imperfections with our professional paint correction services.",
    image: "/TintTek-Website/paint-correction.jpg",
    details:
      "We offer multi-stage paint correction to remove swirls, scratches, and oxidation, leaving your vehicle looking brand new.",
    benefits: [
      "Restores original paint finish",
      "Removes swirl marks and scratches",
      "Enhances gloss and clarity",
      "Protects paint from further damage",
      "Increases vehicle resale value",
      "Prepares car surface for protective coatings",
    ],
    servicesOffered: [
      "Single-Stage Paint Correction",
      "Multi-Stage Paint Correction",
      "Swirl Mark Removal",
      "Scratch Removal",
      "Gloss Enhancement",
    ],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
    image: "/TintTek-Website/ppf.jpg",
    details:
      "Our paint protection services include vinyl wraps, clear bras, and ceramic coatings to keep your car looking pristine.",
    benefits: [
      "Protects from chips, scratches, and road debris",
      "Maintains your car’s showroom finish",
      "Provides a high-gloss, durable finish",
      "Easy maintenance and cleaning",
      "Customizes vehicle appearance",
      "Prevents UV damage and fading",
    ],
    servicesOffered: [
      "Single-Stage Paint Correction",
      "Multi-Stage Paint Correction",
      "Swirl Mark Removal",
      "Scratch Removal",
      "Gloss Enhancement",
    ],
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  // ✅ Handle "Service Not Found" with Full Layout
  if (!service) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Topbar notFound={true} /> {/* Topbar stays on the page */}
        {/* Main 404 Section with Max Width */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // Centers the content horizontally
            alignItems: "center",
            flexGrow: 1,
            backgroundColor: "#b6c0c2",
            padding: { xs: 4, md: 8 },
            mt: { xs: "56px", md: "64px" }, // Offset for Topbar
          }}
        >
          {/* Content Container with Max Width */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1200px", // Limit the width to 1200px
              mx: "auto", // Center the container
            }}
          >
            {/* Text Section */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#FF6F61", fontWeight: "bold", mb: 1 }}
              >
                404
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                Oops! I may have chewed up the power cord.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                Go back to our main page to continue your visit.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
                href="/"
              >
                Back to main page
              </Button>
            </Box>

            {/* Image Section */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img
                src="/TintTek-Website/dog.jpeg" // Replace with your desired image
                alt="Funny Dog"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* Contact Section */}
        <Box sx={{ backgroundColor: "#f9f9f9", width: "100vw" }}>
          <Contact /> {/* Keep the contact section */}
        </Box>
        {/* Footer */}
        <Footer /> {/* Keep the footer */}
      </Box>
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
      {/* ✅ Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          paddingTop: 5,
          height: { xs: "30vh", md: "20vh" }, 
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
          }}
        >
          {service.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
          }}
        >
          {service.description}
        </Typography>
      </Box>

      {/* <Commercial /> */}

      {(serviceId === "vehicle-window-tinting" || serviceId === "tesla-window-tinting") && <TintingSimulator />}
      {serviceId === "vehicle-paint-protection" && <PPFSelector />}

      {/* ✅ Pricing Section (Only for Non-Paint Services) */}
      {serviceId !== "vehicle-paint-correction" &&
        serviceId !== "vehicle-paint-protection" && (
          <Box sx={{ width: "100vw" }}>
            <PricingComponent />
          </Box>
        )}

      {/* ✅ Benefits Section (Only for Non-Commercial/Residential Services) */}
      {serviceId !== "commercial-window-tinting" &&
        serviceId !== "residential-window-tinting" && (
          <BenefitsSection benefits={service.benefits} />
        )}

      {/* ✅ How It Works Section (Only for Non-Commercial/Residential Services) */}
      {serviceId !== "commercial-window-tinting" &&
        serviceId !== "residential-window-tinting" && (
          <HowItWorks serviceId={serviceId} />
        )}

      {/* ✅ Services We Offer Section */}
      <ServicesOffered serviceId={serviceId} />

      <TintPackages />

      <FAQSection />

      {/* <Box
        sx={{
          width: "100vw",
          backgroundColor: "#2794d2",
          textAlign: "center",
          color: "white",
        }}
      > */}
        {/* <Box sx={{ py: 6, px: 4, maxWidth: "1200px", mx: "auto" }}>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
            Do You Need Window Tint?
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
            If you want to reduce the heat that comes into your vehicle, protect
            yourself and your car's interior from harmful UV rays, or just want
            more privacy, window tint might be a good option for you. At
            TintTek+, we provide comprehensive heat and UV protection, including
            tinting for windshields and sunroofs, to ensure optimal heat
            rejection, especially in the intense Dallas heat.
          </Typography>
          <Button
            component={motion.button}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              mt: 3,
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: "bold",
              px: isMobile ? 3 : 4, // Adjust padding for mobile
              py: isMobile ? 1.2 : 1.5,
              borderRadius: "30px",
              textTransform: "uppercase",
              fontSize: isMobile ? "1rem" : "1.1rem",
              width: isMobile ? "100%" : "auto", // Make button full width on mobile
            }}
            href="/quote"
          >
            Get a Free Quote
          </Button>
        </Box> */}
      {/* </Box> */}

      <CallToAction />

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
