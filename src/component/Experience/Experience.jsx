import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Ambassador",
      company: "Med Roots Conference (IEEE SIGHT)",
      description:
        'As a 3D Artist, Media Team Member, and Ambassador for the "Med Roots Conference (IEEE SIGHT)", I designed 3D visuals for presentations and promotions. I also managed the conference’s LinkedIn page, developing engaging content strategies to attract audiences. This role strengthened my teamwork, communication, and creative content creation skills.',
    },
    {
      role: "Co-leader",
      company: " HoloFusion",
      description:
        "I am part of a 3D modeling/animation  team, developing high-quality projects while mentoring others in Blender. At HoloFusion, I trained beginners through an 80-hour program, with one landing an internship. My team placed 4th in Pitchinno among 100 teams, showcasing innovation and teamwork.",
    }, 
       {
      role: "Mendix Trainee",
      company: "Polaris Technology Ltd",
      description:
        "During my internship, I worked with Mendix, a low-code development platform, to design and deploy applications. I also earned the < Mendix Rapid Developer Certification >, proving my ability to build scalable, efficient, and user-friendly apps.",
    },
    {
      role: "Programming Instructor Trainee",
      company: "Jeel Code",
      description:
        "As a Programming Instructor Trainee at Jeel Code, I learned engaging teaching methods for kids' coding classes. I earned certifications while gaining hands-on experience with educational tools to make programming fun and accessible.",
    },

  ];

  return (
    <div className="experience-section" id='experience'>
      <h1 className="experience-title">Experience</h1>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-label">{exp.role}</div>
            <div className="experience-box">
              <h3>{exp.company}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
