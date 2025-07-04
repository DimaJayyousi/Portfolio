import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "React",
    "HTML5",
    "CSS3",
    "JavaScript",

    "Node.js",
    "Responsive Design",
    "Figma",
    "Git & GitHub",
    "Debugging ",
    "MySQL",
    "Low-Code & No-Code Platforms",
    "Agile & Scrum Methodologies ",
    "Team Leadership ",
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Creativity",
    "3D modeling ",
    "3D animation",
  ];

  return (
    <div className="skills-section" id='skills'>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
