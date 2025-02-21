import { Box, Typography, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import LayersIcon from "@mui/icons-material/Layers";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const serviceSteps = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    steps: [
      {
        title: "Preparation",
        description:
          "We clean the car windows to remove any dirt, dust, or debris.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Cutting the Film",
        description: "We measure and cut the tint film to fit perfectly.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Application",
        description: "The film is applied and smoothed with a squeegee.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Drying and Setting",
        description: "The tint is allowed to dry for long-lasting adhesion.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "Car window tinting provides many positive benefits such as protecting you from the sun, increasing privacy, and improving the look and style of your vehicle. So how exactly does car window tint get applied? There are four main steps we follow:",
    images: [
      "/TintTek-Website/vehicle-tint1.jpeg",
      "/TintTek-Website/vehicle-tint2.jpeg",
      "/TintTek-Website/vehicle-tint3.jpeg",
    ],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    steps: [
      {
        title: "Preparation",
        description:
          "We clean the car windows thoroughly to remove any dirt, dust, or debris.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Custom Cutting",
        description:
          "We then measure and cut the tint film to match the size and shape of each window.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Precision Application",
        description:
          " We apply the film to the inside of the window, using a squeegee to smooth out any bubbles or wrinkles.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Drying and Setting",
        description:
          "Then we allow the film to dry and set, ensuring a secure and long-lasting bond to the window..",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
    ],
    finalDescription:
      "Tinting your entire Tesla is essential to shield yourself from harmful UV rays, including applying a clear film to the windshield. Car window tinting offers numerous benefits, such as sun protection, enhanced privacy, and an improved aesthetic for your vehicle. But how is car window tint applied to your Tesla? Here are the four main steps we follow:",
    images: [
      "/TintTek-Website/tesla-tint1.jpeg",
      "/TintTek-Website/tesla-tint2.jpeg",
      "/TintTek-Website/tesla-tint3.jpeg",
    ],
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    steps: [
      {
        title: "Initial Consultation",
        description:
          "We assess your commercial space to recommend the best tinting solutions.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Surface Preparation",
        description:
          "All glass surfaces are thoroughly cleaned to ensure optimal adhesion.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Tint Installation",
        description:
          "We apply high-quality commercial-grade films with precision.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Inspection & Final Touches",
        description:
          "Final quality checks ensure a flawless, professional finish.",
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
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Measurement & Cutting",
        description:
          "Window measurements are taken, and films are custom cut for a perfect fit.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Film Application",
        description: "We apply the tint smoothly to avoid bubbles and creases.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Final Inspection",
        description:
          "We ensure all windows meet our high-quality standards before completion.",
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
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Polishing",
        description:
          "Using a machine polisher, we eliminate swirl marks, scratches, and oxidation for a smooth finish.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Inspecting, Finishing, & Sealing",
        description:
          "We inspect for imperfections, refine the gloss, and apply a sealant for lasting protection.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Detailing Touch-ups",
        description:
          "We detail hard-to-reach areas, ensuring a uniform, clean look that restores the car's appearance.",
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
        icon: <BuildIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Film Application",
        description:
          "Clear bra or vinyl wrap is applied to protect against scratches and chips.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Sealing",
        description:
          "We apply ceramic coatings for added durability and shine.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#2794d2" }} />,
      },
      {
        title: "Final Inspection",
        description:
          "A thorough check ensures the protection is flawless and durable.",
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
        sx={{ mb: isMobile ? 1.5 : 2, fontWeight: "bold", color: "#fff", textAlign: "center" }}
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
                transition: "all 0.3s ease-in-out", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Slight scale-up
                  boxShadow: "0px 0px 15px #2794d2", // Blue glow effect
                  backgroundColor: "#333", // Lighter background
                },
              }}
            >
              {step.icon}
              <Typography
                variant={isMobile ? "h6" : "h5"} // Adjust title size
                fontWeight="bold"
                sx={{ mt: 1.5 }}
              >
                {step.title}
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"} // Adjust description size
                sx={{ mt: 1, fontSize: isMobile ? "0.85rem" : "0.95rem" }}
              >
                {step.description}
              </Typography>
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
                  "&:hover": {
                    transform: "scale(1.05)", // Slight scale-up
                    boxShadow: "0px 0px 15px #2794d2", // Blue glow effect
                  },
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
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HowItWorks;