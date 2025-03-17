import React from "react";
import { Box, Typography } from "@mui/material";
import CallToAction from "../CallToAction";
import Contact from "../Contact";
import QuickLinks from "../QuickLinks";
import Footer from "../Footer";

const CommercialSimulator = () => {
  return (
    <>
      {/* Header Section with 35vh height */}
      <Box
        sx={{
            position: "relative",
            width: "100%",
            height: { xs: "35vh", md: "35vh" },
            overflow: "hidden",
            backgroundColor: "#000",
          }}
      >
           <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    px: 2,
                  }}
                >
              <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                sm: "2.5rem",
                md: "3.5rem",
                lg: "4rem",
              },
            }}
          >
            COMMERCIAL WINDOW FILM VIEWER
          </Typography>
      </Box>
      </Box>


      <Box style={{ width: '100vw', height: '1000px', overflow: 'hidden' }}>
      <object
        data="https://llumar.com/na/en/architectural/interactive-window-film-tools/solar-decorative-film-viewer/dealer-commercial-solar-and-decorative/"
        width="100%"
        height="1000px"
        style={{ border: 'none' }}
        title="Llumar Interactive Viewer"
      />
    </Box>

      {/* Existing Call To Action Component */}
      <CallToAction />

      {/* Existing Contact Component */}
      <Contact />

      {/* Existing Quick Links Component */}
      <QuickLinks />

      {/* Existing Footer Component */}
      <Footer />
    </>
  );
};

export default CommercialSimulator;
