// src/components/ServicePage.jsx
// NOTE: Wrap your app once with <HelmetProvider> in main.jsx/App.jsx.

import React, {
  useEffect,
  useMemo,
  lazy,
  Suspense,
  useRef,
  useState,
} from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  GlobalStyles,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

// Keep light, above-the-fold pieces eagerly loaded
import Topbar from "./key-components/Topbar";
import Footer from "./key-components/Footer";
import BusinessInfo from "./hero/BusinessInfo";

// Lazy-load heavier blocks
const PricingComponent = lazy(() => import("./Pricing"));
const Contact = lazy(() => import("./SubContact"));
const HowItWorks = lazy(() => import("./HowItWorks"));
const ServicesOffered = lazy(() => import("./ServicesOffered"));
const CallToAction = lazy(() => import("./SubCTA"));
const TintingSimulator = lazy(() => import("./TintingSimulator"));
const PPFSelector = lazy(() => import("./PPFSelector"));
const FAQSection = lazy(() => import("./FAQSection"));
const TintPackages = lazy(() => import("./TintPackages"));
const TeslaTintingSimulator = lazy(() => import("./TeslaTintingSimulator"));
const QuickLinks = lazy(() => import("./SubQuickLinks"));
const TeslaTintPackages = lazy(() => import("./TeslaTintPackages"));
const BenefitsGrid = lazy(() => import("./BenefitsGrid"));
const ImageCTA = lazy(() => import("./ImageCTA"));
const PaintCorrectionServices = lazy(() => import("./PaintCorrectionServices"));
const VideoCTA = lazy(() => import("./VideoCTA"));
const HeadlightPackages = lazy(() => import("./HeadlightPackages"));
const PPFVision = lazy(() => import("./PPF-Vision")); // (if used elsewhere)
const ImageCarousel = lazy(() => import("./ImageCarousel"));
const TeslaCTA = lazy(() => import("./TeslaCTA"));
const F1Banner = lazy(() => import("./f1-banner"));

// ---- SITE SETTINGS ----
const SITE = "https://tinttekplus.com";
const SERVICES_BASE = "/services";

// Small, reusable lazy fallback
const Fallback = <Box sx={{ minHeight: 120 }} />;

// In-view gate to defer mounting until scrolled near
function InViewMount({ children, rootMargin = "200px" }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{ready ? children : null}</div>;
}

// Service copy
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

// Meta overrides
const metaByService = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting Services | Car & Auto Tinting Dallas",
    description:
      "Get professional auto tinting and vehicle window tinting in Dallas, Texas. Our car window tinting service ensures quality and style. Book now!",
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting Services in Dallas, TX | Tint Tek Plus",
    description:
      "Professional Tesla window tinting in Dallas, Texas for heat reduction, UV protection & sleek style. Expert EV tint services at Tint Tek Plus. Book now!",
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting Services in Dallas, TX | Tint Tek Plus",
    description:
      "Professional commercial window tinting in Dallas, Texas to improve energy efficiency, privacy & comfort for office and storefronts.Trusted service at Tint Tek Plus.",
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting Services in Dallas, TX | Tint Tek Plus",
    description:
      "Top residential window tinting in Dallas, Texas to reduce heat, glare & UV while enhancing privacy and comfort. Trusted home tint experts at Tint Tek Plus.",
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction Services in Dallas, TX | Tint Tek Plus",
    description:
      "Professional vehicle paint correction services in Dallas, Texas. Restore shine, remove swirls & protect your car’s paint. Book Tint Tek Plus experts today!",
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection Services in Dallas, TX | Tint Tek Plus",
    description:
      "Protect your vehicle's paint with professional services from Tint Tek Plus. Keep your car looking brand new with our high-quality paint protection solutions.",
  },
  "headlight-services": {
    title: "Tinted Headlights & Taillights Services in Dallas, TX | Tint Tek Plus",
    description:
      "Get premium tinted headlights in Dallas, Texas for style and protection. Quality headlight & taillight tint services at Tint Tek Plus. Book your appointment today!",
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film Services in Dallas, TX | Tint Tek Plus",
    description:
      "Protect your car with windshield protection film in Dallas, Texas. Tint Tek Plus offers premium film to prevent cracks, chips & UV damage. Book today!",
  },
  "ceramic-coating": {
    title: "Ceramic Coating Services in Dallas, TX | Tint Tek Plus",
    description:
      "Get professional ceramic coating in Dallas, Texas for long-lasting paint protection and deep shine. Trusted experts at Tint Tek Plus.",
  },
};

