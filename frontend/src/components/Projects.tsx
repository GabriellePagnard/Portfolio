import React from "react";
import "../styles/Projects.css";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import Slider from "react-slick";
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

const projectsData = [
  {
    id: 1,
    name: "Apothéose",
    description: "Projet de fin de formation, création d'une application web complète.",
    fullDescription: "Dans ce projet, j'ai travaillé sur une application web complète en tant que développeuse fullstack. Il inclut l'authentification, un tableau de bord utilisateur, etc.",
    date: "2023",
    isEncours: true,
  },
  {
    id: 2,
    name: "Projet 2",
    description: "En cours de développement...",
    fullDescription: "Détails à venir.",
    date: "À venir",
    isEncours: false,
  },
  {
    id: 3,
    name: "Projet 3",
    description: "En cours de développement...",
    fullDescription: "Détails à venir.",
    date: "À venir",
    isEncours: false,
  },
  {
    id: 4,
    name: "Projet 4",
    description: "En cours de développement...",
    fullDescription: "Détails à venir.",
    date: "À venir",
    isEncours: false,
  },
];

const Projects: React.FC = () => {
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
                <p className="projects__description">{project.description}</p>
                <FaChevronDown className="projects__expand-icon" />
                <div className="projects__full-details">
                  <p>{project.fullDescription}</p>
                </div>
                <button className="projects__button" disabled={!project.isEncours}>
                  {project.isEncours ? "Découvrir" : "À venir"}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
