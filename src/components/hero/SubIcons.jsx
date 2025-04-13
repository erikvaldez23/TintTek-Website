import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import "./css/Sub-icons.css"

const SubIcons = () => {
  return (
    <div className="subhero-overlay">
      <a href="https://www.instagram.com/tinttekplus/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/people/Tinttekplus/61561991193951/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaFacebookF />
      </a>
      <a href="https://www.tiktok.com/@tinttekplus" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTiktok />
      </a>
    </div>
  );
};

export default SubIcons;
