import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png"; // Adjust the path to your image

const Hero = () => {
  const handleViewProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "../../public/Resume_Akshat_Vora.pdf"; // Replace with the actual path to your resume
    link.download = "Akshat_Vora_Resume.pdf";
    link.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="hero"
    >
      <div className="hero-content">
        <motion.img
          src={profile}
          alt="Akshat Vora"
          className="profile-pic"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1>Hi, I'm Akshat Vora</h1>
          <p>Computer Engineering Student | Machine Learning Enthusiast</p>
          <div className="buttons">
            <button onClick={handleViewProjects}>View Projects</button>
            <button onClick={handleDownloadResume}>Download Resume</button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;