import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({
  number,
  tag,
  title,
  subtitle,
  align = 'left'
}) {
  return (
    <div className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {/* Top Meta Line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-3 mb-4 font-mono text-xs tracking-widest text-[#91A6B5] ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="px-2 py-0.5 rounded border border-[#292D31] bg-[#111315] text-[#F2F2F0]">
          {number}
        </span>
        <span className="text-[#6D7176]">{tag}</span>
        <div className="h-[1px] w-12 bg-[#292D31]" />
      </motion.div>

      {/* Main Editorial Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2F2F0] leading-[1.1] uppercase"
      >
        {title}
      </motion.h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-4 text-[#A5A8AC] text-sm md:text-base max-w-2xl font-normal leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
