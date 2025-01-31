import React from "react";
import "./Hero.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import Subhero from "./Subhero"; // Import Subhero component
import BusinessInfo from "./BusinessInfo"; // Import BusinessInfo
import video from '../../public/car.mp4';

const Hero = () => {
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

          {/* Learn More Button */}
          <button
            className="learn-more-btn"
            onClick={() =>
              document.getElementById("services").scrollIntoView({ behavior: "smooth" })
            }
          >
            MESSAGE FOR A FAST QUOTE
          </button>
        </div>

        {/* Subhero Overlay */}
        <Subhero /> {/* Add Subhero inside Hero */}
      </section>
    </>
  );
};

export default Hero;
