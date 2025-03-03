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
} from "@mui/material";
// Import icons
import BuildIcon from "@mui/icons-material/Build";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LayersIcon from "@mui/icons-material/Layers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

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
      {
        title: "Liftime Warranty & Nationwide Coverage",
        description: "The tint is allowed to dry for long-lasting adhesion.",
        detailedDescription:
          "We stand behind the quality of our work with a lifetime warranty on all our tint installations. Plus, our services come with nationwide coverage, so you can trust that you’re protected wherever you go!",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
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
          "We clean and prep the vehicle’s surface for film application.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Film Application",
        description:
          "Clear bra or vinyl wrap is applied to protect against scratches and chips.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Sealing",
        description:
          "We apply ceramic coatings for added durability and shine.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Final Inspection",
        description:
          "A thorough check ensures the protection is flawless and durable.",
        detailedDescription:
          "We start by cleaning the windows thoroughly to remove any dirt, dust, or debris that could interfere with the tinting process. This ensures a clean surface for the film to adhere to.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "Paint Protection Film (PPF) application involves a few key steps to ensure proper installation and optimal protection, all of which we practice at TintTek+:",
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

  return (
    <Box
      sx={{
        py: isMobile ? 4 : 6, // Reduce padding for mobile
        px: isMobile ? 2 : 4, // Reduce horizontal padding
        backgroundColor: "#000",
        width: "100vw",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h2"} // Smaller font size for mobile
        sx={{
          mb: isMobile ? 1.5 : 2,
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
        }}
      >
        HOW IT WORKS
      </Typography>
      {/* Steps Section */}
      <Grid
        container
        spacing={isMobile ? 2 : 3} // Reduce spacing for mobile
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {/* Dynamic Description Under Steps */}
        {service.finalDescription && (
          <Typography
            variant={isMobile ? "body2" : "body1"} // Adjust text size
            textAlign="center"
            sx={{
              mt: isMobile ? 2 : 4,
              color: "#fff",
              fontSize: isMobile ? "1.1rem" : "1.5rem", // Adjust font size
              maxWidth: "90%",
              mx: "auto",
              pt: isMobile ? 1 : 2, // Reduce top padding
            }}
          >
            {service.finalDescription}
          </Typography>
        )}

        {service.steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: isMobile ? 2 : 3, // Reduce padding for mobile
                borderRadius: 2,
                height: "100%",
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
              <Typography
                variant={isMobile ? "h6" : "h5"}
                fontWeight="bold"
                sx={{ mt: 1.5 }}
              >
                {step.title}
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                sx={{ mt: 1, fontSize: isMobile ? "0.85rem" : "0.95rem" }}
              >
                {step.description}
              </Typography>

              {/* Spacer Box to Push Button to Bottom */}
              <Box sx={{ flexGrow: 1 }} />

              {/* Learn More Button */}
              <Button
                sx={{
                  mt: "auto",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#2794d2",
                  },
                }}
                onClick={() => handleLearnMoreClick(step)}
              >
                Learn More
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {/* Image Section */}
      <Box sx={{ mt: isMobile ? 4 : 6 }}>
        <Grid
          container
          spacing={isMobile ? 1.5 : 3} // Reduce spacing for mobile
          justifyContent="center"
          sx={{ maxWidth: "1200px", mx: "auto" }}
        >
          {service.images.map((image, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  transition: "all 0.3s ease-in-out", // Smooth transition
                }}
              >
                <img
                  src={image}
                  alt="Tinting Process"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.3s ease-in-out", // Smooth image zoom
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px", // ✅ Rounded corners for modern look
            background: "rgba(255, 255, 255, 0.2)", // ✅ Transparent Glass Effect
            backdropFilter: "blur(10px)", // ✅ Glassmorphism blur
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // ✅ Modern shadow effect
            maxWidth: "500px", // ✅ Keep the modal a reasonable size
            padding: "20px",
          },
        }}
      >
        {/* ✅ Close Button (Top-Right) */}
        <IconButton
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#fff",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#2794d2",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* ✅ Modern Title Styling */}
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.8rem",
            color: "#fff",
          }}
        >
          {selectedStep?.title}
        </DialogTitle>

        {/* ✅ Content Section */}
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            color: "#eee",
            fontSize: "1.5rem",
            px: 3,
          }}
        >
          <Typography variant="body1">
            {selectedStep?.detailedDescription}
          </Typography>
        </DialogContent>

        {/* ✅ Modernized Action Buttons */}
        <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
          <Button
            onClick={handleCloseModal}
            sx={{
              backgroundColor: "#2794d2",
              color: "#fff",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1e6ca0",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      ;
    </Box>
  );
};

export default HowItWorks;
