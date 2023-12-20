import React from "react";
import { projects } from "../constants";
import {github} from "./assets/index.js";
import { Tilt } from "react-tilt";

const EyeIcon = () => {
  return <i className="material-icons">visibility</i>;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  preview,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="card"
    >
      <div className="cardinfo">
        <img src={image} alt={name} />

        <div className="content">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="giticon"
          >
            <img
              src={github}
              alt={github}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(preview, "_blank")}
            className="previeww"
          >
            <EyeIcon />
          </div>
        </div>
      </div>

      <div className="info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="intro">
        <span>MY WORK</span>
        <h2>Projects</h2>
      </div>
      <div className="projectcards">
        {projects.map((projects, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...projects} />
        ))}
      </div>
    </section>
  );
};

export default Works;
