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
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

const tintPackages = [
  {
    title: "Headlight Tint (2 Pair)",
    price: "$175",
    image: "/TintTek-Website/headlight/headlight.webp",
    // description:
    //   "A narrow strip across the top of the windshield to block excessive glare.",
  },
  {
    title: "Taillight Tint (2 Pair)",
    price: "$175",
    image: "/TintTek-Website/headlight/taillight.jpg",
    // description:
    //   "Match the front windows to the factory tint of the rear windows.",
  },
  {
    title: "Reflectors (2 Pair)",
    price: "$75",
    image: "/TintTek-Website/headlight/reflector.jpg",
    // description:
    //   "A full-tint windshield package for optimal UV and heat rejection.",
  },
];

const HeadlightPackages = () => {
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
    <Box sx={{ py: 6, px: 2, backgroundColor: "#EEEEFF" }}>
      {/* Section Title */}
      <Typography
        variant={isMobile ? "h4" : "h2"}
        align="center"
        sx={{
          color: "#000",
          mb: 1,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Services & Pricing
      </Typography>

      {/* Card Grid */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          {tintPackages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: "#111",
                  color: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
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
                  sx={{
                    objectFit: "cover",
                  }}
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
                      variant="h6"
                      sx={{ color: "#00FF99", mb: 1 }}
                    >
                      {pkg.price}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      sx={{ color: "#ccc", lineHeight: 1.5 }}
                    >
                      {pkg.description}
                    </Typography> */}
                  </Box>

                  {/* Get an Estimate Button */}
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
                      px: isMobile ? 3 : 4,
                      py: isMobile ? 1.2 : 1.5,
                      borderRadius: "30px",
                      textTransform: "uppercase",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      width: isMobile ? "100%" : "auto",
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
      </Box>

      {/* Modal Dialog with the Iframe */}
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

export default HeadlightPackages;
