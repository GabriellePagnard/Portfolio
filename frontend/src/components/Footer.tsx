import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer text-center text-lg-start bg-dark text-white py-3">
      <div className="container">
        

        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center">
              © 2024 Site réalisé par Gabrielle Pagnard. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
