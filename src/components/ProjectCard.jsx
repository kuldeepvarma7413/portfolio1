import React from "react";
import "./ProjectCard.css";
import { FaArrowRight } from "react-icons/fa6";

function ProjectCard({ title, description, image, githubLink, link = "" }) {
  return (
    <div className="project-card">
      <img src={image} alt="project-image" />
      <a href={githubLink} target="_blank" >
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
