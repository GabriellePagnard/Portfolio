import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import backgroundImage from "../assets/images/bg.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Développeuse Web et Web Mobile";
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      typingTimeout = setTimeout(() => {
        if (text === fullText && !isDeleting) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setIsTyping(true);
          setLoopNum(loopNum + 1);
        } else {
          setText((prev) =>
            isDeleting
              ? fullText.slice(0, prev.length - 1)
              : fullText.slice(0, prev.length + 1)
          );
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, isTyping]);

  return (
    <section
      className="home d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
      }}
    >
      <div className="home-text">
        <h1>Gabrielle Pagnard</h1>
        <h3 className="typing-effect">{text}</h3>
        <a href="#about" className="btn-primary">
          En savoir plus sur moi
        </a>
      </div>

      {/* Icônes sociales avec react-icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/gabrielle-pagnard-223b4a23/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin /> {/* Icône LinkedIn */}
        </a>
        <a
          href="https://github.com/GabriellePagnard"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub /> {/* Icône GitHub */}
        </a>
      </div>
    </section>
  );
};

export default Home;
