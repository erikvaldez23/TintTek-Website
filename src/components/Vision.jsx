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
    description: "Delivering top-quality services at competitive rates, ensuring the best value without compromising on excellence.",
    icon: <FaHandHoldingUsd size={40} />,
  },
];

const Vision = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#000", textAlign: "center" }}>
      <Container maxWidth="md">
        {/* Vision Statement */}
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fff", fontFamily: "Poppins, sans-serif", mb: 4 }}>
          Our Vision
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, fontSize: "1.2rem", color: "#fff", lineHeight: 1.6 }}>
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
                  display: "flex", // ✅ Ensures uniform height
                  flexDirection: "column", // ✅ Aligns content properly
                  justifyContent: "space-between", // ✅ Balances spacing
                  alignItems: "center", // ✅ Centers text & icons
                  py: 4,
                  px: 3,
                  minHeight: "220px", // ✅ Ensures all cards have the same height
                  boxShadow: 3,
                  borderRadius: 3,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Box sx={{ mb: 2, color: "#007bff" }}>{point.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {point.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray", textAlign: "center", maxWidth: "90%" }}>
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
