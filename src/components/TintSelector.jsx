import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, Card, CardMedia, Fade } from "@mui/material";

const tintOptions = {
  "llumar-atc": {
    name: "Llumar ATC",
    image: "/images/llumar-atc.jpg", // Replace with your actual image paths
    description: "Budget-friendly dyed film with 99% UV protection.",
  },
  "llumar-ctx": {
    name: "Llumar CTX",
    image: "/images/llumar-ctx.jpg",
    description: "Non-metal ceramic film with superior heat rejection.",
  },
  "llumar-irx": {
    name: "Llumar IRX",
    image: "/images/llumar-irx.jpg",
    description: "Nano-ceramic tint with infrared heat blocking technology.",
  },
};

const TintSelector = () => {
  const [selectedTint, setSelectedTint] = useState("llumar-atc"); // Default selection
  const [fade, setFade] = useState(true); // Fade effect for smooth transitions

  const handleChange = (event) => {
    setFade(false); // Trigger fade-out
    setTimeout(() => {
      setSelectedTint(event.target.value); // Update the tint
      setFade(true); // Trigger fade-in
    }, 200); // Smooth transition effect
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "600px",
        mx: "auto",
        mt: 4,
        p: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Select Your Tint Type
      </Typography>

      {/* Tint Selection Dropdown */}
      <Select
        value={selectedTint}
        onChange={handleChange}
        fullWidth
        sx={{
          mb: 3,
          backgroundColor: "#fff",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        {Object.entries(tintOptions).map(([key, option]) => (
          <MenuItem key={key} value={key}>
            {option.name}
          </MenuItem>
        ))}
      </Select>

      {/* Tint Image Display with Fade Effect */}
      <Fade in={fade} timeout={500}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={tintOptions[selectedTint].image}
            alt={tintOptions[selectedTint].name}
            sx={{ objectFit: "cover" }}
          />
        </Card>
      </Fade>

      {/* Tint Description */}
      <Typography variant="body1" sx={{ mt: 2, color: "#333" }}>
        {tintOptions[selectedTint].description}
      </Typography>
    </Box>
  );
};

export default TintSelector;
