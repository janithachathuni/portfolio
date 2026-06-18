import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="intro">
        <div className="intro-content">
          <h1>Janitha Chathuni</h1>
          <div>
            <p>Software Engineer</p>
            {/* <p>Data Scientist</p> */}
          </div>
          Name + Job Titles + Picture + Menu + CV download
        </div>
      </div>
      <div>Skills</div>
      <div>Projects</div>
      <div>Experiences</div>
      <div>Education</div>
      <div>Certifications</div>
      <div>Contact + CV download</div>
      <div className="contact-section">Contact Me</div>
    </div>
  );
};

export default App;
