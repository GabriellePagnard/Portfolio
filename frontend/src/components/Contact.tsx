import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Me Contacter</h2>
      <p>Disponible immédiatement</p>
      <div className="contact-info">
        <p><strong>Localisation :</strong> Paris, France</p>
        <p><strong>Téléphone :</strong> 06 43 11 66 48</p>
        <p><strong>Email :</strong> email@example.com</p>
      </div>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Votre message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;
