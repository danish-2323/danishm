import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, FileText, CheckCircle2, ArrowUpRight, Shield, Terminal, Zap } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';
import { aboutData, personalInfo } from '../data/portfolioData';
import portImage from '../assets/port-image-removebg-preview.png';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[100dvh] bg-[#070809] flex flex-col justify-between py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#242830]"
    >
      {/* Background Ember Glow */}
      <div className="absolute inset-0 katana-ember-glow opacity-50 pointer-events-none" />
      <KatanaEmbers />

      {/* Slashed Katana Line */}
      <div className="katana-slash-line w-[120%] -left-[10%] top-[40%] -rotate-3 opacity-50 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#242830]/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E5252A] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#E5252A] uppercase">
              THE PATH // PHILOSOPHY & IDENTITY
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider mt-1">
            ARCHITECTING INTELLIGENCE
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-[#A5A8AC] border border-[#242830] bg-[#0E1014] px-3.5 py-1.5 rounded-lg">
          <span className="text-[#E5252A]">ROLE:</span>
          <span className="text-white font-bold">CLASS REPRESENTATIVE & LEAD</span>
        </div>
      </div>

      {/* CENTER COMPOSITION */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT: Portrait with Red Backlight & Framing */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative max-w-[240px] sm:max-w-sm w-full group">
            {/* Glowing Red Backlight */}
            <div className="absolute -inset-2 bg-[#E5252A]/20 blur-xl rounded-2xl group-hover:bg-[#E5252A]/30 transition-all duration-500" />
            
            {/* Card Frame with Razor-Sharp Red Corners */}
            <div className="relative rounded-xl border border-[#242830] bg-[#0E1014] p-3 overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative bg-gradient-to-t from-[#15171D] via-[#0E1014] to-[#200A0C] flex items-end justify-center p-2">
                <img
                  src={portImage}
                  alt="Danish M — Portrait"
                  className="w-full h-full object-contain object-bottom grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="katana-slash-line w-[140%] -left-[20%] top-[45%] rotate-45 opacity-50 pointer-events-none" />
              </div>

              {/* Identity Telemetry Footer */}
              <div className="p-3 bg-[#15171D] rounded-lg border border-[#242830] mt-3 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[9px] text-[#E5252A] block uppercase font-bold tracking-widest">NAME / LINEAGE</span>
                  <span className="text-white font-bold tracking-wider">DANISH M.</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-[#A5A8AC] block uppercase tracking-widest">INSTITUTION</span>
                  <span className="text-[#E5252A] font-bold">SKCT COIMBATORE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: The Narrative & Milestones */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div>
            <div className="font-mono text-xs text-[#E5252A] tracking-[0.2em] uppercase font-bold mb-2">
              DISCIPLINE & PRECISION
            </div>
            <h3 className="font-brush text-2xl sm:text-3xl text-white tracking-wide leading-tight">
              FUSING MATHEMATICAL RIGOR WITH HIGH-FREQUENCY RUNTIMES.
            </h3>
          </div>

          <div className="space-y-4 font-sans text-sm sm:text-base text-[#A5A8AC] leading-relaxed">
            <p>
              I am an Artificial Intelligence and Data Science engineer driven by the tangible impact of applied machine learning.
              With a solid foundation in Python, C++, statistical modeling, and modern web architectures, I develop intelligent systems that solve high-stakes challenges with measurable efficiency.
            </p>
            <p>
              Beyond algorithms, I lead technical teams and mentor emerging developers. Serving as Elected Class Representative at Sri Krishna College of Technology and an active coordinator in nationwide AICTE initiatives, I champion structured problem-solving, clean code standards, and ethical AI deployment.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {aboutData.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 bg-[#0E1014] border border-[#242830] rounded-lg hover:border-[#E5252A]/50 transition-colors"
              >
                <div className="font-mono text-[9px] text-[#A5A8AC] uppercase tracking-wider">{stat.label}</div>
                <div className="font-bebas text-2xl text-white mt-0.5 tracking-wider">{stat.value}</div>
                <div className="text-[10px] text-[#6D7176] truncate">{stat.note}</div>
              </div>
            ))}
          </div>

          {/* Direct Engagement Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="btn-katana-red inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono tracking-wider uppercase font-bold"
            >
              EXPLORE ARSENAL <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#242830] bg-[#0E1014] text-xs font-mono text-[#A5A8AC] hover:text-white hover:border-[#E5252A] transition-all"
            >
              GITHUB REPOSITORIES <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER TELEMETRY */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#242830]/80 text-[11px] font-mono text-[#A5A8AC] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#E5252A]">COORDINATES:</span>
          <span>COIMBATORE & THENI, TAMIL NADU, INDIA</span>
        </div>
        <div className="flex items-center gap-4">
          <span>AI & DATA SCIENCE CANDIDATE</span>
          <span className="text-[#242830]">|</span>
          <span className="text-white">CLASS OF 2027</span>
        </div>
      </div>
    </section>
  );
}
