import React from "react";
import { Box, Typography } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./BusinessInfo.css"; // Import styles

const iconStyle = { fontSize: "1.5rem", marginRight: "8px" };

const BusinessInfo = () => {
  return (
    <Box className="business-info-overlay">
      <Typography 
        variant="body1" 
        sx={{ fontSize: "1.25rem", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
      >
        <FaPhone style={iconStyle} /> +1 (972) 362-8468
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ fontSize: "1.25rem", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
      >
        <FaEnvelope style={iconStyle} /> info@tinttekplus.com
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ fontSize: "1.25rem", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
      >
        <FaMapMarkerAlt style={iconStyle} /> 2518 West Kingsley Rd
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ fontSize: "1.25rem", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
      >
        <FaClock style={iconStyle} /> Mon - Sat, 9am - 6pm
      </Typography>
    </Box>
  );
};

export default BusinessInfo;
