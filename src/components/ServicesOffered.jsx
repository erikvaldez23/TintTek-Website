import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Card, CardContent, useMediaQuery } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LayersIcon from "@mui/icons-material/Layers";

// Define service-specific content
const serviceOptions = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting Services",
    list: [
      "Full SUV Tinting",
      "Full Sedan Tinting",
      "Full Coupe Tinting",
      "2 Windows Only",
      "Front Windshield and Sunroof",
      "Front Windsheild Only",
      "Sunroof/Panoramic Roof",
      "Visor Strips",
    ],
    filmTypes: [
      { name: "Llumar ATC", description: "Enjoy 99% UV protection and significant heat reduction with the Llumar ATC film. Perfect for those looking to upgrade their vehicle or property’s appearance, this budget-friendly, dyed film offers sleek styling while protecting both you and your interior from the sun’s harmful effects." },
      { name: "Llumar CTX", description: "Experience the power of advanced ceramic technology with Llumar CTX. Offering exceptional heat rejection and 99% UV protection, this film keeps your car cooler and more comfortable year-round" },
      { name: "Llumar IRX", description: "Take comfort to the next level with Llumar IRX, featuring advanced nano-ceramic technology that blocks infrared heat for superior comfort. With 99% UV protection and remarkable heat rejection, this premium film not only keeps your interior cooler but also enhances your vehicle’s sleek, high-end look." },
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
      { name: "Llumar ATC", description: "A budget-friendly dyed-stable film that blocks 99% of harmful UV rays and enhances Tesla aesthetics." },
      { name: "Llumar CTX", description: "A durable non-metal tint with a mirror-free, reflective look optimized for Tesla windows." },
      { name: "Llumar IRX", description: "The most premium option, featuring nano-ceramic construction for optimal heat rejection and infrared protection." },
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
      { name: "Llumar Frosted Film", description: "Provides privacy while allowing natural light, perfect for office and commercial spaces." },
      { name: "Llumar Reflective Film", description: "Reduces glare and heat, offering both privacy and energy savings for large buildings." },
      { name: "Llumar Dual-Reflective Film", description: "Balances interior visibility with exterior privacy and superior UV protection." },
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
      { name: "Llumar UVShield", description: "Blocks harmful UV rays to protect your furniture and flooring from fading." },
      { name: "Llumar Energy-Saving Film", description: "Improves home energy efficiency by reducing heat gain and loss." },
      { name: "Llumar Decorative Film", description: "Adds aesthetic appeal while offering privacy for bathrooms and living spaces." },
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
      { name: "Stage 1 Correction", description: "Removes light swirls and scratches to restore your car's shine." },
      { name: "Stage 2 Correction", description: "A more intensive process to eliminate deeper scratches and imperfections." },
      { name: "Stage 3 Correction", description: "Comprehensive restoration for severely damaged paint, returning a showroom-quality finish." },
    ],
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection Services",
    list: [
      "Platinum Extra PPF",
      "Platinum Gloss PPF",
      "Platinum Matte PPF",
      "Valor PFF",
      "Select Black PPF",
      "Gloss and Matte PPF",
    ],
    filmTypes: [
      { name: "Llumar Paint Protection Film", description: "Invisible shield that protects your car from chips, scratches, and road debris." },
      { name: "Ceramic Coating", description: "Provides a long-lasting, high-gloss finish that repels water and contaminants." },
      { name: "Custom Vinyl Wraps", description: "High-quality vinyl wraps to customize your vehicle’s look with various colors and finishes." },
    ],
  },
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
    <Box sx={{ py: 6, px: 4, backgroundColor: "#EEEEFF", color: "#000", width: "100vw" }}>
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
                "&:hover": {
                  color: "#2794d2", // Text color change
                  transform: "translateX(8px)", // Slight movement effect
                },
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
          The <strong>3 main types of film</strong> we use:
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
          src="/TintTek-Website/llumar-logo.png" // ✅ Change this to your logo's path
          alt="Film Type Logo"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            width: 70, // Adjust width
            height: "auto", // Keep aspect ratio
          }}
        />

        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
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