import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { HighlightsSection } from './components/highlights/HighlightsSection';
import { AgendaSection } from './components/agenda/AgendaSection';
import { SpeakersSection } from './components/speakers/SpeakersSection';
import { OrganizersSection } from './components/organizers/OrganizersSection';
import { SponsorsSection } from './components/sponsors/SponsorsSection';
import { RegistrationSection } from './components/registration/RegistrationSection';
import { BadgeGeneratorSection } from './components/badge/BadgeGeneratorSection';
import { VenueSection } from './components/venue/VenueSection';
import { FAQSection } from './components/faq/FAQSection';
import { Footer } from './components/layout/Footer';
import { ArrowUp, Ticket } from 'lucide-react';

function App() {
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBar(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-aws-dark text-slate-100 flex flex-col font-sans selection:bg-aws-orange selection:text-black">
      {/* Top sticky navigation */}
      <Navbar />

      {/* Main page content sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <AgendaSection />
        <SpeakersSection />
        <BadgeGeneratorSection />
        <OrganizersSection />
        <SponsorsSection />
        <RegistrationSection />
        <VenueSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Widget (Scroll responsive) */}
      {showFloatingBar && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-fade-in">
          <a
            href="#register"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-aws-orange to-aws-amber hover:from-amber-400 hover:to-orange-500 shadow-glow-orange transition-all duration-300 transform hover:scale-105"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>Register Free</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-all hover:border-aws-orange"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 text-aws-orange" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
