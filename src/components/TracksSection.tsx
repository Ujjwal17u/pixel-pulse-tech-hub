
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TracksSection = () => {
  const tracks = [
    {
      title: 'Development',
      description: 'Full-stack web and mobile development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      color: 'neon-red'
    },
    {
      title: 'AI/ML',
      description: 'Machine learning and artificial intelligence',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      color: 'neon-orange'
    },
    {
      title: 'Design',
      description: 'UI/UX and graphic design',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      color: 'neon-white'
    },
    {
      title: 'Management',
      description: 'Project and product management',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      color: 'neon-red'
    },
    {
      title: 'Open Innovation',
      description: 'Creative problem solving and innovation',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      color: 'neon-orange'
    }
  ];

  return (
    <section id="tracks" className="py-20 px-4 bg-pixel-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-futuristic text-5xl font-bold text-center mb-16 text-neon-white neon-text">
          OUR TRACKS
        </h2>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max">
            {tracks.map((track, index) => (
              <Card 
                key={index} 
                className={`
                  w-80 bg-pixel-gray/50 border-${track.color}/30 hover:border-${track.color} 
                  pixel-glow hover:pixel-glow-orange transition-all duration-500 group cursor-pointer
                  transform hover:scale-105 hover:-translate-y-2
                `}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={track.image}
                      alt={track.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pixel-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className={`font-futuristic text-2xl font-bold text-${track.color} neon-text mb-2`}>
                        {track.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{track.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
