import React from 'react';
import '../styles/Testimonials.css'; // Assure-toi que le chemin est correct

const testimonialsData = [
  {
    name: 'John Doe',
    position: 'Développeur Fullstack',
    text: 'Travailler avec Gabrielle a été un plaisir. Son professionnalisme et son expertise en développement web ont vraiment amélioré notre projet.',
  },
  {
    name: 'Jane Smith',
    position: 'Chef de projet',
    text: 'Gabrielle a fait preuve de réactivité et a livré un travail de qualité. Sa capacité à comprendre nos besoins a vraiment fait la différence.',
  },
  {
    name: 'Mike Johnson',
    position: 'CTO',
    text: 'Excellente collaboration avec Gabrielle, toujours prêt à proposer des solutions innovantes tout en respectant les deadlines.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2>Témoignages</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">
              <strong>{testimonial.name}</strong> - {testimonial.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
