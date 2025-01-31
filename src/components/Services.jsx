import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
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
  const navigate = useNavigate(); // Hook to handle navigation

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`); // Navigate to the unique service page
  };

  return (
    <section className="services-section">
      <h2>TINTEK+ SERVICES</h2>
      <p className="services-intro">
        Premium automotive care to enhance, protect, and maintain your vehicle.
      </p>

      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card" onClick={() => handleServiceClick(service.id)}>
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
