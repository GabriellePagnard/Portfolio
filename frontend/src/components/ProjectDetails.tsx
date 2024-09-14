import React from "react";
import { useParams } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import des icônes
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ProjectDetails.css";
import projectsData from "../data/projectsData";

// Flèches de navigation personnalisées
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === parseInt(id || "", 10));

  if (!project) {
    return <div className="text-center my-5">Projet non trouvé</div>;
  }

  const settings = {
    dots: false, // Suppression des points
    infinite: true, // Carrousel infini
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />, // Utilisation des flèches personnalisées
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="project-details">
      {/* Section d'en-tête pleine page avec texte centré et effet de flou */}
      <div
        className="project-header"
        style={{
          backgroundImage: `url(${project.images[0]})`,
        }}
      >
        <div className="project-header-overlay">
          <h1 className="project-header-title">{project.name}</h1>
        </div>
      </div>

      {/* Carrousel des images du projet */}
      <div className="container my-5">
        <h2 className="h2-title text-center mb-4">Images du projet</h2>
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index} className="carousel-image">
                <img
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Boutons de démonstration et code source */}
      <div className="container text-center my-4">
        {project.demoLink && (
          <a
            href={project.demoLink}
            className="btn btn-demo custom-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir la démo live
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            className="btn btn-code-source custom-btn ms-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le code source
          </a>
        )}
      </div>

      {/* Description complète du projet */}
      <div className="container d-flex justify-content-center my-5">
        <div className="project-description-card">
          <h2 className="text-center mb-4">Détails du projet</h2>
          <div
            className="project-full-description content"
            dangerouslySetInnerHTML={{ __html: project.fullDescription }}
          />
        </div>
      </div>

      {/* Vidéos du projet */}
      <div className="container text-center my-5">
        <h2 className="mb-4">Vidéos du projet</h2>
        {project.videos.map((video, index) => (
          <a
            key={index}
            href={video}
            className="btn btn-video custom-btn ms-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir la vidéo {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
