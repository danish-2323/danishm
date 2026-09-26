import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Layers, Database, Cloud, Code2, Sparkles, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSkill, setActiveSkill] = useState(skillCategories[0].skills[0]);

  // Aggregate all skills or filter by selected category
  const displayedCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-[#08090A] border-t border-[#292D31]/40 overflow-hidden">
      {/* Background Architectural Texture */}
      <div className="absolute inset-0 architectural-dots opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          number="02"
          tag="// ARSENAL"
          title="TECHNICAL ARSENAL"
          subtitle="An interactive taxonomy of algorithmic foundations, mathematical toolchains, and full-stack engineering competencies."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-[#292D31]">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-[#F2F2F0] text-[#08090A] font-semibold shadow-[0_0_20px_rgba(242,242,240,0.15)]'
                : 'bg-[#111315] text-[#A5A8AC] border border-[#292D31] hover:border-[#91A6B5]'
            }`}
          >
            All Systems (23)
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#F2F2F0] text-[#08090A] font-semibold'
                  : 'bg-[#111315] text-[#A5A8AC] border border-[#292D31] hover:border-[#91A6B5]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Main Interactive System: Two Column Layout with Central Hub & Live Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Central Hub & Dynamic Node Cluster (col 1-8) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Architectural Nexus Banner */}
            <div className="p-6 rounded-lg border border-[#292D31] bg-[#111315]/80 backdrop-blur-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded border border-[#91A6B5]/40 bg-[#181A1D] flex items-center justify-center text-[#91A6B5]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#6D7176] uppercase">CENTRAL ARCHITECTURE NEXUS</div>
                  <div className="font-display font-bold text-lg text-[#F2F2F0]">AI & DATA SCIENCE CORE</div>
                </div>
              </div>

              <div className="font-mono text-xs text-[#A5A8AC] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#91A6B5]" />
                <span>ACTIVE NODES: {displayedCategories.reduce((acc, c) => acc + c.skills.length, 0)}</span>
              </div>
            </div>

            {/* Categorized Skills Grid */}
            <div className="space-y-8">
              {displayedCategories.map((cat, catIdx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                  className="p-6 rounded-lg border border-[#292D31] bg-[#111315]/40 hover:border-[#292D31]/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#292D31]/50">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#91A6B5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#91A6B5]" />
                      <span>{cat.category}</span>
                    </div>
                    <span className="text-xs text-[#6D7176] font-mono">{cat.skills.length} MODULES</span>
                  </div>

                  {/* Skills Node Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {cat.skills.map((skill) => {
                      const isSelected = activeSkill.name === skill.name;
                      return (
                        <button
                          key={skill.name}
                          onClick={() => setActiveSkill(skill)}
                          onMouseEnter={() => setActiveSkill(skill)}
                          className={`p-3 rounded text-left transition-all duration-200 border flex flex-col justify-between group ${
                            isSelected
                              ? 'bg-[#181A1D] border-[#91A6B5] shadow-[0_0_15px_rgba(145,166,181,0.12)]'
                              : 'bg-[#111315] border-[#292D31] hover:border-[#4A5057] hover:bg-[#181A1D]'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-1">
                            <span className={`font-mono text-xs font-semibold ${
                              isSelected ? 'text-[#F2F2F0]' : 'text-[#A5A8AC] group-hover:text-[#F2F2F0]'
                            }`}>
                              {skill.name}
                            </span>
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                              isSelected
                                ? 'bg-[#91A6B5]/20 text-[#91A6B5] border border-[#91A6B5]/40'
                                : 'bg-[#181A1D] text-[#6D7176]'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#6D7176] line-clamp-1">
                            {skill.focus}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT: Live Architectural Telemetry & Inspector Panel (col 9-12) */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="rounded-lg border border-[#292D31] bg-[#111315] p-6 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#292D31]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#91A6B5]" />
                  <span className="font-mono text-xs tracking-wider text-[#F2F2F0] uppercase">
                    NODE TELEMETRY
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#6D7176]">SYSTEM: LIVE</span>
              </div>

              {/* Active Skill Detailed Breakdown */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <div className="font-mono text-[10px] tracking-widest text-[#91A6B5] uppercase mb-1">
                      SELECTED TECHNOLOGY
                    </div>
                    <h4 className="font-display text-2xl font-bold text-[#F2F2F0]">
                      {activeSkill.name}
                    </h4>
                  </div>

                  <div className="p-4 rounded border border-[#292D31] bg-[#181A1D]/60 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-[#A5A8AC]">
                      <span className="text-[#6D7176]">TIER STATUS:</span>
                      <span className="text-[#F2F2F0] font-semibold">{activeSkill.level}</span>
                    </div>
                    <div className="h-[1px] bg-[#292D31]" />
                    <div>
                      <span className="text-[#6D7176] block mb-1">APPLIED SPECIALIZATION:</span>
                      <span className="text-[#A5A8AC] font-sans leading-relaxed text-xs block">
                        {activeSkill.focus}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-mono text-[10px] text-[#6D7176] tracking-wider uppercase">
                      SYSTEM INTEGRATION
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A5A8AC]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#91A6B5]" />
                      <span>Production tested in AI & web pipelines</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-[#A5A8AC]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#91A6B5]" />
                      <span>Benchmarked across real-world workloads</span>
                    </div>
                  </div>

                  {/* Visual coordinate graph footer */}
                  <div className="pt-4 border-t border-[#292D31] flex justify-between items-center text-[10px] font-mono text-[#6D7176]">
                    <span>STATUS: VALIDATED</span>
                    <span>CORE: 2026 STACK</span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
