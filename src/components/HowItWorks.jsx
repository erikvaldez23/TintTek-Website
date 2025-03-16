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
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import Slider from "react-slick"; // Import Slider
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BuildIcon from "@mui/icons-material/Build";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LayersIcon from "@mui/icons-material/Layers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

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
      // {
      //   title: "Liftime Warranty & Nationwide Coverage",
      //   description: "The tint is allowed to dry for long-lasting adhesion.",
      //   detailedDescription:
      //     "We stand behind the quality of our work with a lifetime warranty on all our tint installations. Plus, our services come with nationwide coverage, so you can trust that you’re protected wherever you go!",
      //   icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      // },
    ],
    finalDescription:
      "Car window tinting provides many positive benefits such as protecting you from the sun, increasing privacy, and improving the look and style of your vehicle. So how exactly does car window tint get applied? There are four main steps we follow:",
    images: [
      "/TintTek-Website/Tint Tek-6.jpeg",
      "/TintTek-Website/Tint Tek-46.jpeg",
      "/TintTek-Website/Tint Tek-102.jpeg",
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
          " We apply the film to the inside of the window, using a squeegee to smooth out any bubbles or wrinkles.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Drying and Setting",
        description:
          "Then we allow the film to dry and set, ensuring a secure and long-lasting bond to the window..",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "Tinting your entire Tesla is essential to shield yourself from harmful UV rays, including applying a clear film to the windshield. Car window tinting offers numerous benefits, such as sun protection, enhanced privacy, and an improved aesthetic for your vehicle. But how is car window tint applied to your Tesla? Here are the four main steps we follow:",
    images: [
      "/TintTek-Website/Tint Tek-6.jpeg",
      "/TintTek-Website/Tint Tek-46.jpeg",
      "/TintTek-Website/Tint Tek-102.jpeg",
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
      "/TintTek-Website/commercial-tint1.jpeg",
      "/TintTek-Website/commercial-tint2.jpeg",
      "/TintTek-Website/commercial-tint3.jpeg",
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
      "/TintTek-Website/residential-tint1.jpeg",
      "/TintTek-Website/residential-tint2.jpeg",
      "/TintTek-Website/residential-tint3.jpeg",
    ],
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    steps: [
      {
        title: "Washing & Claying",
        description:
          "We wash and clay the car to remove dirt, dust, and contaminants, prepping the paint for polishing.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Polishing",
        description:
          "Using a machine polisher, we eliminate swirl marks, scratches, and oxidation for a smooth finish.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Inspecting, Finishing, & Sealing",
        description:
          "We inspect for imperfections, refine the gloss, and apply a sealant for lasting protection.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Detailing Touch-ups",
        description:
          "We detail hard-to-reach areas, ensuring a uniform, clean look that restores the car's appearance.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "Vehicle paint correction is a process used to restore and enhance the appearance of your cars paint to restore it to looking brand new. There are 4 major steps involved:",
    images: [
      "/TintTek-Website/paint-correction1.jpeg",
      "/TintTek-Website/paint-correction2.jpeg",
      "/TintTek-Website/paint-correction3.jpeg",
    ],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    steps: [
      {
        title: "Preparation",
        description:
          "We begin by cleaning and preparing your vehicle’s surface to ensure a smooth, contaminant-free application.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Film Application",
        description:
          "Our experts apply the clear bra or vinyl wrap, creating an invisible layer that protects your car from scratches, chips, and other damages.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Final Inspection",
        description:
          "We conduct a meticulous inspection to ensure every inch of the film is perfectly applied and the protection is flawless.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "The PPF application process at TintTekPlus is thorough and precise to ensure optimal protection for your vehicle. Here’s how we do it:",
    images: [
      "/TintTek-Website/paint-protection1.jpeg",
      "/TintTek-Website/paint-protection2.jpeg",
      "/TintTek-Website/paint-protection3.jpeg",
    ],
  },
};

const HowItWorks = ({ serviceId }) => {
  const service = serviceSteps[serviceId];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

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
      <Typography variant="h4" textAlign="center">
        Service not found
      </Typography>
    );
  }

  // Slick carousel settings for mobile (Steps)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: (dots) => (
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#888",
          borderRadius: "50%",
          display: "inline-block",
          margin: "0 5px",
        }}
      />
    ),
  };

  // Slick carousel settings for images (Mobile)
  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box
      sx={{
        py: isMobile ? 4 : 6,
        px: isMobile ? 2 : 4,
        backgroundColor: "#000",
        width: "100vw",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{
          mb: isMobile ? 1.5 : 2,
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
        }}
      >
        HOW IT WORKS
      </Typography>

      {/* Service Unique Description */}
      {service.finalDescription && (
        <Typography
          variant={isMobile ? "body2" : "body1"}
          textAlign="center"
          sx={{
            mt: isMobile ? 2 : 0,
            color: "#fff",
            fontSize: isMobile ? "1.1rem" : "1.5rem",
            maxWidth: "1200px",
            mx: "auto",
            pt: isMobile ? 1 : 0,
          }}
        >
          {service.finalDescription}
        </Typography>
      )}

      {/* Steps Section */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {service.steps.map((step, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  marginTop: "20px",
                  borderRadius: 2,
                  height: "250px", // Fixed height for uniformity
                  backgroundColor: "#292929",
                  color: "#fff",
                  mx: "auto",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {step.icon}
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 1.5 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {step.description}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                {/* <Button
                  sx={{
                    mt: "auto",
                    borderRadius: "10px",
                    backgroundColor: "#2794d2",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                  onClick={() => handleLearnMoreClick(step)}
                >
                  Learn More
                </Button> */}
                <Button
                  component={motion.a}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    mt: 3,
                    backgroundColor: "#2794d2",
                    color: "#000",
                    fontWeight: "bold",
                    px: isMobile ? 3 : 4,
                    py: isMobile ? 1.2 : 1.5,
                    borderRadius: "30px",
                    textTransform: "uppercase",
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    width: isMobile ? "100%" : "auto",
                  }}
                  onClick={() => handleLearnMoreClick(step)}
                >
                  LEARN MORE
                </Button>
              </Paper>
            </Box>
          ))}
        </Slider>
      ) : (
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ maxWidth: "1200px", mx: "auto" }}
        >
          {service.steps.map((step, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  borderRadius: 2,
                  marginTop: "20px",
                  height: "100%",
                  maxWidth: "300px",
                  backgroundColor: "#292929",
                  color: "#fff",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 15px #2794d2",
                    backgroundColor: "#333",
                  },
                }}
              >
                {step.icon}
                <Typography variant="h5" fontWeight="bold" sx={{ mt: 1.5 }}>
                  {step.title}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {step.description}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                {/* <Button
                  sx={{
                    mt: "auto",
                    borderRadius: "10px",
                    backgroundColor: "#2794d2",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#000",
                      color: "#fff",
                    },
                  }}
                  onClick={() => handleLearnMoreClick(step)}
                >
                  Learn More
                </Button> */}
                <Button
                  component={motion.a}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    mt: 3,
                    backgroundColor: "#2794d2",
                    color: "#000",
                    fontWeight: "bold",
                    px: isMobile ? 3 : 4,
                    py: isMobile ? 1.2 : 1,
                    borderRadius: "30px",
                    textTransform: "uppercase",
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    width: isMobile ? "100%" : "auto",
                  }}
                  onClick={() => handleLearnMoreClick(step)}
                >
                  Learn More
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Images Section */}
      <Box
        sx={{
          mt: isMobile ? 8 : 12, // Increased spacing to separate from steps
          maxWidth: "1200px", // Limit width
          width: "100%", // Ensure responsiveness
          margin: "0 auto", // Center the container
          paddingTop: 8,
        }}
      >
        {isMobile ? (
          <Slider {...imageSliderSettings}>
            {service.images.map((image, index) => (
              <Box key={index} sx={{ px: 2 }}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: 2, overflow: "hidden" }}
                >
                  <img
                    src={image}
                    alt="Tinting Process"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Paper>
              </Box>
            ))}
          </Slider>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {service.images.map((image, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{ borderRadius: 2, overflow: "hidden" }}
                >
                  <img
                    src={image}
                    alt="Tinting Process"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Modal Dialog for Learn More */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 4,
            padding: 3,
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            color: "#000",
            m: 0,
            p: 1,
            fontSize: "1.5rem",
            position: "relative", // Ensure the title is positioned relatively
          }}
        >
          {selectedStep?.title}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#000",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider sx={{ mb: 2 }} />
        <DialogContent
          sx={{
            textAlign: "center",
            color: "#000",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1">
            {selectedStep?.detailedDescription}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default HowItWorks;
