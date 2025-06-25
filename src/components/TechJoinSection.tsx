
import React from 'react';
import { Button } from '@/components/ui/button';

const TechJoinSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-tech-orange/10 via-tech-cyan/10 to-tech-orange/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-3 h-3 bg-tech-orange rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-tech-orange rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-tech-cyan rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-tech-dark/80 backdrop-blur-sm rounded-lg p-12 tech-glow border border-tech-orange/20">
          <h2 className="font-primary text-4xl md:text-5xl font-bold mb-8 text-tech-light tech-text-glow animate-fade-in">
            Become a Part of YÄTSU Squad
          </h2>
          
          <p className="text-xl text-tech-gray mb-8 max-w-3xl mx-auto leading-relaxed font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Fill the form to register and officially become part of our tech community.
          </p>

          <Button 
            className="font-primary text-lg px-12 py-4 bg-tech-orange hover:bg-tech-orange/80 text-black tech-glow hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105 mb-8 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
            onClick={() => window.open('https://forms.google.com', '_blank')}
          >
            REGISTER NOW
          </Button>

          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onClick={() => window.open(social.url, '_blank')}
                className="w-12 h-12 bg-tech-black rounded-lg border border-tech-cyan/30 hover:border-tech-cyan hover:bg-tech-cyan/10 transition-all duration-300 flex items-center justify-center text-2xl hover:scale-110 tech-glow-cyan"
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

export default TechJoinSection;
