
import TechNavigation from '@/components/TechNavigation'
import TechHeroSection from '@/components/TechHeroSection'
import TechStatsSection from '@/components/TechStatsSection'
import TechAboutSection from '@/components/TechAboutSection'
import AnimatedTechStack from '@/components/AnimatedTechStack'
import TechTracksCarousel from '@/components/TechTracksCarousel'
import TechIdentitySection from '@/components/TechIdentitySection'
import TechTeamSection from '@/components/TechTeamSection'
import TechJoinSection from '@/components/TechJoinSection'
import TechFAQSection from '@/components/TechFAQSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-tech-black text-tech-light overflow-x-hidden relative">
      {/* Navigation Sidebar */}
      <TechNavigation />
      
      {/* Corner decorative elements */}
      <div className="fixed top-4 left-4 text-tech-cyan text-3xl opacity-30 animate-float z-40">+</div>
      <div className="fixed top-4 right-4 text-tech-orange text-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}>⚡</div>
      <div className="fixed bottom-4 right-4 text-tech-cyan text-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}>+</div>

      <main>
        <TechHeroSection />
        <TechStatsSection />
        <TechAboutSection />
        <AnimatedTechStack />
        <TechTracksCarousel />
        <TechIdentitySection />
        <TechTeamSection />
        <TechJoinSection />
        <TechFAQSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 bg-tech-dark border-t border-tech-orange/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-tech-gray font-body">
            © 2024 YÄTSU Squad. Built with 💻 and ❤️ by the community.
          </p>
        </div>
      </footer>
    </div>
  )
}
