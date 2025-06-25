
import React from 'react';
import { Button } from '@/components/ui/button';

const TechHeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden tech-particles">
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-tech-orange rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-tech-orange rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-tech-orange rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-32 right-1/2 w-3 h-3 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Tech icons floating */}
      <div className="absolute top-16 left-16 text-tech-orange text-2xl opacity-20 animate-float">⚡</div>
      <div className="absolute top-24 right-24 text-tech-cyan text-2xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🔧</div>
      <div className="absolute bottom-24 left-24 text-tech-orange text-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>💻</div>
      <div className="absolute bottom-16 right-16 text-tech-cyan text-2xl opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>🚀</div>

      <div className="text-center z-10 max-w-5xl mx-auto px-4">
        {/* Stylized Y Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="text-8xl font-primary font-bold text-tech-orange tech-text-glow">
              Y
            </div>
          </div>
        </div>

        <h1 className="font-primary text-6xl md:text-8xl font-bold mb-6 text-tech-light tech-text-glow animate-fade-in">
          We Build. We Solve. We Ship.
        </h1>
        <h2 className="font-secondary text-2xl md:text-4xl font-semibold mb-4 text-tech-orange tech-text-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Build. Connect. Grow with YÄTSU Squad.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            className="font-primary text-lg px-10 py-4 bg-tech-orange hover:bg-tech-orange/80 text-black tech-glow hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            REGISTER NOW
          </Button>
          <Button 
            variant="outline"
            className="font-primary text-lg px-10 py-4 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-black tech-glow-cyan transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://linktr.ee', '_blank')}
          >
            JOIN OUR COMMUNITY
          </Button>
        </div>
      </div>

      {/* Corner glowing elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-tech-orange/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-tech-cyan/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-tech-orange/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-tech-cyan/10 to-transparent"></div>
    </section>
  );
};

export default TechHeroSection;
