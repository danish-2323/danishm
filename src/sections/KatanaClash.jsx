import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swords, Zap, Cpu, Terminal, Shield, Crosshair, Sparkles, Activity } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';

export default function KatanaClash() {
  const [distance, setDistance] = useState(4.0); // MA-AI distance in meters (matching katana.mp4)
  const [selectedDiscipline, setSelectedDiscipline] = useState('theory'); // 'theory' or 'applied'

  const theoreticalArsenal = [
    { name: "Levenshtein & N-Gram Dynamics", spec: "D=2 Matrix Distance", tag: "NLP Core", grade: "98.4%" },
    { name: "High-Performance C++ Runtime", spec: "Pointer Memory & DSA", tag: "Systems", grade: "O(log N)" },
    { name: "Probability & Vector Math", spec: "Gaussian Distributions", tag: "Math", grade: "Top 2%" },
    { name: "Neural Loss Minimization", spec: "PyTorch Gradient Flow", tag: "Deep Learning", grade: "Converged" },
    { name: "Statistical Inference", spec: "Hypothesis Testing & Variance", tag: "Data Science", grade: "Rigorous" }
  ];

  const appliedArsenal = [
    { name: "AWS Cloud Backbone", spec: "EC2, S3 & IAM Architecture", tag: "Cloud", grade: "Certified" },
    { name: "Intelligent Resume ATS Parser", spec: "Govt of India MCA Project", tag: "Production", grade: "80% Saved" },
    { name: "React & Framer Motion Systems", spec: "Interactive 60FPS DOM", tag: "Frontend", grade: "Sub-16ms" },
    { name: "Dockerized Microservices", spec: "Reproducible Containers", tag: "DevOps", grade: "Isolated" },
    { name: "Relational Schema Indexing", spec: "MySQL Aggregations", tag: "Database", grade: "High-QPS" }
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-[100dvh] bg-[#070809] flex flex-col justify-between py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#242830]"
    >
      {/* Background Ember Glow */}
      <div className="absolute inset-0 katana-ember-glow opacity-50 pointer-events-none" />
      <KatanaEmbers />

      {/* Slashed Katana Diagonal Glow Lines */}
      <div className="katana-slash-line w-[120%] -left-[10%] top-[30%] rotate-6 opacity-60 pointer-events-none" />
      <div className="katana-slash-line w-[120%] -left-[10%] top-[70%] -rotate-6 opacity-40 pointer-events-none" />

      {/* TOP HEADER: Telemetry & Section Identity */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#242830]/80 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E5252A] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#E5252A] uppercase">
              MASTERY // PERFORMANCE MATRIX
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider mt-1 flex items-center gap-3">
            THE INTERVAL OF MASTERY
          </h2>
        </div>

        {/* Live Engagement Distance Gauge */}
        <div className="flex items-center gap-4 bg-[#0E1014] border border-[#242830] px-4 py-2 rounded-lg">
          <div className="text-right">
            <div className="font-mono text-[9px] text-[#A5A8AC] uppercase tracking-widest">ENGAGEMENT DISTANCE</div>
            <div className="font-mono text-lg font-bold text-[#E5252A]">
              {distance.toFixed(1)} <span className="text-xs text-white">METERS</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded border border-[#E5252A]/40 bg-[#E5252A]/10 flex items-center justify-center text-[#E5252A]">
            <Crosshair className="w-5 h-5 animate-spin-slow" />
          </div>
        </div>
      </div>

      {/* CENTER CLASH COMPOSITION */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto py-8">
        
        {/* Interactive MA-AI Slider */}
        <div className="max-w-xl mx-auto mb-8 bg-[#0E1014]/90 border border-[#242830] p-4 rounded-xl backdrop-blur-sm">
          <div className="flex items-center justify-between text-xs font-mono text-[#A5A8AC] mb-2">
            <span className="flex items-center gap-1 text-[#E5252A]">
              <Zap className="w-3.5 h-3.5" /> 1.5M CLOSE COMBAT (INFERENCE)
            </span>
            <span className="text-white font-bold">{distance.toFixed(1)}M OPTIMAL</span>
            <span>8.0M STRATEGIC SCOPE</span>
          </div>
          <input
            type="range"
            min="1.5"
            max="8.0"
            step="0.5"
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-[#242830] rounded-lg appearance-none cursor-pointer accent-[#E5252A]"
          />
          <div className="text-[11px] font-mono text-[#A5A8AC] text-center mt-2">
            {distance <= 2.5 && "⚡ Direct execution: Latency under 14ms, optimal algorithmic throughput."}
            {distance > 2.5 && distance <= 5.5 && "⚔️ Balanced stance: Theoretical NLP models fused with resilient cloud architectures."}
            {distance > 5.5 && "🛡️ High-altitude perspective: Scalable enterprise microservices and strategic ML pipelines."}
          </div>
        </div>

        {/* Mobile Wing Switcher */}
        <div className="flex lg:hidden items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setSelectedDiscipline('theory')}
            className={`flex-1 py-2.5 px-3 rounded-lg font-mono text-xs font-bold tracking-wider uppercase transition-all ${
              selectedDiscipline === 'theory'
                ? 'bg-[#E5252A] text-white shadow-[0_0_15px_rgba(229,37,42,0.5)]'
                : 'bg-[#0E1014] text-[#A5A8AC] border border-[#242830]'
            }`}
          >
            01 ALGORITHMIC RIGOR
          </button>
          <button
            onClick={() => setSelectedDiscipline('applied')}
            className={`flex-1 py-2.5 px-3 rounded-lg font-mono text-xs font-bold tracking-wider uppercase transition-all ${
              selectedDiscipline === 'applied'
                ? 'bg-[#E5252A] text-white shadow-[0_0_15px_rgba(229,37,42,0.5)]'
                : 'bg-[#0E1014] text-[#A5A8AC] border border-[#242830]'
            }`}
          >
            02 PRODUCTION SYSTEMS
          </button>
        </div>

        {/* TWO-WING COMBAT MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch">
          
          {/* LEFT WING: Theoretical Rigor */}
          <div className={`lg:col-span-5 bg-[#0E1014]/80 border border-[#242830] rounded-xl p-5 md:p-6 relative overflow-hidden group hover:border-[#E5252A]/60 transition-colors ${selectedDiscipline === 'theory' ? 'block' : 'hidden lg:block'}`}>
            <div className="absolute top-0 left-0 w-1 h-full bg-[#E5252A]" />
            <div className="flex items-center justify-between pb-3 border-b border-[#242830]">
              <div>
                <span className="font-mono text-[10px] text-[#E5252A] uppercase tracking-widest block">
                  LEFT BLADE // FOUNDATIONS
                </span>
                <h3 className="font-bebas text-2xl text-white tracking-wide mt-0.5">
                  ALGORITHMIC RIGOR
                </h3>
              </div>
              <span className="font-mono text-xs px-2 py-1 bg-[#15171D] border border-[#242830] text-[#A5A8AC] rounded">
                MATH & CORE
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {theoreticalArsenal.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-3 bg-[#15171D]/60 rounded-lg border border-[#242830]/60 flex items-center justify-between hover:border-[#E5252A]/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#E5252A] font-bold">0{idx + 1}</span>
                    <div>
                      <div className="font-medium text-sm text-white group-hover:text-[#E5252A] transition-colors">
                        {item.name}
                      </div>
                      <div className="font-mono text-[11px] text-[#A5A8AC]">{item.spec}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#070809] px-2 py-0.5 rounded border border-[#242830] whitespace-nowrap">
                      {item.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER EMBLEM: Crossed Blades */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center py-4 lg:py-0 relative">
            <div className="relative flex items-center justify-center">
              {/* Outer Glowing Ring */}
              <div className="w-16 h-16 rounded-full border border-[#E5252A]/50 bg-[#0E1014] flex items-center justify-center relative shadow-[0_0_25px_rgba(229,37,42,0.4)]">
                <Swords className="w-8 h-8 text-[#E5252A]" />
              </div>
            </div>
            <div className="hidden lg:block w-[1px] h-20 bg-gradient-to-b from-[#E5252A] to-transparent my-3" />
            <div className="font-mono text-[10px] text-[#A5A8AC] tracking-widest uppercase text-center mt-1">
              VS
            </div>
          </div>

          {/* RIGHT WING: Applied Production */}
          <div className={`lg:col-span-5 bg-[#0E1014]/80 border border-[#242830] rounded-xl p-5 md:p-6 relative overflow-hidden group hover:border-[#E5252A]/60 transition-colors ${selectedDiscipline === 'applied' ? 'block' : 'hidden lg:block'}`}>
            <div className="absolute top-0 right-0 w-1 h-full bg-[#E5252A]" />
            <div className="flex items-center justify-between pb-3 border-b border-[#242830]">
              <div>
                <span className="font-mono text-[10px] text-[#E5252A] uppercase tracking-widest block">
                  RIGHT BLADE // SYSTEMS
                </span>
                <h3 className="font-bebas text-2xl text-white tracking-wide mt-0.5">
                  PRODUCTION ENGINEERING
                </h3>
              </div>
              <span className="font-mono text-xs px-2 py-1 bg-[#15171D] border border-[#242830] text-[#A5A8AC] rounded">
                CLOUD & WEB
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {appliedArsenal.map((item, idx) => (
                <div
                  key={item.name}
                  className="p-3 bg-[#15171D]/60 rounded-lg border border-[#242830]/60 flex items-center justify-between hover:border-[#E5252A]/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-[#E5252A] font-bold">0{idx + 1}</span>
                    <div>
                      <div className="font-medium text-sm text-white group-hover:text-[#E5252A] transition-colors">
                        {item.name}
                      </div>
                      <div className="font-mono text-[11px] text-[#A5A8AC]">{item.spec}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#070809] px-2 py-0.5 rounded border border-[#242830] whitespace-nowrap">
                      {item.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM FOOTER TELEMETRY BAR */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#242830]/80 text-[11px] font-mono text-[#A5A8AC] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#E5252A]">STATUS:</span>
          <span>SYSTEM READY FOR HIGH-FREQUENCY INFERENCE</span>
        </div>
        <div className="flex items-center gap-4">
          <span>COGNITIVE MATRIX: ACTIVE</span>
          <span className="text-[#242830]">|</span>
          <span className="text-white">SKCT // PINNACLE LABS</span>
        </div>
      </div>
    </section>
  );
}
