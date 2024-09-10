import React, { useRef, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const btnMenuRef = useRef<HTMLButtonElement>(null);
  const navBarRef = useRef<HTMLElement>(null);

  // Scroll event listener to hide/show the header based on scroll position
  useEffect(() => {
    const posHeader = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = headerRef.current;
      const navBarElement = navBarRef.current;

      if (headerElement !== null) {
        if (currentScrollPos < 100) {
          headerElement.classList.remove('header__hidden');
        } else {
          headerElement.classList.add('header__hidden');
          navBarElement?.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', posHeader);

    return () => {
      window.removeEventListener('scroll', posHeader);
    };
  }, []);

  // Toggle the navigation menu visibility
  const menuOnClick = () => {
    const navBarElement = navBarRef.current;
    navBarElement?.classList.toggle('active');
  };

  // Handle the download of the resume file
  const handleDownload = () => {
    fetch('/CV_GabriellePagnard.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CV_GabriellePagnard.pdf';
        alink.click();
      });
    });
  };

  return (
    <header ref={headerRef} className="header">
      <div className="header__left">
        <h1 className="header__title">Gabrielle Pagnard</h1>
        <button ref={btnMenuRef} type="button" onClick={menuOnClick}>
        </button>
      </div>
      <nav ref={navBarRef} className="header__link">
        <a href="#home" className="header__active">
          Accueil
        </a>
        <a href="#about">A propos</a>
        <a href="#education">Expériences</a>
        <a href="#projets">Projets</a>
        <a href="#contact">Contact</a>
        <button
          type="button"
          onClick={handleDownload}
          className="header__resume"
        >
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
