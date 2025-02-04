import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";

const servicesData = [
  {
    id: "vehicle-window-tinting",
    title: "VEHICLE WINDOW TINTING",
    description: "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint.png",
  },
  {
    id: "tesla-window-tinting",
    title: "TESLA WINDOW TINTING",
    description: "Remove swirls and scratches for a flawless, mirror-like finish.",
    image: "/TintTek-Website/tesla-window-tint.jpg",
  },
  {
    id: "commercial-window-tinting",
    title: "COMMERCIAL WINDOW TINTING",
    description: "Protect your paint from chips, scratches, and environmental damage.",
    image: "/TintTek-Website/commercial-tint.jpeg",
  },
  {
    id: "residential-window-tinting",
    title: "RESIDENTIAL WINDOW TINTING",
    description: "Long-lasting protection against dirt and contaminants.",
    image: "/TintTek-Website/residential-tint.png",
  },
  {
    id: "vehicle-paint-correction",
    title: "VEHICLE PAINT CORRECTION",
    description: "Restore your vehicle’s original shine inside and out.",
    image: "/TintTek-Website/paint-correction.jpeg",
  },
  {
    id: "vehicle-paint-protection",
    title: "VEHICLE PAINT PROTECTION",
    description: "Customize your vehicle’s look with high-quality vinyl wraps.",
    image: "/TintTek-Website/paint-protection.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,  // ✅ Ensure arrows are enabled
    prevArrow: <div className="slick-custom-prev">◀</div>,
    nextArrow: <div className="slick-custom-next">▶</div>,
  };
  

  return (
    <section className="services-section">
      <h2>TINTEK+ SERVICES</h2>
      <p className="services-intro">
        Premium automotive care to enhance, protect, and maintain your vehicle.
      </p>

      {isMobile ? (
        /** 🎠 Carousel on Mobile */
        <Slider {...sliderSettings} className="services-slider">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
            >
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        /** 🖥️ Grid Layout on Desktop */
        <div className="services-container">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
            >
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-overlay">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
