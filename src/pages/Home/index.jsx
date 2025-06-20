import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import Button from '../../components/ui/Button';
import './HomePage.css'; // Import the new CSS file

const HomePage = () => {
  const [showDesignModal, setShowDesignModal] = useState(false);

  const handleReadMore = (service) => {
    alert(`Learn more about ${service}`);
  };

  const handleSendDesignIdea = () => {
    setShowDesignModal(true);
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com', '_blank');
  };

  const handleContactUs = () => {
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <div className="home-page-container">
      <Header />
      <HeroSection />
      
      {/* Our Services Section */}
      <section className="home-section">
        <div className="home-section-container">
          <h2 className="home-section-heading">Our Services</h2>

          {/* Custom Jewelry Service */}
          <div className="service-item-grid">
            <div className="service-image-container">
              <img
                src="/images/img_pexelsthegloriousstudio7541807.png"
                alt="Custom Jewelry Design"
                className="service-image"
              />
            </div>
            <div className="service-content-container">
              <h3 className="service-title">Custom Jewelry</h3>
              <p className="service-description">
                Our team specializes in designing and crafting complex custom jewelry in gold or platinum. Our 3D designers can work with even the most complex ideas and create a digital model for you to approve before committing to production.
              </p>
              <Button 
                variant="secondary" 
                onClick={() => handleReadMore('Custom Jewelry')}
                className="px-[35px] py-[8px] text-[18px] font-['Old_Standard_TT'] service-button"
              >
                Read more
              </Button>
            </div>
          </div>

          {/* Engagement Ring Service */}
          <div className="service-item-grid service-item-grid-reversed"> {/* Reversed order for desktop */}
            <div className="service-image-container">
              <img
                src="/images/img_pexelssaystraight2735970_435x574.png"
                alt="Engagement Ring Design"
                className="service-image"
              />
            </div>
            <div className="service-content-container">
              <h3 className="service-title">Engagement Ring</h3>
              <p className="service-description-alt">
                Our team of 3d modelers and jewelers can create literally any ring you can imagine, including complex designs. We are opening up our services to private clients, so you can get a beautiful, designer quality engagement ring at an affordable price.
              </p>
              <Button 
                variant="secondary" 
                onClick={() => handleReadMore('Engagement Ring')}
                className="px-[35px] py-[8px] text-[18px] font-['Old_Standard_TT'] service-button"
              >
                Read more
              </Button>
            </div>
          </div>

          {/* Jewelry Manufacturing Service */}
          <div className="service-item-grid">
            <div className="service-image-container">
              <img
                src="/images/img_rectangle_7.png"
                alt="Jewelry Manufacturing"
                className="service-image" // Re-using service-image class
              />
            </div>
            <div className="service-content-container">
              <h3 className="service-title">Jewelry Manufacturing</h3>
              <p className="service-description">
                We work with you to make sure your jewelry is produced exactly as your specify and with impeccable standards. We can manufacture a unique collection for your store, or even work with custom orders for your customers.
              </p>
              <Button 
                variant="secondary" 
                onClick={() => handleReadMore('Jewelry Manufacturing')}
                className="px-[35px] py-[8px] text-[18px] font-['Old_Standard_TT'] service-button"
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="home-section home-section-dark-bg">
        <div className="max-w-[1440px] mx-auto"> {/* This section doesn't use home-section-container for full-width image half */}
          <div className="lifestyle-section-grid">
            <img
              src="/images/img_rectangle_9.png"
              alt="Luxury Lifestyle"
              className="lifestyle-image"
            />
            <div className="lifestyle-content">
              <h2 className="lifestyle-heading">
                No limits to the lifestyle you deserve.
              </h2>
              <p className="lifestyle-text">
                Contact us and we will reply you back with personalized plan and quote.
              </p>
              <Button 
                variant="primary" 
                onClick={handleSendDesignIdea}
                className="bg-[#faf7f0] text-[#2b2024] px-[19px] py-[10px] text-[18px] font-['Old_Standard_TT'] lifestyle-button"
              >
                Send Your Design Idea
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="home-section">
        <div className="home-section-container">
          <h2 className="home-section-heading-center">
            Connect us on Instagram
          </h2>
          
          {/* Instagram Gallery - Simplified for this example, complex layout requires careful grid span considerations */}
          <div className="instagram-gallery-grid"> {/* Add 'complex-layout' class here if using that variant */}
            <img
              src="/images/img_rectangle_10.png"
              alt="Instagram Post 1"
              className="instagram-image-large first" // Add 'first' if using complex-layout
              onClick={handleInstagramClick}
            />
            <div className="instagram-image-small-container">
              <img
                src="/images/img_rectangle_39.png"
                alt="Instagram Post 2"
                className="instagram-image-small"
                onClick={handleInstagramClick}
              />
              <img
                src="/images/img_rectangle_40.png"
                alt="Instagram Post 3"
                className="instagram-image-small"
                onClick={handleInstagramClick}
              />
            </div>
            <img
              src="/images/img_rectangle_42.png"
              alt="Instagram Post 4"
              className="instagram-image-large second" // Add 'second' if using complex-layout
              onClick={handleInstagramClick}
            />
            {/* For a true 4-column desktop layout, you'd add one more item or adjust col-spans */}
          </div>

          <div className="instagram-button-container">
            <Button 
              variant="secondary" 
              onClick={handleInstagramClick}
              className="px-[37px] py-[10px] text-[18px] font-['Old_Standard_TT']"
            >
              Instagram
            </Button>
          </div>

          <div className="instagram-social-icons-container">
            <img 
              src="/images/img_twitter_1.png" 
              alt="Twitter" 
              className="instagram-social-icon"
              onClick={() => window.open('https://twitter.com', '_blank')}
            />
            <img 
              src="/images/img_facebook_1.png" 
              alt="Facebook" 
              className="instagram-social-icon"
              onClick={() => window.open('https://facebook.com', '_blank')}
            />
            <img 
              src="/images/img_instagram_1.png" 
              alt="Instagram" 
              className="instagram-social-icon"
              onClick={handleInstagramClick}
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="home-section">
        <div className="home-section-container">
          <div className="home-about-grid">
            <div className="home-about-content">
              <h2 className="home-section-heading">About us</h2>
              <div className="home-about-text-group">
                <p className="home-about-text">
                  At NaamNYC, we work with high-end designers (both new and established), retail stores, and also private clients looking for that perfect custom piece or engagement ring.
                </p>
                <p className="home-about-text">
                  Our studio combines over 20 years of experience with a modern focus on 3d printing technology. While we specialize in custom design and digital modeling, we are also a respected high-end jewelry manufacturer.
                </p>
                <p className="home-about-text">
                  Our expert team of jewelers and designers will take your custom design idea all the way from concept to reality.
                </p>
              </div>
              <Button 
                variant="secondary" 
                onClick={handleContactUs}
                className="px-[35px] py-[8px] text-[18px] font-['Old_Standard_TT'] home-about-button"
              >
                Contact us
              </Button>
            </div>
            <div className="home-about-image-container">
              <img
                src="/images/img_youngblondewomanpearlnecklacewhitevnecktopsmileswidelywithclosedeyestakesselfieoutside_1.png"
                alt="About Us - Happy Customer"
                className="home-about-image"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showDesignModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-heading">Send Your Design Idea</h3>
            <p className="modal-text">
              We would love to hear about your custom jewelry ideas. Please share your vision with us!
            </p>
            <div className="modal-actions">
              <Button 
                variant="primary" 
                className="button-primary" // Assuming Button component has variants that make it full width if needed
                onClick={() => {
                  alert('Thank you! We will contact you soon to discuss your design idea.');
                  setShowDesignModal(false);
                }}
              >
                Send Message
              </Button>
              <Button 
                variant="outline" 
                className="button-outline"
                onClick={() => setShowDesignModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;