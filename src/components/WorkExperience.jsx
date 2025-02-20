import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Civic and Social Services Intern",
      company: "Prayas Free Coaching NGO, Surat",
      duration: "June 2023 - July 2023",
      description:
        "Worked with underprivileged students to provide educational support and resources. Developed coaching strategies to address diverse learning needs.",
    },
    {
      role: "Publicity Member",
      company: "ACM-PDEU Student Chapter",
      duration: "September 2023 - August 2024",
      description:
        "Implemented marketing strategies to increase event reach by 20%. Promoted club events and enhanced engagement through effective communication.",
    },
  ];

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <p>
              <strong>{exp.company}</strong> | {exp.duration}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;