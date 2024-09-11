import React, { useRef, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/images/logo_gp.png";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const btnMenuRef = useRef<HTMLButtonElement>(null);
  const navBarRef = useRef<HTMLElement>(null);

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
    const navBarElement = navBarRef.current;
    navBarElement?.classList.toggle("active");
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
        <a href="#home" className="header__logo-link">
          <img src={logo} alt="Logo" className="header__logo" />
        </a>
      </div>
      <nav ref={navBarRef} className="header__link">
        <a href="#home" className="header__active">
          Accueil
        </a>
        <a href="#about">A propos</a>
        <a href="#experience">Expériences</a>
        <a href="#projects">Projets</a>
        <a href="#testimonials">Témoignages</a>
        <a href="#contact">Contact</a>
        <button
          type="button"
          onClick={handleDownload}
          className="header__resume"
        >
          Mon CV
        </button>
      </nav>
    </header>
  );
}

export default Header;
