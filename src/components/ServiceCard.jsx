import React, { useEffect } from "react";
import "./ServiceCard.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceCard({ title, image }) {
  // aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="service-card" data-aos="fade-up">
      <h2 className="title">{title}</h2>
      <div className="images">
        <span className="backlayer lyr1"></span>
        <span className="backlayer lyr2"></span>
        <img src={image} alt="service-image" loading="lazy" decoding="async" />
      </div>
    </div>
  );
}

export default ServiceCard;
