
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
        {/* Stylized Y Logo - more prominent like Code for Bharat */}
        <div className="mb-12 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="text-9xl font-primary font-black text-tech-orange tech-text-glow transform hover:scale-110 transition-transform duration-300">
              Y
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-tech-cyan tech-glow"></div>
          </div>
        </div>

        {/* Main Title - larger and more prominent */}
        <h1 className="font-primary text-7xl md:text-9xl font-black mb-8 text-tech-light tech-text-glow animate-fade-in leading-none">
          YÄTSU SQUAD
        </h1>
        
        <h2 className="font-secondary text-3xl md:text-5xl font-bold mb-6 text-tech-orange tech-text-glow animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We Build. We Solve. We Ship.
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-tech-gray max-w-3xl mx-auto leading-relaxed font-body animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Build. Connect. Grow with YÄTSU Squad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            className="font-primary text-xl px-12 py-6 bg-tech-orange hover:bg-tech-orange/80 text-black tech-glow hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105 rounded-full"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            REGISTER NOW
          </Button>
          <Button 
            variant="outline"
            className="font-primary text-xl px-12 py-6 border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-black tech-glow-cyan transition-all duration-300 transform hover:scale-105 rounded-full"
            onClick={() => window.open('https://linktr.ee', '_blank')}
          >
            JOIN OUR COMMUNITY
          </Button>
        </div>
      </div>

      {/* Corner glowing elements - more like Code for Bharat */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-tech-orange/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-tech-cyan/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-tech-orange/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-tech-cyan/20 to-transparent"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-tech-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default TechHeroSection;
