import React, { useMemo } from 'react';

export default function KatanaEmbers() {
  const embers = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      bottom: `${Math.random() * 25}%`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 4 + 4}s`,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="ember"
          style={{
            left: ember.left,
            bottom: ember.bottom,
            width: ember.size,
            height: ember.size,
            animationDuration: ember.duration,
            animationDelay: ember.delay,
          }}
        />
      ))}
    </div>
  );
}
