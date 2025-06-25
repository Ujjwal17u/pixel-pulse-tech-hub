
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge, Star, Trophy, Award } from 'lucide-react';

const TechIdentitySection = () => {
  const memberCards = [
    { name: 'Alex Chen', badges: ['React Expert', 'Project Lead'], avatar: '👨‍💻' },
    { name: 'Sarah Kim', badges: ['UI/UX Pro', 'Design Lead'], avatar: '👩‍🎨' },
    { name: 'Raj Patel', badges: ['ML Engineer', 'Data Scientist'], avatar: '👨‍🔬' },
    { name: 'Maya Singh', badges: ['Full Stack', 'Open Source'], avatar: '👩‍💻' }
  ];

  return (
    <section id="identity" className="py-20 px-4 bg-tech-dark">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-primary text-4xl md:text-5xl font-bold mb-8 text-tech-light tech-text-glow animate-fade-in">
          Your Digital Presence Starts Here
        </h2>
        
        <p className="text-xl text-tech-gray mb-12 max-w-4xl mx-auto leading-relaxed font-body animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We believe in recognition. Get featured on our Member Wall, earn skill-based badges, 
          and track your growth journey across all our events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {memberCards.map((member, index) => (
            <Card 
              key={index} 
              className="bg-tech-black/50 border-tech-orange/30 hover:border-tech-orange tech-glow hover:tech-glow-cyan transition-all duration-500 group transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech-dark rounded-full border-2 border-tech-cyan/50 flex items-center justify-center group-hover:border-tech-orange transition-colors duration-300">
                  <span className="text-2xl">{member.avatar}</span>
                </div>
                <h3 className="font-primary text-lg font-bold text-tech-light mb-3 tech-text-glow">
                  {member.name}
                </h3>
                <div className="space-y-2">
                  {member.badges.map((badge, badgeIndex) => (
                    <div 
                      key={badgeIndex}
                      className="inline-block bg-tech-orange/20 text-tech-orange px-3 py-1 rounded-full text-xs font-secondary font-medium mr-2 mb-2"
                    >
                      {badge}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-tech-gray animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <Badge className="w-5 h-5 text-tech-orange" />
            <span className="font-body">Skill Badges</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-tech-cyan" />
            <span className="font-body">Member Spotlight</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-tech-orange" />
            <span className="font-body">Achievement Tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-tech-cyan" />
            <span className="font-body">Growth Journey</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechIdentitySection;
