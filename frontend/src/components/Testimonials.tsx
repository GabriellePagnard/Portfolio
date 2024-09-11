import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    name: 'Jean-Yves SARAKA',
    position: 'Ingénieur Informatique',
    text: `Je suis ravi de vous écrire cette lettre de recommandation pour Gabrielle, avec qui j’ai eu le plaisir de suivre une formation en développement web au sein de O'clock.

    Au cours de notre formation, Gabrielle s’est distinguée par son engagement et son efficacité. Sa capacité à écouter attentivement les besoins et les défis techniques des autres a grandement contribué à notre environnement d'apprentissage collaboratif. Sa ténacité et sa créativité dans la recherche de solutions innovantes sont des qualités qui la rendent particulièrement précieuse dans tout projet technique.

    Ce qui m’a le plus impressionné chez elle est sa capacité à aborder les problèmes avec une attitude résolument positive. Elle n’hésite pas à se lancer dans des défis et à explorer des solutions en dehors des sentiers battus. Sa passion pour le développement web et son désir constant d’apprendre et d’évoluer sont des atouts considérables qui contribueront sans aucun doute à son succès professionnel.

    En conclusion, je recommande vivement Gabrielle pour tout poste ou projet en développement web JS. Je suis convaincu qu’elle apportera une contribution significative à toute équipe ou entreprise, grâce à ses compétences techniques, son sens de l’écoute et son aptitude à résoudre les problèmes de manière efficace.`,
  },
  {
    name: 'Maryam TEI',
    position: 'Développeuse web fullstack',
    text: `Au cours de notre collaboration, Gabrielle s'est distinguée par son professionnalisme, sa rigueur et sa capacité à gérer efficacement les différentes phases du projet. Grâce à son expertise en méthodologie Agile et à son rôle central en tant que Scrum Master, le projet a pu se dérouler de manière fluide et atteindre ses objectifs dans les délais impartis.

    Elle a su instaurer un climat de confiance et de collaboration au sein de l'équipe. Elle veillait constamment à ce que tous les membres soient alignés sur les objectifs communs, favorisant ainsi une excellente entente globale. Sa capacité à résoudre les problèmes rapidement et à anticiper les obstacles a grandement contribué au succès du projet.

    Pour résumer, Gabrielle est un atout indéniable pour toute équipe ou entreprise cherchant une personne capable de mener à bien des projets complexes avec efficacité et bienveillance.`,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Témoignages</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonialsData.map((testimonial, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="testimonial d-flex flex-column justify-content-center align-items-center">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">
                  <strong>{testimonial.name}</strong> - {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flèches de navigation */}
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span aria-hidden="true">&#9664;</span> {/* Chevron pour la flèche gauche */}
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span aria-hidden="true">&#9654;</span> {/* Chevron pour la flèche droite */}
          <span className="visually-hidden">Next</span>
        </button>

        {/* Points indicateurs sous le slider */}
        <ol className="carousel-indicators"> {/* Utiliser <ol> au lieu de <div> */}
          {testimonialsData.map((_, index) => (
            <li
              key={index}
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Testimonials;
