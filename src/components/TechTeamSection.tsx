
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TechTeamSection = () => {
  const founder = {
    name: 'Yash Srivastava',
    role: 'Founder & Leader',
    description: 'Visionary leader building the future of tech communities',
    linkedin: '#'
  };

  const coLeaders = [
    { name: 'Arshil Anwar', role: 'Co-Organizer', linkedin: '#' },
    { name: 'Amrita', role: 'Community Manager', linkedin: '#' },
    { name: 'Ujjwal Saroj', role: 'Tech Lead', linkedin: '#' },
    { name: 'Roshni Roy', role: 'Design Lead', linkedin: '#' },
    { name: 'Swapnil Nadel', role: 'Operations Head', linkedin: '#' },
    { name: 'Shivam Srivastava', role: 'Event Coordinator', linkedin: '#' }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-tech-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center mb-16 text-tech-light tech-text-glow animate-fade-in">
          Meet the Team
        </h2>
        
        {/* Founder Card */}
        <div className="flex justify-center mb-16">
          <Card className="bg-tech-dark/50 border-tech-orange/50 tech-glow max-w-md w-full transform hover:scale-105 transition-all duration-500 animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-tech-black rounded-full border-3 border-tech-orange flex items-center justify-center">
                <span className="text-tech-orange text-3xl">👨‍💼</span>
              </div>
              <h3 className="font-primary text-2xl font-bold text-tech-light mb-2 tech-text-glow">
                {founder.name}
              </h3>
              <p className="text-tech-orange font-secondary font-semibold mb-3">{founder.role}</p>
              <p className="text-tech-gray text-sm mb-6 font-body">{founder.description}</p>
              <Button
                variant="outline"
                className="border-tech-orange text-tech-orange hover:bg-tech-orange hover:text-black transition-all duration-300"
                onClick={() => window.open(founder.linkedin, '_blank')}
              >
                LinkedIn
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Co-Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coLeaders.map((member, index) => (
            <Card 
              key={index} 
              className="bg-tech-dark/50 border-tech-cyan/30 hover:border-tech-cyan tech-glow hover:tech-glow-cyan transition-all duration-500 group transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-tech-black rounded-full border-2 border-tech-cyan flex items-center justify-center group-hover:border-tech-orange transition-colors duration-300">
                  <span className="text-tech-cyan text-2xl group-hover:text-tech-orange transition-colors duration-300">👨‍💻</span>
                </div>
                <h3 className="font-primary text-lg font-bold text-tech-light mb-2 tech-text-glow">
                  {member.name}
                </h3>
                <p className="text-tech-gray text-sm mb-4 font-body">{member.role}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-black transition-all duration-300"
                  onClick={() => window.open(member.linkedin, '_blank')}
                >
                  LinkedIn
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTeamSection;
