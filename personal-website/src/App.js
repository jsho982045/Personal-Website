/* global particlesJS */
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import 'particles.js';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home'; 
import ComputerScienceStudent from './components/ComputerScienceStudent'; 
import Teacher from './components/Teacher'; 
import SoftwareEngineer from './components/SoftwareEngineer';

function App() {
  useEffect(() => {
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <div className="background"></div> {/* Particle Container */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/computer-science-student" element={<ComputerScienceStudent />} />
          <Route path="/about/teacher" element={< Teacher />} />
          <Route path="/about/software-engineer" element={<SoftwareEngineer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;