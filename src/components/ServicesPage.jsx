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
import Link from "@mui/material/Link";
import SEO from "./SEO";
import { motion } from "framer-motion";

// Keep light, above-the-fold pieces eagerly loaded
import Topbar from "./key-components/Topbar";
import Footer from "./key-components/Footer";
import BusinessInfo from "./hero/BusinessInfo";

// Above-the-fold CTAs — must be eager to avoid LCP delay and above-fold CLS
import TeslaCTA from "./TeslaCTA";
import VideoCTA from "./VideoCTA";

// Lazy-load heavier below-fold blocks
import PricingComponent from "./Pricing";
const Contact = lazy(() => import("./SubContact"));
import HowItWorks from "./HowItWorks";
import ServicesOffered from "./ServicesOffered";
const CallToAction = lazy(() => import("./SubCTA"));
const TintingSimulator = lazy(() => import("./TintingSimulator"));
const PPFSelector = lazy(() => import("./PPFSelector"));
import FAQSection from "./FAQSection";
import TintPackages from "./TintPackages";
const TeslaTintingSimulator = lazy(() => import("./TeslaTintingSimulator"));
const QuickLinks = lazy(() => import("./SubQuickLinks"));
import TeslaTintPackages from "./TeslaTintPackages";
import BenefitsGrid from "./BenefitsGrid";
const ImageCTA = lazy(() => import("./ImageCTA"));
import PaintCorrectionServices from "./PaintCorrectionServices";
import HeadlightPackages from "./HeadlightPackages";
const BlogCTA = lazy(() => import("./BlogCTA"));
const PPFVision = lazy(() => import("./PPF-Vision"));
const ImageCarousel = lazy(() => import("./ImageCarousel"));
const F1Banner = lazy(() => import("./f1-banner"));

// ---- SITE SETTINGS ----
const SITE = "https://tinttekplus.com";
const SERVICES_BASE = "/services";

// Null fallback for below-fold lazy components — a height placeholder causes
// CLS when real content is a different size; null avoids the mismatch.
const Fallback = null;

