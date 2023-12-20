import React, { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "./assets/laptop.json";
import { skills } from "../constants";
const Skills = () => {
  const container = useRef(null);
  const animationLoaded = useRef(false);

  useEffect(() => {
    if (!animationLoaded.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
      animationLoaded.current = true;
    }
  }, []);

  return (
    <section id="skills" className="skills-Section">
      <div className="skills">
        <div className="intro">
          <h2>Skills</h2>
          <p>
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </div>

        <div className="skillslist">
          {skills.map((item) => (
            <div className="skillitem">
              <img src={item.image} />
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="laptopimg" ref={container}></div>
    </section>
  );
};

export default Skills;
