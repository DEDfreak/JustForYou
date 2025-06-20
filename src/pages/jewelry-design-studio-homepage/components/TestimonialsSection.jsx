// src/pages/jewelry-design-studio-homepage/components/TestimonialsSection.jsx
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Bride",
      content: "The engagement ring they created exceeded all my expectations. Every detail was perfect, and the craftsmanship is absolutely stunning. It\'s everything I dreamed of and more.",
      image: "/images/img_young_brunette_wearswhite_sweater_straw_hat_fashionableaccessorieslooksasidepositivelysmilesagains.png",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Collector",
      content: "I\'ve been collecting fine jewelry for years, and the pieces from this studio are among the finest I own. The attention to detail and quality is unmatched.",
      image: "/images/img_pexelsww2799862.png",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Fashion Designer",
      content: "Working with this team on custom pieces for my fashion shows has been incredible. They understand my vision and bring it to life with such precision and artistry.",
      image: "/images/img_pexelsfotosbykelly19772974_1.png",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-normal leading-tight text-neutral-dark font-old-standard mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl font-normal leading-relaxed text-neutral-dark text-opacity-70 font-old-standard max-w-3xl mx-auto">
            Discover why our clients trust us with their most precious moments and celebrate their testimonials of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg jewelry-shadow jewelry-hover">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-primary-background">
                    ★
                  </div>
                ))}
              </div>
              
              <p className="text-lg font-normal leading-relaxed text-neutral-dark text-opacity-80 font-old-standard mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-bold text-neutral-dark font-old-standard">
                    {testimonial.name}
                  </h4>
                  <p className="text-base font-normal text-neutral-dark text-opacity-60 font-old-standard">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;