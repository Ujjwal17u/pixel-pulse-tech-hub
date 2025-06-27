
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const TechHeroSection = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentFrame < 2) {
        setCurrentFrame(currentFrame + 1);
      } else {
        setShowMainContent(true);
      }
    }, 1000); // Each frame displays for 1 second

    return () => clearTimeout(timer);
  }, [currentFrame]);

  const frames = [
    "Web Development",
    "Data Science"
  ];

  if (!showMainContent) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Glowing gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse"></div>

        {/* Frame content */}
        <div className="text-center z-10 relative">
          <h1 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-primary animate-fade-in"
            style={{
              textShadow: '0 0 30px rgba(96, 165, 250, 0.5)',
              animation: 'fadeInScale 0.8s ease-out'
            }}
          >
            {frames[currentFrame]}
          </h1>
          
          {/* Glowing underline */}
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Corner glowing effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
      </section>
    );
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-tech-orange rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-tech-orange rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-tech-orange rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-32 right-1/2 w-3 h-3 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Glowing gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-orange/5 via-transparent to-tech-cyan/5"></div>

      <div className="text-center z-10 max-w-5xl mx-auto px-4 animate-fade-in">
        {/* Stylized Y Logo */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="text-9xl font-primary font-black text-tech-orange tech-text-glow transform hover:scale-110 transition-transform duration-300">
              Y
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-tech-cyan tech-glow"></div>
          </div>
        </div>

        {/* Main Title with Rhosni-style gradient */}
        <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-white via-tech-orange to-tech-cyan bg-clip-text text-transparent font-primary leading-none">
          YÄTSU SQUAD
        </h1>
        
        <h2 className="font-secondary text-3xl md:text-5xl font-bold mb-6 text-tech-orange tech-text-glow">
          We Build. We Solve. We Ship.
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-tech-gray max-w-3xl mx-auto leading-relaxed font-body">
          Build. Connect. Grow with YÄTSU Squad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            className="font-primary text-xl px-12 py-6 bg-gradient-to-r from-tech-orange to-orange-600 hover:from-tech-orange/80 hover:to-orange-600/80 text-white tech-glow hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105 rounded-full"
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

      {/* Enhanced corner glowing elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-tech-orange/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-tech-cyan/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-tech-orange/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-tech-cyan/20 to-transparent rounded-full blur-3xl"></div>
      
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
