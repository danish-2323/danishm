import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, ArrowUpRight, Zap, ExternalLink } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
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
              CREDENTIALS // INDUSTRY ACCREDITATION
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider mt-1">
            VALIDATED ARSENAL
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#A5A8AC] border border-[#242830] bg-[#0E1014] px-3.5 py-1.5 rounded-lg">
          <ShieldCheck className="w-4 h-4 text-[#E5252A]" />
          <span>6 VERIFIED ACCREDITATIONS</span>
        </div>
      </div>

      {/* CENTER GRID COMPOSITION */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-xl border border-[#242830] bg-[#0E1014]/90 p-6 hover:border-[#E5252A]/70 hover:bg-[#15171D] transition-all duration-300 shadow-xl flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#242830] font-mono text-xs text-[#A5A8AC]">
                  <div className="flex items-center gap-2 text-[#E5252A] font-semibold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{cert.domain}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#181A20] border border-[#242830] text-white font-mono text-[10px]">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wide mb-1 group-hover:text-[#E5252A] transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="font-mono text-xs text-[#A5A8AC] mb-3">
                  ISSUER: <span className="text-white font-medium">{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A5A8AC] leading-relaxed mb-6 font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer Status */}
              <div className="pt-3 border-t border-[#242830] flex items-center justify-between font-mono text-[11px] text-[#A5A8AC]">
                <div className="flex items-center gap-1.5 text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5252A]" />
                  <span>AUTHENTICATED</span>
                </div>
                <span className="text-[#E5252A] font-bold">[{cert.id}]</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM FOOTER TELEMETRY */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#242830]/80 text-[11px] font-mono text-[#A5A8AC] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#E5252A]">VALIDATION PROTOCOL:</span>
          <span>AWS ARCHITECTURE // GENERATIVE AI // C++ HIGH PERFORMANCE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>GOVERNANCE: COMPLETE</span>
          <span className="text-[#242830]">|</span>
          <span className="text-white">STATUS: ACTIVE</span>
        </div>
      </div>
    </section>
  );
}
