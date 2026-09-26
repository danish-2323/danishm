import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import SamuraiLogo from './SamuraiLogo';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Mastery', href: '#skills' },
  { label: 'The Path', href: '#about' },
  { label: 'Arsenal', href: '#projects' },
  { label: 'Specs', href: '#specification' },
  { label: 'Credentials', href: '#certifications' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['skills', 'about', 'projects', 'specification', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + h) {
            setActiveHash(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#070809]/95 backdrop-blur-md border-b border-[#242830]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* LEFT: Samurai Crest & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative">
              <SamuraiLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#E5252A]/20 blur-md rounded-full -z-10" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bebas text-lg tracking-widest text-[#F2F2F0] group-hover:text-white transition-colors">
                DANISH M.
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-[#E5252A] uppercase">
                AI & DATA SCIENCE ENG
              </span>
            </div>
          </a>

          {/* CENTER: Clean Minimalist Nav Links (exact Katana style) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((item) => {
              const isActive = activeHash === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#FFFFFF] font-semibold'
                      : 'text-[#A5A8AC] hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E5252A] shadow-[0_0_8px_#E5252A]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Glowing Crimson Red CTA Button (matching image.png) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded bg-gradient-to-r from-[#E5252A] to-[#B81419] hover:from-[#FF3338] hover:to-[#D1181E] text-white font-mono text-xs font-bold tracking-widest uppercase border border-white/20 shadow-[0_0_20px_rgba(229,37,42,0.5)] hover:shadow-[0_0_30px_rgba(229,37,42,0.8)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              CONTACT ME
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded border border-[#242830] bg-[#0E1014] text-[#A5A8AC] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#070809]/98 backdrop-blur-xl border-b border-[#242830] px-6 py-8 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-4 mb-2 border-b border-[#242830] text-xs font-mono text-[#E5252A]">
                <span className="w-2 h-2 rounded-full bg-[#E5252A] animate-pulse" />
                <span>{personalInfo.status}</span>
              </div>

              {navLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-4 rounded border border-[#242830] bg-[#0E1014] text-sm font-mono tracking-widest uppercase text-[#F2F2F0] hover:border-[#E5252A] flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#E5252A]">0{idx + 1}</span>
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-3.5 rounded bg-gradient-to-r from-[#E5252A] to-[#B81419] text-white text-center font-mono text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(229,37,42,0.5)]"
              >
                CONTACT ME
              </a>
            </div>

            <div className="pt-6 border-t border-[#242830] flex justify-between text-xs font-mono text-[#A5A8AC]">
              <a href={personalInfo.links.github} target="_blank" rel="noreferrer" className="hover:text-white">
                GITHUB
              </a>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                LINKEDIN
              </a>
              <a href={personalInfo.links.email} className="hover:text-white">
                EMAIL
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
