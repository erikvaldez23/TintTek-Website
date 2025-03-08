import { Box, Typography, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Each child animates 0.2s apart
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

const BenefitsSection = ({ benefits }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <Box
      sx={{
        py: isMobile ? 4 : 6, // Reduce padding for mobile
        px: isMobile ? 2 : 4, // Reduce horizontal padding
        backgroundColor: "#EEEEFF",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%", color: "#000" }}>
        <Typography
          variant={isMobile ? "h5" : "h2"} // Reduce heading size for mobile
          fontWeight="bold"
          textAlign="center"
          sx={{ mb: isMobile ? 2 : 3 }} // Reduce margin-bottom for mobile
        >
          WHAT ARE THE BENEFITS?
        </Typography>

        {/* Wrap the grid with a motion.div for staggered animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Grid container spacing={isMobile ? 2 : 3} justifyContent="center">
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <Paper
                    elevation={3} // Subtle shadow
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      color: "#fff",
                      padding: isMobile ? "10px" : "12px", // Reduce padding for mobile
                      borderRadius: 2,
                      backgroundColor: "#000",
                      minHeight: isMobile ? "100px" : "120px", // Adjust height for mobile
                      textAlign: "center",
                      transition: "all 0.3s ease-in-out", // Smooth transition

                      /* ✅ Hover Animations */
                      "&:hover": {
                        transform: "scale(1.05)", // Slight scale-up effect
                        boxShadow: "0px 0px 15px #2794d2", // Blue glow effect
                        backgroundColor: "#333", // Slightly lighter background
                      },
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "#2794d2", fontSize: isMobile ? 24 : 28 }} />
                    <Typography
                      variant={isMobile ? "body2" : "body1"} // Adjust text size
                      fontWeight="bold"
                      sx={{ maxWidth: "90%" }}
                    >
                      {benefit}
                    </Typography>
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
