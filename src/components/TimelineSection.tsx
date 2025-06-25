
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TimelineSection = () => {
  const timelineEvents = [
    { date: 'June 15', title: 'Community Launch', description: 'Official launch of Pixel Pulse Tech Hub' },
    { date: 'July 1', title: 'Member Onboarding Ends', description: 'Final day for new member registrations' },
    { date: 'July 5', title: 'First Meetup', description: 'Inaugural community meetup and networking event' },
    { date: 'July 15', title: 'Projects Begin', description: 'Collaborative projects and hackathons start' }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-pixel-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-futuristic text-5xl font-bold text-center mb-16 text-neon-white neon-text">
          COMMUNITY TIMELINE
        </h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-red via-neon-orange to-neon-white pixel-glow"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="bg-pixel-gray/50 border-neon-orange/30 pixel-glow-orange hover:pixel-glow transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="text-neon-orange font-futuristic font-bold text-lg mb-2 group-hover:text-neon-red transition-colors duration-300">
                        {event.date}
                      </div>
                      <h3 className="text-neon-white font-semibold text-xl mb-2 neon-text">
                        {event.title}
                      </h3>
                      <p className="text-gray-400">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative z-10">
                  <div className="w-6 h-6 bg-neon-red rounded-full pixel-glow animate-glow-pulse border-2 border-pixel-black"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
