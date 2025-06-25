
import React, { useState, useEffect } from 'react';
import { Home, User, Calendar, Target, Users, HelpCircle, BookOpen } from 'lucide-react';

const PixelNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'identity', icon: BookOpen, label: 'Get Recognized' },
    { id: 'tracks', icon: Target, label: 'Tracks' },
    { id: 'timeline', icon: Calendar, label: 'Timeline' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'faq', icon: HelpCircle, label: 'FAQ' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-pixel-gray/90 backdrop-blur-sm rounded-lg p-2 pixel-glow">
      <div className="flex flex-col space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                group relative p-3 rounded-lg transition-all duration-300 hover:scale-110
                ${isActive 
                  ? 'bg-neon-red pixel-glow text-neon-white' 
                  : 'bg-pixel-dark/50 hover:bg-pixel-dark text-gray-400 hover:text-neon-orange'
                }
              `}
            >
              <Icon size={20} className={isActive ? 'animate-glow-pulse' : ''} />
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-2 py-1 bg-pixel-dark rounded text-sm text-neon-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default PixelNavigation;
