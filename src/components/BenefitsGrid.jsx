import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SecurityIcon from "@mui/icons-material/Security";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ColorLensIcon from "@mui/icons-material/ColorLens";

// Data for benefits per service
const benefitsData = {
  "vehicle-window-tinting": [
    {
      title: "Blocks 99% of Harmful UV Rays",
      icon: <HomeWorkIcon fontSize="large" />,
      description: "Window tinting provides a powerful shield against ultraviolet (UV) radiation, blocking up to 99% of harmful UV rays. This not only protects your skin from potential damage during extended drives but also safeguards your vehicle’s interior by preventing the fading and deterioration of upholstery, leather, dashboards, and other surfaces.",
    },
    {
      title: "Heat Rejection",
      icon: <SecurityIcon fontSize="large" />,
      description: "High-quality window film significantly reduces the amount of solar heat that enters your vehicle, helping to maintain a cooler cabin environment. This makes your driving experience more comfortable, especially during hot summer months, while also reducing the need for excessive air conditioning—improving fuel efficiency or battery range in electric vehicles.",
    },
    {
      title: "Improved Privacy & Security",
      icon: <VisibilityIcon fontSize="large" />,
      description: "Tinted windows add a layer of privacy by making it more difficult for outsiders to see inside your vehicle. This helps protect valuables from theft, offers greater peace of mind, and enhances the security of your car whether parked or in motion.",
    },
    {
      title: "Reduces Glare from the Sun & Headlights",
      icon: <WbSunnyIcon fontSize="large" />,
      description: "Window tinting reduces the harsh glare caused by direct sunlight and bright headlights at night. This not only improves your visibility and comfort while driving but also reduces eye strain and fatigue during long trips, making driving safer and more enjoyable.",
    },
    {
      title: "Protects Interior from Fading",
      icon: <ColorLensIcon fontSize="large" />,
      description: "Direct sunlight can cause your vehicle’s interior materials to fade, crack, or deteriorate over time. Window film acts as a barrier against this damage by filtering out the sun’s harmful rays, helping preserve the color, texture, and quality of your seats, dash, and interior trim for years to come.",
    },
    {
      title: "Elevate Overall Appearannce",
      icon: <ColorLensIcon fontSize="large" />,
      description: "Tinted windows provide a sleek, professional, and stylish finish to any vehicle. It enhances the exterior aesthetics, giving your car a refined and modern look while complementing the overall design. This subtle upgrade adds a touch of sophistication and boosts your car’s visual appeal.",
    },
  ],
  "tesla-window-tinting": [
    {
      title: "Increased mileage per battery charge",
      icon: <HomeWorkIcon fontSize="large" />,
      description: "By reducing the amount of heat entering the cabin, tinted windows decrease the need for constant air conditioning use. This lowers the strain on the battery, ultimately helping to conserve energy and extend your driving range—giving you more miles per charge and better overall efficiency.",
    },
    {
      title: "Heat reduction in cabin",
      icon: <SecurityIcon fontSize="large" />,
      description: "Tesla window tinting offers advanced solar heat rejection technology that significantly reduces interior temperatures, even on the hottest days. This results in a cooler, more comfortable driving experience for both the driver and passengers, without over-reliance on climate control systems.",
    },
    {
      title: "Blocks 99% of harmful UV rays",
      icon: <VisibilityIcon fontSize="large" />,
      description: "Tinted film acts as a powerful barrier against UV radiation, blocking up to 99% of harmful rays. This not only helps protect your skin but also prevents long-term damage to your Tesla’s premium interior surfaces, including leather seats, dashboard, and trim.",
    },
    {
      title: "Reduces glare from the sun & headlights",
      icon: <WbSunnyIcon fontSize="large" />,
      description: "Tinting helps minimize disruptive glare from the sun and headlights, enhancing visibility and reducing strain on your eyes. Whether you're driving in broad daylight or at night, this added clarity ensures a safer, more relaxed driving experience.",
    },
    {
      title: "Provides increased privacy",
      icon: <ColorLensIcon fontSize="large" />,
      description: "Tesla window tinting enhances your personal privacy by making it more difficult for outsiders to see inside the cabin. It not only deters unwanted attention but also protects any belongings stored in your vehicle from curious eyes.",
    },
    {
      title: "Prevents unnecessary battery drainage",
      icon: <ColorLensIcon fontSize="large" />,
      description: "By lowering the interior temperature and reducing the use of air conditioning, window tinting minimizes battery consumption caused by climate control systems. This contributes to better battery health and improved long-term energy management for your Tesla.",
    },
  ],
  "commercial-window-tinting": [
    {
      title: "Energy Efficiency & Cost Savings",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "Window tinting with LLumar® helps reduce heat and light, allowing your HVAC system to work less and resulting in significant energy savings. It can lower cooling costs by up to 50%, making your space more energy-efficient.",
    },
    {
      title: "Enhanced Privacy & Security",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "LLumar® films improve privacy while still letting natural light filter in. They also strengthen your windows, reducing the risk of break-ins and vandalism, with studies showing a 20% reduction in break-ins.",
    },
    {
      title: "Glare Reduction & Comfort",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "Tinted windows with LLumar® reduce glare by up to 80%, making spaces more comfortable for employees and customers, especially in areas with screens or displays.",
    },
    {
      title: "UV Protection & Preservation of Interiors",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Our LLumar® films block up to 99% of UV rays, protecting your furnishings, artwork, and flooring from fading and deterioration, helping them last longer and stay looking new.",
    },
    {
      title: "Custom Solutions & Aesthetic Appeal",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "We offer a variety of LLumar® films for different needs, from solar control to privacy-enhancing and security films, all tailored to enhance the look and performance of your space.",
    },
  ],
  "residential-window-tinting": [
    {
      title: "Energy Efficiency & Cost Savings",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Window tinting is an easy and effective way to reduce your energy costs. By blocking a significant amount of heat from entering your home, it helps maintain a more comfortable indoor temperature year-round.",
    },
    {
      title: "UV Protection & Skin Health",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "Window tints block up to 99% of harmful ultraviolet (UV) rays that contribute to skin damage, aging, and even skin cancer, protecting your health while indoors.",
    },
    {
      title: "Improved Comfort & Glare Reduction",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "With tinted windows, you can enjoy natural sunlight without the uncomfortable glare from the sun, which is especially important near TVs, computers, or workstations. It creates a more comfortable and pleasant living space.",
    },
    {
      title: "Enhanced Privacy & Security",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "Tinted windows make it more difficult for people to see inside your home, offering you increased privacy while still letting natural light in. They also make your home a less attractive target for burglars.",
    },
    {
      title: "Protection for Furnishings & Interiors",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "Window tinting helps preserve the beauty of your home by preventing sun damage to furniture, flooring, and artwork. It acts as a protective shield, reducing fading and wear from UV rays and solar heat.",
    },
  ],
  "windshield-protection-film": [
    {
      title: "Impact Resistance",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "ExoShield GT3 is engineered to deliver superior abrasion resistance, durability, and weatherability. It boasts a thickness of five mils—about 2.5 times that of a human hair—providing robust protection against chips and cracks caused by road debris. Designed to give you 6X more impact protection, GT3+ is truly made to save your glass.",
    },
    {
      title: "Advanced Nanocoating Technology",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "Incorporating second-generation Endurance Class nanocoatings, ExoShield GT3 ensures a strong bond between layers, preventing delamination and extending the film's lifespan.",
    },
    {
      title: "Optical Clarity",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "As one of the most optically clear films on the market, ExoShield GT3 is virtually invisible once installed, maintaining the natural appearance of your vehicle while providing robust protection.",
    },
    {
      title: "UV & Heat Rejection",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "The film blocks up to 99% of harmful UV rays, reducing interior heat buildup and protecting your vehicle's interior from sun damage. ",
    },
    {
      title: "Long Term Durability",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "Designed to withstand various driving conditions, ExoShield GT3 is weather-resistant and maintains its protective qualities over time, ensuring lasting windshield protection. ",
    },
    {
      title: "Made in The USA",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "Your windshield protection film is only as good as the materials it's made with. We use the highest quality PET (Polyethylene Terephthalate) combined with our own proprietary coatings tech to deliver you the best quality.",
    },
  ],
  "vehicle-paint-correction": [
    {
      title: "Restores Paint to Its Original Beauty",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Revitalize your vehicle’s paint, bringing back its glossy, vibrant finish. Paint correction removes imperfections that dull your car’s look, giving it a smooth, polished surface that looks brand new.",
    },
    {
      title: "Eliminates Swirl Marks & Scratches",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "Over time, swirl marks and scratches can make your car’s paint look worn. Our specialized process targets and eliminates these imperfections, leaving a flawless, smooth finish.",
    },
    {
      title: "Enhances Gloss & Clarity",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "Achieve a high-gloss, mirror-like shine that enhances the depth and clarity of your car's color. Paint correction brings out the natural brilliance of your vehicle’s paint, making it look fresh and polished.",
    },
    {
      title: "Prepares Your Car for Protective Coatings",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "After the paint is corrected, the surface is ready for protective coatings like ceramic coatings or sealants. This ensures a longer-lasting finish and adds an extra layer of protection against environmental elements.",
    },
    {
      title: "Boosts Resale Value",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "A well-maintained exterior can increase the resale value of your vehicle. Paint correction not only improves the appearance of your car but also preserves its value, making it more attractive to potential buyers.",
    },
  ],
  "headlight-services": [
    {
      title: "Durable Protection",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Safeguards against rock chips, cracks, scratches, and other road hazards.",
    },
    {
      title: "Enhanced Aesthetics",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "Over time, swirl marks and scratches can make your car’s paint look worn. Our specialized process targets and eliminates these imperfections, leaving a flawless, smooth finish.",
    },
    {
      title: "Hydrophobic Properties",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "Repels water, making your lights easier to clean and maintain.",
    },
    {
      title: "Self-Healing",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "The film's advanced technology allows minor scratches to heal with heat, maintaining a smooth surface.",
    },
  ],
};

