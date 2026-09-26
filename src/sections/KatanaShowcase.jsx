import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, Activity, Terminal } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';
import { projectsData } from '../data/portfolioData';
import portImage from '../assets/port-image-removebg-preview.png';

export default function KatanaShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const project = projectsData[currentIndex];

  return (
    <section
      id="projects"
      className="relative w-full min-h-[100dvh] bg-[#070809] flex flex-col justify-between py-10 md:py-16 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-[#242830]"
    >
      {/* Background Ember Glow */}
      <div className="absolute inset-0 katana-ember-glow opacity-50 pointer-events-none" />
      <KatanaEmbers />

      {/* TOP HEADER: Navigation & Section Counter */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#242830]/80">
        <div>
          <span className="font-mono text-xs tracking-widest text-[#E5252A] uppercase block">
            SELECTED ARSENAL // PROJECT 0{currentIndex + 1} OF 0{projectsData.length}
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider mt-1">
            ENGINEERED SYSTEMS
          </h2>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#242830] bg-[#0E1014] text-[#A5A8AC] hover:text-white hover:border-[#E5252A] flex items-center justify-center transition-all"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#242830] bg-[#0E1014] text-[#A5A8AC] hover:text-white hover:border-[#E5252A] flex items-center justify-center transition-all"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* MAIN CONTENT: Left Floating White Card + Right Cinematic Character (Matching Frame 00:02) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-6">
        
        {/* LEFT: Floating White Card (Exact aesthetic of 'The Standing Guard' from katana.mp4) */}
        <div className="lg:col-span-5 order-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-[#FFFFFF] text-[#070809] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
            >
              {/* Card Thumbnail / Header Area */}
              <div className="h-36 sm:h-44 w-full rounded-xl bg-[#0E1014] p-4 text-white font-mono text-xs flex flex-col justify-between mb-6 border border-[#242830] overflow-hidden relative">
                <div className="flex items-center justify-between text-[#A5A8AC] text-[10px]">
                  <span>SYSTEM [{project.id}]</span>
                  <span className="text-[#E5252A] font-bold">{project.status}</span>
                </div>

                <div className="my-auto">
                  <div className="text-[10px] text-[#A5A8AC] uppercase">// MODULE SPEC</div>
                  <div className="font-bebas text-2xl text-white tracking-wide mt-1">
                    {project.title}
                  </div>
                  <div className="text-[11px] text-[#E5252A] mt-1">
                    {project.metrics}
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-[#686D76] pt-2 border-t border-[#242830]">
                  <span>{project.subtitle}</span>
                  <span>{project.period}</span>
                </div>
              </div>

              {/* Title & Authentic Description */}
              <div className="space-y-3 mb-6">
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#070809] tracking-tight leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-[#4A4E57] leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#F0F2F5] text-[#070809] font-mono text-[11px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Read More / Action Links with Crimson Arrow Button (Matching Video) */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold text-[#070809] hover:text-[#E5252A] flex items-center gap-1.5 transition-colors"
                    >
                      <span>LIVE APP</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-bold text-[#070809] hover:text-[#E5252A] flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>SOURCE</span>
                  </a>
                </div>

                {/* Crimson Circular Action Button (Matching katana.mp4) */}
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-[#E5252A] hover:bg-[#FF3338] text-white flex items-center justify-center transition-all shadow-[0_0_15px_rgba(229,37,42,0.5)] transform hover:scale-105"
                  aria-label="Next Project"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Large Atmospheric Portrait of Danish with Crimson Backlight */}
        <div className="hidden lg:flex lg:col-span-7 relative items-center justify-center order-2">
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[500px] aspect-[2/3] overflow-hidden rounded-xl border border-[#242830] bg-[#0E1014] shadow-2xl flex items-end justify-center">
            {/* Dramatic Crimson Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#E5252A]/40 via-transparent to-transparent opacity-90 -z-10" />

            <img
              src={portImage}
              alt="Danish M Portfolio Character"
              className="w-full h-full object-contain object-bottom grayscale contrast-125 brightness-95"
            />

            {/* In-Frame Live Telemetry Stamp */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded bg-[#070809]/90 backdrop-blur-md border border-[#242830] flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E5252A] animate-pulse" />
                <span className="text-[#F2F2F0]">DANISH M. // PINNACLE LABS</span>
              </div>
              <span className="text-[#A5A8AC]">NLP SYSTEM</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM SLIDE DOTS */}
      <div className="relative z-20 max-w-7xl w-full mx-auto pt-4 border-t border-[#242830]/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === i
                  ? 'w-8 bg-[#E5252A] shadow-[0_0_8px_#E5252A]'
                  : 'w-2 bg-[#242830] hover:bg-[#686D76]'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="font-mono text-xs text-[#A5A8AC]">
          SWIPE OR CLICK ARROW TO CYCLE ARSENAL
        </div>
      </div>
    </section>
  );
}
