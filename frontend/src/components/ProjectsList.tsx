import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 'apotheose', name: 'Apothéose', description: 'Projet de fin de formation' },
  { id: 'project2', name: 'Projet 2', description: 'Description du projet 2' },
  { id: 'project3', name: 'Projet 3', description: 'Description du projet 3' },
];

const ProjectsList: React.FC = () => {
  return (
    <div className="projects-list">
      <h2>Liste des Projets</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
