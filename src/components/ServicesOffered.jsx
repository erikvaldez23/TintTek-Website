import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LayersIcon from "@mui/icons-material/Layers";

// Define service-specific content
const serviceOptions = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting Services",
    list: [
      "Front Windsheield",
      "Sunroof / Panoramic Roof",
      "Visor Strips",
    ],
    filmTypes: [
      {
        name: "Llumar ATC",
        description:
          "Enjoy 99% UV protection and significant heat reduction with the Llumar ATC film. Perfect for those looking to upgrade their vehicle or property’s appearance, this budget-friendly, dyed film offers sleek styling while protecting both you and your interior from the sun’s harmful effects.",
      },
      {
        name: "Llumar CTX",
        description:
          "Experience the power of advanced ceramic technology with Llumar CTX. Offering exceptional heat rejection and 99% UV protection, this film keeps your car cooler and more comfortable year-round",
      },
      {
        name: "Llumar IRX",
        description:
          "Take comfort to the next level with Llumar IRX, featuring advanced nano-ceramic technology that blocks infrared heat for superior comfort. With 99% UV protection and remarkable heat rejection, this premium film not only keeps your interior cooler but also enhances your vehicle’s sleek, high-end look.",
      },
    ],
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting Services",
    list: [
      "Full Model S window tinting, windshield, pano sunroof, single sunroof",
      "Full Model 3 window tinting, windshield, sunroof",
      "Full Model X window tinting, windshield",
      "Full Model Y window tinting, windshield, pano sunroof, single sunroof",
      "Full Cybertruck window tinting, windshield",
    ],
    filmTypes: [
      {
        name: "Llumar ATC",
        description:
          "A budget-friendly dyed-stable film that blocks 99% of harmful UV rays and enhances Tesla aesthetics.",
      },
      {
        name: "Llumar CTX",
        description:
          "A durable non-metal tint with a mirror-free, reflective look optimized for Tesla windows.",
      },
      {
        name: "Llumar IRX",
        description:
          "The most premium option, featuring nano-ceramic construction for optimal heat rejection and infrared protection.",
      },
    ],
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting Services",
    list: [
      "Office Window Tinting",
      "Storefront Window Tinting",
      "Skyscraper Window Tinting",
      "Conference Room Tinting",
      "Custom Business Tinting Solutions",
    ],
    filmTypes: [
      {
        name: "Solar Control Film",
        description:
          "Reduces heat and glare while allowing natural light to enter, improving energy efficiency.",
      },
      {
        name: "Decorative Film",
        description:
          "Offers privacy and style while reducing glare and heat.",
      },
      {
        name: "Security Film (Coming Soon!)",
        description:
          "Strengthens windows, offering protection against break-ins and accidents by preventing shattering.",
      },
    ],
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting Services",
    list: [
      "Full Home Window Tinting",
      "Single Room Window Tinting",
      "Sunroom Tinting",
      "Patio Door Tinting",
      "Custom Home Tinting Solutions",
    ],
    filmTypes: [
      {
        name: "Reflective Window Film",
        description:
          "Needs description",
      },
      {
        name: "Dual-Reflective Window Film",
        description:
          "Needs description",
      },
      {
        name: "Neutral Window Film",
        description:
          "Needs description",
      },
      {
        name: "Specialty Window Film",
        description:
          "Needs description",
      },
      {
        name: "Ceramic Window Film",
        description:
          "Needs description",
      },
      {
        name: "Harmony Window Film",
        description:
          "Needs description",
      },
      {
        name: "Spectrally Selective Window Film",
        description:
          "Needs description",
      },
    ],
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction Services",
    list: [
      "Single-Stage Paint Correction",
      "Multi-Stage Paint Correction",
      "Swirl Mark Removal",
      "Scratch Removal",
      "Gloss Enhancement",
    ],
    filmTypes: [
      {
        name: "Stage 1 Correction",
        description:
          "Removes light swirls and scratches to restore your car's shine.",
      },
      {
        name: "Stage 2 Correction",
        description:
          "A more intensive process to eliminate deeper scratches and imperfections.",
      },
      {
        name: "Stage 3 Correction",
        description:
          "Comprehensive restoration for severely damaged paint, returning a showroom-quality finish.",
      },
    ],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection Services",
    list: [
      "Front End PPF",
      "Extended PPF",
      "Track Package PPF",
      "Full Car PPF",
      "Color Change PPF",
      "Stealth/Matte PPF",
    ],
    filmTypes: [
      {
        name: "Llumar Paint Protection Film",
        description:
          "Invisible shield that protects your car from chips, scratches, and road debris.",
      },
      {
        name: "STEK PPF",
        description:
          "High-quality, protective film that guards your car’s paint against chips, scratches, stains, and road debris while preserving its appearance.",
      },
    ],
  },
  "headlight-services": {
    title: "Headlight Services",
    list: [
      "Headlight Tint",
      "Taillight Tint",
      "Reflectors",
    ],
    filmTypes: [
      {
        name: "DYNOshade",
        description:
          "Description",
      },
      {
        name: "DYNOshadow",
        description:
          "Description",
      },
      {
        name: "DYNOsmoke",
        description:
          "Description",
      },
      {
        name: "DYNOstorm",
        description:
          "Description",
      },
      {
        name: "DYNOyellow",
        description:
          "Description",
      },
    ],
  },
  // "vehicle-paint-protection": {
  //   title: "Vehicle Paint Protection Services",
  //   list: [
  //     "Front End PPF",
  //     "Extended PPF",
  //     "Track Package PPF",
  //     "Full Car PPF",
  //     "Color Change PPF",
  //     "Stealth/Matte PPF",
  //   ],
  //   filmTypes: [
  //     {
  //       name: "Llumar Paint Protection Film",
  //       description:
  //         "Invisible shield that protects your car from chips, scratches, and road debris.",
  //     },
  //     {
  //       name: "STEK PPF",
  //       description:
  //         "High-quality, protective film that guards your car’s paint against chips, scratches, stains, and road debris while preserving its appearance.",
  //     },
  //   ],
  // },
};

