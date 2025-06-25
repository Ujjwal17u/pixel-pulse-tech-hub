
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Users, Mic, TrendingUp } from 'lucide-react';

const TechAboutSection = () => {
  const benefits = [
    { icon: BookOpen, title: 'Free Learning Resources', description: 'Access to curated learning materials' },
    { icon: Code, title: 'Real Project Experience', description: 'Work on actual projects with teams' },
    { icon: Users, title: 'Community Networking', description: 'Connect with like-minded developers' },
    { icon: Mic, title: 'Event Participation', description: 'Join workshops, hackathons, and meetups' },
    { icon: TrendingUp, title: 'Growth & Guidance', description: 'Mentorship and career development' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-tech-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center mb-16 text-tech-light tech-text-glow animate-fade-in">
          About TechComm
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-tech-gray leading-relaxed font-body">
              TechComm is a student-led community of developers, creators, and tech enthusiasts. 
              We help members grow through learning resources, real project opportunities, networking, 
              and career development.
            </p>
            <p className="text-lg text-tech-gray leading-relaxed font-body">
              Our mission is to create a thriving ecosystem where passionate learners can build, 
              connect, and grow together while shipping real solutions to real problems.
            </p>
          </div>
          
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-80 bg-gradient-to-br from-tech-orange/20 to-tech-cyan/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl text-tech-orange/60">🚀</div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-tech-cyan rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-tech-orange rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-tech-black/50 border-tech-orange/20 hover:border-tech-orange tech-glow hover:tech-glow-cyan transition-all duration-500 group transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-tech-orange group-hover:text-tech-cyan transition-colors duration-300" />
                <h3 className="font-primary text-lg font-semibold text-tech-light mb-2">
                  {benefit.title}
                </h3>
                <p className="text-tech-gray text-sm font-body">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechAboutSection;
