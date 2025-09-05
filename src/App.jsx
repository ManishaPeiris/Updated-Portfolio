import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experiences from "./Components/Experiences";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Each section with IDs and scroll margin to avoid being hidden */}
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experiences />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
