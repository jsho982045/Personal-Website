import React from 'react';
import '../styles/Projects.css'; // We will create this CSS file next.

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-item">
      <span className="dash">&mdash;</span>
      <a href="https://jsho982045.github.io/Calculator/">Calculator</a>
      </div>
      <div className="projects-item">
      <span className="dash">&mdash;</span>
      < a href="https://jsho982045.github.io/To-Do-List/">To Do List</a>
      </div>
      <div className="projects-item">
      <span className="dash">&mdash;</span>
      <a href="https://jsho982045.github.io/Text-To-Speech/">Text-To-Speech</a>
      </div>
      <div className="projects-item">
      <span className="dash">&mdash;</span>
      <a href="https://jsho982045.github.io/Ai-Image-Generator/">Ai Image Generator</a>
      </div>
      <div className="projects-item">
      <span className="dash">&mdash;</span>
      <a href="https://jsho982045.github.io/QR-Code-Generator/">QR Code Generator</a>
      </div>
      <div className="projects-item">
      <span className="dash">&mdash;</span>
      <a href="https://jsho982045.github.io/Text-Editor/">Text Editor</a>
      </div>
      {/* Add individual project cards or items here */}
    </section>
  );
}

export default Projects;