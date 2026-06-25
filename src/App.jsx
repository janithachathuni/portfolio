import React from "react";
import "./App.css";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import ContactSection from "./ContactSection";

const App = () => {
  return (
    <div>
      <div style={{ position: 'sticky', top: 0, zIndex: 0 }}>
        <HeroSection />
      </div>
      <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
<SkillsSection />
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;