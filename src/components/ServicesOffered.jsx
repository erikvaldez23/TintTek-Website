import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LayersIcon from "@mui/icons-material/Layers";

// Define service-specific content
const serviceOptions = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting Services",
    list: [
      "Standard Tint",
      "Ceramic Tint",
      "Nano-Ceramic Tint",
    ],
    filmTypes: [
      { name: "Llumar ATC", description: "A budget-friendly dyed-stable film that blocks 99% of harmful UV rays and enhances your vehicle’s appearance." },
      { name: "Llumar CTX", description: "A durable, non-metal window tint with multiple color-stable charcoal shades for a non-reflective finish." },
      { name: "Llumar IRX", description: "A premium nano-ceramic film that targets infrared rays for superior heat rejection and cooling." },
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
  // Add other services here...
};

const ServicesOffered = ({ serviceId }) => {
  const service = serviceOptions[serviceId];

  if (!service) {
    return (
      <Typography variant="h4" textAlign="center">
        Services not found
      </Typography>
    );
  }

  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: "#292929", color: "#fff", width: "100vw" }}>
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
          SERVICES WE OFFER
        </Typography>

        {/* Service List */}
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          {service.title}
        </Typography>
        <List>
          {service.list.map((item, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#007BFF" }} />
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
                  backgroundColor: "#1E1E1E",
                  color: "#fff",
                  borderRadius: 2,
                  boxShadow: 3,
                  height: "100%",
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <LayersIcon sx={{ fontSize: 40, color: "#007BFF", mb: 1 }} />
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