// In-view gate to defer mounting until scrolled near
function InViewMount({ children, rootMargin = "200px" }) {
  const ref = useRef(null);
  // SSR: no window → render immediately so crawlers see content.
  // Client: start false, let IntersectionObserver activate rendering.
  const [ready, setReady] = useState(typeof window === "undefined");

  useEffect(() => {
    if (ready) return;
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
  }, [rootMargin, ready]);

  return <div ref={ref} suppressHydrationWarning>{ready ? children : null}</div>;
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
      "Protect and customize your vehicle’s headlights and taillights with professional tint film and Stek Light Protection Film.",
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film",
    description:
      "Guard your windshield against rock chips and road debris with ExoShield GT3 — a clear, optically perfect protective film.",
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
    title: "Vehicle Window Tinting Garland & Dallas, TX | Tint Tek Plus",
    description:
      "Professional vehicle window tinting in Garland & Dallas, TX. Tint Tek Plus installs LLumar nano-ceramic films for superior heat rejection, UV protection, and privacy. Book today!",
    keywords: "vehicle window tinting garland, window tinting garland, window tint garland tx, car window tinting garland, auto tinting dallas, car window tint near me, ceramic window tint garland"
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting Garland, TX | Tint Tek Plus",
    description:
      "Searching for Tesla window tinting Garland? Get professional heat reduction, UV protection, and sleek EV tint services at Tint Tek Plus. Book your Tesla tint today!",
    keywords: "tesla window tinting garland, window tinting garland, Model 3 window tint Garland, Model Y window tint Garland, Tesla heat rejection tint TX, EV window tinting Garland"
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting Garland, TX | Tint Tek Plus",
    description:
      "Professional commercial window tinting in Garland, Texas to improve energy efficiency, privacy & comfort for offices and storefronts. Trusted service at Tint Tek Plus.",
    keywords: "commercial window tinting garland, window tinting garland, office window tint garland, storefront window tinting TX, commercial building tinting Garland, privacy window film Garland"
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting Garland, TX | Tint Tek Plus",
    description:
      "Top residential window tinting in Garland, Texas to reduce heat, glare & UV while enhancing privacy and comfort. Trusted home tint experts at Tint Tek Plus.",
    keywords: "residential window tinting garland, window tinting garland, home window tint garland, house window tinting TX, privacy tint for homes Garland, residential UV window film"
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction Services in Dallas, TX | Tint Tek Plus",
    description:
      "Professional vehicle paint correction services in Dallas, Texas. Restore shine, remove swirls & protect your car’s paint. Book Tint Tek Plus experts today!",
    keywords: "vehicle paint correction Dallas, car paint correction TX, auto paint restoration, swirl mark removal, scratch removal auto paint, professional paint correction DFW, car polish and buff Dallas"
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection Services in Dallas, TX | Tint Tek Plus",
    description:
      "Protect your vehicle's paint with professional services from Tint Tek Plus. Keep your car looking brand new with our high-quality paint protection solutions.",
    keywords: "vehicle paint protection Dallas, PPF installation TX, paint protection film DFW, clear bra Dallas, auto paint protection, protect car paint, car wrap protection Dallas"
  },
  "headlight-services": {
    title: "Tinted Headlights & Taillights Services in Dallas, TX | Tint Tek Plus",
    description:
      "Get premium tinted headlights in Dallas, Texas for style and protection. Quality headlight & taillight tint services at Tint Tek Plus. Book your appointment today!",
    keywords: "tinted headlights Dallas, taillight tinting TX, custom headlight tint, auto light tinting DFW, smoked headlights Dallas, smoked taillights, light tint shop near me"
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film Services in Dallas, TX | Tint Tek Plus",
    description:
      "Protect your car with windshield protection film in Dallas, Texas. Tint Tek Plus offers premium film to prevent cracks, chips & UV damage. Book today!",
    keywords: "windshield protection film Dallas, windshield rock chip protection, clear windshield film TX, auto windshield tint, safety windshield film DFW, exact fit windshield protection"
  },
  "ceramic-coating": {
    title: "Ceramic Coating Services in Dallas, TX | Tint Tek Plus",
    description:
      "Get professional ceramic coating in Dallas, Texas for long-lasting paint protection and deep shine. Trusted experts at Tint Tek Plus.",
    keywords: "ceramic coating Dallas, ceramic car coating TX, auto ceramic coating DFW, best ceramic coating near me, ceramic paint protection, long lasting ceramic coat Dallas, permanent car shine"
  },
};

const serviceOgImages = {
  "vehicle-window-tinting": "https://tinttekplus.com/v-window-tint/vehicle-window-tint.webp",
  "tesla-window-tinting": "https://tinttekplus.com/tesla-tint-model/tesla-20.webp",
  "commercial-window-tinting": "https://tinttekplus.com/commercial/Tint%20Tek-116.webp",
  "residential-window-tinting": "https://tinttekplus.com/residential/residential-service.webp",
  "vehicle-paint-correction": "https://tinttekplus.com/paint-correction/paint-correction1.webp",
  "vehicle-paint-protection": "https://tinttekplus.com/ppf/ppf-service.webp",
  "headlight-services": "https://tinttekplus.com/headlight/headlight.webp",
  "windshield-protection-film": "https://tinttekplus.com/windshield/windshield-protection.webp",
  "ceramic-coating": "https://tinttekplus.com/ceramic/Tint%20Tek-111.webp",
};

