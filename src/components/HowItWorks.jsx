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
        description:
          "We clean the car windows to remove any dirt, dust, or debris.",
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
      "/TintTek-Website/picture1.jpeg",
      "/TintTek-Website/picture1.jpeg",
      "/TintTek-Website/picture1.jpeg",
    ],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    steps: [
      {
        title: "Cleaning",
        description:
          "We ensure all Tesla windows are spotless before applying tint.",
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
      "/TintTek-Website/picture1.jpeg",
      "/TintTek-Website/picture1.jpeg",
      "/TintTek-Website/picture1.jpeg",
    ],
  },
  // Add more services here...
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
