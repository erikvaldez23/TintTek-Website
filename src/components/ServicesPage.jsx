// src/components/ServicePage.jsx
// NOTE: Wrap your app once with <HelmetProvider> in main.jsx/App.jsx.

import React, { useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

import PricingComponent from "./Pricing";
import Contact from "./key-components/Contact";
import Topbar from "./key-components/Topbar";
import Footer from "./key-components/Footer";
import HowItWorks from "./HowItWorks";
import ServicesOffered from "./ServicesOffered";
import CallToAction from "./key-components/CallToAction";
import TintingSimulator from "./TintingSimulator";
import PPFSelector from "./PPFSelector";
import FAQSection from "./FAQSection";
import TintPackages from "./TintPackages";
import TeslaTintingSimulator from "./TeslaTintingSimulator";
import QuickLinks from "./key-components/QuickLinks";
import TeslaTintPackages from "./TeslaTintPackages";
import BenefitsGrid from "./BenefitsGrid";
import ImageCTA from "./ImageCTA";
import PaintCorrectionServices from "./PaintCorrectionServices";
import VideoCTA from "./VideoCTA";
import HeadlightPackages from "./HeadlightPackages";
import PPFVision from "./PPF-Vision"; // (unused here but keep if used elsewhere)
import ImageCarousel from "./ImageCarousel";
import TeslaCTA from "./TeslaCTA";
import BusinessInfo from "./hero/BusinessInfo";
import F1Banner from "./f1-banner"; // (commented below in your JSX)

// ---- SITE SETTINGS ----
// Use your live custom domain; keep it absolute for canonical tags.
const SITE = "https://tinttekplus.com";
// Adjust if your router path differs (e.g., "/services").
const SERVICES_BASE = "/services";

// Define service details for each page (display copy)
const serviceDetails = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    description:
      "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    description:
      "Specialized tinting for Tesla models, ensuring perfect heat rejection and premium clarity.",
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    description:
      "Protect your building's windows from UV rays, reduce glare, and improve energy efficiency.",
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting",
    description:
      "Long-lasting protection for your home’s windows against dirt, heat, and UV rays.",
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    description:
      "Restore your vehicle’s original shine and remove imperfections with our professional paint correction services.",
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    description:
      "Customize and protect your vehicle’s paint with high-quality Paint Protection Film.",
  },
  "headlight-services": {
    title: "Headlight & Taillight Services",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
  },
  "ceramic-coating": {
    title: "Ceramic Coating",
    description:
      "Elevate Your Vehicle's Protection With Unrivaled Ceramic Coating",
  },
};

