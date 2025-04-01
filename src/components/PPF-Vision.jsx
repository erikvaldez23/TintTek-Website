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
    title: "Expert Installation",
    description:
      "Our team is fully trained and experienced in the application of Stek PPF, ensuring a flawless, high-quality installation every time.",
    icon: <FaTools size={50} />,
  },
  {
    id: 2,
    title: "Top-Quality Products",
    description:
      "We exclusively use Stek PPF, which is renowned for its superior performance and durability in the industry.",
    icon: <FaShieldAlt size={50} />,
  },
  {
    id: 3,
    title: "Long-Term Value",
    description:
      "With the proper care, Stek PPF lasts for years, offering exceptional protection and preserving the value of your vehicle.",
    icon: <FaCar size={50} />,
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description:
      "At Tint Tek Plus, we go above and beyond to ensure you are fully satisfied with our services, ensuring that your car is protected with the best available technology.",
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PPFVision = () => {
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
            Why Choose Us?
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
            At Tint Tek Plus, we are committed to providing the highest level of
            protection for your vehicle, and that's why we offer Stek Paint
            Protection Film (PPF). This advanced, clear film acts as a shield
            for your car’s paint, protecting it from scratches, rock chips, road
            debris, and environmental contaminants. Stek PPF delivers an
            invisible, self-healing layer that keeps your car’s paint looking
            flawless, day after day.
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
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: "center",
                      py: 4,
                      px: 2,
                      borderRadius: 3,
                      minHeight: "300px", // enough to handle content but flexible
                      background: "#121212",
                      color: "#fff",
                      width: "80vw",
                      maxWidth: "350px",
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
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "center",
                        py: 4,
                        px: 2,
                        borderRadius: 3,
                        minHeight: "300px", // or test with 320–360px if needed
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
                        <Typography
                          variant="body1"
                          sx={{ color: "#ccc", mt: 1 }}
                        >
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

export default PPFVision;
