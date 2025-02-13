import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  FaTools,
  FaShieldAlt,
  FaCar,
  FaHandHoldingUsd,
  FaBullseye,
  FaUsers,
} from "react-icons/fa"; // Added icons
import { motion } from "framer-motion"; // Animation Library

// Vision Points
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

// Mission Points
const missionPoints = [
  {
    id: 1,
    title: "Our Goal",
    description:
      "To be the industry leader in innovative and sustainable window tinting solutions.",
    icon: <FaBullseye size={50} />,
  },
  {
    id: 2,
    title: "Commitment to Community",
    description:
      "Fostering relationships by giving back to the community through exceptional service.",
    icon: <FaUsers size={50} />,
  },
];

const Vision = () => {
  return (
    <Box
      sx={{ py: 8, background: "#EEEEFF", }}
    >
      <Container maxWidth="md">
        {/* Company Vision Section */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#000",
            fontFamily: "Poppins, sans-serif",
            mb: 4,
            textAlign: "center",
            textShadow: "3px 3px 10px rgba(255, 255, 255, 0.2)",
          }}
        >
          Our Vision
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            fontSize: "1.3rem",
            color: "#000",
            lineHeight: 1.8,
            maxWidth: "900px",
            mx: "auto",
            textAlign: "center",
            textShadow: "1px 1px 5px rgba(255, 255, 255, 0.1)",
          }}
        >
          At TintTek+, our vision is to be the leading choice for high-quality
          window tinting services, delivering craftsmanship and exceptional
          value. We are dedicated to enhancing the comfort, style, and privacy
          of every vehicle and building we serve, ensuring customer satisfaction
          through precision, professionalism, and affordable pricing.
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
                    background: "#121212",
                    color: "#fff",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 30px #2794d2",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2, color: "#2794d2" }}>{point.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {point.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ccc", mt: 1 }}>
                      {point.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Divider */}
        {/* <Box
          sx={{
            height: "4px",
            backgroundColor: "#007bff",
            width: "80px",
            mx: "auto",
            my: 6,
            borderRadius: "10px",
          }}
        ></Box> */}

        {/* Company Mission Section */}
        {/* <Box sx={{
          paddingTop: "120px"
        }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Poppins, sans-serif",
            mb: 4,
            textAlign: "center",
            textShadow: "3px 3px 10px rgba(255, 255, 255, 0.2)",
          }}
        >
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 6,
            fontSize: "1.3rem",
            color: "#ddd",
            lineHeight: 1.8,
            maxWidth: "900px",
            mx: "auto",
            textAlign: "center",
            textShadow: "1px 1px 5px rgba(255, 255, 255, 0.1)",
          }}
        >
          Our mission is to exceed customer expectations by offering
          cutting-edge, sustainable tinting solutions that protect, enhance, and
          add value to vehicles and properties. We aim to foster long-term
          relationships built on trust, quality, and innovation.
        </Typography>

        <Grid container spacing={4}>
          {missionPoints.map((point, index) => (
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
                    background: "#1a1a1a",
                    color: "#fff",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 30px rgba(0, 255, 123, 0.6)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2, color: "#00c853" }}>{point.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {point.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ccc", mt: 1 }}>
                      {point.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        </Box> */}
      </Container>
    </Box>
  );
};

export default Vision;
