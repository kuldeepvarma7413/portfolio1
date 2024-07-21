import React from "react";
import "./ServiceCard.css";

function ServiceCard({ title, image }) {
  return (
    <div className="service-card">
      <h2 className="title">{title}</h2>
      <div className="images">
        <span className="backlayer lyr1"></span>
        <span className="backlayer lyr2"></span>
        <img src={image} alt="service-image" />
      </div>
    </div>
  );
}

export default ServiceCard;
