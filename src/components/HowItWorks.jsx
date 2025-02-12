import { Box, Typography, Grid, Paper } from "@mui/material";
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
        description: "We clean the car windows to remove any dirt, dust, or debris.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Cutting the Film",
        description: "We measure and cut the tint film to fit perfectly.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Application",
        description: "The film is applied and smoothed with a squeegee.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Drying and Setting",
        description: "The tint is allowed to dry for long-lasting adhesion.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
    ],
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
        title: "Cleaning",
        description: "We ensure all Tesla windows are spotless before applying tint.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Custom Cutting",
        description: "Tesla-specific cutting ensures a perfect fit.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Precision Application",
        description: "Tint is applied with laser precision.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Final Check",
        description: "We verify a seamless finish before delivery.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
    ],
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
        description: "We assess your commercial space to recommend the best tinting solutions.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Surface Preparation",
        description: "All glass surfaces are thoroughly cleaned to ensure optimal adhesion.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Tint Installation",
        description: "We apply high-quality commercial-grade films with precision.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Inspection & Final Touches",
        description: "Final quality checks ensure a flawless, professional finish.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
    ],
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
        description: "We discuss your needs and recommend the right film for your home.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Measurement & Cutting",
        description: "Window measurements are taken, and films are custom cut for a perfect fit.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Film Application",
        description: "We apply the tint smoothly to avoid bubbles and creases.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Final Inspection",
        description: "We ensure all windows meet our high-quality standards before completion.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
    ],
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
        title: "Surface Inspection",
        description: "We examine your vehicle's paint to identify imperfections.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Polishing & Compounding",
        description: "We remove swirls, scratches, and oxidation with multi-stage polishing.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Gloss Enhancement",
        description: "A final polish brings out the natural shine of your vehicle.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Protection Application",
        description: "We apply protective coatings to maintain the finish.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
    ],
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
        description: "We clean and prep the vehicle’s surface for film application.",
        icon: <BuildIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Film Application",
        description: "Clear bra or vinyl wrap is applied to protect against scratches and chips.",
        icon: <ContentCutIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Sealing",
        description: "We apply ceramic coatings for added durability and shine.",
        icon: <LayersIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
      {
        title: "Final Inspection",
        description: "A thorough check ensures the protection is flawless and durable.",
        icon: <CheckCircleIcon sx={{ fontSize: 40, color: "#007BFF" }} />,
      },
    ],
    images: [
      "/TintTek-Website/paint-protection1.jpeg",
      "/TintTek-Website/paint-protection2.jpeg",
      "/TintTek-Website/paint-protection3.jpeg",
    ],
  },
};


const HowItWorks = ({ serviceId }) => {
  const service = serviceSteps[serviceId];

  if (!service) {
    return (
      <Typography variant="h4" textAlign="center">
        Service not found
      </Typography>
    );
  }

  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: "#000", width: "100vw" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 3, color: "#fff" }}
      >
        HOW IT WORKS
      </Typography>

      {/* Steps Section */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {service.steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 3,
                borderRadius: 2,
                height: "100%",
                backgroundColor: "#292929",
                color: "#fff",
              }}
            >
              {step.icon}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                {step.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, fontSize: "0.95rem" }}>
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Image Section */}
      {/* Image Section */}
      <Box sx={{ mt: 6 }}>
        <Grid
          container
          spacing={3}
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
                  height: "100%", // Ensures container takes full height
                  display: "flex",
                }}
              >
                <img
                  src={image}
                  alt="Tinting Process"
                  style={{
                    width: "100%", // Ensures the image covers the entire width
                    height: "100%", // Ensures it fills the container
                    objectFit: "cover", // Ensures it crops correctly to fit
                    display: "block", // Removes extra spacing issues
                  }}
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
