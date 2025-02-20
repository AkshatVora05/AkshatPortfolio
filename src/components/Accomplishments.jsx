import React from "react";

const Accomplishments = () => {
  const accomplishments = [
    "NTSE Stage 1 Qualifier",
    "INSPIRE SHE Scholarship Eligible",
    "Ranked Top 1% in 12th Grade",
    "University Scholarship Recipient",
    "Research Paper Published in IEEE Xplore",
  ];

  return (
    <section className="accomplishments">
      <h2>Accomplishments</h2>
      <ul>
        {accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Accomplishments;