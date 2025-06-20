// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css'; // Existing CSS import

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Basic SVG hamburger icon
  const HamburgerIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  );

  // Basic SVG close icon
  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-image-image">
            <Link to="/">
              <img
                src="/images/img_justforyoujewelslogo_3.png"
                alt="JustForYou Jewels Logo"
                className="logo-image"
              />
            </Link>
          </div>          
          <div className="logo-text-text">
            <Link to="/">
              <img
                src="/images/CROPPEDjustforyoujewelsLOGO.png"
                alt="JustForYou Jewels Logo"
                className="logo-text"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section flex items-center space-x-10">
          {/* Hamburger Button - visible on small screens */}
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>

          {/* Desktop Navigation */}
          <nav className="navigation-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/about" className="nav-link">About us</Link>
          </nav>

          {/* Contact Button - hidden on small, shown on md+ */}
          <div className="contact-button-wrapper hidden md:flex">
            <span className="contact-button-text">Contact</span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - shown when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav-menu">
          <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/gallery" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About us</Link>
          <div className="contact-button-wrapper mt-4 mx-4 w-[calc(100%-2rem)]" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="contact-button-text">Contact</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;