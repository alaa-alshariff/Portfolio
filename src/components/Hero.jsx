import React from "react";
import HeroAnimation from "./HeroAnimation";
import Typewriter from "typewriter-effect";
import { HeroImg } from "./assets/index.js";

const Hero = () => {
  return (
    <section id="about" className="Hero-Section">
      <div className="hero-container">
        <div className="hero-bg">
          <HeroAnimation />
        </div>

        <div className="innercontainer">
          <div className="left" id="left">
            <div className="title">
              Hi, I am <br /> Alaa Alsharif
            </div>
            <div className="textloop">
              I am a
              <span>
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Android Developer",
                      "UI/UX Designer",
                      "Programmer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div className="description">
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results. With a positive attitude and a
              growth mindset, I am ready to make a meaningful contribution and
              achieve great things.
            </div>
            <a href="https://1drv.ms/b/s!AgFty9D6yzPBgQ0jJBtRPubhmj2H?e=lx4jc8" target="_blank" className="resumebtn">
              Resume
            </a>
          </div>

          <div className="right" id="right">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
