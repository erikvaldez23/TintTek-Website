import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  GlobalStyles,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

import BuildIcon from "@mui/icons-material/Build";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LayersIcon from "@mui/icons-material/Layers";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GppGoodIcon from "@mui/icons-material/GppGood";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const CustomIcons = {
  paintCorrection1: (
    <Box
      component="img"
      src="/paint-correction/decontamination.png"
      alt="Paint Correction"
      sx={{ width: 40, height: 40 }}
    />
  ),
  paintCorrection2: (
    <Box
      component="img"
      src="/paint-correction/compounding.png"
      alt="Paint Correction"
      sx={{ width: 40, height: 40 }}
    />
  ),
  paintCorrection3: (
    <Box
      component="img"
      src="/paint-correction/polishing.png"
      alt="Paint Correction"
      sx={{ width: 40, height: 40 }}
    />
  ),
  paintCorrection4: (
    <Box
      component="img"
      src="/paint-correction/finishing.png"
      alt="Paint Correction"
      sx={{ width: 40, height: 40 }}
    />
  ),
  ceramicCoating1: (
    <Box
      component="img"
      src="/ceramic/application.png"
      alt="Ceramic Coating"
      sx={{ width: 40, height: 40 }}
    />
  ),
  ceramicCoating2: (
    <Box
      component="img"
      src="/ceramic/check.png"
      alt="Ceramic Coating"
      sx={{ width: 40, height: 40 }}
    />
  ),
  ceramicCoating3: (
    <Box
      component="img"
      src="/ceramic/prep.png"
      alt="Ceramic Coating"
      sx={{ width: 40, height: 40 }}
    />
  ),
};

