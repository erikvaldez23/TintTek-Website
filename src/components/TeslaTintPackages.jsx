import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const tintPackages = [
  {
    title: "Window Strip",
    price: "Starting at $60",
    image: "/TintTek-Website/t-window-tint/t-visor-strip.webp",
    description:
      "A narrow strip across the top of the windshield to block excessive glare.",
  },
  {
    title: "Front 2 Window Match",
    price: "Starting at $119",
    image: "/TintTek-Website/t-window-tint/t-front-two.webp",
    description:
      "Match the front windows to the factory tint of the rear windows.",
  },
  {
    title: "Full Windshield",
    price: "Starting at $249",
    image: "/TintTek-Website/t-window-tint/t-windshield.webp",
    description:
      "A full-tint windshield package for optimal UV and heat rejection.",
  },
  // {
  //   title: "Full Vehicle Surround",
  //   price: "Starting at $399",
  //   image: "/TintTek-Website/t-window-tint/tesla-full.webp",
  //   description:
  //     "Complete tint coverage for maximum privacy, comfort, and style.",
  // },
  {
    title: "Full Sunroof",
    price: "Starting at $200",
    image: "/TintTek-Website/t-window-tint/t-sunroof.webp",
    description:
      "Complete tint coverage for maximum privacy, comfort, and style.",
  },
];

const TeslaTintPackages = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#EEEEFF", // Dark background
      }}
    >
      {/* Section Title */}
      <Typography
        variant={isMobile ? "h4" : "h2"}
        align="center"
        sx={{
          color: "#000",
          mb: 4,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Additional Services We Offer
      </Typography>

      {/* Card Grid */}

      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        {isMobile ? (
          // 📱 MOBILE CAROUSEL
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: 2,
              px: 1,
              pb: 3,
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar
            }}
          >
            {tintPackages.map((pkg, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 85%",
                  scrollSnapAlign: "center",
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "#111",
                    color: "#fff",
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={pkg.image}
                    alt={pkg.title}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          textTransform: "uppercase",
                        }}
                      >
                        {pkg.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#00FF99", mb: 1 }}
                      >
                        {pkg.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#ccc", lineHeight: 1.5 }}
                      >
                        {pkg.description}
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
                        mt: 3,
                        backgroundColor: "#2794d2",
                        color: "#000",
                        fontWeight: "bold",
                        px: 3,
                        py: 1.2,
                        borderRadius: "30px",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                        width: "100%",
                      }}
                      onClick={handleOpenModal}
                    >
                      Get an Estimate
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        ) : (
          // 🖥️ DESKTOP GRID
          <Grid container spacing={3} justifyContent="center">
            {tintPackages.map((pkg, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    backgroundColor: "#111",
                    color: "#fff",
                    borderRadius: 2,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={pkg.image}
                    alt={pkg.title}
                    sx={{ objectFit: "contain" }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          mb: 1,
                          textTransform: "uppercase",
                        }}
                      >
                        {pkg.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "#00FF99", mb: 1 }}
                      >
                        {pkg.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#ccc", lineHeight: 1.5 }}
                      >
                        {pkg.description}
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
                        mt: 3,
                        backgroundColor: "#2794d2",
                        color: "#000",
                        fontWeight: "bold",
                        px: 3,
                        py: 1.2,
                        borderRadius: "30px",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                        width: "100%",
                      }}
                      onClick={handleOpenModal}
                    >
                      Get an Estimate
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        fullWidth
        maxWidth="lg"
      >
        <Box sx={{ position: "relative" }}>
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.5)",
              zIndex: 1,
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
            width="100%"
            height="800px"
            style={{ border: "none" }}
            title="Fast Quote"
          ></iframe>
        </Box>
      </Dialog>
    </Box>
  );
};

export default TeslaTintPackages;
