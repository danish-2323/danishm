import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight, Copy, Check, Terminal, Radio } from 'lucide-react';
import KatanaEmbers from '../components/KatanaEmbers';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-[100dvh] bg-[#070809] flex flex-col justify-between py-12 md:py-16 px-6 md:px-12 overflow-hidden border-t border-[#242830]"
    >
      {/* Background Ember Glow */}
      <div className="absolute inset-0 katana-ember-glow opacity-50 pointer-events-none" />
      <KatanaEmbers />

      {/* Slashed Katana Line */}
      <div className="katana-slash-line w-[120%] -left-[10%] top-[25%] rotate-12 opacity-50 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#242830]/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E5252A] animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-[#E5252A] uppercase">
              TRANSMISSION CONSOLE // DISPATCH
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wider mt-1">
            INITIATE CONTACT
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#A5A8AC] border border-[#242830] bg-[#0E1014] px-3.5 py-1.5 rounded-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-white font-bold">{personalInfo.status}</span>
        </div>
      </div>

      {/* MAIN TRANSMISSION MATRIX */}
      <div className="relative z-20 max-w-7xl w-full mx-auto my-auto py-8">
        
        {/* Giant Cinematic Brush Headline */}
        <div className="mb-10 text-center lg:text-left">
          <span className="font-mono text-xs text-[#E5252A] tracking-[0.2em] uppercase font-bold block mb-1">
            HIGH-FREQUENCY COLLABORATION
          </span>
          <h3 className="font-brush text-3xl sm:text-5xl md:text-6xl text-white tracking-wider leading-none">
            LET'S BUILD SOMETHING MEANINGFUL.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Coordinates & Fast Copy (col 1-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Channel Box */}
            <div className="rounded-xl border border-[#242830] bg-[#0E1014]/90 p-6 backdrop-blur-sm">
              <div className="font-mono text-[10px] text-[#E5252A] tracking-widest uppercase mb-4 pb-2 border-b border-[#242830]">
                DIRECT FREQUENCY PROTOCOLS
              </div>

              {/* Email Protocol */}
              <div className="mb-4">
                <div className="text-xs font-mono text-[#A5A8AC] mb-1 flex items-center justify-between">
                  <span>DIRECT TRANSMISSION FREQUENCY</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#E5252A] hover:underline flex items-center gap-1 text-[11px]"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="p-3 bg-[#15171D] rounded-lg border border-[#242830] flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm text-white select-all">
                    {personalInfo.email}
                  </span>
                  <a href={personalInfo.links.email} className="text-[#A5A8AC] hover:text-[#E5252A]">
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Phone Protocol */}
              <div className="mb-4">
                <div className="text-xs font-mono text-[#A5A8AC] mb-1 flex items-center justify-between">
                  <span>TELECOMMUNICATION LINE</span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-[#E5252A] hover:underline flex items-center gap-1 text-[11px]"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPhone ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
                <div className="p-3 bg-[#15171D] rounded-lg border border-[#242830] flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm text-white select-all">
                    {personalInfo.phone}
                  </span>
                  <a href={personalInfo.links.phone} className="text-[#A5A8AC] hover:text-[#E5252A]">
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Physical Coordinates */}
              <div>
                <div className="text-xs font-mono text-[#A5A8AC] mb-1">TERRESTRIAL COORDINATES</div>
                <div className="p-3 bg-[#15171D] rounded-lg border border-[#242830] flex items-center gap-2.5 text-xs sm:text-sm text-[#A5A8AC]">
                  <MapPin className="w-4 h-4 text-[#E5252A] shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

            </div>

            {/* Katana Circular White Social Buttons (Matching image.png & Frame 00:00) */}
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="katana-social-btn flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 fill-black" />
              </a>

              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="katana-social-btn flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 fill-black" />
              </a>

              <a
                href={personalInfo.links.email}
                className="katana-social-btn flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                aria-label="Email Danish"
              >
                <Mail className="w-5 h-5" />
              </a>

              <span className="font-mono text-xs text-[#A5A8AC] tracking-wider uppercase ml-2">
                VERIFIED CHANNELS
              </span>
            </div>

          </div>

          {/* RIGHT: Tactical Form Console (col 6-12) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#242830] bg-[#0E1014]/90 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#242830]">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <Terminal className="w-4 h-4 text-[#E5252A]" />
                  <span>TRANSMISSION_TERMINAL_V2</span>
                </div>
                <span className="font-mono text-[10px] text-[#A5A8AC]">ENCRYPTED PROTOCOL</span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#E5252A]/20 border border-[#E5252A] text-[#E5252A] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(229,37,42,0.4)]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bebas text-2xl text-white tracking-wide">
                    DISPATCH TRANSMITTED SUCCESSFULLY
                  </h4>
                  <p className="font-mono text-xs text-[#A5A8AC] max-w-sm mx-auto">
                    Signal received. Danish M will evaluate telemetry and respond within 24 operational hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] text-[#A5A8AC] uppercase mb-1.5">
                        YOUR IDENTITY / NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lead Engineer / Recruiter"
                        className="w-full bg-[#15171D] border border-[#242830] rounded-lg px-4 py-3 text-base sm:text-sm text-white focus:border-[#E5252A] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-[#A5A8AC] uppercase mb-1.5">
                        RETURN FREQUENCY / EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. team@company.org"
                        className="w-full bg-[#15171D] border border-[#242830] rounded-lg px-4 py-3 text-base sm:text-sm text-white focus:border-[#E5252A] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#A5A8AC] uppercase mb-1.5">
                      MISSION DIRECTIVE / SUBJECT
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Internship / Collaboration"
                      className="w-full bg-[#15171D] border border-[#242830] rounded-lg px-4 py-3 text-base sm:text-sm text-white focus:border-[#E5252A] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-[#A5A8AC] uppercase mb-1.5">
                      TRANSMISSION PAYLOAD / MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the opportunity, technical scope, or collaboration parameters..."
                      className="w-full bg-[#15171D] border border-[#242830] rounded-lg px-4 py-3 text-base sm:text-sm text-white focus:border-[#E5252A] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-katana-red py-3.5 rounded-lg font-mono text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2 mt-4"
                  >
                    <span>TRANSMIT DISPATCH</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM FOOTER TELEMETRY */}
      <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#242830]/80 text-[11px] font-mono text-[#A5A8AC] gap-2">
        <div className="flex items-center gap-3">
          <span className="text-[#E5252A]">DISPATCH LATENCY:</span>
          <span>RESPONSE UNDER 24 HOURS</span>
        </div>
        <div className="flex items-center gap-4">
          <span>PORTFOLIO CODEBASE: REACT + VITE + TAILWIND</span>
          <span className="text-[#242830]">|</span>
          <span className="text-white">COIMBATORE, INDIA</span>
        </div>
      </div>
    </section>
  );
}
