import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"; // ✅ Import Icons
import { styled } from "@mui/system";
import logo from "../../public/logo.png"; // Ensure correct path

const NavbarContainer = styled(Box)({
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
});

const Topbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const isMobile = window.innerWidth <= 900;
  const navigate = useNavigate();
  const location = useLocation();

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setDrawerOpen(false);
      return;
    }

    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const offset = 80;
    const targetPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolling ? "white" : "transparent",
          color: scrolling ? "black" : "white",
          boxShadow: scrolling ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease-in-out",
          width: "100vw",
          left: 0,
          top: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <NavbarContainer>
            {/* Logo */}
            <Box
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: "50px", marginRight: "10px" }}
              />
            </Box>

            {isMobile ? (
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <FaBars />
              </IconButton>
            ) : (
              <Box display="flex" gap={3}>
                {["Gallery", "Pricing", "About", "Reviews", "Contact"].map(
                  (item) => (
                    <Button
                      key={item}
                      color="inherit"
                      onClick={() => scrollToSection(item.toLowerCase())}
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: 500,
                        letterSpacing: "0.5px",
                        transition: "color 0.3s",
                        "&:hover": { color: "#007bff" },
                      }}
                    >
                      {item}
                    </Button>
                  )
                )}
              </Box>
            )}
          </NavbarContainer>
        </Toolbar>
      </AppBar>

      {/* 🏆 Mobile Drawer (Full-Screen, Sliding from Top) */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        transitionDuration={500}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            width: "100vw",
            minHeight: "90vh", // Ensure it takes up the full height
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around", // Evenly distribute content
            alignItems: "center",
            textAlign: "center",
            padding: "5vh 0",
          },
        }}
      >
        {/* Close Button */}
        <Box sx={{ position: "absolute", top: 20, right: 20 }}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "white", fontSize: 30 }}
          >
            <FaTimes />
          </IconButton>
        </Box>

        {/* Navigation Links */}
        <List sx={{ textAlign: "center", p: 0 }}>
          {["Gallery", "Pricing", "About", "Reviews", "Contact"].map((item) => (
            <ListItem
              button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    fontSize: "32px", // Force font size
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "uppercase",
                    textAlign: "center",
                    "&:hover": { color: "#d4c1a5" },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
  {/* Get a Quote Button */}
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#007bff",
      color: "black",
      fontSize: "22px",
      fontWeight: "bold",
      borderRadius: "40px",
      minWidth: "250px", // Ensures same width
      height: "60px", // Ensures same height
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "none",
    }}
  >
    GET A QUOTE
  </Button>

  {/* Ask a Question Button */}
  <Button
    variant="contained"
    sx={{
      mt: 2,
      backgroundColor: "#222",
      color: "white",
      fontSize: "22px",
      fontWeight: "bold",
      borderRadius: "40px",
      minWidth: "250px", // Same width as the first button
      height: "60px", // Same height as the first button
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "none",
    }}
  >
    ASK A QUESTION
  </Button>
</Box>


        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: 4, mt: 6 }}>
          {[FaFacebook, FaTiktok, FaInstagram, FaYoutube].map((Icon, index) => (
            <IconButton key={index} sx={{ color: "white", fontSize: "36px" }}>
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Topbar;
