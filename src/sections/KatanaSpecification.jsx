import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Zap, ChevronRight, Activity } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';
import portImage from '../assets/port-image-removebg-preview.png';

export default function KatanaSpecification() {
  const [activeSpec, setActiveSpec] = useState(0);

  const specs = [
    {
      index: "01",
      leftCategory: "NLP AUTOCORRECT ENGINE",
      leftRole: "ALGORITHMIC CORE",
      leftItems: [
        { label: "STATISTICAL MODEL", value: "N-Gram Probability Matrix" },
        { label: "INFERENCE SPEED", value: "< 14ms Edge Response" },
        { label: "DISTANCE ALGORITHM", value: "Levenshtein Matrix (D=2)" },
        { label: "ACCURACY SCORE", value: "98.4% Typo Rectification" }
      ],
      rightCategory: "CLOUD & NEURAL ARCHITECTURE",
      rightRole: "SYSTEM INFRASTRUCTURE",
      rightItems: [
        { label: "CLOUD BACKBONE", value: "AWS EC2 & S3 Buckets" },
        { label: "DEEP LEARNING", value: "PyTorch & HuggingFace Models" },
        { label: "SYSTEM RUNTIME", value: "C++ High Performance & Python" },
        { label: "INSTITUTION", value: "Sri Krishna College of Tech" }
      ]
    },
    {
      index: "02",
      leftCategory: "SMART RESUME ATS PARSER",
      leftRole: "DATA INGESTION PIPELINE",
      leftItems: [
        { label: "DOCUMENT INGEST", value: "PDF, Word, Plain Text Parsing" },
        { label: "OUTPUT FORMAT", value: "Strictly Typed JSON Schemas" },
        { label: "EXTRACTION RATE", value: "Sub-Second Multi-Page Docs" },
        { label: "RECRUITER IMPACT", value: "80% Screening Time Saved" }
      ],
      rightCategory: "DATABASE & DEVOPS",
      rightRole: "PIPELINE GOVERNANCE",
      rightItems: [
        { label: "RELATIONAL DB", value: "MySQL Indexed Schema" },
        { label: "CONTAINERIZATION", value: "Docker Microservices" },
        { label: "INTERNSHIP TENURE", value: "Pinnacle Labs (MCA Govt of India)" },
        { label: "ACADEMIC RANK", value: "Top 2% Distinction in Maths" }
      ]
    }
  ];

  const current = specs[activeSpec];

  return (
    <section
      id="specification"
      className="relative w-full min-h-[100dvh] bg-[#070809] flex flex-col justify-between py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#242830]"
    >
      {/* Background Ember Glow */}
      <div className="absolute inset-0 katana-ember-glow opacity-60 pointer-events-none" />
      <KatanaEmbers />

      {/* Slashed Katana Laser Beam across Danish */}
      <div className="katana-slash-line w-[120%] -left-[10%] top-[50%] rotate-12 opacity-80" />

      {/* TOP HEADER: SPECIFICATION 01 / 04 (Matching Video 00:01) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#242830]/80">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-[#E5252A] uppercase">
            SPECIFICATION
          </span>
          <span className="font-mono text-xs text-white font-bold">
            0{activeSpec + 1} / 0{specs.length}
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2">
          {specs.map((s, idx) => (
            <button
              key={s.index}
              onClick={() => setActiveSpec(idx)}
              className={`w-8 h-8 rounded border font-mono text-xs flex items-center justify-center transition-all ${
                activeSpec === idx
                  ? 'border-[#E5252A] bg-[#E5252A] text-white shadow-[0_0_12px_rgba(229,37,42,0.6)]'
                  : 'border-[#242830] bg-[#0E1014] text-[#A5A8AC] hover:border-white/40'
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* CENTER COMPOSITION: Left Specs + Danish in Center + Right Specs */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
        
        {/* LEFT COLUMN: Technical Specifications */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-left order-2 lg:order-1">
          <div>
            <div className="font-mono text-[10px] text-[#E5252A] tracking-[0.2em] uppercase">
              {current.leftRole}
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider mt-1">
              {current.leftCategory}
            </h3>
          </div>

          <div className="space-y-4">
            {current.leftItems.map((item) => (
              <div key={item.label} className="pb-3 border-b border-[#242830]/60">
                <div className="font-mono text-[10px] text-[#A5A8AC] tracking-wider uppercase">
                  {item.label}
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-[#F2F2F0] mt-0.5">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN: Danish M Portrait Framed with Red Glow */}
        <div className="lg:col-span-4 relative flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-[170px] sm:w-[260px] lg:w-[320px] aspect-[2/3] overflow-hidden rounded-lg border border-[#242830] bg-[#0E1014] shadow-2xl flex items-end justify-center">
            {/* Dramatic red ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#E5252A]/40 via-transparent to-transparent opacity-80 -z-10" />

            <img
              src={portImage}
              alt="Danish M Specification"
              className="w-full h-full object-contain object-bottom grayscale contrast-125 brightness-95"
            />

            {/* Glowing Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E5252A]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E5252A]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E5252A]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E5252A]" />
          </div>
        </div>

        {/* RIGHT COLUMN: Infrastructure & Frameworks */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-left order-3">
          <div>
            <div className="font-mono text-[10px] text-[#E5252A] tracking-[0.2em] uppercase">
              {current.rightRole}
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider mt-1">
              {current.rightCategory}
            </h3>
          </div>

          <div className="space-y-4">
            {current.rightItems.map((item) => (
              <div key={item.label} className="pb-3 border-b border-[#242830]/60">
                <div className="font-mono text-[10px] text-[#A5A8AC] tracking-wider uppercase">
                  {item.label}
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-[#F2F2F0] mt-0.5">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM FOOTER: Status Indicator */}
      <div className="relative z-20 max-w-7xl w-full mx-auto pt-4 border-t border-[#242830]/80 flex items-center justify-between text-xs font-mono text-[#A5A8AC]">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#E5252A] animate-pulse" />
          <span>PRODUCTION TELEMETRY // VERIFIED</span>
        </div>
        <span>SKCT AI & DATA SCIENCE DEPARTMENT</span>
      </div>
    </section>
  );
}