const GRADIENT = `radial-gradient(circle at top left, rgba(39,148,210,0.15), transparent 50%),
   radial-gradient(circle at bottom right, rgba(77,184,240,0.15), transparent 50%),
   linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)`;

const ServicePage = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  const service = serviceDetails[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO
  const { title, description, canonical, robots, jsonLd } = useMemo(() => {
    const path = serviceId
      ? `${SERVICES_BASE}/${serviceId}`
      : location.pathname;
    const url = `${SITE}${path}`.replace(/\/+$/, "");

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

    const jsonLdObj = {
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
      jsonLd: jsonLdObj,
    };
  }, [serviceId, service, location.pathname]);

  // ---------- 404 ----------
  if (!service) {
    return (
      <Box
        className="ServicePageRoot"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* Lightweight background layer */}
        <GlobalStyles
          styles={{
            ".ServicePageRoot": { position: "relative" },
            ".ServicePageRoot::before": {
              content: '""',
              position: "fixed",
              inset: 0,
              zIndex: -1,
              background: GRADIENT,
            },
            ".glass-section": {
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              backdropFilter: "blur(6px)",
            },
          }}
        />

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
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
              >
                Oops! I may have chewed up the power cord.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: "rgba(255,255,255,0.8)" }}
              >
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
                loading="lazy"
                decoding="async"
              />
            </Box>
          </Box>
        </Box>

        <Suspense fallback={Fallback}>
          <CallToAction />
          <Box>
            <Contact />
          </Box>
          <Footer />
        </Suspense>
      </Box>
    );
  }

  // ---------- NORMAL PAGE ----------
  return (
    <>
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
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>

      {/* Route-scoped wrapper with a fixed, GPU-friendly gradient layer */}
      <Box
        className="ServicePageRoot"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <GlobalStyles
          styles={{
            ".ServicePageRoot": { position: "relative" },
            ".ServicePageRoot::before": {
              content: '""',
              position: "fixed",
              inset: 0,
              zIndex: -1,
              background: GRADIENT,
            },
            ".glass-section": {
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              backdropFilter: "blur(6px)",
            },
            ".bg-clear, .bg-clear *": {
              background: "transparent !important",
              backgroundImage: "none !important",
            },
            ".ServicePageRoot img, .ServicePageRoot video": {
              backgroundColor: "transparent",
            },
            "@media (max-width:900px)": {
              ".glass-section": { backdropFilter: "none" },
            },
          }}
        />

        {/* Hero */}
        <Box
          sx={{
            position: "relative",
            width: "100%", // avoid 100vw layout jank
            pt: 10,
            height: { xs: "40vh", md: "40vh" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            px: { xs: 1, sm: 2, md: 2 },
          }}
        >
          <BusinessInfo />
          <Typography
            variant="h1"
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
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1rem", md: "1.3rem", lg: "1.5rem" },
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                display: "block",
                width: "80px",
                height: "5px",
                backgroundColor: "#2794d2",
                margin: "6px auto 0",
                borderRadius: "2px",
                boxShadow:
                  "0 0 8px rgba(39,148,210,0.7), 0 0 16px rgba(39,148,210,0.6)",
                mt: 4,
              },
            }}
          >
            {service.description}
          </Typography>
        </Box>

        {/* Above-the-fold CTA variants */}
        <Suspense fallback={Fallback}>
          {(serviceId === "commercial-window-tinting" ||
            serviceId === "ceramic-coating" ||
            serviceId === "headlight-services" ||
            serviceId === "windshield-protection-film") && <VideoCTA />}

          {(serviceId === "tesla-window-tinting" ||
            serviceId === "vehicle-paint-protection" ||
            serviceId === "residential-window-tinting" ||
            serviceId === "vehicle-window-tinting") && <TeslaCTA />}
        </Suspense>

        {/* Per-service specialty sections (lazy + often below the fold) */}
        <Suspense fallback={Fallback}>
          {serviceId === "vehicle-paint-correction" && <ImageCTA />}
          {serviceId === "vehicle-paint-correction" && (
            <InViewMount>
              <PaintCorrectionServices />
            </InViewMount>
          )}

          {serviceId === "tesla-window-tinting" && (
            <InViewMount>
              <TeslaTintingSimulator />
            </InViewMount>
          )}
          {serviceId === "vehicle-window-tinting" && (
            <InViewMount>
              <TintingSimulator />
            </InViewMount>
          )}
          {serviceId === "vehicle-paint-protection" && (
            <InViewMount>
              <PPFSelector />
            </InViewMount>
          )}
        </Suspense>

        {/* Pricing (exclude certain services) */}
        <Suspense fallback={Fallback}>
          {serviceId !== "vehicle-paint-correction" &&
            serviceId !== "commercial-window-tinting" &&
            serviceId !== "residential-window-tinting" &&
            serviceId !== "windshield-protection-film" &&
            serviceId !== "ceramic-coating" &&
            serviceId !== "headlight-services" &&
            serviceId !== "vehicle-paint-protection" && (
              <Box sx={{ width: "100%" }}>
                <InViewMount>
                  <PricingComponent />
                </InViewMount>
              </Box>
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {serviceId === "vehicle-window-tinting" && (
            <InViewMount>
              <TintPackages />
            </InViewMount>
          )}
          {serviceId === "tesla-window-tinting" && (
            <InViewMount>
              <TeslaTintPackages />
            </InViewMount>
          )}
          {serviceId === "headlight-services" && (
            <InViewMount>
              <HeadlightPackages />
            </InViewMount>
          )}
        </Suspense>

        {/* Optional banner */}
        {/* <Suspense fallback={null}><F1Banner /></Suspense> */}

        <Suspense fallback={Fallback}>
          {serviceId !== "vehicle-paint-correction" &&
            serviceId !== "ceramic-coating" && (
              <InViewMount>
                <ServicesOffered serviceId={serviceId} />
              </InViewMount>
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {(serviceId === "commercial-window-tinting" ||
            serviceId === "tesla-window-tinting" ||
            serviceId === "residential-window-tinting") && (
              <InViewMount>
                <ImageCarousel />
              </InViewMount>
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {serviceId !== "commercial-window-tinting" &&
            serviceId !== "residential-window-tinting" && (
              <InViewMount>
                <HowItWorks serviceId={serviceId} />
              </InViewMount>
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          {(serviceId === "vehicle-window-tinting" ||
            serviceId === "tesla-window-tinting" ||
            serviceId === "commercial-window-tinting" ||
            serviceId === "windshield-protection-film" ||
            serviceId === "vehicle-paint-correction" ||
            serviceId === "vehicle-paint-protection" ||
            serviceId === "ceramic-coating" ||
            serviceId === "headlight-services" ||
            serviceId === "residential-window-tinting") && (
              <InViewMount>
                <BenefitsGrid />
              </InViewMount>
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          <InViewMount>
            <FAQSection />
          </InViewMount>
          <InViewMount>
            <CallToAction />
          </InViewMount>
        </Suspense>

        <Suspense fallback={Fallback}>
          {/* Keep wrappers minimal to let the gradient show through */}
          <Box>
            <InViewMount>
              <Contact />
            </InViewMount>
          </Box>
          <InViewMount>
            <QuickLinks />
          </InViewMount>
          <Footer />
        </Suspense>
      </Box>
    </>
  );
};

export default ServicePage;
