
import React from 'react';
import TechHeroSection from '@/components/TechHeroSection';
import TechStatsSection from '@/components/TechStatsSection';
import TechAboutSection from '@/components/TechAboutSection';
import TechTracksSection from '@/components/TechTracksSection';
import TechIdentitySection from '@/components/TechIdentitySection';
import TechTeamSection from '@/components/TechTeamSection';
import TechJoinSection from '@/components/TechJoinSection';
import TechFAQSection from '@/components/TechFAQSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-black text-tech-light overflow-x-hidden">
      <main>
        <TechHeroSection />
        <TechStatsSection />
        <TechAboutSection />
        <TechTracksSection />
        <TechIdentitySection />
        <TechTeamSection />
        <TechJoinSection />
        <TechFAQSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-tech-dark border-t border-tech-orange/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-tech-gray font-body">
            © 2024 TechComm. Built with 💻 and ❤️ by the community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
