import React, { useState, useEffect } from "react";
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

// Styled Navbar Container
const NavbarContainer = styled(Box)({
  width: "100%",
  maxWidth: "1200px", // Ensures alignment
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

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // If user scrolls past 50px, change navbar style
      } else {
        setScrolling(false); // Reset when user scrolls to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown handlers
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      {/* Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolling ? "white" : "transparent", // Change based on scroll
          color: scrolling ? "black" : "white", // Change text color
          boxShadow: scrolling ? "0px 2px 10px rgba(0, 0, 0, 0.1)" : "none", // Add shadow on scroll
          transition: "all 0.3s ease-in-out", // Smooth transition
          width: "100vw",
          left: 0,
          top: 0,
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <NavbarContainer>
            {/* Logo */}
            <Box display="flex" alignItems="center">
              <img src={logo} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
            </Box>

            {/* Navigation Links */}
            {!isMobile ? (
              <Box display="flex" gap={3}>
                {["Services", "Gallery", "Pricing", "About", "Reviews", "Contact"].map((text) => (
                  <Button
                    key={text}
                    color="inherit"
                    onClick={text === "Services" ? handleMenuOpen : null}
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      transition: "color 0.3s",
                      "&:hover": { color: "#007bff" },
                    }}
                  >
                    {text} {text === "Services" && "▾"}
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

      {/* Dropdown Menu for Services */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {[
          "Vehicle Window Tinting",
          "Tesla Window Tinting",
          "Commercial Window Tinting",
          "Residential Window Tinting",
          "Vehicle Paint Correction",
          "Vehicle Paint Protection",
        ].map((service) => (
          <MenuItem key={service} onClick={handleMenuClose}>
            {service}
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
          {["Gallery", "Pricing", "About", "Reviews", "Contact"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Topbar;
