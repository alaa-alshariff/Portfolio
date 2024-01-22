import React from "react";
import { projects } from "../constants";
import { github } from "./assets/index.js";
import { Tilt } from "react-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { Navigation, Pagination, EffectCards } from "swiper/modules";
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
      <div className="projectslider">
        <Swiper
          modules={[Navigation, Pagination, EffectCards]}
          spaceBetween={30}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            499: {
              // grabCursor: true,
              navigation: false,

              slidesPerView: 1,
            },
            700: {
              // grabCursor: true,
              navigation: false,

              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((projects, index) => (
            <SwiperSlide className="projectcards">
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...projects}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Works;
