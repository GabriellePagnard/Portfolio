import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Slider from "react-slick";
import projectsData from "../data/projectsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Composant personnalisé pour la flèche précédente
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

// Composant personnalisé pour la flèche suivante
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};

const Projects: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const scrollPosition = window.scrollY;

      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        if (scrollPosition >= aboutTop) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Mes Projets</h2>
        <Slider {...settings}>
          {projectsData.map((project) => (
            <div key={project.id} className="projects__card">
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
                    className="projects__image"
                  />
                ) : (
                  <img
                    src="/assets/images/default-image.jpg" // Image par défaut si aucune image n'est présente
                    alt="Image par défaut"
                    className="projects__image"
                  />
                )}

                {/* Flèche turquoise */}
                <FaChevronDown className="projects__expand-icon" />

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
          ))}
        </Slider>

        {/* Nouveau bouton "Voir tous les projets" */}
        <div className="text-center my-4">
          <Link to="/projectsList" className="projects__button">
            Voir tous les projets
          </Link>
        </div>

        {/* Flèche de retour en haut */}
        <div
          className={`back-to-top ${showArrow ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </div>
      </div>
    </section>
  );
};

export default Projects;
