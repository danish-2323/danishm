import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SamuraiLogo from './SamuraiLogo';
import KatanaEmbers from './KatanaEmbers';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING NEURAL RUNTIME // SKCT NODE');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scrolling while preloader is active and force top of page
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const statusMap = [
      { threshold: 0, text: 'INITIALIZING NEURAL RUNTIME // SKCT NODE' },
      { threshold: 25, text: 'CALIBRATING NLP ALGORITHMIC CORE' },
      { threshold: 52, text: 'DEPLOYING CLOUD INFRASTRUCTURE (AWS / S3)' },
      { threshold: 78, text: 'ALIGNING HIGH-FREQUENCY 60FPS DOM' },
      { threshold: 96, text: 'SYSTEM READY // ENGAGING INTERFACE' }
    ];

    let current = 0;
    const interval = setInterval(() => {
      // Non-linear acceleration for realistic telemetry loading
      const step = current < 30 ? 2 : current < 70 ? 3 : current < 90 ? 2 : 1;
      current += step;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        setStatusText('SYSTEM READY // ENGAGING INTERFACE');
        clearInterval(interval);

        // Brief delay at 100% to display slash beam before unmounting
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            document.body.style.overflow = '';
            window.scrollTo(0, 0);
            if (onComplete) onComplete();
          }, 650);
        }, 350);
      } else {
        setProgress(current);
        const match = [...statusMap].reverse().find(s => current >= s.threshold);
        if (match) setStatusText(match.text);
      }
    }, 28); // ~1.8 seconds total duration

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsDone(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      window.scrollTo(0, 0);
      if (onComplete) onComplete();
    }, 300);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(8px)',
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] w-screen h-[100dvh] bg-[#070809] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none"
        >
          {/* Background Crimson Radial Ember Aura */}
          <div className="absolute inset-0 katana-ember-glow opacity-80 pointer-events-none" />
          <KatanaEmbers />

          {/* Slashed Laser Katana Beam (Fires dramatically at 100%) */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={progress === 100 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-1/2 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent shadow-[0_0_25px_#E5252A] -translate-y-1/2 z-30 pointer-events-none origin-center"
          />

          {/* Corner Tactical HUD Targeting Brackets */}
          <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-[#E5252A]/80 pointer-events-none" />
          <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-[#E5252A]/80 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-[#E5252A]/80 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-[#E5252A]/80 pointer-events-none" />

          {/* TOP BAR: HUD Header */}
          <div className="relative z-20 flex items-center justify-between font-mono text-[10px] sm:text-xs text-[#A5A8AC]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E5252A] animate-ping" />
              <span className="tracking-widest uppercase text-white font-bold">
                SYSTEM BOOTLOADER V2.4
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-[#6D7176]">PORTFOLIO RUNTIME</span>
              <button
                onClick={handleSkip}
                className="px-2.5 py-1 rounded border border-[#242830] bg-[#0E1014] text-[#A5A8AC] hover:text-white hover:border-[#E5252A] transition-all text-[10px] font-mono tracking-wider uppercase cursor-pointer"
              >
                SKIP [ESC]
              </button>
            </div>
          </div>

          {/* CENTER: Glowing Crest & 0 to 100% Counter */}
          <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center px-4">
            
            {/* Samurai Crest with Crimson Rim Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#E5252A]/40 bg-[#0E1014] flex items-center justify-center relative shadow-[0_0_35px_rgba(229,37,42,0.5)]">
                <SamuraiLogo className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="absolute inset-0 bg-[#E5252A]/25 blur-xl rounded-full -z-10 animate-pulse" />
            </motion.div>

            {/* Identity Title */}
            <h1 className="font-bebas text-2xl sm:text-4xl text-white tracking-[0.2em] mb-1">
              DANISH M.
            </h1>
            <div className="font-mono text-[10px] sm:text-xs text-[#E5252A] tracking-[0.25em] uppercase font-bold mb-6">
              AI & DATA SCIENCE ENGINEER
            </div>

            {/* Huge 0 to 100% Digital Counter */}
            <div className="font-bebas text-7xl sm:text-9xl md:text-[11rem] leading-none text-white tracking-wider flex items-baseline justify-center my-2 font-black filter drop-shadow-[0_0_30px_rgba(229,37,42,0.4)]">
              <span>{progress < 10 ? `0${progress}` : progress}</span>
              <span className="text-[#E5252A] text-3xl sm:text-5xl md:text-6xl font-mono ml-2 font-bold">
                %
              </span>
            </div>

            {/* Slicing Crimson Laser Progress Bar */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto mt-4 mb-4">
              <div className="h-1.5 sm:h-2 w-full bg-[#15171D] rounded-full overflow-hidden border border-[#242830] p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-[#8B0000] via-[#E5252A] to-[#FF4D50] shadow-[0_0_12px_#E5252A] rounded-full transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Dynamic Telemetry Status Readout */}
            <div className="font-mono text-[11px] sm:text-xs text-[#A5A8AC] tracking-widest uppercase flex items-center gap-2 h-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E5252A] animate-pulse" />
              <span className="truncate max-w-[320px] sm:max-w-md">{statusText}</span>
            </div>

          </div>

          {/* BOTTOM BAR: Telemetry Line */}
          <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-[#6D7176] gap-2 pt-4 border-t border-[#242830]/80">
            <div className="flex items-center gap-3">
              <span className="text-[#E5252A]">SYSTEM:</span>
              <span>SRI KRISHNA COLLEGE OF TECHNOLOGY // ANNA UNIV</span>
            </div>
            <div className="flex items-center gap-4">
              <span>SECURITY: ENCRYPTED</span>
              <span>|</span>
              <span className="text-white">STATUS: {progress}%</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
