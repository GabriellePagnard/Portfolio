import React from "react";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import "../styles/Experience.css"; // Assurez-vous que le fichier CSS est bien importé

const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="experience__title">
        Expériences & Formations
      </h2>

      <div className="experience__row">
        {/* Colonne Formations */}
        <div className="experience__column">
          {/* Titre Formations en dehors des cartes */}
          <div className="experience__column-header">
            <FaGraduationCap className="experience__icon-title" />
            <h3 className="experience__column-title">Formations</h3>
          </div>

          {/* Carte Titre Pro */}
          <div className="experience__card">
            <div className="experience__content">
              <div className="experience__date">
                <FaCalendarAlt className="experience__icon" />
                <p>2023</p>
              </div>
              <h4 className="experience__content-title">
                Titre Professionnel Développeur Web et Web Mobile (Bac+2)
              </h4>
              <p className="experience__subtitle">O'Clock</p>
              <h4 className="experience__h4">Compétences acquises :</h4>
              <ul>
                <li className="content">HTML5, CSS3 (SASS, Tailwind)</li>
                <li className="content">ReactJs, JavaScript, TypeScript</li>
                <li className="content">NodeJs, Express, Sequelize</li>
                <li className="content">PostgreSQL, MongoDB</li>
                <li className="content">Git/GitHub, Insomnia, DBeaver</li>
              </ul>
            </div>
          </div>

          {/* Carte Concepteur */}
          <div className="experience__card">
            <div className="experience__content">
              <div className="experience__date">
                <FaCalendarAlt className="experience__icon" />
                <p>2013</p>
              </div>
              <h4 className="experience__content-title">
                Concepteur en Architecture et Décoration d'Intérieur
              </h4>
              <p className="experience__subtitle">Ecole chez soi</p>
            </div>
          </div>
        </div>

        {/* Colonne Expériences */}
        <div className="experience__column">
          {/* Titre Expériences en dehors des cartes */}
          <div className="experience__column-header">
            <FaBriefcase className="experience__icon-title" />
            <h3 className="experience__column-title">Expériences</h3>
          </div>

          {/* Carte Développeuse Fullstack */}
          <div className="experience__card">
            <div className="experience__content">
              <div className="experience__date">
                <FaCalendarAlt className="experience__icon" />
                <p>2023</p>
              </div>
              <h4 className="experience__content-title">
                Développeuse Fullstack JavaScript
              </h4>
              <p className="experience__subtitle">O'Clock, Paris</p>
              <h4 className="experience__h4">Projet Foodflex :</h4>
              <ul>
                <li className="content">Rôle : Scrum Master, équipe de 5 personnes</li>
                <li className="content">Technologies : NodeJs, React, Sequelize, PostgreSQL</li>
                <li className="content">Accomplissement : Livraison en 4 semaines en méthodologie agile</li>
              </ul>
            </div>
          </div>

          {/* Carte Porteuse de Projet */}
          <div className="experience__card">
            <div className="experience__content">
              <div className="experience__date">
                <FaCalendarAlt className="experience__icon" />
                <p>2019 - 2023</p>
              </div>
              <h4 className="experience__content-title">Porteuse de Projet</h4>
              <p className="experience__subtitle">Djoomy, Paris</p>
              <h4 className="experience__h4">Compétences :</h4>
              <ul>
                <li className="content">Stratégie Digitale et Community Management</li>
                <li className="content">Développement Commercial</li>
                <li className="content">Création de solutions web sur mesure</li>
              </ul>
            </div>
          </div>

          {/* Carte Conceptrice en Architecture */}
          <div className="experience__card">
            <div className="experience__content">
              <div className="experience__date">
                <FaCalendarAlt className="experience__icon" />
                <p>2013 - 2019</p>
              </div>
              <h4 className="experience__content-title">
                Conceptrice en Architecture et Décoration d'Intérieur
              </h4>
              <p className="experience__subtitle">Freelance, Paris</p>
              <h4 className="experience__h4">Compétences :</h4>
              <ul>
                <li className="content">Gestion de Projets et Création Artistique</li>
                <li className="content">Conception de solutions d'aménagement intérieur</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
