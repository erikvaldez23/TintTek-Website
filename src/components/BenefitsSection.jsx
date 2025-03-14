import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

// Example structure: [{ benefit: "Reduces Heat", detail: "Window tint can lower cabin temps by up to 15°F.", stat: "Studies show 60% heat rejection on average." }]
const BenefitsSection = ({ benefits }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const handleOpenModal = (benefitItem) => {
    setSelectedBenefit(benefitItem);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBenefit(null);
  };

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
        backgroundColor: "#EEEEFF",
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
                      justifyContent: "space-between", // Space out the content so the button is at the bottom
                      alignItems: "center",
                      gap: 1,
                      color: "#fff",
                      padding: isMobile ? "10px" : "16px",
                      borderRadius: 2,
                      backgroundColor: "#000",
                      height: isMobile ? "180px" : "170px", // Set a fixed height for consistency
                      textAlign: "center",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <CheckCircleIcon
                        sx={{ color: "#2794d2", fontSize: isMobile ? 24 : 28 }}
                      />
                      <Typography
                        variant={isMobile ? "body2" : "body1"}
                        fontWeight="bold"
                        sx={{
                          maxWidth: "100%",
                        }}
                      >
                        {item.benefit}
                      </Typography>
                    </Box>
                    <Button
                      component={motion.a}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      sx={{
                        mt: 1,
                        backgroundColor: "#2794d2",
                        color: "#000",
                        fontWeight: "bold",
                        px: isMobile ? 3 : 4,
                        py: isMobile ? 1.2 : 1,
                        borderRadius: "30px",
                        textTransform: "uppercase",
                        fontSize: isMobile ? "1rem" : "0.6rem",
                        width: isMobile ? "100%" : "auto",
                      }}
                      onClick={() => handleOpenModal(item)}
                    >
                      SEE MORE
                    </Button>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Modal Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              borderRadius: 4,
              padding: 3,
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
            {selectedBenefit?.benefit}
          </DialogTitle>
          <Divider sx={{ mb: 2 }} />
          <DialogContent>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {selectedBenefit?.detail}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#555" }}
            >
              📊 {selectedBenefit?.stat}
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", mt: 2 }}>
            <Button
              onClick={handleClose}
              variant="contained"
              sx={{
                borderRadius: "25px",
                backgroundColor: "#000",
                fontWeight: "bold",
                px: 4,
                "&:hover": { backgroundColor: "#333" },
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default BenefitsSection;
