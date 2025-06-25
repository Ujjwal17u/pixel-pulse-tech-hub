
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, BarChart3, Blocks, Brain, Mic } from 'lucide-react';

const TechTracksSection = () => {
  const tracks = [
    {
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks',
      icon: Code,
      color: 'tech-orange'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design and experience',
      icon: Palette,
      color: 'tech-cyan'
    },
    {
      title: 'Data Science',
      description: 'Analytics, visualization, and insights',
      icon: BarChart3,
      color: 'tech-orange'
    },
    {
      title: 'Blockchain',
      description: 'Decentralized applications and smart contracts',
      icon: Blocks,
      color: 'tech-cyan'
    },
    {
      title: 'AI/ML',
      description: 'Machine learning and artificial intelligence',
      icon: Brain,
      color: 'tech-orange'
    },
    {
      title: 'Public Speaking',
      description: 'Communication and presentation skills',
      icon: Mic,
      color: 'tech-cyan'
    }
  ];

  return (
    <section id="tracks" className="py-20 px-4 bg-tech-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center mb-16 text-tech-light tech-text-glow animate-fade-in">
          Explore Our Learning Tracks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <Card 
              key={index} 
              className={`
                bg-tech-dark/50 border-${track.color}/30 hover:border-${track.color} 
                tech-glow hover:tech-glow-cyan transition-all duration-500 group cursor-pointer
                transform hover:scale-105 hover:-translate-y-2 animate-fade-in
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <track.icon className={`w-16 h-16 mx-auto mb-6 text-${track.color} group-hover:text-tech-cyan transition-colors duration-300 tech-text-glow`} />
                <h3 className="font-primary text-xl font-bold text-tech-light mb-4 tech-text-glow">
                  {track.title}
                </h3>
                <p className="text-tech-gray font-body leading-relaxed">{track.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTracksSection;
