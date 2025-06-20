import React from 'react';
import Button from '../ui/Button';
import './HeroSection.css'; // Import the new CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content-left">
            <h1 className="hero-heading">
              Beautiful, masterful design never goes out of fashion.
            </h1>
            
            <div className="hero-actions">
              <Button 
                variant="primary" 
                className="bg-[#d4af37] text-[#1c1c1c] px-[47px] py-[8px] text-[18px] font-['Old_Standard_TT'] hero-contact-button"
              >
                Contact
              </Button>
              
              <div className="hero-gallery-link">
                <span className="hero-gallery-text">Gallery</span>
                <img src="/images/img_vector_1.svg" alt="Arrow" className="hero-gallery-arrow" />
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="hero-content-right">
            <div className="hero-image-main-wrapper">
              <div className="hero-image-main-border"></div>
              <img
                src="/images/img_pexelssaystraight2735970.png"
                alt="Beautiful Jewelry Design"
                className="hero-image-main"
              />
            </div>
            
            <img
              src="/images/img_pexelsww2799862.png"
              alt="Jewelry Crafting"
              className="hero-image-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;