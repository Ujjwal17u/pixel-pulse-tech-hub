
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pixel-grid">
      {/* Floating pixel elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-neon-red pixel-glow animate-pixel-float"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-neon-orange pixel-glow-orange animate-pixel-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-neon-white pixel-glow animate-pixel-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-neon-red pixel-glow animate-pixel-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Corner pixel plus signs */}
      <div className="absolute top-4 left-4 text-neon-red text-2xl neon-text animate-neon-flicker">+</div>
      <div className="absolute top-4 right-4 text-neon-orange text-2xl neon-text animate-neon-flicker" style={{ animationDelay: '0.5s' }}>+</div>
      <div className="absolute bottom-4 left-4 text-neon-white text-2xl neon-text animate-neon-flicker" style={{ animationDelay: '1s' }}>+</div>
      <div className="absolute bottom-4 right-4 text-neon-red text-2xl neon-text animate-neon-flicker" style={{ animationDelay: '1.5s' }}>+</div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="font-futuristic text-6xl md:text-8xl font-black mb-6 text-neon-white neon-text animate-fade-in-up">
          PIXEL PULSE
        </h1>
        <h2 className="font-futuristic text-3xl md:text-4xl font-bold mb-4 text-neon-orange neon-text animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          TECH HUB
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          India's fastest growing student-led tech community bringing together passionate learners across the nation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            className="font-futuristic text-lg px-8 py-4 bg-neon-red hover:bg-neon-red/80 text-white pixel-glow hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            REGISTER NOW
          </Button>
          <Button 
            variant="outline"
            className="font-futuristic text-lg px-8 py-4 border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black pixel-glow-orange transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://linktr.ee', '_blank')}
          >
            JOIN COMMUNITY
          </Button>
        </div>
      </div>

      {/* Glowing blocks in corners */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-neon-red/20 to-transparent pixel-glow"></div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-orange/20 to-transparent pixel-glow-orange"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-neon-white/20 to-transparent pixel-glow"></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-neon-red/20 to-transparent pixel-glow"></div>
    </section>
  );
};

export default HeroSection;
