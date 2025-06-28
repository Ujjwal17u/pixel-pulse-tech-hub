import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge, Star, Trophy, Users } from 'lucide-react';
const TechIdentitySection = () => {
  const memberCards = [{
    name: 'Alex Chen',
    role: 'Full Stack Dev',
    badges: 5,
    projects: 12
  }, {
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    badges: 3,
    projects: 8
  }, {
    name: 'Rahul Kumar',
    role: 'Data Scientist',
    badges: 4,
    projects: 10
  }, {
    name: 'Sarah Johnson',
    role: 'Frontend Dev',
    badges: 6,
    projects: 15
  }];
  return <section className="py-20 px-4 bg-tech-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center mb-16 text-tech-light tech-text-glow animate-fade-in">
          Your Digital Presence Starts Here
        </h2>
        
        <div className="text-center mb-16 animate-fade-in" style={{
        animationDelay: '0.2s'
      }}>
          <p className="text-xl text-tech-gray leading-relaxed font-body max-w-3xl mx-auto">
            Track your growth and achievements in YÄTSU Squad. Earn badges, be part of our Member Wall, and showcase your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberCards.map((member, index) => <Card key={index} className="bg-tech-dark/50 border-tech-cyan/30 hover:border-tech-cyan tech-glow hover:tech-glow-cyan transition-all duration-500 group cursor-pointer transform hover:scale-105 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TechIdentitySection;