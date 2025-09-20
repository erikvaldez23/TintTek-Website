import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const BenefitsSection = ({ benefits }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        py: isMobile ? 4 : 6,
        px: isMobile ? 2 : 2,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%", color: "#000" }}>
        <Typography
          variant={isMobile ? "h5" : "h2"}
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: isMobile ? 2 : 3 }}
        >
          WHAT ARE THE BENEFITS?
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={isMobile ? 2 : 3} justifyContent="center">
            {benefits.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <Paper
                    elevation={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "center",
                      color: "#fff",
                      padding: isMobile ? 2 : 3,
                      borderRadius: 2,
                      backgroundColor: "#000",
                      height: isMobile ? "260px" : "260px", // Uniform height
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{ color: "#2794d2", fontSize: isMobile ? 24 : 28, mb: 1 }}
                    />
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      {item.benefit}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ mb: 1, color: "#ccc", px: 1 }}
                    >
                      {item.detail}
                    </Typography>
                    {/* <Typography
                      variant="caption"
                      sx={{
                        fontStyle: "italic",
                        color: "#aaa",
                      }}
                    >
                      📊 {item.stat}
                    </Typography> */}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </Box>
  );
};

export default BenefitsSection;