// Titles for each service benefits section
const titles = {
  "vehicle-window-tinting": "Benefits of Vehicle Window Tinting",
  "tesla-window-tinting": "Benefits of Tesla Window Tinting",
  "commercial-window-tinting": "Why Choose LLumar® Window Films?",
  "residential-window-tinting": "Why Choose LLumar®",
  "windshield-protection-film": "Why Choose ExoShield GT3",
};

const BenefitsGrid = () => {
  const { serviceId } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const benefits = benefitsData[serviceId] || [];
  const title = titles[serviceId] || "Our Benefits";

  return (
    <Box sx={{ backgroundColor: serviceId === "commercial-window-tinting" ? "#f4f4f4" : "#000" }}>

      <Box
        sx={{
          backgroundColor: serviceId === "commercial-window-tinting" ? "#f4f4f4" : "#000",
          py: 6,
          px: 2,
          color: serviceId === "commercial-window-tinting" ? "#000" : "#fff",
          m: "auto", 
          maxWidth: "1500px",
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          align="center"
          sx={{
            fontWeight: "bold",
            mb: 4,
            // textTransform: "uppercase",
            letterSpacing: 1.5,
            color: serviceId === "commercial-window-tinting" ? "#000" : "#fff",
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
                    backgroundColor: serviceId === "commercial-window-tinting" ? "#000" : "#292929",
                    backdropFilter: "blur(8px)",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "300px",
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
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "#fff" }}
                    >
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
    </Box>
  );
};

export default BenefitsGrid;
