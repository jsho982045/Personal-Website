import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me: </h2>
      <ul>
        <div className="about-item">
          <span className="dash">&mdash;</span>
          <p><a href="/about/software-engineer">Software Engineer</a></p>
          </div>
          <div className="about-item">
             <span className="dash">&mdash;</span>
             <p><a href="/about/computer-science-student">Computer Science Student</a></p>
        </div>
        <div className="about-item">
          <span className="dash">&mdash;</span>
          <p><a href = "/about/teacher">Teacher</a></p>
          </div>
        </ul>
    </section>
  );
}

export default About;