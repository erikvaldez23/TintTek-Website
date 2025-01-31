import React, { useState } from "react";
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
  const isMobile = useMediaQuery("(max-width:900px)");

  // Dropdown handlers
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <>
      {/* Navigation Bar */}
      <AppBar 
        position="fixed" // Ensures navbar stays at the top
        sx={{ 
          backgroundColor: "#fff", 
          width: "100vw", 
          left: 0, 
          top: 0,
          zIndex: 1100, // Keeps it above other elements
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)"
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
              <Box display="flex" gap={3} color="#000">
                <Button 
                  color="inherit" 
                  onClick={handleMenuOpen}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                    transition: "0.3s",
                    "&:hover": { color: "#007bff" }
                  }}
                >
                  Services ▾
                </Button>
                <Button color="inherit" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 500, letterSpacing: "0.5px", transition: "0.3s", "&:hover": { color: "#007bff" } }}>Gallery</Button>
                <Button color="inherit" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 500, letterSpacing: "0.5px", transition: "0.3s", "&:hover": { color: "#007bff" } }}>Pricing</Button>
                <Button color="inherit" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 500, letterSpacing: "0.5px", transition: "0.3s", "&:hover": { color: "#007bff" } }}>About</Button>
                <Button color="inherit" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 500, letterSpacing: "0.5px", transition: "0.3s", "&:hover": { color: "#007bff" } }}>Reviews</Button>
                <Button color="inherit" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 500, letterSpacing: "0.5px", transition: "0.3s", "&:hover": { color: "#007bff" } }}>Contact</Button>
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
          <MenuItem key={service} onClick={handleMenuClose}>{service}</MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "black", color: "white", fontFamily: "Poppins, sans-serif" } }} 
      >
        <List sx={{ width: 250, fontFamily: "Poppins, sans-serif" }}>
          <ListItem button onClick={handleMenuOpen}>
            <ListItemText primary="Services ▾" sx={{ color: "white" }} />
          </ListItem>
          <ListItem button><ListItemText primary="Gallery" sx={{ color: "white" }} /></ListItem>
          <ListItem button><ListItemText primary="Pricing" sx={{ color: "white" }} /></ListItem>
          <ListItem button><ListItemText primary="About" sx={{ color: "white" }} /></ListItem>
          <ListItem button><ListItemText primary="Contact" sx={{ color: "white" }} /></ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Topbar;
