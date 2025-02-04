import React from "react";
import { Box, Typography } from "@mui/material";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./BusinessInfo.css"; // Import styles

const BusinessInfo = () => {
  return (
    <Box className="business-info-overlay">
      <Box className="business-info-item">
        <FaPhone className="business-icon" />
        <Typography variant="body1" className="business-text">
          +1 (972) 362-8468
        </Typography>
      </Box>
      <Box className="business-info-item">
        <FaEnvelope className="business-icon" />
        <Typography variant="body1" className="business-text">
          info@tinttekplus.com
        </Typography>
      </Box>
      <Box className="business-info-item">
        <FaMapMarkerAlt className="business-icon" />
        <Typography variant="body1" className="business-text">
          2518 West Kingsley Rd
        </Typography>
      </Box>
      <Box className="business-info-item">
        <FaClock className="business-icon" />
        <Typography variant="body1" className="business-text">
          Mon - Sat, 9am - 6pm
        </Typography>
      </Box>
    </Box>
  );
};

export default BusinessInfo;
