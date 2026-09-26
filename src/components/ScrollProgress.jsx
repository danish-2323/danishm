import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#8B0000] via-[#E5252A] to-[#FF4D50] shadow-[0_0_8px_rgba(229,37,42,0.8)] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
