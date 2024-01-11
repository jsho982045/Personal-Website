import React from 'react';
import '../styles/Contact.css';


function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p></p>
      <div className="icon-container">
      {/* Gmail Icon */}
      <a href="mailto:jackshomer98@gmail.com" target="_blank" rel="noreferrer noopener" className="contact-icon">
        <img src="gmailIcon2.png" alt="Gmail" />
      </a>
      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/in/jack-shomer-067123266/" target="_blank" rel="noreferrer noopener" className="contact-icon">
        <img src="linkedin.png" alt="LinkedIn" />
      </a>
      {/* GitHub Icon */}
      <a href="https://github.com/jsho982045" target="_blank" rel="noreferrer noopener" className="contact-icon">
        <img src="githubIcon1.svg" alt="GitHub" />
      </a>
    </div>
  </section>
  );
}

export default Contact;