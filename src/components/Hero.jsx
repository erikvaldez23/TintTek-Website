import React, { useState } from "react";
import "./Hero.css";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import BusinessInfo from "./BusinessInfo"; // Import BusinessInfo
import Subhero from "./Subhero"; // Import Subhero
import video from "../../public/compressed-output.mp4";
import SubIcons from './SubIcons'

const Hero = () => {
  const [open, setOpen] = useState(false);

  // Open the modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="hero">
        {/* Business Info Overlay */}
        <BusinessInfo />

        {/* Video Background */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            Precision Tinting for a <br /> Sleek, Private, and Cool Ride
          </h1>

          {/* Learn More Button - Opens Modal */}
          <button className="learn-more-btn" onClick={handleOpen}>
            MESSAGE FOR A FAST QUOTE
          </button>
        </div>

        {/* Subhero Overlay */}
        {/* <Subhero /> */}
        <SubIcons />

        {/* Quote Form Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent sx={{ position: "relative", padding: 0 }}>
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
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
      </section>
    </>
  );
};

export default Hero;
