
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Code, Users, Mic, TrendingUp } from 'lucide-react';

const TechAboutSection = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Curated content and materials',
      color: 'tech-orange'
    },
    {
      icon: Code,
      title: 'Real Projects',
      description: 'Hands-on development experience',
      color: 'tech-cyan'
    },
    {
      icon: Users,
      title: 'Peer Networking',
      description: 'Connect with like-minded builders',
      color: 'tech-orange'
    },
    {
      icon: Mic,
      title: 'Tech Events',
      description: 'Workshops and meetups',
      color: 'tech-cyan'
    },
    {
      icon: TrendingUp,
      title: 'Career Guidance',
      description: 'Mentorship and growth opportunities',
      color: 'tech-orange'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-tech-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-primary text-4xl md:text-5xl font-bold text-center mb-16 text-tech-light tech-text-glow animate-fade-in">
          About YÄTSU Squad
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Text Content */}
          <div className="space-y-8 animate-fade-in">
            <p className="text-xl text-tech-gray leading-relaxed font-body">
              YÄTSU Squad is a student-powered community of tech builders and creators. We help our members grow through curated learning, real project experience, community networking, and guided career development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-tech-dark/50 rounded-lg border border-tech-orange/20 hover:border-tech-orange/50 transition-all duration-300"
                >
                  <benefit.icon className={`w-8 h-8 text-${benefit.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className="font-primary font-semibold text-tech-light mb-1">{benefit.title}</h3>
                    <p className="text-tech-gray text-sm font-body">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-tech-dark/50 rounded-lg p-8 tech-glow border border-tech-cyan/30">
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-tech-orange/20 to-tech-cyan/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <h3 className="font-primary text-2xl font-bold text-tech-light mb-4 tech-text-glow">
                  Building the Future Together
                </h3>
                <p className="text-tech-gray font-body">
                  Join a community where innovation meets collaboration, and ideas become reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAboutSection;
