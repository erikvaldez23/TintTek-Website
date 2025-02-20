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
  Menu,
  MenuItem,
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

const Topbar = ({ notFound }) => {
  // Accepting `notFound` prop
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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
    const subPages = ["gallery", "privacy-policy", "blog"]; // Add more subpages here if needed

    if (subPages.includes(sectionId)) {
      // Navigate to the subpage instead of scrolling
      navigate(`/${sectionId}`);
      setDrawerOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      // If not on the homepage, navigate to home and scroll to the section
      navigate("/", { state: { scrollTo: sectionId } });
      setDrawerOpen(false);
      return;
    }

    // Scroll to section on the homepage
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const offset = 80; // Adjust offset based on your Topbar height
    const targetPosition =
      targetSection.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget); // Open dropdown
  };

  const handleClose = () => {
    setAnchorEl(null); // Close dropdown
  };

  const handleServiceSelect = (servicePath) => {
    navigate(`/services/${servicePath}`);
    handleClose();
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
          backgroundColor: notFound
            ? "#000"
            : scrolling
            ? "#EEEEFF"
            : "transparent",
          backdropFilter: scrolling && !notFound ? "blur(10px)" : "none",
          color: notFound || scrolling ? "#000" : "#EEEEFF",
          boxShadow:
            scrolling && !notFound ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease-in-out",
          width: "100vw",
          left: 0,
          top: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "center", padding: "0 20px" }}>
          <NavbarContainer>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "60px",
                  marginRight: "10px",
                  borderRadius: "8px",
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box display="flex" gap={4}>
                {/* Services Button with Dropdown */}
                <Button
                  color="inherit"
                  onClick={handleServicesClick}
                  sx={{
                    display: "flex", // Ensures text and arrow are in one line
                    alignItems: "center", // Aligns items vertically
                    gap: "5px", // Adds space between text and arrow
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "22px",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "10px 5px",
                    color: scrolling ? "#333" : "#fff",
                    transition: "all 0.3s ease-in-out",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      width: "0%",
                      height: "3px",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#2794d2", // Gradient underline
                      transition: "width 0.4s ease-in-out",
                      borderRadius: "2px",
                    },
                    "&:hover": {
                      color: "#2794d2", // Bright hover color
                      textShadow: "0 0 8px rgba(0, 198, 255, 0.8)", // Glowing text
                      "&:after": { width: "100%" }, // Underline expands
                    },
                  }}
                >
                  Services <span style={{ fontSize: "14px" }}>▾</span>
                </Button>

                {/* Dropdown Menu for Services */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "white",
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
                      borderRadius: "8px",
                      minWidth: "200px",
                    },
                  }}
                >
                  <MenuItem
                    onClick={() =>
                      handleServiceSelect("vehicle-window-tinting")
                    }
                  >
                    Vehicle Window Tinting
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleServiceSelect("tesla-window-tinting")}
                  >
                    Tesla Window Tinting
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleServiceSelect("commercial-window-tinting")
                    }
                  >
                    Commercial Window Tinting
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleServiceSelect("residential-window-tinting")
                    }
                  >
                    Residential Window Tinting
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleServiceSelect("vehicle-paint-correction")
                    }
                  >
                    Vehicle Paint Correction
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleServiceSelect("vehicle-paint-protection")
                    }
                  >
                    Vehicle Paint Protection
                  </MenuItem>
                </Menu>

                {/* Other Navigation Links */}
                {[
                  "About",
                  "Reviews",
                  "Gallery",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <Button
                    key={item}
                    color="inherit"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    sx={{
                      fontFamily: "Montserrat, sans-serif", // Sleek modern font
                      fontSize: "22px",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      position: "relative",
                      padding: "10px 20px",
                      color: scrolling ? "#333" : "#fff", // Dynamic text color
                      transition: "all 0.3s ease-in-out",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        width: "0%",
                        height: "3px",
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#2794d2", // Gradient underline
                        transition: "width 0.4s ease-in-out",
                        borderRadius: "2px",
                      },
                      "&:hover": {
                        color: "#2794d2", // Bright hover color
                        textShadow: "0 0 8px rgba(0, 198, 255, 0.8)", // Glowing text
                        "&:after": { width: "100%" }, // Underline expands
                      },
                    }}
                  >
                    {item}
                  </Button>
                  )
                )}
              </Box>
            )}
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ fontSize: 30 }}
              >
                <FaBars />
              </IconButton>
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
          {["Services", "About", "Reviews", "Gallery", "Blog", "Contact"].map(
            (item) => (
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
                      "&:hover": { color: "#2794d2", cursor: "pointer" },
                    },
                  }}
                />
              </ListItem>
            )
          )}
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
              backgroundColor: "#2794d2",
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
                color: "#fff",
              },
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
                color: "#fff",
              },
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
          {[FaFacebook, FaInstagram].map((Icon, index) => (
            <IconButton
              key={index}
              sx={{
                color: "white",
                fontSize: "36px",
                "&:hover": {
                  color: "#2794d2",
                },
              }}
            >
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
