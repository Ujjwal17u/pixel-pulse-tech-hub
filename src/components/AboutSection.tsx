
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { number: '5K+', label: 'Members' },
    { number: '135+', label: 'Projects' },
    { number: '75+', label: 'Colleges' },
    { number: '120+', label: 'Cities' }
  ];

  const eventImages = [
    'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop'
  ];

  return (
    <section id="about" className="py-20 px-4 bg-pixel-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-futuristic text-5xl font-bold text-center mb-16 text-neon-white neon-text">
          ABOUT US
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              This is a student-led tech community founded by <span className="text-neon-orange font-semibold">Yash Srivastava</span>, 
              focused on bringing together passionate learners across India. Members get exclusive access to resources, 
              events, and collaborative networking opportunities.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is to create a thriving ecosystem where students can learn, build, and grow together, 
              pushing the boundaries of technology and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-pixel-gray/50 border-neon-red/30 pixel-glow hover:pixel-glow-orange transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-futuristic font-bold text-neon-red group-hover:text-neon-orange transition-colors duration-300 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium mt-2">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-futuristic text-3xl font-bold text-center mb-8 text-neon-orange neon-text">
            COMMUNITY EVENTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg pixel-glow hover:pixel-glow-orange transition-all duration-300">
                <img 
                  src={image} 
                  alt={`Event ${index + 1}`}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pixel-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
