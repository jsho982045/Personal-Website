import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me: </h2>
      <ul>
        <div className="about-item">
          <span className="dash">&mdash;</span>
          <p><Link to="/about/software-engineer">Software Engineer</Link></p>
          </div>
          <div className="about-item">
             <span className="dash">&mdash;</span>
             <p><Link to="/about/computer-science-student">Computer Science Student</Link></p>
        </div>
        <div className="about-item">
          <span className="dash">&mdash;</span>
          <p><Link to= "/about/teacher">Teacher</Link></p>
          </div>
        </ul>
    </section>
  );
}

export default About;