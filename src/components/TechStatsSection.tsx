
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TechStatsSection = () => {
  const stats = [
    { number: '1.5K+', label: 'Members' },
    { number: '135+', label: 'Projects' },
    { number: '75+', label: 'Colleges' },
    { number: '120+', label: 'Cities' }
  ];

  return (
    <section className="py-20 px-4 bg-tech-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-tech-dark/50 border-tech-orange/30 tech-glow text-center p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="text-4xl md:text-5xl font-bold text-tech-orange tech-text-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-tech-gray font-body text-lg">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStatsSection;
