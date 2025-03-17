import React, { useEffect } from "react";
import { useParams} from "react-router-dom";
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
import PPFSelector from "./PPFSelector";
import Commercial from "./commercial";
import FAQSection from "./FAQSection";
import TintPackages from "./TintPackages";
import TeslaTintingSimulator from "./TeslaTintingSimulator";
import QuickLinks from "./QuickLinks";
import TeslaTintPackages from "./TeslaTintPackages";
import BenefitsGrid from "./BenefitsGrid";

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
      {
        benefit: "Blocks 99% of harmful UV rays",
        detail:
          "Our premium window films reduce UV exposure for passengers and help prevent interior fading.",
        stat: "Scientifically proven to block 99.9% of UVA/UVB rays.",
      },
      {
        benefit: "Heat rejection",
        detail:
          "Keeps your vehicle cooler and reduces reliance on air conditioning.",
        stat: "Can reduce interior temperatures by up to 15°F.",
      },
      {
        benefit: "Improved privacy and security",
        detail:
          "Tinted windows obscure interior views, deterring theft and protecting your valuables.",
        stat: "Studies indicate a 60% reduction in break-in rates.",
      },
      {
        benefit: "Reduces glare from the sun and headlights",
        detail:
          "Enhances driving comfort and visibility during bright conditions.",
        stat: "Glare reduction can improve visual comfort by up to 50%.",
      },
      {
        benefit: "Protects interiors from fading",
        detail:
          "Helps preserve upholstery and dashboard quality by minimizing UV damage.",
        stat: "Interior lifespan can be extended by 2-3 years with quality tints.",
      },
      {
        benefit: "Elevate overall appearance",
        detail:
          "Gives your vehicle a sleek, modern look that enhances curb appeal.",
        stat: "Over 70% of car owners report increased resale interest after tinting.",
      },
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
      {
        benefit: "Increased mileage per battery charge",
        detail:
          "Our specialized tint reduces heat build-up and battery drain, extending your Tesla's range.",
        stat: "Reports indicate up to a 5% improvement in battery efficiency.",
      },
      {
        benefit: "Heat reduction in cabin",
        detail:
          "Keeps the interior cooler, enhancing comfort during long drives.",
        stat: "Can lower interior temperatures by up to 10°F.",
      },
      {
        benefit: "Blocks 99% of harmful UV rays",
        detail:
          "Ensures maximum UV protection while maintaining clarity for Tesla models.",
        stat: "Blocks nearly all harmful UV rays, preserving interior quality.",
      },
      {
        benefit: "Reduces glare from the sun and headlights",
        detail:
          "Improves driver visibility and reduces eye strain under bright conditions.",
        stat: "Glare reduction can improve visual comfort by up to 50%.",
      },
      {
        benefit: "Provides increased privacy",
        detail:
          "Specialized tinting enhances privacy by limiting the view from outside.",
        stat: "Customer feedback indicates significantly improved privacy.",
      },
      {
        benefit: "Prevents unnecessary battery drainage",
        detail:
          "Lowers the workload on the AC system, resulting in better energy management.",
        stat: "Studies show a 3-5% reduction in energy consumption.",
      },
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
      {
        benefit: "Energy savings by reducing cooling costs",
        detail:
          "Helps lower interior temperatures in large office spaces, reducing air conditioning expenses.",
        stat: "Can cut cooling costs by up to 20% in commercial settings.",
      },
      {
        benefit: "Blocks 99% of harmful UV rays",
        detail:
          "Prevents UV damage to interiors and protects employees from excessive sun exposure.",
        stat: "Meets industry standards by blocking nearly 100% of UV rays.",
      },
      {
        benefit: "Reduces glare in office spaces",
        detail:
          "Minimizes glare on screens and work surfaces, creating a more comfortable environment.",
        stat: "Glare reduction is linked to a 15% boost in productivity.",
      },
      {
        benefit: "Protects interiors from fading",
        detail:
          "Helps preserve the color and quality of furnishings and artwork.",
        stat: "Studies show up to 80% less fading over time.",
      },
      {
        benefit: "Enhances building appearance",
        detail: "Gives your building a modern and professional look.",
        stat: "A sleek façade can significantly boost curb appeal and property value.",
      },
      {
        benefit: "Improves privacy for employees",
        detail:
          "Maintains a balance between natural light and visual privacy in workspaces.",
        stat: "Results in improved employee satisfaction and security.",
      },
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
      {
        benefit: "Energy Efficiency & Cost Savings",
        detail:
          "Window tinting is an easy and effective way to reduce your energy costs. By blocking a significant amount of heat from entering your home, it helps maintain a more comfortable indoor temperature year-round.",
        stat: "According to the U.S. Department of Energy, window tinting can reduce cooling costs by 30% to 50%, making your home more energy-efficient and reducing reliance on air conditioning.",
      },
      {
        benefit: "UV Protection & Skin Health",
        detail:
          "Window tints block up to 99% of harmful ultraviolet (UV) rays that contribute to skin damage, aging, and even skin cancer, protecting your health while indoors.",
        stat: "The Skin Cancer Foundation reports that up to 53% of UV rays that cause skin cancer enter through windows. Window tinting helps significantly reduce this exposure, ensuring a safer and healthier environment.",
      },
      {
        benefit: "Improved Comfort & Glare Reduction",
        detail:
          "With tinted windows, you can enjoy natural sunlight without the uncomfortable glare from the sun, which is especially important near TVs, computers, or workstations. It creates a more comfortable and pleasant living space.",
        stat: "Window tinting can reduce glare by up to 80%, allowing you to benefit from natural light without the strain or irritation caused by intense sunlight.",
      },
      {
        benefit: "Enhanced Privacy & Security",
        detail:
          "Tinted windows make it more difficult for people to see inside your home, offering you increased privacy while still letting natural light in. They also make your home a less attractive target for burglars.",
        stat: "The National Window Film Association (NWFA) found that homes with window film experience a 20% reduction in break-ins due to increased privacy and difficulty in spotting valuable items from the outside.",
      },
      {
        benefit: "Protection for Furnishings & Interiors",
        detail:
          "Window tinting helps preserve the beauty of your home by preventing sun damage to furniture, flooring, and artwork. It acts as a protective shield, reducing fading and wear from UV rays and solar heat.",
        stat: "Tinted windows can block up to 99% of UV rays, helping to extend the life of your furnishings, carpets, and artwork by preventing discoloration and fading caused by sun exposure.",
      },
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
      {
        benefit: "Restores original paint finish",
        detail:
          "Eliminates surface imperfections to bring back your vehicle's factory shine.",
        stat: "Results in a finish that's over 90% similar to the original.",
      },
      {
        benefit: "Removes swirl marks and scratches",
        detail:
          "Gently corrects minor defects for a flawless, mirror-like finish.",
        stat: "Reduces visible imperfections by up to 80%.",
      },
      {
        benefit: "Enhances gloss and clarity",
        detail: "Boosts shine and clarity for a polished, showroom appearance.",
        stat: "Gloss levels improve dramatically as reported by 95% of our clients.",
      },
      {
        benefit: "Protects paint from further damage",
        detail:
          "Prepares your car for protective coatings by correcting surface defects.",
        stat: "Enhances long-term durability and resistance to wear.",
      },
      {
        benefit: "Increases vehicle resale value",
        detail:
          "A corrected paint job can significantly boost your car’s market value.",
        stat: "Often results in up to a 10% increase in resale price.",
      },
      {
        benefit: "Prepares car surface for protective coatings",
        detail:
          "Optimizes the surface for additional layers of protection, ensuring longevity.",
        stat: "Creates a smooth base that improves coating adhesion.",
      },
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
      {
        benefit: "Protects from chips, scratches, and road debris",
        detail:
          "Shield your vehicle’s paint with durable protective films that absorb impact.",
        stat: "Can reduce damage incidents by up to 70%.",
      },
      {
        benefit: "Maintains your car’s showroom finish",
        detail:
          "Keeps your vehicle looking new by preserving the original paint quality.",
        stat: "Helps maintain aesthetics and resale value over time.",
      },
      {
        benefit: "Provides a high-gloss, durable finish",
        detail:
          "Adds an extra layer of shine while ensuring long-lasting durability.",
        stat: "Results in a finish that remains vibrant for years.",
      },
      {
        benefit: "Easy maintenance and cleaning",
        detail: "Simplifies upkeep with a surface that repels dirt and stains.",
        stat: "Users report up to 50% less cleaning time.",
      },
      {
        benefit: "Customizes vehicle appearance",
        detail:
          "Offers a wide range of finishes and customization options to match your style.",
        stat: "Enhances overall vehicle aesthetics and personalization.",
      },
      {
        benefit: "Prevents UV damage and fading",
        detail:
          "Protects your paint from harmful UV rays, preventing discoloration over time.",
        stat: "UV technology blocks up to 99% of damaging rays.",
      },
    ],
    servicesOffered: [
      "Single-Stage Paint Correction",
      "Multi-Stage Paint Correction",
      "Swirl Mark Removal",
      "Scratch Removal",
      "Gloss Enhancement",
    ],
  },
  "headlight-services": {
    title: "Headlight Services",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
    image: "/TintTek-Website/ppf.jpg",
    details: "Placeholder",
    benefits: [
      {
        benefit: "Durable protection",
        detail:
          "Safeguards against rock chips, cracks, scratches, and other road hazards.",
        stat: "",
      },
      {
        benefit: "Enhanced aesthetics",
        detail:
          "Adds a customized tint to your headlights and taillights, complementing your vehicle's style.",
        stat: "",
      },
      {
        benefit: "Hyrdrophobic properties",
        detail:
          "Repels water, making your lights easier to clean and maintain.",
        stat: "",
      },
      {
        benefit: "Self-healing",
        detail:
          "The film's advanced technology allows minor scratches to heal with heat, maintaining a smooth surface.",
        stat: "",
      },
    ],
    servicesOffered: [
      "Single-Stage Paint Correction",
      "Multi-Stage Paint Correction",
      "Swirl Mark Removal",
      "Scratch Removal",
      "Gloss Enhancement",
    ],
  },
  "windshield-protection-film": {
    title: "Windshield Protection Film",
    description:
      "Customize and protect your vehicle’s paint with high-quality wraps and protective coatings.",
    image: "/TintTek-Website/ppf.jpg",
    details: "Placeholder",
    benefits: [
      {
        benefit: "Protects from chips, scratches, and road debris",
        detail:
          "Provides robust protection for your windshield against everyday hazards.",
        stat: "Minimizes damage incidents by over 70%.",
      },
      {
        benefit: "Maintains your car’s showroom finish",
        detail:
          "Keeps your windshield clear and pristine, preserving overall aesthetics.",
        stat: "Ensures a consistently high-quality look.",
      },
      {
        benefit: "Provides a high-gloss, durable finish",
        detail: "Delivers a long-lasting protective layer that enhances shine.",
        stat: "High durability ensures performance even in harsh conditions.",
      },
      {
        benefit: "Easy maintenance and cleaning",
        detail:
          "Simplifies cleaning with a surface that repels dirt and grime.",
        stat: "Reduces maintenance efforts by up to 50%.",
      },
      {
        benefit: "Customizes vehicle appearance",
        detail:
          "Enhances your vehicle's look with a tailored protective finish.",
        stat: "Customer feedback confirms improved aesthetics.",
      },
      {
        benefit: "Prevents UV damage and fading",
        detail:
          "Protects your windshield from harmful UV rays, keeping it clear and durable.",
        stat: "Blocks nearly 100% of UV rays, preventing discoloration.",
      },
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          height: { xs: "35vh", md: "35vh" },
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

      {/* COMMERCIAL WINDOW TINT VIEWER */}
      {/* {serviceId === "commercial-window-tinting" && (
        <Box sx={{ width: "100vw", height: "800px", overflow: "hidden" }}>
          <object
            data="https://llumar.com/na/en/architectural/interactive-window-film-tools/solar-decorative-film-viewer/dealer-commercial-solar-and-decorative/"
            width="100%"
            height="800px"
            style={{ border: "none" }}
            title="Llumar Interactive Viewer"
          />
        </Box>
      )} */}

      {/* RESIDENTIAL WINDOW TINT VIEWER */}
      {/* {serviceId === "residential-window-tinting" && (
        <Box sx={{ width: "100vw", height: "75vh", overflow: "hidden" }}>
          <object
            data="https://llumar.com/na/en/architectural/interactive-window-film-tools/viewer-for-home/dealer-home-solar-and-decorative/"
            width="100%"
            height="1000px"
            style={{ border: "none" }}
            title="Llumar Interactive Viewer"
          />
        </Box>
      )} */}

      {(serviceId === "commercial-window-tinting" ||
        serviceId === "residential-window-tinting") && <BenefitsGrid />}

      {serviceId === "tesla-window-tinting" && <TeslaTintingSimulator />}
      {serviceId === "vehicle-window-tinting" && <TintingSimulator />}
      {serviceId === "vehicle-paint-protection" && <PPFSelector />}

      {/* ✅ Pricing Section (Only for Non-Paint Services) */}
      {serviceId !== "vehicle-paint-correction" &&
        serviceId !== "vehicle-paint-protection" && (
          <Box sx={{ width: "100vw" }}>
            <PricingComponent />
          </Box>
        )}

      {(serviceId !== "commercial-window-tinting" && 
        serviceId !== "residential-window-tinting") && (
        <BenefitsSection benefits={service.benefits} />
      )}

      {serviceId !== "commercial-window-tinting" &&
        serviceId !== "residential-window-tinting" && (
          <HowItWorks serviceId={serviceId} />
        )}

      {/* ✅ Services We Offer Section */}
      <ServicesOffered serviceId={serviceId} />

      {serviceId === "vehicle-window-tinting" && <TintPackages />}
      {serviceId === "tesla-window-tinting" && <TeslaTintPackages />}

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

      <QuickLinks />

      {/* ✅ Footer */}
      <Footer />
    </Box>
  );
};

export default ServicePage;
