import React, { useEffect } from "react";
import "./ProjectCard.css";
import { FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function ProjectCard({ title, description, image, githubLink, link = "" }) {
  // aos
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="project-card" data-aos="fade-up">
      <img src={image} alt="project-image" loading="lazy" decoding="async" />
      <a href={githubLink} target="_blank">
        <FaArrowRight className="arrow" />
      </a>
      <h2 className="title">
        <p className="t">
          {title}{" "}
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              {link.replace("https://", "")}
            </a>
          )}
        </p>
        <span className="description">
          <br />
          {description}
        </span>
      </h2>
    </div>
  );
}

export default ProjectCard;
