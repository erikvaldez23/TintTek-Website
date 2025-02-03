import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { FaTools, FaShieldAlt, FaCar, FaHandHoldingUsd } from "react-icons/fa"; // Relevant icons
import { motion } from "framer-motion"; // Animation Library

const visionPoints = [
  {
    id: 1,
    title: "Craftsmanship",
    description:
      "Delivering superior quality with attention to detail and precision.",
    icon: <FaTools size={50} />,
  },
  {
    id: 2,
    title: "Protection & Privacy",
    description:
      "Enhancing comfort, style, and security through advanced tinting solutions.",
    icon: <FaShieldAlt size={50} />,
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    description:
      "Ensuring every client receives exceptional value and service.",
    icon: <FaCar size={50} />,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "Providing high-quality services at competitive rates.",
    icon: <FaHandHoldingUsd size={50} />,
  },
];

const Vision = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(to bottom, #0D0D0D, #000)", // Gradient background
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Vision Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            mb: 4,
            textShadow: "3px 3px 10px rgba(255, 255, 255, 0.2)",
          }}
        >
          Our Vision
        </Typography>

        {/* Vision Statement */}
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            fontSize: "1.3rem",
            color: "#ddd",
            lineHeight: 1.8,
            maxWidth: "900px",
            mx: "auto",
            textShadow: "1px 1px 5px rgba(255, 255, 255, 0.1)",
          }}
        >
          At TintTek+, our vision is to be your choice for high-quality window
          tinting services, delivering craftsmanship and exceptional value We
          are dedicated to enhancing the comfort, style, and privacy of every
          vehicle and building we serve, ensuring customer satisfaction through
          precision, professionalism, and affordable pricing.
        </Typography>

        {/* Vision Points */}
        <Grid container spacing={4}>
          {visionPoints.map((point, index) => (
            <Grid item xs={12} sm={6} key={point.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    py: 4,
                    px: 2,
                    borderRadius: 3,
                    minHeight: "220px",
                    background: "#121212", // Darker Card Background
                    color: "#fff",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 30px rgba(0, 123, 255, 0.6)",
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        mb: 2,
                        color: "#007bff",
                        textShadow: "0px 0px 10px rgba(0, 123, 255, 0.5)",
                      }}
                    >
                      {point.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                    >
                      {point.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ccc", fontSize: "1rem", mt: 1 }}
                    >
                      {point.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Vision;
