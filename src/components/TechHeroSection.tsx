
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const TechHeroSection = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentFrame < 1) {
        setCurrentFrame(currentFrame + 1);
      } else {
        setIsAnimating(false);
        setTimeout(() => setShowMainContent(true), 500);
      }
    }, 2000); // Each frame displays for 2 seconds for better visibility

    return () => clearTimeout(timer);
  }, [currentFrame]);

  const frames = [
    {
      title: "Web Development",
      gradient: "from-blue-400 via-purple-400 to-cyan-400",
      shadowColor: "rgba(96, 165, 250, 0.5)"
    },
    {
      title: "Data Science", 
      gradient: "from-emerald-400 via-teal-400 to-blue-400",
      shadowColor: "rgba(52, 211, 153, 0.5)"
    }
  ];

  if (!showMainContent) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Enhanced animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-pulse ${
                i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-cyan-400'
              }`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
        </div>

        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>

        {/* Frame content with enhanced animations */}
        <div className="text-center z-10 relative">
          {frames.map((frame, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                currentFrame === index && isAnimating
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-95'
              }`}
            >
              <div className="text-center">
                <h1 
                  className={`text-6xl md:text-9xl font-bold bg-gradient-to-r ${frame.gradient} bg-clip-text text-transparent font-primary transform transition-all duration-1000 ${
                    currentFrame === index ? 'scale-100 translate-y-0' : 'scale-110 translate-y-4'
                  }`}
                  style={{
                    textShadow: `0 0 40px ${frame.shadowColor}`,
                    filter: 'drop-shadow(0 0 20px currentColor)'
                  }}
                >
                  {frame.title}
                </h1>
                
                {/* Animated underline */}
                <div className={`mt-8 mx-auto rounded-full transition-all duration-1000 ${
                  currentFrame === index 
                    ? `w-40 h-1 bg-gradient-to-r ${frame.gradient} opacity-100` 
                    : 'w-0 h-1 opacity-0'
                }`}></div>

                {/* Pulsing circles */}
                <div className="flex justify-center space-x-4 mt-12">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${frame.gradient} animate-pulse`}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced corner glowing effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-600/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </section>
    );
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 2 === 0 ? 'w-2 h-2 bg-tech-orange' : 'w-3 h-3 bg-tech-cyan'
            }`}
            style={{
              top: `${20 + (i * 8)}%`,
              left: `${10 + (i * 6)}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Dynamic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-orange/10 via-transparent to-tech-cyan/10 animate-pulse"></div>

      <div className="text-center z-10 max-w-5xl mx-auto px-4 animate-fade-in">
        {/* Enhanced Y Logo */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 mx-auto mb-8 relative group">
            <div className="text-9xl font-primary font-black text-tech-orange tech-text-glow transform hover:scale-110 transition-all duration-500 cursor-pointer">
              Y
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-tech-cyan tech-glow group-hover:w-20 transition-all duration-300"></div>
            
            {/* Orbiting elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-2 right-2 w-2 h-2 bg-tech-cyan rounded-full animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-tech-orange rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced main title */}
        <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-white via-tech-orange to-tech-cyan bg-clip-text text-transparent font-primary leading-none hover:scale-105 transition-transform duration-300">
          YÄTSU SQUAD
        </h1>
        
        <h2 className="font-secondary text-3xl md:text-5xl font-bold mb-6 text-tech-orange tech-text-glow animate-pulse">
          We Build. We Solve. We Ship.
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-tech-gray max-w-3xl mx-auto leading-relaxed font-body animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Build. Connect. Grow with YÄTSU Squad.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            className="font-primary text-xl px-12 py-6 bg-gradient-to-r from-tech-orange to-orange-600 hover:from-tech-orange/80 hover:to-orange-600/80 text-white tech-glow hover:tech-glow transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-full shadow-2xl"
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            REGISTER NOW
          </Button>
          <Button 
            variant="outline" 
            className="font-primary text-xl px-12 py-6 border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-black tech-glow-cyan hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-full"
            onClick={() => window.open('https://linktr.ee', '_blank')}
          >
            JOIN OUR COMMUNITY
          </Button>
        </div>
      </div>

      {/* Enhanced corner elements with better animations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-tech-orange/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-tech-cyan/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-tech-orange/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-tech-cyan/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <div className="w-6 h-10 border-2 border-tech-orange rounded-full flex justify-center hover:border-tech-cyan transition-colors duration-300">
          <div className="w-1 h-3 bg-tech-orange rounded-full mt-2 animate-pulse hover:bg-tech-cyan transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default TechHeroSection;
