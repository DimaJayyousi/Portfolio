// src/pages/Project.js
import React, { useState } from "react";
import activities from "../component/Assets/activities";
import "../style/activity.css";

const Activity = () => {
  const [imageIndex, setImageIndex] = useState({});

  const handleImageChange = (activityId, direction, imageCount) => {
    setImageIndex((prev) => {
      const current = prev[activityId] || 0;
      const next =
        direction === "next"
          ? (current + 1) % imageCount
          : (current - 1 + imageCount) % imageCount;

      return {
        ...prev,
        [activityId]: next,
      };
    });
  };

  return (
    <div className="projects-container">

      {activities.map((activity) => {
        const current = imageIndex[activity.id] || 0;

        return (
          <div key={activity.id} className="activity-card-horizontal">
            {/* LEFT IMAGE SECTION */}
            <div className="image-carousel">
              {activity.link ? (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={activity.images[current]}
                    alt={`${activity.name} ${current + 1}`}
                    className="project-media"
                  />
                </a>
              ) : (
                <img
                  src={activity.images[current]}
                  alt={`${activity.name} ${current + 1}`}
                  className="project-media"
                />
              )}

              {activity.images.length > 1 && (
                <div className="image-controls">
                  <button
                    onClick={() =>
                      handleImageChange(
                        activity.id,
                        "prev",
                        activity.images.length
                      )
                    }
                  >
                    ‹
                  </button>
                  <button
                    onClick={() =>
                      handleImageChange(
                        activity.id,
                        "next",
                        activity.images.length
                      )
                    }
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="activity-info">
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activity;
