import React, { useState } from "react";
import projects from "../component/Assets/project-data"; // import the projects data
import "../style/project.css";

const Project = () => {
  const [carouselIndex, setCarouselIndex] = useState({});
 
  const categories = ["3D projects", "Web project", "Documentation" ];

  const handlePrev = (category, maxIndex) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [category]: prev[category] > 0 ? prev[category] - 1 : maxIndex,
    }));
  };

  const handleNext = (category, maxIndex) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [category]: prev[category] < maxIndex ? prev[category] + 1 : 0,
    }));
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>

      {categories.map((category) => {
        const filteredProjects = projects.filter(
          (project) => project.type === category
        );

        if (filteredProjects.length === 0) return null;

        const currentIndex = carouselIndex[category] || 0;
        const currentProject = filteredProjects[currentIndex];

        return (
          <section key={category} className="project-section">
            <header className="category-header">
              <h2>{category}</h2>
            </header>

            <div className="carousel-container">
              <button
                className="carousel-btn left"
                onClick={() =>
                  handlePrev(category, filteredProjects.length - 1)
                }
                aria-label={`Previous ${category} project`}
              >
                ‹
              </button>

              <div className="carousel-card">
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.caption}
                    className="project-media"
                  />
                  <p>{currentProject.caption}</p>
                </a>
              </div>

              <button
                className="carousel-btn right"
                onClick={() =>
                  handleNext(category, filteredProjects.length - 1)
                }
                aria-label={`Next ${category} project`}
              >
                ›
              </button>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Project;
