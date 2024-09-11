import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IconTest from "./components/IconTest";
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
