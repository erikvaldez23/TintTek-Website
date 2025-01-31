import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { FaBars } from "react-icons/fa";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const location = useLocation();

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Re-added Function to Open Services Dropdown
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Scroll to section smoothly
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    const startPosition = window.scrollY;
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY;
    const duration = 1000;
    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutQuad(progress);
      window.scrollTo(0, startPosition + (targetPosition - startPosition) * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // ✅ Navigate to Service Pages Instead of Scrolling
  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
    handleMenuClose();
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
            <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
            </Box>

            {!isMobile ? (
              <Box display="flex" gap={3}>
                {/* ✅ Services Dropdown */}
                <Button
                  color="inherit"
                  onClick={handleMenuOpen}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    transition: "color 0.3s",
                    "&:hover": { color: "#007bff" },
                  }}
                >
                  Services ▾
                </Button>

                {[
                  { name: "Gallery", id: "gallery" },
                  { name: "Pricing", id: "pricing" },
                  { name: "About", id: "about" },
                  { name: "Reviews", id: "reviews" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <Button
                    key={item.name}
                    color="inherit"
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      transition: "color 0.3s",
                      "&:hover": { color: "#007bff" },
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            ) : (
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <FaBars />
              </IconButton>
            )}
          </NavbarContainer>
        </Toolbar>
      </AppBar>

      {/* ✅ Services Dropdown Menu (Now Working) */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {[
          { name: "Vehicle Window Tinting", id: "vehicle-window-tinting" },
          { name: "Tesla Window Tinting", id: "tesla-window-tinting" },
          { name: "Commercial Window Tinting", id: "commercial-window-tinting" },
          { name: "Residential Window Tinting", id: "residential-window-tinting" },
          { name: "Vehicle Paint Correction", id: "vehicle-paint-correction" },
          { name: "Vehicle Paint Protection", id: "vehicle-paint-protection" },
        ].map((service) => (
          <MenuItem key={service.id} onClick={() => handleServiceClick(service.id)}>
            {service.name}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            fontFamily: "Poppins, sans-serif",
          },
        }}
      >
        <List sx={{ width: 250 }}>
          <ListItem button onClick={handleMenuOpen}>
            <ListItemText primary="Services ▾" />
          </ListItem>
          {[
            { name: "Gallery", id: "gallery" },
            { name: "Pricing", id: "pricing" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <ListItem button key={item.name} onClick={() => scrollToSection(item.id)}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Topbar;
