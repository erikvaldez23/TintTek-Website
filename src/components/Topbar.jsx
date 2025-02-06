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
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"; // ✅ Import Icons
import { useMediaQuery } from "@mui/material";
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
  const [quoteOpen, setQuoteOpen] = useState(false); // 🏆 New State for Modal
  const isMobile = useMediaQuery("(max-width:900px)");
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

  // 🏆 Handlers for Modal
  const handleOpenQuote = () => {
    setQuoteOpen(true);
    setDrawerOpen(false); // Close the mobile menu when opening the modal
  };

  const handleCloseQuote = () => {
    setQuoteOpen(false);
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
                {[
                  "Services",
                  "Gallery",
                  "Pricing",
                  "About",
                  "Reviews",
                  "Contact",
                ].map((item) => (
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
                ))}
              </Box>
            )}
          </NavbarContainer>
        </Toolbar>
      </AppBar>

      {/* 🏆 Mobile Drawer */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        transitionDuration={500}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            width: "100%",
            minHeight: "100dvh", // Ensure full screen, even with Safari URL bar
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            padding: "5vh 0",
            paddingBottom: "calc(env(safe-area-inset-bottom, 20px) + 10px)", // Ensures content isn't hidden by Safari bar
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "#000 !important",
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
          {[
            "Services",
            "Gallery",
            "Pricing",
            "About",
            "Reviews",
            "Contact",
          ].map((item) => (
            <ListItem
              button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  sx: {
                    fontWeight: "bold",
                    color: "white",
                    textTransform: "uppercase",
                    textAlign: "center",
                    fontSize: "35px", // Default font size
                    "@media (max-width: 430px)": { fontSize: "35px" }, // iPhone 16 Pro Max (430px)
                    "@media (max-width: 414px)": { fontSize: "30px" }, // iPhone 15/14 Plus (414px)
                    "@media (max-width: 390px)": { fontSize: "19px" }, // iPhone 15/14 Pro (390px)
                    "@media (max-width: 375px)": { fontSize: "18px" }, // iPhone 13 Mini (375px)
                    "@media (max-width: 360px)": { fontSize: "16px" }, // Small Androids (Pixel 4a)
                    "@media (max-width: 320px)": { fontSize: "14px" }, // iPhone SE (320px)
                    "&:hover": { color: "#007bff", cursor:"pointer" },
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Get a Quote Button */}
          <Button
            variant="contained"
            onClick={handleOpenQuote}
            sx={{
              backgroundColor: "#007bff",
              color: "black",
              fontSize: "22px",
              fontWeight: "bold",
              borderRadius: "40px",
              minWidth: "100%", // Ensures same width
              height: "60px", // Ensures same height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              "&:hover": { 
                backgroundColor: "#000",
                border: "3px solid #fff",
                color: "#fff"
              }
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
              minWidth: "100%", // Same width as the first button
              height: "60px", // Same height as the first button
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              "&:hover": { 
                backgroundColor: "#000",
                border: "3px solid #fff",
                color: "#fff"
              }
            }}
          >
            ASK A QUESTION
          </Button>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: "auto", // Pushes icons to the bottom
            mb: "calc(env(safe-area-inset-bottom, 20px) + 10px)", // Prevents overlap with bottom bar
          }}
        >
          {[FaFacebook, FaTiktok, FaInstagram, FaYoutube].map((Icon, index) => (
            <IconButton key={index} sx={{ color: "white", fontSize: "36px",  "&:hover": { 
              color: "#007bff",
            } }}>
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Drawer>

      {/* 🏆 Quote Form Modal */}
      <Dialog
        open={quoteOpen}
        onClose={handleCloseQuote}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ position: "relative", padding: 0 }}>
          {/* Close Button */}
          <IconButton
            onClick={handleCloseQuote}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "white",
              "&:hover": { backgroundColor: "lightgray" },
            }}
          >
            <FaTimes />
          </IconButton>

          {/* Embedded Quote Form */}
          <iframe
            src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
            width="100%"
            height="800px"
            style={{ border: "none" }}
            title="Fast Quote"
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Topbar;
