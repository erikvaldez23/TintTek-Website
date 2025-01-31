import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { FaTools, FaShieldAlt, FaCar, FaHandHoldingUsd } from "react-icons/fa"; // Relevant icons

const visionPoints = [
  {
    id: 1,
    title: "Craftsmanship",
    description: "Delivering superior quality with attention to detail and precision.",
    icon: <FaTools size={40} />,
  },
  {
    id: 2,
    title: "Protection & Privacy",
    description: "Enhancing comfort, style, and security through advanced tinting solutions.",
    icon: <FaShieldAlt size={40} />,
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    description: "Ensuring every client receives exceptional value and service.",
    icon: <FaCar size={40} />,
  },
  {
    id: 4,
    title: "Affordable Pricing",
    description: "Providing high-quality services at competitive rates.",
    icon: <FaHandHoldingUsd size={40} />,
  },
];

const Vision = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#e3eff4", textAlign: "center" }}> {/* Light bluish-gray background */}
      <Container maxWidth="md">
        {/* Vision Statement */}
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Poppins, sans-serif", mb: 4 }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: "1.2rem", color: "gray", lineHeight: 1.6 }}>
          <strong>At TintTek+,</strong> our vision is to be your choice for <strong>high-quality window tinting services</strong>,
          delivering <strong>craftsmanship</strong> and <strong>exceptional value</strong>. We are dedicated to enhancing the
          <strong> comfort, style, and privacy</strong> of every vehicle and building we serve, ensuring customer satisfaction
          through <strong>precision, professionalism,</strong> and <strong>affordable pricing</strong>.
        </Typography>

        {/* Vision Points */}
        <Grid container spacing={4}>
          {visionPoints.map((point) => (
            <Grid item xs={12} sm={6} key={point.id}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 4,
                  px: 2,
                  boxShadow: 3,
                  borderRadius: 3,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" }, // Hover effect
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2, color: "#007bff" }}>{point.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {point.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {point.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Vision;
