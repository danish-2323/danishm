import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Lightbulb, CheckCircle2, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { leadershipData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36 bg-[#08090A] border-t border-[#292D31]/40 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          number="06"
          tag="// IMPACT"
          title="LEADERSHIP & EXPERIENCE"
          subtitle="Real-world engineering tenure, nationwide AICTE leadership, and department governance."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1 * idx }}
              className="rounded-xl border border-[#292D31] bg-[#111315] p-6 sm:p-8 hover:border-[#91A6B5]/60 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded border border-[#292D31] bg-[#181A1D] flex items-center justify-center text-[#91A6B5] mb-6">
                  {idx === 0 ? (
                    <Users className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Target className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>

                <div className="font-mono text-xs text-[#91A6B5] uppercase tracking-wider mb-2">
                  {item.role}
                </div>

                <h3 className="font-display text-xl font-bold text-[#F2F2F0] tracking-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A5A8AC] leading-relaxed mb-6 font-normal">
                  {item.impact}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292D31] flex items-center justify-between font-mono text-xs">
                <span className="text-[#6D7176]">METRIC DELIVERED</span>
                <span className="text-[#F2F2F0] font-semibold">{item.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
