import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Shield } from 'lucide-react';
import SamuraiLogo from './SamuraiLogo';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' IST'
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070809] border-t border-[#242830] py-8 px-6 md:px-12 text-[#A5A8AC] font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Samurai Crest & Branding */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <SamuraiLogo className="w-6 h-6" />
            <div className="absolute inset-0 bg-[#E5252A]/20 blur-sm rounded-full -z-10" />
          </div>
          <div>
            <span className="text-white font-bold">{personalInfo.name}</span>
            <span className="text-[#6D7176]"> // AI & DATA SCIENCE ENGINEER</span>
          </div>
        </div>

        {/* Center: Live Time in India */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#0E1014] border border-[#242830] text-[#E5252A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5252A] animate-pulse" />
            <span className="font-mono">{time || '00:00:00 IST'}</span>
          </div>
          <span className="text-[#6D7176] hidden sm:inline">COIMBATORE, TAMIL NADU</span>
        </div>

        {/* Right: Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-[#6D7176] hidden lg:inline">SYSTEM // PRODUCTION 2.0</span>
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded bg-[#0E1014] border border-[#242830] hover:border-[#E5252A] hover:text-white text-[#A5A8AC] transition-all flex items-center gap-1.5 focus:outline-none"
            aria-label="Scroll to top of portfolio"
          >
            <span className="text-[10px] tracking-wider uppercase font-bold">TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E5252A]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
