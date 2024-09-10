import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes Projets</h2>
      <div className="project-cards">
        <div className="project-card">Projet 1</div>
        <div className="project-card">Projet 2</div>
        <div className="project-card">Projet 3</div>
      </div>
    </section>
  );
};

export default Projects;