const ServicesOffered = ({ serviceId }) => {
  const service = serviceOptions[serviceId];
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  if (!service) {
    return (
      <Typography variant="h4" textAlign="center">
        Services not found
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        backgroundColor: "#EEEEFF",
        color: "#000",
        width: "100vw",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ mb: 2, fontWeight: "bold", color: "#000", textAlign: "center" }}
        >
          SERVICES WE OFFER
        </Typography>

        {/* Service List */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          {service.title}
        </Typography>
        <List>
          {service.list.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                transition: "all 0.3s ease-in-out",
              }}
            >
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#2794d2" }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>

        {/* Film Types Section */}
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 4, mb: 2 }}>
          The <strong>main types of film</strong> we use:
        </Typography>
        <Grid container spacing={3}>
          {service.filmTypes.map((film, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: "relative", // ✅ Needed for absolute positioning of the logo
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: 2,
                  boxShadow: 3,
                  height: "100%",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 0px 15px #2794d2",
                    backgroundColor: "#333",
                  },
                }}
              >
                {/* ✅ Horizontal Logo at Top-Right */}
                <Box
                  component="img"
                  src={
                    serviceId === "vehicle-paint-protection" ||
                    serviceId === "headlight-services"
                      ? "/TintTek-Website/stek-logo.png" // ✅ STEK logo
                      : "/TintTek-Website/llumar-logo.png"
                  } // ✅ Default Llumar logo
                  alt="Film Type Logo"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 70,
                    height: "auto",
                    filter:
                      serviceId === "vehicle-paint-protection" ||
                      serviceId === "headlight-services"
                        ? "invert(1)"
                        : "none", // ✅ Apply inversion only for STEK
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <LayersIcon sx={{ fontSize: 40, color: "#2794d2", mb: 1 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {film.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {film.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesOffered;
