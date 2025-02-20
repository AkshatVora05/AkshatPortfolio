import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="about"
    >
      <h2>About Me</h2>
      <p>
        I'm a Computer Engineering student at Pandit Deendayal Energy University,
        passionate about Machine Learning, Software Development, and Problem
        Solving. I enjoy building projects that solve real-world problems and
        constantly strive to learn new technologies.
      </p>
      <p>
        I have a strong foundation in programming languages like Java, Python,
        and C++, and I'm proficient in web development technologies such as HTML,
        CSS, and JavaScript. I also have experience with machine learning
        libraries like NumPy, Pandas, and Scikit-learn.
      </p>
      <p>
        Outside of academics, I enjoy participating in coding competitions,
        contributing to open-source projects, and exploring new technologies. I'm
        always looking for opportunities to grow and make a positive impact
        through my work.
      </p>
    </motion.section>
  );
};

export default About;