// 300-500 word unique body copy per service for on-page SEO
const serviceBodyContent = {
  "vehicle-window-tinting": `
    <p>Protect yourself, your passengers, and your vehicle's interior from the relentless Texas sun. Our premium LLumar nano-ceramic films block up to 99% of harmful UV rays and reject substantial solar heat, ensuring your cabin stays cool even on the hottest Dallas days.</p>
    <p>Beyond superior comfort, window tinting preserves your vehicle's resale value by preventing cracked dashboards and faded upholstery. It also significantly reduces glare, improving visibility and safety during low-angle morning and evening drives.</p>
    <p>Our certified installers provide precise, seamless applications tailored to your specific vehicle. Backed by a lifetime warranty, our advanced ceramic films will not interfere with your GPS or toll tags while keeping you fully street-legal in Texas.</p>
  `,
  "tesla-window-tinting": `
    <p>Tesla's massive panoramic glass roofs admit enormous amounts of solar heat, forcing your climate control to work harder and draining battery range. Our specialized ceramic tinting dramatically reduces this heat transfer, maximizing both comfort and EV efficiency.</p>
    <p>We exclusively use non-metallic ceramic films for all Tesla installations. This ensures zero interference with Autopilot cameras, GPS, key-fob signals, or over-the-air cellular updates, preserving your vehicle's advanced technology.</p>
    <p>Our installers are specifically trained on Tesla's unique glass dimensions, ensuring seamless, factory-clean coverage even on the oversized Model 3 and Model Y rear windows. Every installation comes with a comprehensive lifetime warranty.</p>
  `,
  "commercial-window-tinting": `
    <p>Reduce your building's HVAC load and lower energy bills with professional commercial window tinting. Our high-performance solar control films reject heat before it enters your space, improving the working environment for employees and clients alike.</p>
    <p>Excessive glare makes screens unreadable and meetings uncomfortable. Our spectrally selective films dramatically cut glare and block 99% of UV rays, preserving natural light while protecting your furniture, flooring, and merchandise from fading.</p>
    <p>Enhance privacy and security with our range of tinted and reflective films. Whether you need subtle daytime privacy or mirrored security films, our installations minimize disruption to your business and are backed by a 15-year manufacturer warranty.</p>
  `,
  "residential-window-tinting": `
    <p>Texas summers are relentless, driving up home air conditioning costs and making certain rooms unusable. Our premium residential window films intercept infrared heat energy, making your home significantly more comfortable and energy-efficient without requiring glass replacement.</p>
    <p>Protect your interior investments. By blocking up to 99% of destructive UV rays, our tint prevents the fading and discoloration of your hardwood floors, carpeting, artwork, and furniture, extending their lifespan by years.</p>
    <p>Enjoy the view while maintaining your privacy. Our residential films make it difficult for outsiders to see into your home during the day without blocking your outward visibility, providing peace of mind for you and your family.</p>
  `,
  "vehicle-paint-correction": `
    <p>Over time, your vehicle accumulates fine swirl marks, light scratches, water spots, and oxidation that dull the finish. Our professional multi-step paint correction process permanently removes these defects, restoring a deep, mirror-like gloss.</p>
    <p>This is not a temporary wax or filler. We use professional dual-action polishers and advanced compounds to safely level the clear coat, targeting genuine imperfections without compromising your paint's integrity.</p>
    <p>Paint correction is the essential first step before applying a ceramic coating or Paint Protection Film. By removing defects first, we ensure you are sealing and protecting a surface that is in absolute peak condition.</p>
  `,
  "vehicle-paint-protection": `
    <p>Paint Protection Film (PPF) is the ultimate defense against physical road damage. This virtually invisible thermoplastic urethane film physically absorbs impacts from rock chips, bug strikes, and road debris, keeping your factory paint pristine.</p>
    <p>We install advanced Stek DYNOshield PPF, which features self-healing technology. Light surface scratches disappear entirely when exposed to heat or sun, while its hydrophobic properties make your vehicle incredibly easy to wash and maintain.</p>
    <p>With precise computer-cut patterns tailored to your exact make and model, we ensure seamless coverage for high-impact zones like the front fascia and hood. Every installation is backed by a 10-year manufacturer warranty.</p>
  `,
  "headlight-services": `
    <p>Your vehicle's headlights are constantly exposed to rock chips and UV radiation, which causes them to cloud, yellow, and lose illumination power over time. Our Stek Light Protection Film provides a self-healing barrier that prevents physical damage and UV degradation.</p>
    <p>For drivers looking to customize their vehicle’s appearance, we offer premium headlight and taillight tinting. A smoked, blacked-out aesthetic gives any vehicle a stealthy, aggressive look while maintaining proper light output.</p>
    <p>Our professional technicians ensure a bubble-free, seamless application using high-quality vinyl films that will not peel or lift. Protect your expensive headlight housings from costly replacements while achieving the exact look you desire.</p>
  `,
  "windshield-protection-film": `
    <p>Your windshield takes the full force of highway debris, and in Texas, chips and cracks are a constant risk. ExoShield GT3 windshield protection film absorbs impact energy, drastically reducing the likelihood of costly glass replacement.</p>
    <p>Unlike standard paint films, ExoShield is optically clear and specifically engineered for glass. It maintains perfect visibility at highway speeds with zero distortion, ensuring your driving safety is never compromised.</p>
    <p>With modern windshields featuring expensive built-in ADAS sensors, a single replacement can cost over a thousand dollars. Windshield film is a highly cost-effective, preventative investment that pays for itself the very first time a rock strikes.</p>
  `,
  "ceramic-coating": `
    <p>Ceramic coating is the most advanced environmental protection available for your vehicle. Unlike traditional waxes that wash away in weeks, our professional Gtechniq coatings chemically bond to your paint, providing a semi-permanent layer of protection that lasts for years.</p>
    <p>Once cured, the extremely hard, slick surface resists chemical contamination, bird droppings, tree sap, and UV oxidation. Its intense hydrophobic properties cause water and dirt to bead off effortlessly, slashing the time it takes to wash your car.</p>
    <p>Beyond unmatched protection, ceramic coating elevates your paint to a stunning, mirror-like wet gloss. Backed by a 9-year warranty when installed by our certified technicians, it ensures your vehicle looks showroom-ready every single day.</p>
  `,
};

