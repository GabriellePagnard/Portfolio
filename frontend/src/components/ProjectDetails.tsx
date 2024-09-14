import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProjectDetails.css';

// Supposons que tu utilises un fichier `projectsData.ts` pour stocker les projets
import projectsData from '../data/projectsData';

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find((p) => p.id === parseInt(projectId || '', 10));

  if (!project) {
    return <div className="text-center my-5">Projet non trouvé</div>;
  }

  return (
    <div className="container project-details">
      <h2 className="project-title text-center my-5">{project.name}</h2>
      
      <div className="row">
        <div className="col-md-6">
          <div className="project-description">
            <h5>Description</h5>
            <p>{project.description}</p>
          </div>
          <div className="project-details-section">
            <h5>Détails du projet</h5>
            <p>{project.fullDescription}</p>
          </div>
          {project.demoLink && (
            <a href={project.demoLink} className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">
              Voir la démo
            </a>
          )}
          {project.repoLink && (
            <a href={project.repoLink} className="btn btn-outline-dark mt-3 ms-2" target="_blank" rel="noopener noreferrer">
              Voir le code source
            </a>
          )}
        </div>

        <div className="col-md-6 project-images">
          <h5 className="text-center">Images du projet</h5>
          <div className="d-flex flex-wrap justify-content-center">
            {project.images && project.images.length > 0 ? (
              project.images.map((image, index) => (
                <img key={index} src={image} alt={`${project.name} screenshot ${index + 1}`} className="img-thumbnail m-2" />
              ))
            ) : (
              <p>Aucune image disponible.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
