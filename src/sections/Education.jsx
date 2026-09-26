import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full min-h-[100dvh] bg-[#070809] flex flex-col justify-between py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#242830]"
    >
      {/* Background Ember Glow */}
      <div className="absolute inset-0 katana-ember-glow opacity-50 pointer-events-none" />
      <KatanaEmbers />

      {/* TOP HEADER */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#242830]/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E5252A] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#E5252A] uppercase">
              ACADEMIC LINEAGE // TIMELINE
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider mt-1">
            FORMAL RIGOR & DISCIPLINE
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#A5A8AC] border border-[#242830] bg-[#0E1014] px-3.5 py-1.5 rounded-lg">
          <GraduationCap className="w-4 h-4 text-[#E5252A]" />
          <span>SKCT // CEOA DISTINCTION</span>
        </div>
      </div>

      {/* CENTER TIMELINE COMPOSITION */}
      <div className="relative z-20 max-w-5xl w-full mx-auto my-auto py-8">
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-[#242830]">
          {/* Crimson Glowing Line */}
          <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gradient-to-b from-[#E5252A] via-[#E5252A]/50 to-transparent pointer-events-none" />

          <div className="space-y-8 md:space-y-10">
            {educationData.map((edu, idx) => (
              <div key={edu.degree} className="relative group">
                {/* Katana Blade Marker Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-2 w-4 h-4 rounded-full border-2 border-[#E5252A] bg-[#070809] group-hover:bg-[#E5252A] transition-all shadow-[0_0_10px_rgba(229,37,42,0.6)]" />

                {/* Entry Card */}
                <div className="rounded-xl border border-[#242830] bg-[#0E1014]/90 p-6 sm:p-8 hover:border-[#E5252A]/60 transition-all duration-300 shadow-2xl backdrop-blur-sm">
                  
                  {/* Period & Location Metadata Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-[#242830] font-mono text-xs">
                    <div className="flex items-center gap-2 text-[#E5252A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[#A5A8AC]">
                      <MapPin className="w-3.5 h-3.5 text-[#E5252A]" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Degree / Qualification */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-[#E5252A]/40 bg-[#E5252A]/10 text-[#E5252A] font-mono text-xs font-bold w-fit">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {edu.role}
                    </span>
                  </div>

                  {/* Institution */}
                  <div className="font-mono text-sm text-[#A5A8AC] mb-4 font-medium">
                    {edu.institution}
                  </div>

                  {/* Curricular & Leadership Details */}
                  <div className="space-y-2 pt-2 border-t border-[#242830]/50">
                    {edu.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5A8AC] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#E5252A] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER TELEMETRY */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#242830]/80 text-[11px] font-mono text-[#A5A8AC] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#E5252A]">ACADEMIC RECORD:</span>
          <span>SRI KRISHNA COLLEGE OF TECHNOLOGY // ANNA UNIVERSITY AFFILIATED</span>
        </div>
        <div className="flex items-center gap-4">
          <span>RANK: TOP 2%</span>
          <span className="text-[#242830]">|</span>
          <span className="text-white">COIMBATORE, INDIA</span>
        </div>
      </div>
    </section>
  );
}
