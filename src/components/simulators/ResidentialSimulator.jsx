import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SubCallToAction from "../SubCTA";
import SubContact from "../SubContact";
import SubQuickLinks from "../SubQuickLinks";
import Footer from "../key-components/Footer";

const CommercialSimulator = () => {
  return (
    <Box
      sx={{
        background: `
      linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 14%, rgba(0,0,0,0.0) 46%),
      radial-gradient(circle at top left, rgba(39,148,210,0.1), transparent 88%),
      radial-gradient(circle at bottom right, rgba(77,184,240,0.12), transparent 90%),
      linear-gradient(180deg, #000 0%, #0f0f0f 100%)
    `,
        color: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      <Helmet>
        <title>Residential Window Tinting Simulator | Tint Tek Plus</title>
        <meta
          name="description"
          content="Use our residential window tinting simulator to choose the right window tint for your home before installation."
        />
      </Helmet>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "50vh", md: "60vh" },
          overflow: "hidden",
          background: `
      linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 14%, rgba(0,0,0,0.0) 46%),
      radial-gradient(circle at top left, rgba(39,148,210,0.1), transparent 88%),
      radial-gradient(circle at bottom right, rgba(77,184,240,0.12), transparent 90%),
      linear-gradient(180deg, #000 0%, #0f0f0f 100%)
    `,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(39, 148, 210, 0.2) 0%, rgba(35, 10, 89, 0.2) 100%)",
            animation: "gradientShift 10s ease infinite",
            "@keyframes gradientShift": {
              "0%": { opacity: 0.4 },
              "50%": { opacity: 0.7 },
              "100%": { opacity: 0.4 },
            },
          }}
        />

        {/* Content Container */}
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "70%" },
              animation: "fadeInUp 1s ease-out",
              "@keyframes fadeInUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(20px)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#2794d2",
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: "block",
              }}
            >
              TINT TEK + INSIGHTS
            </Typography>

            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                color: "#fff",
                mb: 2,
                fontSize: { xs: "2.2rem", sm: "2.5rem", md: "3.5rem" },
                lineHeight: 1.1,
              }}
            >
              RESIDENTIAL WINDOW TINTING SIMULATOR
            </Typography>

            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: "600px",
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Protect Your Home from Heat and Glare While Enhancing Privacy and Aesthetics
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box style={{ width: "100vw", height: "1000px", overflow: "hidden" }}>
        <object
          data="https://llumar.com/na/en/architectural/interactive-window-film-tools/viewer-for-home/dealer-home-solar-and-decorative/"
          width="100%"
          height="1000px"
          style={{ border: "none" }}
          title="Llumar Interactive Viewer"
        />
      </Box>

      <SubCallToAction />
      <SubContact />
      <SubQuickLinks />
      <Footer />
    </Box>
  );
};

export default CommercialSimulator;
