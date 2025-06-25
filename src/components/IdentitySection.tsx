
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const IdentitySection = () => {
  return (
    <section id="identity" className="py-20 px-4 bg-pixel-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-futuristic text-5xl font-bold mb-8 text-neon-white neon-text">
          GET RECOGNIZED
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Upload your photo and receive a personalized community card. Show off your identity as a member 
          of a growing tech movement.
        </p>

        <Card className="bg-pixel-gray/50 border-neon-orange/30 pixel-glow-orange max-w-md mx-auto mb-8">
          <CardContent className="p-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-pixel-dark rounded-lg border-2 border-neon-orange/50 flex items-center justify-center">
              <span className="text-neon-orange text-4xl">👤</span>
            </div>
            <h3 className="font-futuristic text-xl font-bold text-neon-orange mb-2">YOUR COMMUNITY CARD</h3>
            <p className="text-gray-400 text-sm">Personalized member identity</p>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            className="font-futuristic text-lg px-8 py-4 bg-neon-orange hover:bg-neon-orange/80 text-black pixel-glow-orange hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
          >
            UPLOAD IMAGE
          </Button>
          <Button 
            variant="outline"
            className="font-futuristic text-lg px-8 py-4 border-neon-white text-neon-white hover:bg-neon-white hover:text-black pixel-glow transition-all duration-300 transform hover:scale-105"
          >
            DOWNLOAD CARD
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
