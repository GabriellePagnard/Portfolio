import React, { useState } from "react";
import "../styles/About.css";
import photo from "../assets/images/gabriellepagnard.jpg";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaSass, FaDatabase, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiChakraui, SiJest, SiTypescript, SiSequelize, SiMongodb, SiInsomnia } from "react-icons/si";
import { GrNode } from "react-icons/gr"; 

const About: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);

  const fullText = `
    Développeuse Fullstack JavaScript passionnée et créative, je mets un point d'honneur à concevoir des applications web modernes et fonctionnelles. 
    Forte d'une expérience en gestion de projets et d'une solide maîtrise des technologies comme Node.js, React et TypeScript, 
    je suis capable de proposer des solutions techniques innovantes tout en restant attentive aux besoins des utilisateurs.

    Mon parcours m'a permis de développer une sensibilité artistique que j'intègre dans mes créations, 
    avec un souci constant d'esthétique et d'efficacité. J’aime évoluer dans des environnements collaboratifs, 
    où l’échange d’idées et l’agilité sont au cœur des projets.

    Curieuse, rigoureuse et dynamique, je suis toujours à l'affût des nouvelles tendances et des meilleures pratiques en développement web. 
    Si vous êtes à la recherche d’une collaboratrice enthousiaste et orientée résultats, prête à relever de nouveaux défis, 
    je serais ravie de collaborer avec vous pour donner vie à vos projets numériques.`;

  const partialText = fullText.slice(0, 150) + "...";

  const renderTextWithParagraphs = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="about__text">{paragraph}</p>
    ));
  };

  const icons = [
    { id: 1, icon: <FaReact /> },
    { id: 2, icon: <FaNodeJs /> },
    { id: 3, icon: <FaHtml5 /> },
    { id: 4, icon: <FaCss3Alt /> },
    { id: 5, icon: <FaJs /> },
    { id: 6, icon: <FaBootstrap /> },
    { id: 7, icon: <FaSass /> },
    { id: 8, icon: <FaDatabase /> }, 
    { id: 9, icon: <SiTailwindcss /> },
    { id: 10, icon: <SiPostgresql /> },
    { id: 11, icon: <SiChakraui /> },
    { id: 12, icon: <SiJest /> },
    { id: 13, icon: <SiTypescript /> },
    { id: 14, icon: <SiSequelize /> },
    { id: 15, icon: <GrNode /> }, 
    { id: 16, icon: <SiMongodb /> },
    { id: 17, icon: <FaGit /> },
    { id: 18, icon: <FaGithub /> },
    { id: 19, icon: <SiInsomnia /> }
  ];

  return (
    <section id="about" className="about">
      <div className="about__cadre">
        <h2 className="about__title">À Propos</h2>

        {/* Conteneur pour l'image avec l'animation */}
        <div className="about__img-wrapper">
          <div className="about__animation"></div>
          <img className="about__img" src={photo} alt="Gabrielle Pagnard" />
        </div>

        {/* Affichage du texte avec paragraphes */}
        {showFullText ? renderTextWithParagraphs(fullText) : <p className="about__text">{partialText}</p>}

        <button
          className="about__button"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? "Réduire" : "En savoir plus"}
        </button>

        {/* Technologies Section */}
        <h3 className="about__tech-title">Technologies que j'utilise</h3>
        <div className="about__tech-slider">
          <div className="about__tech-track">
            {icons.map((tech) => (
              <div className="about__tech-icon-wrapper" key={tech.id}>
                <div className="about__tech-icon">{tech.icon}</div>
              </div>
            ))}
            {icons.map((tech) => (
              <div className="about__tech-icon-wrapper" key={`copy-${tech.id}`}>
                <div className="about__tech-icon">{tech.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
