import React from "react";
import { useParams } from "react-router-dom";
import "./ServicePage.css"; // Style file for the service details page

// Define service details for each page
const serviceDetails = {
  "vehicle-window-tinting": {
    title: "Vehicle Window Tinting",
    description: "Enhance privacy, reduce glare, and protect your vehicle’s interior.",
    image: "/TintTek-Website/v-window-tint.png",
    details: "We use high-quality films to protect your car windows and provide maximum UV protection.",
  },
  "tesla-window-tinting": {
    title: "Tesla Window Tinting",
    description: "Remove swirls and scratches for a flawless, mirror-like finish.",
    image: "/TintTek-Website/tesla-window-tint.jpg",
    details: "Specialized tinting for Tesla models, ensuring perfect heat rejection and premium clarity.",
  },
  "commercial-window-tinting": {
    title: "Commercial Window Tinting",
    description: "Protect your paint from chips, scratches, and environmental damage.",
    image: "/TintTek-Website/commercial-tint.jpeg",
    details: "Improve office comfort and energy efficiency with our high-quality commercial window tints.",
  },
  "residential-window-tinting": {
    title: "Residential Window Tinting",
    description: "Long-lasting protection against dirt and contaminants.",
    image: "/TintTek-Website/residential-tint.png",
    details: "Enhance home privacy and block out harmful UV rays while maintaining natural light.",
  },
  "vehicle-paint-correction": {
    title: "Vehicle Paint Correction",
    description: "Restore your vehicle’s original shine inside and out.",
    image: "/TintTek-Website/paint-correction.jpeg",
    details: "Remove swirls, oxidation, and scratches to bring back the original shine of your vehicle.",
  },
  "vehicle-paint-protection": {
    title: "Vehicle Paint Protection",
    description: "Customize your vehicle’s look with high-quality vinyl wraps.",
    image: "/TintTek-Website/paint-protection.jpg",
    details: "Protect your car's exterior from environmental damage with premium protective films.",
  },
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-page">
      <img src={service.image} alt={service.title} className="service-page-image" />
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <p>{service.details}</p>
    </div>
  );
};

export default ServicePage;
