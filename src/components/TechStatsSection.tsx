
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TechStatsSection = () => {
  const [counts, setCounts] = useState({
    members: 0,
    projects: 0,
    colleges: 0,
    cities: 0
  });

  const finalCounts = {
    members: 1500,
    projects: 135,
    colleges: 75,
    cities: 120
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(finalCounts).forEach((key) => {
        const finalValue = finalCounts[key as keyof typeof finalCounts];
        const stepValue = finalValue / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          setCounts(prev => ({
            ...prev,
            [key]: Math.min(Math.round(stepValue * currentStep), finalValue)
          }));

          if (currentStep >= steps) {
            clearInterval(interval);
          }
        }, stepDuration);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: `${counts.members}+`, label: 'Members', color: 'tech-orange' },
    { number: `${counts.projects}+`, label: 'Projects', color: 'tech-cyan' },
    { number: `${counts.colleges}+`, label: 'Colleges', color: 'tech-orange' },
    { number: `${counts.cities}+`, label: 'Cities', color: 'tech-cyan' }
  ];

  return (
    <section id="stats-section" className="py-20 px-4 bg-tech-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`bg-tech-dark/50 border-${stat.color}/30 hover:border-${stat.color} tech-glow hover:tech-glow-cyan transition-all duration-500 group transform hover:scale-105 animate-counter`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`text-4xl lg:text-5xl font-primary font-bold text-${stat.color} tech-text-glow mb-2`}>
                  {stat.number}
                </div>
                <div className="text-tech-gray font-secondary font-medium text-lg">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStatsSection;
