import React, { useState, lazy, Suspense } from "react";
import "./css/Hero.css";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import video from "../../../public/videos/compressed-output.mp4";

// Lazy load less critical components
const BusinessInfo = lazy(() => import("./BusinessInfo"));
const SubIcons = lazy(() => import("./SubIcons"));

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="hero">
      {/* Business Info Overlay */}
      <Suspense fallback={<div />}>
        <BusinessInfo />
      </Suspense>

      {/* Video Background */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="overlay" />

      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          Enhance your Home, Ride or Business with <br />
          Precision Tinting and Protection
        </h1>
        <button className="learn-more-btn" onClick={handleOpen}>
          MESSAGE FOR A FAST QUOTE
        </button>
      </div>

      {/* Sub Icons */}
      <Suspense fallback={<div />}>
        <SubIcons />
      </Suspense>

      {/* Quote Form Modal */}
      {open && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent sx={{ position: "relative", padding: 0 }}>
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

            <iframe
              src="https://app.tintwiz.com/web/cs/gwnvrcfde7mplcffmgqi7sfqo8pcyt1t"
              width="100%"
              height="800px"
              style={{ border: "none" }}
              title="Fast Quote"
              loading="lazy"
            />
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Hero;
