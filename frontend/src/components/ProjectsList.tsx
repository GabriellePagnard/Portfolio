import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css"; // Vos styles CSS
import { FaCalendarAlt } from "react-icons/fa";
import projectsData from "../data/projectsData";

const ProjectsList: React.FC = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="projects__title">Mes Projets</h2>
        <div className="row">
          {projectsData.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 mb-4">
              <div className="projects__card">
                <div className="projects__content">
                  <div className="projects__date">
                    <FaCalendarAlt className="projects__icon" />
                    <p>{project.date}</p>
                  </div>
                  <h4 className="projects__content-title">{project.name}</h4>

                  {/* Afficher l'image du projet avec une vérification */}
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={project.images[0]} // Première image du projet
                      alt={project.name}
                      className="projects__image img-fluid"
                    />
                  ) : (
                    <img
                      src="/assets/images/default-image.jpg" // Image par défaut si aucune image n'est présente
                      alt="Image par défaut"
                      className="projects__image img-fluid"
                    />
                  )}

                  {/* Afficher la description et le bouton lors du survol */}
                  <div className="projects__details">
                    <p>{project.description}</p>
                    <Link
                      to={`/projects/${project.id}`}
                      className="projects__button"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
