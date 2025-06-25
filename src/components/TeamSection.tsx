
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    { name: 'Yash Srivastava', role: 'Founder & Leader', linkedin: '#' },
    { name: 'Arshil Anwar', role: 'Co-Organizer', linkedin: '#' },
    { name: 'Amrita', role: 'Community Manager', linkedin: '#' },
    { name: 'Ujjwal Saroj', role: 'Tech Lead', linkedin: '#' },
    { name: 'Roshni Roy', role: 'Design Lead', linkedin: '#' },
    { name: 'Swapnil Nadel', role: 'Operations Head', linkedin: '#' },
    { name: 'Shivam Srivastava', role: 'Event Coordinator', linkedin: '#' }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-pixel-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-futuristic text-5xl font-bold text-center mb-16 text-neon-white neon-text">
          LEAD ORGANIZERS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-pixel-gray/50 border-neon-red/30 pixel-glow hover:pixel-glow-orange transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-pixel-black rounded-full border-2 border-neon-orange flex items-center justify-center group-hover:border-neon-red transition-colors duration-300">
                  <span className="text-neon-orange text-2xl group-hover:text-neon-red transition-colors duration-300">👨‍💻</span>
                </div>
                <h3 className="font-futuristic text-lg font-bold text-neon-white mb-2 neon-text">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{member.role}</p>
                <button 
                  onClick={() => window.open(member.linkedin, '_blank')}
                  className="text-neon-orange hover:text-neon-red transition-colors duration-300"
                >
                  <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
