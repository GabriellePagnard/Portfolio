import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectsList from './components/ProjectsList';
import ProjectDetails from './components/ProjectDetails';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './styles/styles.css';

const App: React.FC = () => {
  return (
    <Router>
      {/* Header and Footer are common to all routes */}
      <Header />
      <Routes>
        {/* Route for Home page including all sections */}
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
        
        {/* Route for listing all projects */}
        <Route path="/projects" element={<ProjectsList />} />

        {/* Route for individual project details */}
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
