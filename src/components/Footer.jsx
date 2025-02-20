import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/AkshatVora05" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akshat-vora-17b20a275/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; 2025 Akshat Vora. All rights reserved.</p>
    </footer>
  );
};

export default Footer;