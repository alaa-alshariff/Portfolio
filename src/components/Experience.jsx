import React from "react";
import { Born, cartoon } from "./assets/index.js";

// import Born from "../assets/born.png";
// import cartoon from "../assets/experience.png";
const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="intro">
        <span>WHAT I HAVE DONE SO FAR</span>
        <h2>Experience</h2>
      </div>

      <div className="experiencecard">
        <div className="info">
          <h1>Front End Developer</h1>
          <h2>Born Interactive</h2>
          <ul>
            <li>
              Developing and maintaining web applications using React.js and
              other related technologies.
            </li>
            <li>
              Collaborating with cross-functional teams including designers,
              product managers, and other developers to create high-quality
              products.
            </li>
            <li>
              Implementing responsive design and ensuring cross-browser
              compatibility.
            </li>
            <li>
              Participating in code reviews and providing constructive feedback
              to other developers.
            </li>
          </ul>

          <span>February 2022 - September 2023</span>
        </div>

        <div className="logo">
          <img src={Born} alt="" />
        </div>

        <div className="cartoon">
          <img src={cartoon} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
