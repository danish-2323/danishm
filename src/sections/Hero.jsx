import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Terminal } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';
import { personalInfo } from '../data/portfolioData';
import portImage from '../assets/port-image-removebg-preview.png';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[640px] max-h-[1080px] bg-[#070809] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* 1. Atmospheric Red Radial Ember Glow (Matching image.png & katana.mp4) */}
      <div className="absolute inset-0 katana-ember-glow pointer-events-none" />
      <div className="absolute inset-0 katana-ambient-spotlight pointer-events-none" />

      {/* 2. Floating Fire Embers & Wind Streaks */}
      <KatanaEmbers />

      {/* 3. Glowing Blade Slash Line Across Center */}
      <div
        className="katana-slash-line w-[120%] -left-[10%] top-[48%] -rotate-6 opacity-70"
        style={{
          transform: `rotate(-6deg) translateY(${mousePos.y * 12}px)`
        }}
      />

      {/* 4. Giant Distressed Brush Typography BEHIND Danish (Matching "KATANA TRAFFIC") */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 sm:justify-center sm:pt-0 pointer-events-none z-10">
        <div
          className="w-full text-center px-2 sm:px-4"
          style={{
            transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -8}px, 0)`
          }}
        >
          {/* Top Line: DANISH */}
          <div className="font-brush text-[14vw] sm:text-[13vw] md:text-[12vw] lg:text-[10.5vw] leading-[0.85] tracking-[0.06em] text-[#EBEBEA] uppercase filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] opacity-95">
            D A N I S H
          </div>

          {/* Bottom Line: ENGINEER */}
          <div className="font-brush text-[13vw] sm:text-[12vw] md:text-[11vw] lg:text-[9.5vw] leading-[0.85] tracking-[0.06em] text-[#EBEBEA] uppercase filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] opacity-95 mt-1 sm:mt-4">
            E N G I N E E R
          </div>
        </div>
      </div>

      {/* 5. Authentic Approved Background-Removed Portrait of Danish M (Front Center Layer) */}
      <div className="absolute inset-x-0 bottom-0 top-[18%] sm:top-[8%] flex items-end justify-center pointer-events-none z-20">
        <div
          className="relative h-[72%] sm:h-[86%] max-h-[820px] aspect-[2/3] transition-transform duration-200 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 6}px, 0)`
          }}
        >
          {/* Deep Crimson Backlight Aura directly behind Danish */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[110%] h-[70%] bg-gradient-to-t from-[#E5252A]/50 via-[#8B0000]/30 to-transparent blur-3xl rounded-full -z-10" />

          {/* Background-Removed Cutout Portrait */}
          <img
            src={portImage}
            alt="Danish M — AI & Data Science Engineer"
            className="w-full h-full object-contain object-bottom grayscale contrast-125 brightness-95"
            style={{
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
            loading="eager"
            fetchPriority="high"
          />

          {/* Soft Edge Feathering for Mobile */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[#070809]/50 sm:to-transparent" />

          {/* Subtle Sword Glint Effect */}
          <div className="absolute top-[28%] left-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_#FFFFFF] animate-ping" />
        </div>
      </div>

      {/* 6. Top Buffer for Navigation Spacing */}
      <div className="h-16 sm:h-24 w-full" />

      {/* 7. Bottom Telemetry Bar: Metrics on Left, Socials on Right (Exact layout of image.png) */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-12 pb-4 sm:pb-8 flex items-end justify-between gap-4">
        
        {/* BOTTOM LEFT: Metric Statistics */}
        <div className="flex items-center gap-3.5 sm:gap-8 text-left">
          <div>
            <div className="font-bebas text-2xl sm:text-4xl lg:text-5xl text-white tracking-wider leading-none">
              TOP 2%
            </div>
            <div className="font-mono text-[9px] sm:text-[11px] text-[#A5A8AC] tracking-wider uppercase mt-0.5">
              Academic Rank
            </div>
          </div>

          <div className="h-6 sm:h-8 w-[1px] bg-[#242830]" />

          <div>
            <div className="font-bebas text-2xl sm:text-4xl lg:text-5xl text-white tracking-wider leading-none">
              50+
            </div>
            <div className="font-mono text-[9px] sm:text-[11px] text-[#A5A8AC] tracking-wider uppercase mt-0.5">
              Mentored
            </div>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-[#242830]" />

          <div className="hidden sm:block">
            <div className="font-bebas text-2xl sm:text-4xl lg:text-5xl text-[#E5252A] tracking-wider leading-none">
              15+
            </div>
            <div className="font-mono text-[9px] sm:text-[11px] text-[#A5A8AC] tracking-wider uppercase mt-0.5">
              Production Repos
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT: Circular White Social Buttons (Matching image.png) */}
        <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto shrink-0">
          <a
            href={personalInfo.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 fill-black" />
          </a>

          <a
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 fill-black" />
          </a>

          <a
            href={personalInfo.links.email}
            aria-label="Send Email"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-black hover:bg-neutral-200 transition-all flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>

      </div>

      {/* Subtle Bottom Slashed Border Accent */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5252A]/50 to-transparent" />
    </section>
  );
}
