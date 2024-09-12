import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Contact.css'; 

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container contact__cadre">
        <h2 className="contact__title">Me Contacter</h2>
        <h3 className="contact__title-3">Disponible immédiatement</h3>

        <div className="row contact__content-info justify-content-center">
          <div className="col-12 col-md-4 text-center">
            <FaMapMarkerAlt className="contact__icon" />
            <h3 className="contact__info">Paris, France</h3>
          </div>
          <div className="col-12 col-md-4 text-center">
            <FaPhone className="contact__icon" />
            <h3 className="contact__info">06 43 11 66 48</h3>
          </div>
          <div className="col-12 col-md-4 text-center">
            <FaEnvelope className="contact__icon" />
            <h3 className="contact__info">gpagnard@gmail.com</h3>
          </div>
        </div>

        <form
          name="contact"
          method="post"
          className="contact__form"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input
              name="name"
              className="form-control contact__form-content-input"
              type="text"
              placeholder="Nom"
              required
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              className="form-control contact__form-content-input"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control contact__form-content-input-message"
              placeholder="Votre message"
              required
            />
          </div>
          <button type="submit" className="btn contact__submit-btn">
            Envoyer !
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