const serviceSteps = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    steps: [
      {
        title: "Consultation & Customization",
        description:
          "We clean the car windows to remove any dirt, dust, or debris.",
        detailedDescription:
          "We start with a quick consultation to understand your specific needs and recommend the best tinting solutions for your vehicle, home, or business. Whether you're looking to reduce heat, enhance privacy, or protect your investment, we tailor our services to meet your goals.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Installation Process",
        description: "We measure and cut the tint film to fit perfectly.",
        detailedDescription:
          "The process begins with a thorough cleaning of your windows to remove dirt, dust, and debris, ensuring a smooth, clean surface for tint application. We protect your vehicle’s interior by covering the seats and trim. We use the latest equipment and technology to cut the tint to fit each window. The film is then carefully applied to the inside of the glass, ensuring a smooth finish.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Curing & Inspection",
        description: "The film is applied and smoothed with a squeegee.",
        detailedDescription:
          "After installation, we allow the tint to cure properly, ensuring it adheres securely to the glass for long-lasting results. We perform a final inspection to make sure the installation is close to flawless, minimizing bubbles and imperfections. Curing time for window tint typically takes 3-5 days.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Enjoy the Benefits",
        description: "The tint is allowed to dry for long-lasting adhesion.",
        detailedDescription:
          "Once the curing process is complete, enjoy enhanced comfort, privacy, and protection with your newly tinted windows. With long-lasting results, your vehicle will remain cooler, more comfortable, and better protected from harmful UV rays and heat.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "Car window tinting provides many positive benefits such as protecting you from the sun, increasing privacy, and improving the look and style of your vehicle. So how exactly does car window tint get applied? There are four main steps we follow:",
    images: [
      "/gallery/Tint Tek-6.jpeg",
      "/gallery/Tint Tek-46.jpeg",
      "/gallery/Tint Tek-102.jpeg",
    ],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    steps: [
      {
        title: "Preparation",
        description:
          "We clean the car windows thoroughly to remove any dirt, dust, or debris.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Custom Cutting",
        description:
          "We then measure and cut the tint film to match the size and shape of each window.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Precision Application",
        description:
          "We apply the film to the inside of the window, using a squeegee to smooth out any bubbles or wrinkles.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Drying and Setting",
        description:
          "Then we allow the film to dry and set, ensuring a secure and long-lasting bond to the window.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "Tinting your entire Tesla is essential to shield yourself from harmful UV rays, including applying a clear film to the windshield. Car window tinting offers numerous benefits, such as sun protection, enhanced privacy, and an improved aesthetic for your vehicle. But how is car window tint applied to your Tesla? Here are the four main steps we follow:",
    images: [
      "/tesla/tesla3.webp",
      "/gallery/Tint Tek-170-2.jpg",
      "/tesla/tesla2.webp",
    ],
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    steps: [
      {
        title: "Initial Consultation",
        description:
          "We assess your commercial space to recommend the best tinting solutions.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Surface Preparation",
        description:
          "All glass surfaces are thoroughly cleaned to ensure optimal adhesion.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Tint Installation",
        description:
          "We apply high-quality commercial-grade films with precision.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Inspection & Final Touches",
        description:
          "Final quality checks ensure a flawless, professional finish.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription: "",
    images: [
      "/commercial-tint1.jpeg",
      "/commercial-tint2.jpeg",
      "/commercial-tint3.jpeg",
    ],
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting",
    steps: [
      {
        title: "Consultation",
        description:
          "We discuss your needs and recommend the right film for your home.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Measurement & Cutting",
        description:
          "Window measurements are taken, and films are custom cut for a perfect fit.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Film Application",
        description: "We apply the tint smoothly to avoid bubbles and creases.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Final Inspection",
        description:
          "We ensure all windows meet our high-quality standards before completion.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription: "",
    images: [
      "/residential-tint1.jpeg",
      "/residential-tint2.jpeg",
      "/residential-tint3.jpeg",
    ],
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    steps: [
      {
        title: "Decontamination",
        description:
          "Removing surface contaminants allows us to safely polish the paint without scratching or further damaging the clear coat.",
        detailedDescription:
          "We begin by thoroughly washing and claying your vehicle to remove any dirt, dust, tar, or other contaminants on the surface. This ensures that the paint is clean and smooth before we begin the correction process.",
        icon: CustomIcons.paintCorrection1,
      },
      {
        title: "Compounding",
        description:
          "Compounding eliminates the top layer of damaged paint to reveal a smooth, more uniform surface.",
        detailedDescription:
          "Using a machine polisher and a specially formulated cutting compound, we remove deeper imperfections such as swirl marks, scratches, and oxidation by gently leveling the surface of the paint.",
        icon: CustomIcons.paintCorrection2,
      },
      {
        title: "Polishing",
        description:
          "Polishing restores the glossy, high-shine finish your car deserves, bringing out the richness and vibrancy of the paint.",
        detailedDescription:
          "After compounding, we use a finer polishing compound with a softer pad to refine the finish. This step removes any haze left behind from the compounding process and enhances the clarity and depth of the paint.",
        icon: CustomIcons.paintCorrection3,
      },
      {
        title: "Finishing",
        description:
          "This process gives the paint a deep, rich gloss, ensuring your car looks like it just rolled off the showroom floor.",
        detailedDescription:
          "For the ultimate shine, we apply a finishing polish with a soft pad. This step refines the paint even further, creating a mirror-like, flawless finish.",
        icon: CustomIcons.paintCorrection4,
      },
    ],
    finalDescription:
      "Vehicle paint correction is a process used to restore and enhance the appearance of your cars paint to restore it to looking brand new. There are 4 major steps involved:",
    images: [
      "/paint-correction1.jpeg",
      "/paint-correction2.jpeg",
      "/paint-correction3.jpeg",
    ],
  },
  "headlight-services": {
    title: "Headlight Services",
    steps: [
      {
        title: "Consulation",
        description:
          "Discuss your desired tint tone and assess your vehicle's lighting.",
        detailedDescription: "tbd",
        icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Preparation",
        description:
          "Clean the headlight and taillight surfaces to ensure optimal adhesion.",
        detailedDescription: "tbd",
        icon: <CleaningServicesIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Application",
        description:
          "Carefully apply the chosen STEK LPF, ensuring a smooth and bubble-free finish.",
        detailedDescription: "tbd",
        icon: (
          <PrecisionManufacturingIcon sx={{ fontSize: 40, color: "#2794d2" }} />
        ),
      },
      {
        title: "Curing",
        description:
          "Allow the film to set, ensuring durability and longevity.",
        detailedDescription: "tbd",
        icon: <HourglassTopIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "The PPF application process at TintTekPlus is thorough and precise to ensure optimal protection for your vehicle. Here’s how we do it:",
    images: [
      "/headlight/headlight1.jpg",
      "/headlight/headlight2.jpg",
      "/headlight/headlight3.jpg",
    ],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    steps: [
      {
        title: "Consultation & Assesment",
        description:
          "We begin by cleaning and preparing your vehicle’s surface to ensure a smooth, contaminant-free application.",
        detailedDescription: "TBD",
        icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Preparation",
        description:
          "Our experts apply the clear bra or vinyl wrap, creating an invisible layer that protects your car from scratches, chips, and other damages.",
        detailedDescription: "TBD",
        icon: <CleaningServicesIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Installation",
        description:
          "We conduct a meticulous inspection to ensure every inch of the film is perfectly applied and the protection is flawless.",
        detailedDescription: "TBD",
        icon: (
          <PrecisionManufacturingIcon sx={{ fontSize: 40, color: "#2794d2" }} />
        ),
      },
      {
        title: "Curing",
        description:
          "We conduct a meticulous inspection to ensure every inch of the film is perfectly applied and the protection is flawless.",
        detailedDescription: "TBD",
        icon: <HourglassTopIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Final Inspection",
        description:
          "We conduct a thorough inspection to confirm that the PPF has been applied flawlessly, ensuring full protection for your vehicle.",
        detailedDescription: "TBD",
        icon: <FactCheckIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Two-Week Check-Up",
        description:
          "Two-week complimentary check-up after your PPF installation. This allows us to inspect the film, ensuring it's securely bonded to your vehicle and that no issues arise early on.",
        detailedDescription: "TBD",
        icon: <EventAvailableIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "The PPF application process at TintTekPlus is thorough and precise to ensure optimal protection for your vehicle. Here’s how we do it:",
    images: [
      "/paint-protection1.jpeg",
      "/paint-protection2.jpeg",
      "/paint-protection3.jpeg",
    ],
  },
  "ceramic-coating": {
    steps: [
      {
        title: "Consultation & Selection ",
        description:
          "We’ll discuss your needs and help you choose the right coating for your vehicle, whether you prefer standard ceramic or cutting-edge graphene protection.",
        detailedDescription: "TBD",
        icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Preparation",
        description:
          "Your vehicle is thoroughly cleaned and decontaminated to ensure the coating bonds perfectly with the surface. This step is crucial for optimal results.",
        detailedDescription: "TBD",
        icon: CustomIcons.ceramicCoating3,
      },
      {
        title: "Application",
        description:
          "Our trained experts carefully apply the coating, ensuring a flawless, even coverage across your car’s paintwork.",
        detailedDescription: "TBD",
        icon: CustomIcons.ceramicCoating1,
      },
      {
        title: "Curing",
        description:
          "After application, the coating needs time to cure, forming a long-lasting, protective layer that’s as tough as it is beautiful.",
        detailedDescription: "TBD",
        icon: <HourglassTopIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Final Inspection",
        description:
          "We inspect the vehicle to make sure the coating is perfect and your car is ready to face the elements with superior protection.",
        detailedDescription: "TBD",
        icon: <FactCheckIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Yearly Maintenance Check",
        description:
          "For just $225, we offer an annual maintenance check to ensure the coating is performing at its best and touch-up any areas that may need attention.",
        detailedDescription: "TBD",
        icon: CustomIcons.ceramicCoating2,
      },
    ],
    finalDescription: "Our Ceramic & Graphene Coating Process:",
    images: [
      "/paint-protection1.jpeg",
      "/paint-protection2.jpeg",
      "/paint-protection3.jpeg",
    ],
  },
  "windshield-protection-film": {
    steps: [
      {
        title: "Professional Installation",
        description:
          "Our team of installers ensures precise application of ExoShield GT3, tailored to fit your vehicle's specific windshield curvature.",
        detailedDescription: "TBD",
        icon: (
          <PrecisionManufacturingIcon sx={{ fontSize: 40, color: "#2794d2" }} />
        ),
      },
      {
        title: "Comprehensive Warranty",
        description:
          "We stand behind the quality of our products and services. ExoShield GT3 comes with a 3-year transferable warranty, providing you with peace of mind and assurance of long-term protection.",
        detailedDescription: "TBD",
        icon: <GppGoodIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Competitive Pricing",
        description:
          "Protecting your windshield is an investment. We offer competitive pricing to ensure you receive exceptional value without compromising on quality.",
        detailedDescription: "TBD",
        icon: <AttachMoneyIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "At Tint Tek Plus, we are committed to delivering exceptional value and peace of mind to our customers. In addition to our top-quality windshield protection services, we offer a $1,000 insurance coverage for your windshield protection film. This coverage ensures that if your windshield film is damaged due to road debris or other hazards, the cost of repair or replacement is covered, providing you with added security and confidence in your investment.",
    images: [
      "/windshield/windshield1.png",
      "/windshield/windshield2.jpg",
      "/windshield/windshield3.jpg",
    ],
  },
};

const HowItWorks = ({ serviceId }) => {
  const service = serviceSteps[serviceId];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // right under const service = serviceSteps[serviceId];
const isFourSteps = service?.steps?.length === 4;


  const [openModal, setOpenModal] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const handleLearnMoreClick = (step) => {
    setSelectedStep(step);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedStep(null);
  };

  if (!service) {
    return (
      <Typography variant="h4" textAlign="center" sx={{ color: "#fff" }}>
        Service not found
      </Typography>
    );
  }

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      sx={{
        position: "relative",
        py: { xs: 6, md: 10 },
        px: { xs: 1, md: 4 },
        width: "100%",
        overflow: "hidden",
        backgroundColor: "transparent",
        backgroundImage: "none",
      }}
    >
      {/* Force-centering + transparent defaults on mobile */}
      <GlobalStyles
        styles={{
          "@media (max-width:600px)": {
            ".howitworks-grid.MuiGrid-container": {
              marginLeft: "0 !important",
              width: "100% !important",
            },
            ".howitworks-grid.MuiGrid-container > .MuiGrid-item": {
              display: "flex !important",
              justifyContent: "center !important",
              paddingLeft: "16px !important",
              paddingRight: "16px !important",
            },
            ".howitworks-card": {
              maxWidth: "420px !important",
              width: "100% !important",
              marginLeft: "auto !important",
              marginRight: "auto !important",
            },
          },
          // Hard reset for any accidental backgrounds in this subtree
          ".howitworks-root, .howitworks-root *": {
            backgroundColor: "transparent !important",
            backgroundImage: "none !important",
          },
        }}
      />

      {/* Heading */}
      <Box
        className="howitworks-root"
        sx={{
          maxWidth: 1200,
          mx: "auto",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
          backgroundColor: "transparent",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{
            fontWeight: 800,
            letterSpacing: 0.2,
            color: "#fff",
            mb: 1,
          }}
        >
          How It Works
        </Typography>

        {service.finalDescription && (
          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: "1.05rem", md: "1.25rem" },
              maxWidth: 900,
              mx: "auto",
              position: "relative",
              display: "inline-block",
            }}
          >
            {service.finalDescription}
          </Typography>
        )}
      </Box>

      {/* Cards Grid */}
    <Grid
  container
  spacing={3}
  justifyContent="center"
  className="howitworks-grid"
  sx={{ maxWidth: isFourSteps ? 1000 : service.steps.length > 4 ? 1100 : 1200, mx: "auto" }}
>
  {service.steps.map((step, i) => (
    <Grid
      item
      xs={12}
      sm={6}                           // 2 per row on small screens
      md={isFourSteps ? 6 : 4}         // 2×2 if 4 steps, otherwise 3 per row on md+
      lg={isFourSteps ? 6 : 4}         // keep it 2×2 for 4-step case on large too
      key={i}
      sx={{ display: "flex", justifyContent: "center" }}
    >
            <Paper
              component={motion.article}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              elevation={0}
              className="howitworks-card"
              sx={{
                flex: 1,
                width: "100%",
                maxWidth: { xs: 420, sm: "unset" },
                mx: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                background: "rgba(255,255,255,0.01)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                color: "#fff",
                transition: "box-shadow .25s ease, border-color .25s ease",
                "&:hover": {
                  borderColor: "rgba(39,148,210,0.35)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.55), 0 0 24px rgba(39,148,210,0.25)",
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  mb: 2,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow:
                    "inset 0 0 10px rgba(255,255,255,.08), 0 0 18px rgba(39,148,210,.25)",
                  backgroundColor: "transparent",
                }}
              >
                {step.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{ fontWeight: 800, letterSpacing: 0.2, mb: 1 }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.82)", mb: 2 }}
              >
                {step.description}
              </Typography>

              <Box sx={{ flexGrow: 1 }} />

              <Button
                size="small"
                onClick={() => handleLearnMoreClick(step)}
                sx={{
                  mt: 1,
                  px: 2.5,
                  py: 1,
                  borderRadius: 999,
                  fontWeight: 700,
                  textTransform: "none",
                  backgroundColor: "rgba(39,148,210,0.22)",
                  color: "#eaf6ff",
                  border: "1px solid rgba(39,148,210,0.35)",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 0 12px rgba(39,148,210,0.25)",
                  "&:hover": {
                    backgroundColor: "rgba(39,148,210,0.3)",
                    boxShadow: "0 0 16px rgba(39,148,210,0.35)",
                  },
                }}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Optional Images Row */}
      {serviceId !== "vehicle-paint-correction" &&
        serviceId !== "vehicle-paint-protection" &&
        serviceId !== "ceramic-coating" && (
          <Box sx={{ maxWidth: 1200, mx: "auto", pt: { xs: 5, md: 8 } }}>
            <Grid container spacing={3} justifyContent="center" sx={{ background: "transparent" }}>
              {service.images.map((image, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center", backgroundColor: "transparent" }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "1px solid rgba(255,255,255,0.08)",
                      width: "100%",
                      maxWidth: { xs: 420, sm: "unset" },
                      backgroundColor: "transparent",
                      backgroundImage: "none",
                    }}
                  >
                    <img
                      src={image}
                      alt="Process"
                      style={{
                        width: "100%",
                        height: 300,
                        objectFit: "cover",
                        display: "block",
                        background: "transparent",
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 1,
            backgroundColor: "transparent",
            backgroundImage: "none",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#fff",
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.6), 0 0 24px rgba(39,148,210,0.25)",
            backdropFilter: "blur(8px)",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            position: "relative",
            pb: 1,
            backgroundColor: "transparent",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {selectedStep?.title}
          </Typography>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
        <DialogContent sx={{ textAlign: "center", pt: 2, backgroundColor: "transparent" }}>
          <Typography sx={{ color: "rgba(255,255,255,0.85)" }}>
            {selectedStep?.detailedDescription}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default HowItWorks;
