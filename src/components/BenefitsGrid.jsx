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
  Avatar,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SecurityIcon from "@mui/icons-material/Security";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import BoltIcon from "@mui/icons-material/Bolt";

// Data for benefits per service
const benefitsData = {
  "vehicle-window-tinting": [
    {
      title: "Blocks 99% of Harmful UV Rays",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "Window tinting provides a powerful shield against ultraviolet (UV) radiation, blocking up to 99% of harmful UV rays. This not only protects your skin from potential damage during extended drives but also safeguards your vehicle’s interior by preventing the fading and deterioration of upholstery, leather, dashboards, and other surfaces.",
    },
    {
      title: "Heat Rejection",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "High-quality window film significantly reduces the amount of solar heat that enters your vehicle, helping to maintain a cooler cabin environment. This makes your driving experience more comfortable, especially during hot summer months, while also reducing the need for excessive air conditioning—improving fuel efficiency or battery range in electric vehicles.",
    },
    {
      title: "Improved Privacy & Security",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "Tinted windows add a layer of privacy by making it more difficult for outsiders to see inside your vehicle. This helps protect valuables from theft, offers greater peace of mind, and enhances the security of your car whether parked or in motion.",
    },
    {
      title: "Reduces Glare from the Sun & Headlights",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Window tinting reduces the harsh glare caused by direct sunlight and bright headlights at night. This not only improves your visibility and comfort while driving but also reduces eye strain and fatigue during long trips, making driving safer and more enjoyable.",
    },
    {
      title: "Protects Interior from Fading",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "Direct sunlight can cause your vehicle’s interior materials to fade, crack, or deteriorate over time. Window film acts as a barrier against this damage by filtering out the sun’s harmful rays, helping preserve the color, texture, and quality of your seats, dash, and interior trim for years to come.",
    },
    {
      title: "Elevate Overall Appearannce",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "Tinted windows provide a sleek, professional, and stylish finish to any vehicle. It enhances the exterior aesthetics, giving your car a refined and modern look while complementing the overall design. This subtle upgrade adds a touch of sophistication and boosts your car’s visual appeal.",
    },
  ],
  "tesla-window-tinting": [
    {
      title: "Increased mileage per battery charge",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "By reducing the amount of heat entering the cabin, tinted windows decrease the need for constant air conditioning use. This lowers the strain on the battery, ultimately helping to conserve energy and extend your driving range—giving you more miles per charge and better overall efficiency.",
    },
    {
      title: "Heat reduction in cabin",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "Tesla window tinting offers advanced solar heat rejection technology that significantly reduces interior temperatures, even on the hottest days. This results in a cooler, more comfortable driving experience for both the driver and passengers, without over-reliance on climate control systems.",
    },
    {
      title: "Blocks 99% of harmful UV rays",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "Tinted film acts as a powerful barrier against UV radiation, blocking up to 99% of harmful rays. This not only helps protect your skin but also prevents long-term damage to your Tesla’s premium interior surfaces, including leather seats, dashboard, and trim.",
    },
    {
      title: "Reduces glare from the sun & headlights",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Tinting helps minimize disruptive glare from the sun and headlights, enhancing visibility and reducing strain on your eyes. Whether you're driving in broad daylight or at night, this added clarity ensures a safer, more relaxed driving experience.",
    },
    {
      title: "Provides increased privacy",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "Tesla window tinting enhances your personal privacy by making it more difficult for outsiders to see inside the cabin. It not only deters unwanted attention but also protects any belongings stored in your vehicle from curious eyes.",
    },
    {
      title: "Prevents unnecessary battery drainage",
      icon: <ColorLensIcon fontSize="large" />,
      description:
        "By lowering the interior temperature and reducing the use of air conditioning, window tinting minimizes battery consumption caused by climate control systems. This contributes to better battery health and improved long-term energy management for your Tesla.",
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
  "vehicle-paint-protection": [
    {
      title: "Exceptional Durability",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Stek PPF is engineered to withstand the toughest conditions, including road debris, gravel, and weathering elements. It prevents chips, scratches, and swirl marks that can diminish your vehicle's paintwork.",
    },
    {
      title: "Self-Healing Technology",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Stek PPF features advanced self-healing properties. Light scratches and swirl marks disappear when exposed to heat, keeping your car looking as fresh as the day it was protected.",
    },    {
      title: "Hydrophobic Properties",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Stek PPF is designed to repel water, dirt, and contaminants. This makes cleaning easier and reduces the frequency of washes, helping to maintain your vehicle's pristine appearance longer.",
    },    {
      title: "Invisible Shield",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "The film is nearly invisible and doesn’t alter your car’s color or finish. You get all the protection with none of the visual compromise, maintaining that flawless, high-gloss or matte finish.",
    },    {
      title: "UV Protection",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Stek PPF shields your vehicle’s paint from harmful UV rays, which helps prevent fading and oxidation, ensuring that your car’s color stays vibrant for years.",
    },    {
      title: "Scratch & Impact Protection",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Protect your vehicle from minor abrasions, stone chips, and scratches caused by road debris. Stek PPF is tough enough to absorb impacts, keeping your car looking like new.",
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
  "ceramic-coating": [
    {
      title: "Hydrophobic Protection",
      icon: <WbSunnyIcon fontSize="large" />,
      description:
        "Our ceramic coatings are designed to repel water like never before. Water beads up and rolls off the surface, reducing water spots and keeping your car cleaner for longer.",
    },
    {
      title: "Scratch & Swirl Resistance",
      icon: <SecurityIcon fontSize="large" />,
      description:
        "The protective layer helps guard against light scratches and swirl marks, ensuring your paint stays smooth and free of imperfections.",
    },
    {
      title: "UV Protection",
      icon: <VisibilityIcon fontSize="large" />,
      description:
        "Ceramic coatings create a barrier that protects your paint from harmful UV rays, preventing oxidation and fading over time. Keep your car looking new for years!",
    },
    {
      title: "Enhanced Gloss",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "Enjoy a brilliant, glossy finish that makes your vehicle shine with a depth and clarity that traditional waxes simply can’t match.",
    },
    {
      title: "Low Maintenance",
      icon: <HomeWorkIcon fontSize="large" />,
      description:
        "With ceramic protection, dirt, water, and other contaminants have a harder time sticking to the surface, making your car much easier to clean.",
    },
  ],
};

// Titles for each service benefits section
const titles = {
  "vehicle-window-tinting": "Benefits of Vehicle Window Tinting",
  "tesla-window-tinting": "Benefits of Tesla Window Tinting",
  "commercial-window-tinting": "Why Choose LLumar® Window Films?",
  "residential-window-tinting": "Why Choose LLumar®",
  "windshield-protection-film": "Why Choose ExoShield GT3?",
  "ceramic-coating": "Why Choose Ceramic Coating?",
  "vehicle-paint-correction": "Top Benefits",  
  "vehicle-paint-protection": "Why Choose Stek PPF? ",  
};

// Add custom color schemes per service
const colorSchemes = {
  "vehicle-window-tinting": {
    primary: "#2794d2",
    secondary: "#134d6b",
    cardBg: "rgba(25, 25, 25, 0.9)",
    textColor: "#fff",
    bgColor: "#000",
    accentColor: "#43a7e0"
  },
  "tesla-window-tinting": {
    primary: "#2794d2",
    secondary: "#134d6b",
    cardBg: "rgba(25, 25, 25, 0.9)",
    textColor: "#fff",
    bgColor: "#000",
    accentColor: "#ff4b50"
  },
  "commercial-window-tinting": {
    primary: "#2794d2",
    secondary: "#134d6b",
    cardBg: "#fff",
    textColor: "#000",
    bgColor: "#EEEEFF",
    accentColor: "#43a7e0"
  },
  "residential-window-tinting": {
    primary: "#2794d2",
    secondary: "#134d6b",
    cardBg: "rgba(25, 25, 25, 0.9)",
    textColor: "#fff",
    bgColor: "#000",
    accentColor: "#43a7e0"
  },
  "windshield-protection-film": {
    primary: "#2794d2",
    secondary: "#134d6b",
    cardBg: "rgba(25, 25, 25, 0.9)",
    textColor: "#fff",
    bgColor: "#000",
    accentColor: "#43a7e0"
  },
  "vehicle-paint-correction": {
    primary: "#2794d2",
    secondary: "#134d6b",
    cardBg: "rgba(25, 25, 25, 0.9)",
    textColor: "#fff",
    bgColor: "#000",
    accentColor: "#43a7e0"
  },
  "headlight-services": {
    primary: "#2794d2",
    secondary: "#134d6b",
    cardBg: "rgba(25, 25, 25, 0.9)",
    textColor: "#fff",
    bgColor: "#000",
    accentColor: "#ffdc7a"
  },
};

const BenefitsGrid = () => {
  const { serviceId } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const benefits = benefitsData[serviceId] || [];
  const title = titles[serviceId] || "Our Benefits";
  
  // Get color scheme for this service, default to vehicle window tinting colors
  const colors = colorSchemes[serviceId] || colorSchemes["vehicle-window-tinting"];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    },
  };

  const renderBenefitCard = (benefit, index) => {
    return (
      <motion.div
        variants={cardVariants}
        whileHover={{ 
          y: -10,
          boxShadow: `0 10px 25px rgba(${colors.primary.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(',')}, 0.2)` 
        }}
        style={{ height: "100%" }}
      >
        <Card
          sx={{
            height: "100%",
            backgroundColor: colors.cardBg,
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            overflow: "hidden",
            position: "relative",
            border: `1px solid ${colors.primary}25`, // 25 = 15% opacity in hex
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: `${colors.primary}`,
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
            },
          }}
        >
          <CardContent sx={{ 
            display: "flex", 
            flexDirection: "column", 
            height: "100%", 
            p: 3 
          }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar
                sx={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  width: 56,
                  height: 56,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                {React.isValidElement(benefit.icon) &&
                  React.cloneElement(benefit.icon, {
                    sx: { color: "#fff", fontSize: 28 },
                  })}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  ml: 2,
                  color: colors.textColor,
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                }}
              >
                {benefit.title}
              </Typography>
            </Box>
            
            <Divider sx={{ 
              my: 2, 
              opacity: 0.2, 
              backgroundImage: `linear-gradient(to right, transparent, ${colors.accentColor}, transparent)` 
            }} />
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: colors.textColor,
                opacity: 0.85,
                fontSize: { xs: "0.875rem", md: "0.95rem" },
                flexGrow: 1,
              }}
            >
              {benefit.description}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: colors.bgColor,
        backgroundImage: colors.bgColor === "#000" 
          ? "radial-gradient(circle at 10% 20%, rgba(40, 40, 40, 0.5) 0%, rgba(10, 10, 10, 0.5) 90%)"
          : "radial-gradient(circle at 10% 20%, rgba(220, 220, 220, 0.5) 0%, rgba(240, 240, 240, 0.5) 90%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements for visual interest */}
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
          top: "-150px",
          left: "-150px",
          zIndex: 0,
        }}
      />
      
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.secondary}20 0%, transparent 70%)`,
          bottom: "-200px",
          right: "-200px",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 4 },
          position: "relative",
          zIndex: 1,
          m: "auto",
          maxWidth: "1500px",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={titleVariants}>
            <Typography
              variant={isMobile ? "h4" : "h2"}
              align="center"
              sx={{
                fontWeight: "800",
                mb: { xs: 4, md: 5 },
                letterSpacing: 1.5,
                color: colors.textColor,
                position: "relative",
                display: "inline-block",
                left: "50%",
                transform: "translateX(-50%)",
                // "&::after": {
                //   content: '""',
                //   position: "absolute",
                //   bottom: "-10px",
                //   left: "50%",
                //   transform: "translateX(-50%)",
                //   width: "80px",
                //   height: "4px",
                //   background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})`,
                //   borderRadius: "2px",
                // },
              }}
            >
              {title}
            </Typography>
          </motion.div>

          {isMobile ? (
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                gap: 3,
                pb: 3,
                scrollSnapType: "x mandatory",
                "&::-webkit-scrollbar": { display: "none" },
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              {benefits.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: "0 0 85%",
                    minWidth: "85%",
                    scrollSnapAlign: "center",
                    pr: index === benefits.length - 1 ? 3 : 0,
                  }}
                >
                  {renderBenefitCard(benefit, index)}
                </Box>
              ))}
            </Box>
          ) : (
            <Grid 
              container 
              spacing={4} 
              justifyContent="center"
            >
              {benefits.map((benefit, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={isMedium ? 6 : 4} 
                  key={index}
                >
                  {renderBenefitCard(benefit, index)}
                </Grid>
              ))}
            </Grid>
          )}
        </motion.div>
      </Box>
    </Box>
  );
};

export default BenefitsGrid;