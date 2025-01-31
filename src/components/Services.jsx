import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "VEHICLE WINDOW TINTING",
    description: "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint.png", // Adjusted path
  },
  {
    title: "TESLA WINDOW TINTING",
    description: "Remove swirls and scratches for a flawless, mirror-like finish.",
    image: "/TintTek-Website/tesla-window-tint.jpg",
  },
  {
    title: "COMMERCIAL WINDOW TINTING",
    description: "Protect your paint from chips, scratches, and environmental damage.",
    image: "/TintTek-Website/commercial-tint.jpeg",
  },
  {
    title: "RESIDENTIAL WINDOW TINTING",
    description: "Long-lasting protection against dirt and contaminants.",
    image: "/TintTek-Website/residential-tint.png",
  },
  {
    title: "VEHICLE PAINT CORRECTION",
    description: "Restore your vehicle’s original shine inside and out.",
    image: "/TintTek-Website/paint-correction.jpeg",
  },
  {
    title: "VEHICLE PAINT PROTECTION",
    description: "Customize your vehicle’s look with high-quality vinyl wraps.",
    image: "/TintTek-Website/paint-protection.jpg",
  }
];



const Services = () => {
  return (
    <section className="services-section">
      <h2>TINTEK+ SERVICES</h2>
      <p className="services-intro">
        Premium automotive care to enhance, protect, and maintain your vehicle.
      </p>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-overlay">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
