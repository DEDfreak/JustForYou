import React from 'react';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Naam Section */}
          <div className="footer-section">
            <h3 className="footer-heading">JustForYouJewels</h3>
            <p className="footer-text">
              At NaamNYC, we work with high-end designers (both new and established), retail stores, and also private clients looking for that perfect custom piece or engagement ring.
            </p>
          </div>

          {/* About Us Section */}
          <div className="footer-section">
            <h3 className="footer-heading">About us</h3>
            <div className="footer-links-container">
              <a href="/services" className="footer-link">Services</a>
              <a href="/gallery" className="footer-link">Gallery</a>
              <a href="/about" className="footer-link">About us</a>
            </div>
          </div>

          {/* Support Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <div className="footer-support-items">
              <div className="footer-support-item">
                <img src="/images/img_message.svg" alt="Email" className="footer-support-icon" />
                <span className="footer-support-text">hello@naamnyc.com</span>
              </div>
              <div className="footer-support-item">
                <img src="/images/img_phone.svg" alt="Phone" className="footer-support-icon" />
                <span className="footer-support-text-lato">+12-345-6789</span>
              </div>
              <div className="footer-social-icons">
                <img src="/images/img_twitter_1.png" alt="Twitter" className="footer-social-icon" />
                <img src="/images/img_facebook_1.png" alt="Facebook" className="footer-social-icon" />
                <img src="/images/img_instagram_1.png" alt="Instagram" className="footer-social-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;