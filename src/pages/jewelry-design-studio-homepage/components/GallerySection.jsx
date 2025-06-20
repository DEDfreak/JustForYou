// src/pages/jewelry-design-studio-homepage/components/GallerySection.jsx
import React from 'react';
import Button from '../../../components/ui/Button';

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/images/img_rectangle_10.png",
      alt: "Elegant Diamond Ring",
      category: "Rings"
    },
    {
      src: "/images/img_rectangle_39.png",
      alt: "Custom Gold Necklace",
      category: "Necklaces"
    },
    {
      src: "/images/img_rectangle_40.png",
      alt: "Pearl Earrings",
      category: "Earrings"
    },
    {
      src: "/images/img_rectangle_42.png",
      alt: "Vintage Bracelet",
      category: "Bracelets"
    },
    {
      src: "/images/img_rectangle_8.png",
      alt: "Designer Watch",
      category: "Watches"
    },
    {
      src: "/images/img_rectangle_41.png",
      alt: "Custom Pendant",
      category: "Pendants"
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal leading-tight text-neutral-dark font-old-standard mb-6">
            Our Exquisite Collection
          </h2>
          <p className="text-xl font-normal leading-relaxed text-neutral-dark text-opacity-70 font-old-standard max-w-3xl mx-auto">
            Explore our stunning portfolio of handcrafted jewelry pieces, each telling a unique story of elegance and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg jewelry-shadow jewelry-hover">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                <div className="w-full p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white font-old-standard mb-2">
                    {image.alt}
                  </h3>
                  <p className="text-base font-normal text-white text-opacity-90 font-old-standard">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            className="bg-primary-background text-primary-foreground px-12 py-4 text-lg font-old-standard jewelry-hover"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;