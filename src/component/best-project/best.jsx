import React from "react";
import "./best.css";
import { Link } from "react-router-dom";
import cho from "../Assets/chocolate.png";
import head from "../Assets/head.jpg";
import helmet from "../Assets/helmet.png";
import can from "../Assets/can.png";
const best = () => {
  const projects = [
    {
      id: 1,
      image: cho,
      description: "almost too sweet to be real! 🍫✨",
    },
    {
      id: 2,
      image: can,
      description: "Sip with style 🍹✨ — bold flavors, bold branding",
    },
    {
      id: 3,
      image: helmet,
      description:
        "Designed for speed, styled for impact 🏁🚨 — protection just got an upgrade",
    },
    {
      id: 4,
      image: head,
      description: "Sound that slaps 🎧🔥 — where function meets flex",
    },
  ];

  return (
    <div className="projects-container">
      <Link to="/projects"   style={{ textDecoration: 'none'}} >
        <h1>My Work</h1>{" "}
      </Link>

      <div className="card-grid">
        {projects.map((project) => (
          <div key={project.id} className="carousel-card">
            <img
              className="project-media"
              src={project.image}
              alt={`Project ${project.id}`}
            />
            <a className="project-link">
              <p>{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default best;
