import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProjectsList from "./components/ProjectsList";
import ProjectDetails from "./components/ProjectDetails";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ContactPage from "./pages/ContactPage"; 
import "./styles/styles.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Experience />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          }
        />

        {/* Route pour afficher la liste des projets */}
        <Route path="/projectsList" element={<ProjectsList />} />

        {/* Route for individual project details */}
        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
