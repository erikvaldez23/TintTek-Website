import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaTools, FaShieldAlt, FaCar, FaHandHoldingUsd } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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

// Variants for parent container to stagger children on desktop
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variant for each card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const Vision = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <Box sx={{ py: isMobile ? 6 : 8, background: "#EEEEFF" }}>
      <Container maxWidth="md">
        {/* Title with on-scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant={isMobile ? "h4" : "h2"}
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "#000",
              textAlign: "center",
              width: "100%",
            }}
          >
            OUR VISION
          </Typography>
        </motion.div>

        {/* Description with on-scroll animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant={isMobile ? "body2" : "body1"}
            sx={{
              mb: 5,
              fontSize: isMobile ? "1rem" : "1.4rem",
              color: "#000",
              lineHeight: 1.6,
              maxWidth: "900px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            At TintTek+, our vision is to be the leading choice for high-quality
            window tinting services, delivering craftsmanship and exceptional
            value. We are dedicated to enhancing the comfort, style, and privacy
            of every vehicle and building we serve, ensuring customer satisfaction
            through precision, professionalism, and affordable pricing.
          </Typography>
        </motion.div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={"auto"} // Automatically sizes slides based on content
            centeredSlides={true} // Ensures the active slide is centered
            pagination={{ clickable: true }}
            style={{
              paddingBottom: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {visionPoints.map((point) => (
              <SwiperSlide
                key={point.id}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
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
                      width: "80vw", // Ensures card takes up 80% of viewport width
                      maxWidth: "350px", // Prevents it from becoming too large on bigger mobile screens
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
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
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* Desktop Grid with staggered on-scroll animations */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Grid container spacing={4} justifyContent="center">
              {visionPoints.map((point, index) => (
                <Grid item xs={12} sm={6} key={point.id}>
                  <motion.div variants={cardVariants}>
                    <Card
                      sx={{
                        textAlign: "center",
                        py: 4,
                        px: 2,
                        borderRadius: 3,
                        height: "220px",
                        background: "#121212",
                        color: "#fff",
                        width: "100%",
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
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          {point.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#ccc", mt: 1 }}>
                          {point.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        )}
      </Container>
    </Box>
  );
};

export default Vision;
