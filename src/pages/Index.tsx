
import React from 'react';
import PixelNavigation from '@/components/PixelNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import IdentitySection from '@/components/IdentitySection';
import TracksSection from '@/components/TracksSection';
import TimelineSection from '@/components/TimelineSection';
import TeamSection from '@/components/TeamSection';
import JoinBanner from '@/components/JoinBanner';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-pixel-black text-neon-white overflow-x-hidden">
      <PixelNavigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <IdentitySection />
        <TracksSection />
        <TimelineSection />
        <TeamSection />
        <JoinBanner />
        <FAQSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-pixel-dark border-t border-neon-red/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Pixel Pulse Tech Hub. Built with 💻 and ❤️ by the community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
