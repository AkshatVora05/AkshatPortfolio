import React from "react";

const Skills = () => {
  const skills = [
    "Java",
    "Python",
    "C/C++",
    "HTML/CSS",
    "JavaScript",
    "React",
    "Machine Learning",
    "MySQL",
    "Git/GitHub",
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;