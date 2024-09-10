import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Gabrielle Pagnard</h1>
        <h3>Développeuse Web et Web Mobile</h3>
        <p>Disponible immédiatement</p>
        <a href="#about" className="btn-primary">En savoir plus</a>
      </div>
    </section>
  );
};

export default Hero;
