import React from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SecurityIcon from "@mui/icons-material/Security";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ColorLensIcon from "@mui/icons-material/ColorLens";

// Data for benefits per service
const benefitsData = {
  "commercial-window-tinting": [
    {
      title: "Energy Efficiency & Cost Savings",
      icon: <HomeWorkIcon fontSize="large" />,
      description: "Window tinting with LLumar® helps reduce heat and light, allowing your HVAC system to work less and resulting in significant energy savings. It can lower cooling costs by up to 50%, making your space more energy-efficient.",
    },
    {
      title: "Enhanced Privacy & Security",
      icon: <SecurityIcon fontSize="large" />,
      description: "LLumar® films improve privacy while still letting natural light filter in. They also strengthen your windows, reducing the risk of break-ins and vandalism, with studies showing a 20% reduction in break-ins.",
    },
    {
      title: "Glare Reduction & Comfort",
      icon: <VisibilityIcon fontSize="large" />,
      description: "Tinted windows with LLumar® reduce glare by up to 80%, making spaces more comfortable for employees and customers, especially in areas with screens or displays.",
    },
    {
      title: "UV Protection & Preservation of Interiors",
      icon: <WbSunnyIcon fontSize="large" />,
      description: "Our LLumar® films block up to 99% of UV rays, protecting your furnishings, artwork, and flooring from fading and deterioration, helping them last longer and stay looking new.",
    },
    {
      title: "Custom Solutions & Aesthetic Appeal",
      icon: <ColorLensIcon fontSize="large" />,
      description: "We offer a variety of LLumar® films for different needs, from solar control to privacy-enhancing and security films, all tailored to enhance the look and performance of your space.",
    },
  ],
  "residential-window-tinting": [
    {
      title: "Energy Efficiency & Cost Savings",
      icon: <WbSunnyIcon fontSize="large" />,
      description: "Window tinting is an easy and effective way to reduce your energy costs. By blocking a significant amount of heat from entering your home, it helps maintain a more comfortable indoor temperature year-round.",
    },
    {
      title: "UV Protection & Skin Health",
      icon: <SecurityIcon fontSize="large" />,
      description: "Window tints block up to 99% of harmful ultraviolet (UV) rays that contribute to skin damage, aging, and even skin cancer, protecting your health while indoors.",
    },
    {
      title: "Improved Comfort & Glare Reduction",
      icon: <VisibilityIcon fontSize="large" />,
      description: "With tinted windows, you can enjoy natural sunlight without the uncomfortable glare from the sun, which is especially important near TVs, computers, or workstations. It creates a more comfortable and pleasant living space.",
    },
    {
      title: "Enhanced Privacy & Security",
      icon: <HomeWorkIcon fontSize="large" />,
      description: "Tinted windows make it more difficult for people to see inside your home, offering you increased privacy while still letting natural light in. They also make your home a less attractive target for burglars.",
    },
    {
      title: "Protection for Furnishings & Interiors",
      icon: <ColorLensIcon fontSize="large" />,
      description: "Window tinting helps preserve the beauty of your home by preventing sun damage to furniture, flooring, and artwork. It acts as a protective shield, reducing fading and wear from UV rays and solar heat.",
    },
  ],
  "windshield-protection-film": [
    {
      title: "Impact Resistance",
      icon: <WbSunnyIcon fontSize="large" />,
      description: "ExoShield GT3 is engineered to deliver superior abrasion resistance, durability, and weatherability. It boasts a thickness of five mils—about 2.5 times that of a human hair—providing robust protection against chips and cracks caused by road debris. Designed to give you 6X more impact protection, GT3+ is truly made to save your glass.",
    },
    {
      title: "Advanced Nanocoating Technology",
      icon: <SecurityIcon fontSize="large" />,
      description: "Incorporating second-generation Endurance Class nanocoatings, ExoShield GT3 ensures a strong bond between layers, preventing delamination and extending the film's lifespan.",
    },
    {
      title: "Optical Clarity",
      icon: <VisibilityIcon fontSize="large" />,
      description: "As one of the most optically clear films on the market, ExoShield GT3 is virtually invisible once installed, maintaining the natural appearance of your vehicle while providing robust protection.",
    },
    {
      title: "UV & Heat Rejection",
      icon: <HomeWorkIcon fontSize="large" />,
      description: "The film blocks up to 99% of harmful UV rays, reducing interior heat buildup and protecting your vehicle's interior from sun damage. ",
    },
    {
      title: "Long Term Durability",
      icon: <ColorLensIcon fontSize="large" />,
      description: "Designed to withstand various driving conditions, ExoShield GT3 is weather-resistant and maintains its protective qualities over time, ensuring lasting windshield protection. ",
    },
    {
      title: "Made in The USA",
      icon: <ColorLensIcon fontSize="large" />,
      description: "Your windshield protection film is only as good as the materials it's made with. We use the highest quality PET (Polyethylene Terephthalate) combined with our own proprietary coatings tech to deliver you the best quality.",
    },
  ],
};

// Titles for each service benefits section
const titles = {
  "commercial-window-tinting": "Why Choose LLumar®",
  "residential-window-tinting": "Why Choose LLumar®",
  "windshield-protection-film": "Why Choose ExoShield GT3",
};

const BenefitsGrid = () => {
  // Get the service ID from the URL (e.g., "commercial-window-tinting" or "residential-window-tinting")
  const { serviceId } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Use the benefits data and title based on serviceId; fallback to an empty array and default title if not found
  const benefits = benefitsData[serviceId] || [];
  const title = titles[serviceId] || "Our Benefits";

  return (
    <Box
      sx={{
        background: "#EEEEFF",
        py: 6,
        px: 2,
        color: "#fff",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h2"}
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 4,
          textTransform: "uppercase",
          letterSpacing: 1.5,
          color: "#000",
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                sx={{
                  backgroundColor: "#000",
                  backdropFilter: "blur(8px)",
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 3,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 15px 25px rgba(0,0,0,0.5)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #2794d2, #1a7ca1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {React.isValidElement(benefit.icon) &&
                    React.cloneElement(benefit.icon, {
                      sx: { color: "#fff", fontSize: 30 },
                    })}
                </Box>

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BenefitsGrid;
