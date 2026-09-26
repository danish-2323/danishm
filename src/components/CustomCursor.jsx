import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || window.innerWidth < 1024) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive element or project
      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input, textarea, select');
      const projectCard = target.closest('[data-cursor="view"]');

      if (projectCard) {
        setHovered(true);
        setCursorText('VIEW');
      } else if (clickable) {
        setHovered(true);
        setCursorText('');
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Smooth Lerp animation for outer ring
    let animationFrameId;
    const render = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-[4px] -mt-[4px] rounded-full bg-[#E5252A] shadow-[0_0_8px_rgba(229,37,42,0.9)] transition-opacity duration-200 ${
          cursorText ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Responsive Follower Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full flex items-center justify-center transition-all duration-200 border ${
          cursorText
            ? 'w-16 h-16 -ml-8 -mt-8 bg-white border-transparent text-[#070809]'
            : hovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-[#E5252A] bg-[#E5252A]/15 shadow-[0_0_12px_rgba(229,37,42,0.4)]'
            : 'w-10 h-10 border-[#242830] bg-transparent'
        } ${clicked ? 'scale-90' : 'scale-100'}`}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
