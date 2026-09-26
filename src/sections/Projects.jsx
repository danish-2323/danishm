import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Terminal, Layers, Activity, CheckCircle, Database } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { projectsData } from '../data/portfolioData';

function ProjectVisualPlaceholder({ project }) {
  // Bespoke architectural visual representations corresponding to the project's actual engineering
  if (project.id === "01") {
    // AI Auto-Correct Tool NLP Visualizer
    return (
      <div className="w-full h-full bg-[#0E1012] p-5 font-mono text-xs flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[#292D31]/80 text-[#6D7176] text-[10px]">
          <span>MODULE: NLP_AUTOCORRECT.PY</span>
          <span className="text-[#91A6B5]">STATUS: 200 OK</span>
        </div>

        <div className="space-y-3 my-4">
          <div className="p-3 rounded bg-[#181A1D] border border-[#292D31]">
            <span className="text-[#6D7176] block text-[10px]">// INPUT QUERY WITH TYPO</span>
            <span className="text-[#F2F2F0] line-through decoration-red-400">"artficial intellegence engneering"</span>
          </div>

          <div className="flex items-center gap-2 text-[#91A6B5] text-[11px]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>N-Gram Probabilities calculated • Levenshtein Distance = 2</span>
          </div>

          <div className="p-3 rounded bg-[#111315] border border-[#91A6B5]/40 text-[#F2F2F0]">
            <span className="text-[#91A6B5] block text-[10px]">// SUGGESTION MATRIX (CONFIDENCE 98.4%)</span>
            <span className="font-semibold text-white">"artificial intelligence engineering"</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-[#6D7176] pt-2 border-t border-[#292D31]/80">
          <span>LATENCY: 12ms</span>
          <span>PINNACLE LABS / MCA GOVT OF INDIA</span>
        </div>
      </div>
    );
  }

  if (project.id === "02") {
    // Smart Resume Parser ATS Engine
    return (
      <div className="w-full h-full bg-[#0E1012] p-5 font-mono text-xs flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[#292D31]/80 text-[#6D7176] text-[10px]">
          <span>MODULE: ATS_PARSER_EXTRACTOR.JSON</span>
          <span className="text-[#91A6B5]">SCHEMA: v2.4</span>
        </div>

        <div className="p-3 rounded bg-[#181A1D] border border-[#292D31] text-[11px] leading-relaxed text-[#A5A8AC] my-4 overflow-hidden">
          <span className="text-[#91A6B5]">&#123;</span><br />
          &nbsp;&nbsp;<span className="text-[#F2F2F0]">"candidate"</span>: "Danish M",<br />
          &nbsp;&nbsp;<span className="text-[#F2F2F0]">"target_role"</span>: "AI & Data Science Engineer",<br />
          &nbsp;&nbsp;<span className="text-[#F2F2F0]">"skills_detected"</span>: ["Python", "NLP", "C++", "PyTorch"],<br />
          &nbsp;&nbsp;<span className="text-[#F2F2F0]">"ats_compatibility"</span>: "98.5%",<br />
          &nbsp;&nbsp;<span className="text-[#F2F2F0]">"status"</span>: "QUALIFIED_HIGH_PRIORITY"<br />
          <span className="text-[#91A6B5]">&#125;</span>
        </div>

        <div className="flex justify-between items-center text-[10px] text-[#6D7176] pt-2 border-t border-[#292D31]/80">
          <span>UNSTRUCTURED PDF &rarr; NORMALIZED JSON</span>
          <span>AUTOMATION: 80% TIME SAVED</span>
        </div>
      </div>
    );
  }

  if (project.id === "03") {
    // AI Multi-Language Translator
    return (
      <div className="w-full h-full bg-[#0E1012] p-5 font-mono text-xs flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[#292D31]/80 text-[#6D7176] text-[10px]">
          <span>PIPELINE: SEQ2SEQ_TRANSLATOR</span>
          <span className="text-[#91A6B5]">TRANSFORMER: ACTIVE</span>
        </div>

        <div className="space-y-3 my-4">
          <div className="p-3 rounded bg-[#181A1D] border border-[#292D31]">
            <span className="text-[#6D7176] block text-[10px]">SOURCE TOKEN SEQUENCE [EN]</span>
            <span className="text-[#F2F2F0]">"Empowering future technologies through intelligent computation."</span>
          </div>

          <div className="p-3 rounded bg-[#111315] border border-[#91A6B5]/40">
            <span className="text-[#91A6B5] block text-[10px]">TARGET NORMALIZATION [DE/TA]</span>
            <span className="text-white font-medium">"Bidirectional attention matrix aligned & verified."</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-[#6D7176] pt-2 border-t border-[#292D31]/80">
          <span>BEAM SEARCH: WIDTH 4</span>
          <span>SUB-SECOND INFERENCE</span>
        </div>
      </div>
    );
  }

  if (project.id === "04") {
    // ForecastEngine & Predictive Analytics
    return (
      <div className="w-full h-full bg-[#0E1012] p-5 font-mono text-xs flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-3 border-b border-[#292D31]/80 text-[#6D7176] text-[10px]">
          <span>TELEMETRY: FORECAST_ENGINE_AWS</span>
          <span className="text-[#91A6B5]">ACCURACY: 94.2%</span>
        </div>

        {/* Minimal Architectural Bar Chart / Waveform representation */}
        <div className="my-4 p-3 rounded bg-[#181A1D] border border-[#292D31]">
          <div className="flex items-end justify-between h-20 gap-1.5 pt-2">
            {[35, 48, 62, 55, 78, 68, 85, 92, 88, 96, 82, 94].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`w-full rounded-t transition-all ${
                    i >= 8 ? 'bg-[#91A6B5]' : 'bg-[#292D31]'
                  }`}
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[9px] text-[#6D7176] mt-2 border-t border-[#292D31] pt-1">
            <span>HISTORICAL TREND</span>
            <span className="text-[#91A6B5]">PREDICTIVE HORIZON (T+30)</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] text-[#6D7176] pt-2 border-t border-[#292D31]/80">
          <span>MODEL: MULTIVARIATE LSTM + REGRESSION</span>
          <span>TIME-SERIES</span>
        </div>
      </div>
    );
  }

  // Project 05: MediCare Clinical System
  return (
    <div className="w-full h-full bg-[#0E1012] p-5 font-mono text-xs flex flex-col justify-between select-none">
      <div className="flex items-center justify-between pb-3 border-b border-[#292D31]/80 text-[#6D7176] text-[10px]">
        <span>LIVE APP: MEDICARE CLINIC PLATFORM</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ONLINE
        </span>
      </div>

      <div className="my-4 space-y-2 p-3 rounded bg-[#181A1D] border border-[#292D31]">
        <div className="flex justify-between items-center text-[11px] text-[#F2F2F0]">
          <span>Specialist Consultation Booking</span>
          <span className="text-[10px] text-[#91A6B5]">Verified DB</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          <div className="p-2 rounded bg-[#111315] border border-[#292D31] text-[10px] text-center text-[#A5A8AC]">
            Cardiology
          </div>
          <div className="p-2 rounded bg-[#111315] border border-[#292D31] text-[10px] text-center text-[#A5A8AC]">
            Pediatrics
          </div>
          <div className="p-2 rounded bg-[#111315] border border-[#292D31] text-[10px] text-center text-[#A5A8AC]">
            Neurology
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] text-[#6D7176] pt-2 border-t border-[#292D31]/80">
        <span>HOSTED ON NETLIFY EDGE</span>
        <span>PRODUCTION READY</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#08090A] border-t border-[#292D31]/40 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          number="03"
          tag="// SELECTED WORKS"
          title="ENGINEERED SYSTEMS"
          subtitle="Real-world projects developed for production, research, and enterprise problem-solving."
        />

        {/* Project Cards Grid with Physical 3D Depth */}
        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
              data-cursor="view"
              className="group relative rounded-xl border border-[#292D31] bg-[#111315] p-6 sm:p-8 lg:p-10 shadow-2xl hover:border-[#91A6B5]/60 transition-all duration-500 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Visual Preview / Architectural Frame (col 1-6) */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="relative rounded-lg border border-[#292D31] bg-[#0E1012] overflow-hidden shadow-inner group-hover:border-[#91A6B5]/40 transition-colors">
                    {/* Browser / Shell Header */}
                    <div className="h-8 px-4 bg-[#181A1D] border-b border-[#292D31] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#292D31]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#292D31]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#292D31]" />
                      </div>
                      <span className="font-mono text-[10px] text-[#6D7176] tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Interactive UI Telemetry Frame */}
                    <div className="min-h-[220px] sm:min-h-[260px] flex items-center justify-center">
                      <ProjectVisualPlaceholder project={project} />
                    </div>
                  </div>
                </div>

                {/* Project Details & Narrative (col 7-12) */}
                <div className="lg:col-span-6 flex flex-col justify-between order-1 lg:order-2">
                  <div>
                    {/* Category, Status & Project ID Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-[#292D31]/40 font-mono text-xs">
                      <div className="flex items-center gap-2 text-[#91A6B5]">
                        <span>{project.subtitle}</span>
                        <span>•</span>
                        <span className="text-[#6D7176]">{project.period}</span>
                      </div>
                      <div className="text-[#6D7176]">
                        PROJECT <span className="font-bold text-[#F2F2F0]">[{project.id}]</span>
                      </div>
                    </div>

                    {/* Project Title */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F2F2F0] tracking-tight mb-4 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-[#A5A8AC] leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Engineering Highlights */}
                    <div className="space-y-2 mb-6 border-l-2 border-[#292D31] pl-4">
                      {project.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="text-xs text-[#6D7176] flex items-start gap-2">
                          <span className="text-[#91A6B5] font-mono mt-0.5">&gt;</span>
                          <span className="text-[#A5A8AC]">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded border border-[#292D31] bg-[#181A1D] text-[#F2F2F0] font-mono text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Metrics */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#292D31]">
                    <div className="flex items-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded bg-[#F2F2F0] text-[#08090A] hover:bg-white font-mono text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-all"
                        >
                          <span>LIVE APPLICATION</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded border border-[#292D31] bg-[#181A1D] hover:border-[#91A6B5] text-[#F2F2F0] font-mono text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                      </a>
                    </div>

                    <div className="font-mono text-[11px] text-[#91A6B5]">
                      {project.metrics}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
