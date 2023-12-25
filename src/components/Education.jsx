import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { education } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className="timeline-icon">
        <img src={education.icon} alt={education.company_name} />
      </div>
    }
  >
    <div className="timeline-content">
      <h3>{education.title}</h3>
      <p>{education.company_name}</p>
    </div>

    <ul className="timeline-info">
      {education.points.map((point, index) => (
        <li
          key={`education-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="intro">
        <span>WHAT I HAVE LEARNED SO FAR</span>
        <h2>EDUCATION</h2>
      </div>

      <div className="timeline">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
