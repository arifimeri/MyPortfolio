
import React, { useState, useEffect } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Portfolio.css';
import profileImage from "../assets/Arif_image.jpeg";
import firstProject from "../assets/firstProjectInPortfolio.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faJava, faDocker, faWordpress, faGitAlt, faGithub , 
  faGitlab, faSquareGithub, faSquareLinkedin, faSquareInstagram, faSquareFacebook} 
from '@fortawesome/free-brands-svg-icons'; 
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';

const PortfolioPage = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const closeMenu = () => {
  setIsMenuOpen(false);
};

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="page-layout">
      <div className="glowing-background" />
      
      <header className="nav-header">
      <div className='logo' style={{ fontWeight: 'bold' }}>ARIF IMERI</div>
      
      {/* Burger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>

      {/* Nav Links - Add "active" class when menu is open */}
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>

      {/* 1. HOME SECTION */}
      <section id="home" className="section-container hero-section">
        <img className='imageInHeroSection' src={profileImage} alt="Arif Imeri" />
        <div className='textInHeroSection'>
          <p className='greetingParagraph'>Hi, I'm<span className="boldName"> Arif Imeri</span></p>
          <h1 className="hero-title">
            Turning <span className="purple-text">ideas</span> into functional and scalable web applications.
          </h1>
          <p style={{ fontSize: '20px' }}>Software Developer</p>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="section-container">
        <div className="DescriptionAboutMe">
          <h2 style={{ marginBottom: '30px' }}>About me</h2>
          <p>
            I’m a software developer with around 3 years of experience building web applications and digital solutions.
            I focus on creating practical, functional, and user-friendly products using modern web technologies.
            My work includes developing business websites, e-commerce platforms, and custom applications, with a
            strong focus on clean design, performance, and usability.
          </p>
        </div>

        <div className="technologiesSection" style={{ marginTop: '50px' }}>
          <h1 style={{ fontSize: '30px', letterSpacing: "0.5px", marginBottom: '30px' }}>Technologies I Use</h1>
          <div className="technologies-grid">
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faHtml5} className='tech-buttons'/>
                HTML5
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faCss3} className='tech-buttons'/>
                CSS
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faJs} className='tech-buttons'/>
                JavaScript
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faReact} className='tech-buttons'/>
                React
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faJava} className='tech-buttons'/>
                Java
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faDatabase} className='tech-buttons'/>
                MySQL
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faDocker} className='tech-buttons'/>
                Docker
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faWordpress} className='tech-buttons'/>
                Wordpress
              </button>
              <button className='tech-icon'>
                <FontAwesomeIcon icon={faGitAlt} className='tech-buttons'/>
                Git
              </button>
             <button className='tech-icon'>
                <FontAwesomeIcon icon={faGithub} className='tech-buttons'/>
                GitHub
              </button>
               <button className='tech-icon'>
                <FontAwesomeIcon icon={faGitlab} className='tech-buttons'/>
                GitLab
              </button>
          </div> 
        </div> {/* Added missing closing div for technologiesSection */}
      </section>

      {/* 3. LAB SECTION */}
      <section id="projects" className="section-container">
        <h2 style={{ marginBottom: '20px' }}>Projects</h2>
        
        <div className="project-card">
          <div className="project-info">
            <h4>DRINORI PVC</h4>
            <p className='project-desc'>
              Developed a modern and responsive website for Drinori PVC, 
              a company specializing in PVC doors and windows manufacturing.
              The goal of the project was to create a professional online presence
              that showcases the company's products and services.
            </p>
          </div>
          <div className="mockup-placeholder">
            <img src={firstProject} alt="DRINORI PVC" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="section-container contact-section">
        <div className="title-in-contact-section">
        <h2>Contact</h2>
        </div>
        <div className="items-in-contact-section">
        <div className="left-side-in-contact">
        <p className='paragraph-in-contact-section-left-side'>
          Open to new opportunities and collaborations.
          Let's build something great together.
        </p>
        <div className="contact-links">
         <a href="https://www.linkedin.com/in/arif-imeri-729824345/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faSquareLinkedin} className='contactPlatforms'/></a>
         <a href="https://github.com/arifimeri"   target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faSquareGithub} className='contactPlatforms'/></a>
         <a href="https://www.instagram.com/ariifimeri/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faSquareInstagram} className='contactPlatforms'/></a>
         <a href="https://www.facebook.com/100000234324123O32743" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faSquareFacebook} className='contactPlatforms'/></a>
        </div>
        </div>
        <div className="right-side-in-contact">
        <ContactForm/>
        </div>
        </div>
      </section>

      <footer className='copyright-footer'>
         <p>© 2026 Arif Imeri</p>
      </footer>

      {/* 5. BACK TO TOP BUTTON */}
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default PortfolioPage;