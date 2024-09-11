import React from 'react';
import '../styles/Hero.css';
import backgroundImage from '../assets/images/bg1.png'; 


const Hero: React.FC = () => {
  return (
    <section className="hero d-flex flex-column justify-content-center align-items-center text-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      color: '#fff',
    }}
  >
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