// Optional: SEO meta overrides per service (title/description for <head>)
const metaByService = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting | Tint Tek Plus",
    description:
      "Enhance privacy, reduce glare, and protect your interior with professional vehicle window tinting. Premium films, lifetime warranty.",
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting | Heat Rejection & Clarity",
    description:
      "Specialized Tesla tinting with ceramic films for top heat rejection and signal-friendly clarity. Model 3/Y/S/X experts.",
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting | Energy & UV Protection",
    description:
      "Lower energy bills, reduce glare, and protect interiors with commercial window tinting for offices and buildings.",
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting | Comfort & UV Blocking",
    description:
      "Keep your home cooler, protect furnishings from UV, and add privacy with residential window tinting.",
  },
  "vehicle-paint-correction": {
    title: "Paint Correction | Swirl & Scratch Removal",
    description:
      "Restore gloss and remove swirls with multi-stage machine polishing performed by trained specialists.",
  },
  "vehicle-paint-protection": {
    title: "Paint Protection Film (PPF) | Rock Chip Defense",
    description:
      "Self-healing PPF installed by certified techs to protect high-impact areas or full body wraps.",
  },
  "headlight-services": {
    title: "Headlight & Taillight Services | Restorations & Tints",
    description:
      "Headlight restoration and light tint services for a refreshed look and improved visibility.",
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film | Crack & Pit Resistance",
    description:
      "Optically clear windshield protection film to reduce pitting and cracks from road debris.",
  },
  "ceramic-coating": {
    title: "Ceramic Coating | Long-Term Gloss & Protection",
    description:
      "Professional ceramic coatings for long-lasting gloss, easier washing, and chemical resistance.",
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  const service = serviceDetails[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Build SEO meta once per render (title, description, canonical, robots, JSON-LD)
  const { title, description, canonical, robots, jsonLd } = useMemo(() => {
    // Normalize path like /services/:serviceId
    const path =
      serviceId ? `${SERVICES_BASE}/${serviceId}` : location.pathname;
    const url = `${SITE}${path}`.replace(/\/+$/, ""); // no trailing slash

    if (!service) {
      return {
        title: "Page Not Found | Tint Tek Plus",
        description: "The page you’re looking for doesn’t exist.",
        canonical: `${SITE}${location.pathname}`,
        robots: "noindex, nofollow",
        jsonLd: null,
      };
    }

    const meta = metaByService[serviceId] || {
      title: `${service.title} | Tint Tek Plus`,
      description: service.description,
    };

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: meta.description,
      url,
      areaServed: { "@type": "Place", name: "Dallas–Fort Worth, TX" },
      provider: {
        "@type": "LocalBusiness",
        name: "Tint Tek Plus",
        url: SITE,
        telephone: "+1-972-362-8468",
      },
    };

    return {
      title: meta.title,
      description: meta.description,
      canonical: url,
      robots: "index, follow",
      jsonLd,
    };
  }, [serviceId, service, location.pathname]);

  // ----- NOT FOUND (404-like) -----
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
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="robots" content={robots} />
          <link rel="canonical" href={canonical} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonical} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <Topbar notFound />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            backgroundColor: "#b6c0c2",
            padding: { xs: 4, md: 8 },
            mt: { xs: "56px", md: "64px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "1200px",
              mx: "auto",
            }}
          >
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
                  "&:hover": { backgroundColor: "#333" },
                }}
                href="/"
              >
                Back to main page
              </Button>
            </Box>

            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img
                src="/dog.jpeg"
                alt="Dog"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
        </Box>

        <CallToAction />
        <Box sx={{ backgroundColor: "#f9f9f9", width: "100vw" }}>
          <Contact />
        </Box>
        <Footer />
      </Box>
    );
  }

  // ----- NORMAL SERVICE PAGE -----
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robots} />
        <link rel="canonical" href={canonical} />
        {/* Social cards */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        {/* <meta property="og:image" content="https://tinttekplus.com/og.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        {jsonLd && (
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        )}
      </Helmet>

      {/* === Your existing UI, unchanged === */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        {/* Hero */}
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            paddingTop: 5,
            height: { xs: "40vh", md: "40vh" },
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
            px: { xs: 1, sm: 2, md: 2 },
          }}
        >
          <BusinessInfo />
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

        {(serviceId === "commercial-window-tinting" ||
          serviceId === "ceramic-coating" ||
          serviceId === "headlight-services" ||
          serviceId === "windshield-protection-film") && <VideoCTA />}

        {(serviceId === "tesla-window-tinting" ||
          serviceId === "vehicle-window-tinting") && <TeslaCTA />}

        {(serviceId === "residential-window-tinting" ||
          serviceId === "vehicle-paint-protection" ||
          serviceId === "vehicle-paint-correction") && <ImageCTA />}

        {serviceId === "vehicle-paint-correction" && <PaintCorrectionServices />}

        {serviceId === "tesla-window-tinting" && <TeslaTintingSimulator />}
        {serviceId === "vehicle-window-tinting" && <TintingSimulator />}
        {serviceId === "vehicle-paint-protection" && <PPFSelector />}

        {/* Pricing (exclude certain services) */}
        {serviceId !== "vehicle-paint-correction" &&
          serviceId !== "commercial-window-tinting" &&
          serviceId !== "residential-window-tinting" &&
          serviceId !== "windshield-protection-film" &&
          serviceId !== "ceramic-coating" &&
          serviceId !== "headlight-services" &&
          serviceId !== "vehicle-paint-protection" && (
            <Box sx={{ width: "100vw" }}>
              <PricingComponent />
            </Box>
          )}

        {serviceId === "vehicle-window-tinting" && <TintPackages />}
        {serviceId === "tesla-window-tinting" && <TeslaTintPackages />}
        {serviceId === "headlight-services" && <HeadlightPackages />}

        {/* <F1Banner /> */}

        {serviceId !== "vehicle-paint-correction" &&
          serviceId !== "ceramic-coating" && (
            <ServicesOffered serviceId={serviceId} />
          )}

        {serviceId === "commercial-window-tinting" ||
          (serviceId === "tesla-window-tinting" && <ImageCarousel />)}

        {serviceId !== "commercial-window-tinting" &&
          serviceId !== "residential-window-tinting" && (
            <HowItWorks serviceId={serviceId} />
          )}

        {serviceId === "paint-correction-services" && <PaintCorrectionServices />}

        {(serviceId === "vehicle-window-tinting" ||
          serviceId === "tesla-window-tinting" ||
          serviceId === "commercial-window-tinting" ||
          serviceId === "windshield-protection-film" ||
          serviceId === "vehicle-paint-correction" ||
          serviceId === "vehicle-paint-protection" ||
          serviceId === "ceramic-coating" ||
          serviceId === "headlight-services" ||
          serviceId === "residential-window-tinting") && <BenefitsGrid />}

        <FAQSection />
        <CallToAction />

        <Box sx={{ backgroundColor: "#f9f9f9", width: "100vw" }}>
          <Contact />
        </Box>

        <QuickLinks />
        <Footer />
      </Box>
    </>
  );
};

export default ServicePage;
