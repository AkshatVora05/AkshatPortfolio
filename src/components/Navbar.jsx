import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="container">
        <h1>Akshat Vora</h1>
        <label className="toggle-switch">
          <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
