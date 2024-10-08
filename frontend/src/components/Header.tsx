import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Utilisation de Link de React Router
import "../styles/Header.css";
import logo from "../assets/images/logo_gp.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import des icônes pour le menu burger

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const navBarRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const posHeader = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = headerRef.current;
      const navBarElement = navBarRef.current;

      if (headerElement !== null) {
        if (currentScrollPos < 100) {
          headerElement.classList.remove("header__hidden");
        } else {
          headerElement.classList.add("header__hidden");
          navBarElement?.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", posHeader);

    return () => {
      window.removeEventListener("scroll", posHeader);
    };
  }, []);

  const menuOnClick = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  const handleDownload = () => {
    fetch("/CV_GabriellePagnard.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_GabriellePagnard.pdf";
        alink.click();
      });
    });
  };

  return (
    <header ref={headerRef} className="header">
      <div className="header__left">
        <Link to="/" className="header__logo-link">
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>
      </div>
      <nav ref={navBarRef} className={`header__link ${menuOpen ? "active" : ""}`}>
      <Link to="/" className="header__active">Accueil</Link>
        <Link to="/projectsList">Mes Projets</Link>
        <Link to="/contact">Contact</Link>
        <button type="button" onClick={handleDownload} className="header__resume">
          Mon CV
        </button>
      </nav>

      {/* Menu Burger */}
      <button className="header__burger" onClick={menuOnClick}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle burger icon */}
      </button>
    </header>
  );
}

export default Header;
