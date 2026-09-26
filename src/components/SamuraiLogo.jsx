import React from 'react';

export default function SamuraiLogo({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Samurai Crest"
    >
      {/* Outer Glow Circle */}
      <circle cx="50" cy="50" r="46" stroke="#E5252A" strokeWidth="2.5" opacity="0.4" />
      <circle cx="50" cy="50" r="41" stroke="#E5252A" strokeWidth="1" opacity="0.2" />

      {/* Stylized Kabuto Samurai Crest */}
      <path
        d="M26 36 C34 20, 66 20, 74 36 C66 42, 34 42, 26 36 Z"
        fill="#E5252A"
      />
      
      {/* Curved Horns (Kuwagata) */}
      <path
        d="M32 34 C24 16, 18 14, 14 18 C18 28, 28 36, 32 38 Z"
        fill="#E5252A"
      />
      <path
        d="M68 34 C76 16, 82 14, 86 18 C82 28, 72 36, 68 38 Z"
        fill="#E5252A"
      />

      {/* Face Visor / Menpo Mask Line */}
      <rect x="36" y="52" width="28" height="6" rx="3" fill="#E5252A" />
      <rect x="42" y="64" width="16" height="4" rx="2" fill="#E5252A" opacity="0.8" />

      {/* Central Blade Spike */}
      <path
        d="M48 20 L52 20 L50 10 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
