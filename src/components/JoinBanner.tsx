
import React from 'react';
import { Button } from '@/components/ui/button';

const JoinBanner = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Discord', url: '#', icon: '💬' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-neon-red/20 via-neon-orange/20 to-neon-red/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-3 h-3 bg-neon-white animate-pixel-float"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-neon-red animate-pixel-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-neon-orange animate-pixel-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-neon-white animate-pixel-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-pixel-gray/80 backdrop-blur-sm rounded-lg p-12 pixel-glow-orange">
          <h2 className="font-futuristic text-4xl md:text-5xl font-bold mb-8 text-neon-white neon-text">
            JOIN THE MOVEMENT
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We welcome all passionate learners. Whether you code, design, or manage — join us and become part of 
            India's fastest growing student tech community.
          </p>

          <Button 
            className="font-futuristic text-lg px-12 py-4 bg-neon-orange hover:bg-neon-orange/80 text-black pixel-glow-orange hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105 mb-8"
            onClick={() => window.open('https://linktr.ee', '_blank')}
          >
            JOIN NOW
          </Button>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => window.open(social.url, '_blank')}
                className="w-12 h-12 bg-pixel-dark rounded-lg border border-neon-orange/30 hover:border-neon-orange hover:bg-neon-orange/10 transition-all duration-300 flex items-center justify-center text-2xl hover:scale-110"
              >
                {social.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinBanner;
