import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import "./Sub-icons.css"

const SubIcons = () => {
  return (
    <div className="subhero-overlay">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaFacebookF />
      </a>
      {/* <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTiktok />
      </a> */}
    </div>
  );
};

export default SubIcons;
