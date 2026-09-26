import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import KatanaClash from './sections/KatanaClash';
import KatanaShowcase from './sections/KatanaShowcase';
import KatanaSpecification from './sections/KatanaSpecification';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Disable browser automatic scroll restoration to avoid jumping down on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Clear any lingering hash from address bar on initial load so it never jumps
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // 3. Pin strictly to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (!loading) {
      // Once preloader finishes, guarantee viewport remains strictly at Hero section
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#070809] text-white selection:bg-[#E5252A]/40 selection:text-white overflow-x-hidden">
      {/* 0 to 100% Cyber-Samurai Preloader Screen */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Precision Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Top Reading Scroll Progress Bar */}
      <ScrollProgress />

      {/* Fixed Cyber-Samurai Header Navigation */}
      <Navigation />

      {/* Cinematic Continuous Journey */}
      <main id="main-content" className="relative w-full overflow-x-hidden">
        <Hero />
        <About />
        <KatanaClash />
        <KatanaShowcase />
        <KatanaSpecification />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Minimal Samurai Footer */}
      <Footer />
    </div>
  );
}
