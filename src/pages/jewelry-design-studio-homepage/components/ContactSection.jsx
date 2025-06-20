// src/pages/jewelry-design-studio-homepage/components/ContactSection.jsx
import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import { submitContact } from "../../../utils/api";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await submitContact(formData);
      setSubmitStatus({ type: 'success', message: result.message });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "/images/img_phone.svg",
      label: "Phone",
      value: "+91 9769826799",
      action: "tel:+15551234567"
    },
    {
      icon: "/images/img_message.svg",
      label: "Email",
      value: "info@jewelrydesignstudio.com",
      action: "mailto:info@jewelrydesignstudio.com"
    },
    {
      icon: "/images/img_vector_1.svg",
      label: "Address",
      value: "123 Jewelry Avenue, New York, NY 10001",
      action: "#"
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal leading-tight text-accent-foreground font-old-standard mb-6">
            Start Your Jewelry Journey
          </h2>
          <p className="text-xl font-normal leading-relaxed text-accent-foreground text-opacity-90 font-old-standard max-w-3xl mx-auto">
            Ready to create something extraordinary? Get in touch with our team to discuss your vision and begin crafting your perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-accent-foreground font-old-standard mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center space-x-4 p-4 bg-accent-foreground bg-opacity-10 rounded-lg jewelry-hover group"
                >
                  <img
                    src={info.icon}
                    alt={info.label}
                    className="w-6 h-6 text-accent-foreground"
                  />
                  <div>
                    <p className="text-base font-normal text-accent-foreground text-opacity-80 font-old-standard">
                      {info.label}
                    </p>
                    <p className="text-lg font-normal text-accent-foreground font-old-standard group-hover:text-primary-background transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold text-accent-foreground font-old-standard mb-4">
                Studio Hours
              </h4>
              <div className="space-y-2 text-accent-foreground text-opacity-90 font-old-standard">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-accent-foreground p-8 rounded-lg jewelry-shadow">
            <h3 className="text-3xl font-bold text-neutral-dark font-old-standard mb-8">
              Send Us a Message
            </h3>
            
            {/* Status Messages */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-normal text-neutral-dark font-old-standard mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-background focus:ring-2 focus:outline-none font-old-standard disabled:opacity-50"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-base font-normal text-neutral-dark font-old-standard mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-background focus:ring-2 focus:outline-none font-old-standard disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-normal text-neutral-dark font-old-standard mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-background focus:ring-2 focus:outline-none font-old-standard disabled:opacity-50"
                    placeholder="+91 9769826799"
                  />
                </div>
                <div>
                  <label className="block text-base font-normal text-neutral-dark font-old-standard mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-background focus:ring-2 focus:outline-none font-old-standard disabled:opacity-50"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-design">Custom Jewelry Design</option>
                    <option value="engagement-ring">Engagement Ring</option>
                    <option value="manufacturing">Jewelry Manufacturing</option>
                    <option value="consultation">Design Consultation</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-base font-normal text-neutral-dark font-old-standard mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-background focus:ring-2 focus:outline-none font-old-standard resize-vertical disabled:opacity-50"
                  placeholder="Tell us about your jewelry vision or any questions you have..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                variant="primary" 
                disabled={isSubmitting}
                className="w-full bg-primary-background text-primary-foreground py-4 text-lg font-old-standard jewelry-hover disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;