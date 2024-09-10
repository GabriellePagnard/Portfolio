import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>A Propos</h2>
      <img src="portrait.png" alt="Gabrielle Pagnard" />
      <p>Orientis vero limes in longum protentus et rectum ab Euphratis fluminis ripis ad usque supercilia porrigitur Nili, laeva Saracenis conterminans gentibus, dextra pelagi fragoribus patens, quam plagam Nicator Seleucus occupatam auxit magnum in modum, cum post Alexandri Macedonis obitum successorio iure teneret regna Persidis, efficaciae inpetrabilis rex, ut indicat cognomentum.</p>
      <h3>Développeuse Fullstack JavaScript - Spé React</h3>
      <div className="tech-icons">
        <img src="icon-html5.svg" alt="HTML5" />
        <img src="icon-css3.svg" alt="CSS3" />
        <img src="icon-js.svg" alt="JavaScript" />
        <img src="icon-react.svg" alt="React" />
        {/* Ajoute d'autres icônes ici */}
      </div>
    </section>
  );
};

export default About;
