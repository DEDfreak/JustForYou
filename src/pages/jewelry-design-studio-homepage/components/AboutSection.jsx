// src/pages/jewelry-design-studio-homepage/components/AboutSection.jsx
import React from 'react';
import Button from '../../../components/ui/Button';

const AboutSection = () => {
  const achievements = [
    { number: "20+", label: "Years of Excellence" },
    { number: "5000+", label: "Happy Customers" },
    { number: "10000+", label: "Pieces Crafted" },
    { number: "50+", label: "Design Awards" }
  ];

  return (
    <section className="py-20 bg-secondary-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-normal leading-tight text-secondary-foreground font-old-standard mb-6">
                Crafting Dreams Into Reality
              </h2>
              <p className="text-xl font-normal leading-relaxed text-secondary-foreground text-opacity-90 font-old-standard mb-6">
                For over two decades, our master jewelers have been creating exceptional pieces that celebrate life's most precious moments. Each creation is a testament to our commitment to excellence and artistry.
              </p>
              <p className="text-lg font-normal leading-relaxed text-secondary-foreground text-opacity-80 font-old-standard">
                From traditional techniques passed down through generations to cutting-edge 3D design technology, we blend the best of both worlds to create jewelry that transcends time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-background font-old-standard mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-base font-normal text-secondary-foreground text-opacity-80 font-old-standard">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="primary" 
              className="bg-primary-background text-primary-foreground px-10 py-4 text-lg font-old-standard jewelry-hover"
            >
              Discover Our Story
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/img_youngblondewomanpearlnecklacewhitevnecktopsmileswidelywithclosedeyestakesselfieoutside_1.png"
                alt="Master Jeweler at Work"
                className="w-full h-96 lg:h-[600px] object-cover rounded-lg jewelry-shadow"
              />
            </div>
            <div className="absolute top-8 left-8 w-full h-full border-2 border-primary-background rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;