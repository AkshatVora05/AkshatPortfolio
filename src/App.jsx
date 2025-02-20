import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Accomplishments from "./components/Accomplishments";
import WorkExperience from "./components/WorkExperience";
import LeetCode from "./components/LeetCode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <WorkExperience />
        <Accomplishments />
        <LeetCode />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;