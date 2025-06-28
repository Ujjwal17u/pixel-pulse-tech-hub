
import React, { useState, useEffect } from 'react';

const AnimatedTechStack = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  "use client"; // <--- Add this line at the top

import React, { useState, useEffect } from "react";

const AnimatedTechStack = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % 5);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{currentFrame}</div>;
};

export default AnimatedTechStack;


  const frames = [
    {
      title: "Web Development",
      subtitle: "Building Modern Web Applications",
      gradient: "from-tech-orange/20 to-tech-cyan/20"
    },
    {
      title: "Data Science",
      subtitle: "Analyzing & Visualizing Data",
      gradient: "from-tech-cyan/20 to-tech-orange/20"
    },
    {
      title: "Full Stack",
      subtitle: "End-to-End Development",
      gradient: "from-tech-orange/30 to-tech-cyan/30"
    },
    {
      title: "AI & Machine Learning",
      subtitle: "Intelligent Solutions",
      gradient: "from-tech-cyan/30 to-tech-orange/30"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('animated-tech-stack');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible, frames.length]);

  return (
    <section id="animated-tech-stack" className="py-20 px-4 bg-tech-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main Animation Container */}
          <div className="relative bg-tech-dark/50 rounded-lg tech-glow border border-tech-orange/20 overflow-hidden"
               style={{ aspectRatio: '848/406', minHeight: '300px' }}>
            
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-tech-black via-tech-dark to-tech-black">
              <div className="absolute inset-0 tech-particles opacity-30"></div>
            </div>

            {/* Animated Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center space-y-6 px-8">
                {frames.map((frame, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${
                      currentFrame === index 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : index < currentFrame 
                          ? 'opacity-0 scale-95 -translate-y-8'
                          : 'opacity-0 scale-105 translate-y-8'
                    }`}
                  >
                    <div className="text-center space-y-4">
                      {/* Main Title */}
                      <h1 className={`font-primary text-4xl md:text-6xl font-bold bg-gradient-to-r ${frame.gradient} bg-clip-text text-transparent tech-text-glow`}>
                        {frame.title}
                      </h1>
                      
                      {/* Subtitle */}
                      <p className="font-body text-xl md:text-2xl text-tech-gray">
                        {frame.subtitle}
                      </p>

                      {/* Tech Accent Lines */}
                      <div className="flex justify-center space-x-2 mt-8">
                        <div className="w-12 h-1 bg-tech-orange opacity-60"></div>
                        <div className="w-8 h-1 bg-tech-cyan opacity-60"></div>
                        <div className="w-4 h-1 bg-tech-orange opacity-40"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {frames.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentFrame === index ? 'bg-tech-orange' : 'bg-tech-gray/30'
                  }`}
                />
              ))}
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-4 left-4 text-tech-cyan text-2xl opacity-40">+</div>
            <div className="absolute top-4 right-4 text-tech-orange text-2xl opacity-40">⚡</div>
            <div className="absolute bottom-4 left-4 text-tech-orange text-2xl opacity-40">◆</div>
            <div className="absolute bottom-4 right-4 text-tech-cyan text-2xl opacity-40">●</div>
          </div>

          {/* Side Tech Elements */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-tech-orange/20 rounded-r-lg animate-float"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-16 bg-tech-cyan/20 rounded-l-lg animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTechStack;
