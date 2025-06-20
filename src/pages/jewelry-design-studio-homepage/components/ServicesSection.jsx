// src/pages/jewelry-design-studio-homepage/components/ServicesSection.jsx
import React from 'react';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Jewelry Design",
      description: "Transform your vision into reality with our bespoke jewelry design service. Our master craftsmen work with you to create unique pieces that reflect your personal style and story.",
      image: "/images/img_pexelsthegloriousstudio7541807.png",
      features: ["3D Design Preview", "Premium Materials", "Lifetime Warranty"]
    },
    {
      title: "Engagement Ring Creation",
      description: "Celebrate your love with a one-of-a-kind engagement ring. From classic solitaires to intricate vintage designs, we craft rings that symbolize your unique love story.",
      image: "/images/img_pexelssaystraight2735970_435x574.png",
      features: ["Diamond Selection", "Custom Settings", "Resizing Service"]
    },
    {
      title: "Jewelry Manufacturing",
      description: "Professional jewelry manufacturing services for designers and retailers. We combine traditional craftsmanship with modern techniques to deliver exceptional quality pieces.",
      image: "/images/img_rectangle_7.png",
      features: ["Bulk Production", "Quality Control", "Fast Delivery"]
    }
  ];

  return (
    <section className="py-20 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal leading-tight text-neutral-dark font-old-standard mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl font-normal leading-relaxed text-neutral-dark text-opacity-70 font-old-standard max-w-3xl mx-auto">
            Discover our comprehensive range of jewelry services, from custom design to manufacturing, all crafted with precision and passion.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg jewelry-shadow"
                />
              </div>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-4xl font-bold leading-tight text-neutral-dark font-old-standard">
                  {service.title}
                </h3>
                <p className="text-xl font-normal leading-relaxed text-neutral-dark text-opacity-75 font-old-standard">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-background rounded-full"></div>
                      <span className="text-lg font-normal text-neutral-dark font-old-standard">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="secondary" 
                  className="px-8 py-3 text-lg font-old-standard jewelry-hover"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;