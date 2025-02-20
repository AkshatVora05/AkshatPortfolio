import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Diabetes Prediction Model",
    description:
      "A machine learning project that predicts diabetes using advanced algorithms like Random Forest, KNN, and Logistic Regression. Achieved 97.57% accuracy with Stacking Ensemble Learning.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://github.com/AkshatVora05/Diabetes-Prediction-Model",
  },
  {
    title: "Dice Game",
    description:
      "An interactive dice game built with HTML, CSS, and JavaScript. Players roll two dice, and the one with the higher number wins. Demonstrates basic JavaScript logic and DOM manipulation.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://akshatvora05.github.io/DiceGame/",
  },
  {
    title: "TinDog",
    description:
      "A responsive and visually appealing website inspired by Tinder, but for dogs. Built using HTML, CSS, and Bootstrap to showcase front-end development skills.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://akshatvora05.github.io/TinDog/",
  },
  {
    title: "Simon Game",
    description:
      "A memory-based game where players repeat a sequence of colors in the correct order. Built using HTML, CSS, and JavaScript, with interactive elements and audio feedback.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://akshatvora05.github.io/SimonGame/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;