const GRADIENT = `radial-gradient(circle at top left, rgba(39,148,210,0.15), transparent 50%),
   radial-gradient(circle at bottom right, rgba(77,184,240,0.15), transparent 50%),
   linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)`;

const parseParagraphs = (htmlStr) => {
  if (!htmlStr) return [];
  return htmlStr
    .split(/<\/?p>/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
};

const SEOContentSection = ({ paragraphs, service }) => {
  if (!paragraphs || paragraphs.length === 0 || !service) return null;

  return (
    <Box sx={{ width: "100%", py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 8 }
        }}
      >
        {/* Left Column: Sticky Header */}
        <Box sx={{ flex: { md: "0 0 35%" }, position: "relative" }}>
          <Box sx={{ position: "sticky", top: "140px" }}>
            <Typography
              component={motion.h3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.2,
                letterSpacing: "-0.5px",
                mb: 2
              }}
            >
              About <br sx={{ display: { xs: "none", md: "block" } }} />
              <Box component="span" sx={{ color: "#2794d2" }}>{service.title}</Box>
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", mb: 4 }}>
              Everything you need to know about this service before booking your appointment.
            </Typography>

            <Box
              component={motion.div}
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                height: "4px",
                background: "linear-gradient(90deg, #2794d2, transparent)",
                borderRadius: "2px",
                mb: { xs: 4, md: 0 }
              }}
            />
          </Box>
        </Box>

        {/* Right Column: Numbered Glass Cards */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
          {paragraphs.map((text, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <Box
                key={index}
                component={motion.div}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 2, sm: 4 },
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "saturate(180%) blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "20px",
                  p: { xs: 3, md: 4 },
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(39, 148, 210, 0.3)",
                  }
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: { xs: 1, md: 0.8 },
                    color: "rgba(39, 148, 210, 0.25)",
                    fontFamily: "monospace",
                    flexShrink: 0
                  }}
                >
                  {num}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: { xs: "1.05rem", md: "1.15rem" },
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  );
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const location = useLocation();
  const service = serviceDetails[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)");

  const seoParagraphs = useMemo(() => {
    return parseParagraphs(serviceBodyContent[serviceId]);
  }, [serviceId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO
  const { title, description, keywords, canonical, robots, jsonLd, image } = useMemo(() => {
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

    const jsonLdObj = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: meta.description,
        url,
        areaServed: [
          { "@type": "City", name: "Garland" },
          { "@type": "City", name: "Dallas" },
          { "@type": "AdministrativeArea", name: "Dallas–Fort Worth, TX" },
        ],
        provider: {
          "@type": "LocalBusiness",
          name: "Tint Tek Plus",
          url: SITE,
          telephone: "+1-972-362-8468",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2518 West Kingsley Rd",
            addressLocality: "Garland",
            addressRegion: "TX",
            postalCode: "75040",
            addressCountry: "US",
          },
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          areaServed: "Dallas–Fort Worth, TX",
          seller: {
            "@type": "LocalBusiness",
            name: "Tint Tek Plus",
          },
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: url,
          },
        ],
      },
    ];

    return {
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords,
      canonical: url,
      robots: "index, follow",
      jsonLd: jsonLdObj,
      image: serviceOgImages[serviceId] || null,
    };
  }, [serviceId, service, location.pathname]);

  // ---------- 404 ----------
  if (!service) {
    return (
      <Box
        className="ServicePageRoot"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: GRADIENT }}
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

        <SEO
          title={title}
          description={description}
          canonical={canonical}
          type="website"
        />

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
                src="/dog.webp"
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
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
        jsonLd={jsonLd}
        image={image}
        type="website"
      />

      {/* Route-scoped wrapper with a fixed, GPU-friendly gradient layer */}
      <Box
        className="ServicePageRoot"
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: GRADIENT }}
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
          style={{ color: "white" }}
          sx={{
            position: "relative",
            width: "100%", // avoid 100vw layout jank
            pt: 10,
            minHeight: { xs: "40vh", md: "40vh" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 1, sm: 2, md: 2 },
          }}
        >
          <BusinessInfo />
          <Typography
            variant="h1"
            style={{ color: "#fff" }}
            sx={{
              mb: 2,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "3.5rem" },
            }}
          >
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            style={{ color: "rgba(255,255,255,0.9)" }}
            sx={{
              mb: 2,
              fontWeight: "bold",
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

        {/* Above-the-fold CTA variants — eagerly imported, no Suspense needed */}
        {(serviceId === "commercial-window-tinting" ||
          serviceId === "ceramic-coating" ||
          serviceId === "headlight-services" ||
          serviceId === "windshield-protection-film") && <VideoCTA />}

        {(serviceId === "tesla-window-tinting" ||
          serviceId === "vehicle-paint-protection" ||
          serviceId === "residential-window-tinting" ||
          serviceId === "vehicle-window-tinting") && <TeslaCTA />}


        {/* Per-service specialty sections (lazy + often below the fold) */}
        <Suspense fallback={Fallback}>
          {serviceId === "vehicle-paint-correction" && <ImageCTA />}
          {serviceId === "vehicle-paint-correction" && (
            <PaintCorrectionServices />
          )}

          <SEOContentSection paragraphs={seoParagraphs} service={service} />

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
                <PricingComponent />
              </Box>
            )}
        </Suspense>



        <Suspense fallback={Fallback}>
          {serviceId === "vehicle-window-tinting" && (
            <TintPackages />
          )}
          {serviceId === "tesla-window-tinting" && (
            <TeslaTintPackages />
          )}
          {serviceId === "headlight-services" && (
            <HeadlightPackages />
          )}
        </Suspense>

        {/* Optional banner */}
        {/* <Suspense fallback={null}><F1Banner /></Suspense> */}

        <Suspense fallback={Fallback}>
          {serviceId !== "vehicle-paint-correction" &&
            serviceId !== "ceramic-coating" && (
              <ServicesOffered serviceId={serviceId} />
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
              <HowItWorks serviceId={serviceId} />
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
              <BenefitsGrid />
            )}
        </Suspense>

        <Suspense fallback={Fallback}>
          <BlogCTA />
        </Suspense>

        <Suspense fallback={Fallback}>
          <FAQSection />
          <CallToAction />
        </Suspense>

        <Suspense fallback={Fallback}>
          {/* Keep wrappers minimal to let the gradient show through */}
          <Box>
            <Contact />
          </Box>
          <QuickLinks />
          <Footer />
        </Suspense>
      </Box>
    </>
  );
};

export default ServicePage;
