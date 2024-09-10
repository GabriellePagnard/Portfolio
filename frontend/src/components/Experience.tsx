import React from 'react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Mon Expérience</h2>
      <div className="experience-grid">
        <div className="education">
          <h3>Formations</h3>
          <ul>
            <li>Développeur Web Fullstack JS (2023)</li>
            <li>Blablabla (2000)</li>
          </ul>
        </div>
        <div className="work">
          <h3>Expériences professionnelles</h3>
          <ul>
            <li>blablabla (2000-2023)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
