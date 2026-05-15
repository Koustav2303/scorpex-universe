import { useEffect, useRef } from 'react';

const LyricLine = ({ text, isActive }) => {
  const lineRef = useRef(null);

  // Auto-scroll behavior: When this line becomes active, smoothly scroll it to the center of the screen
  useEffect(() => {
    if (isActive && lineRef.current) {
      lineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [isActive]);

  return (
    <div ref={lineRef} className="py-4 md:py-6 lg:py-8 w-full flex justify-center">
      <h3 
        className={`text-3xl md:text-5xl lg:text-7xl font-black tracking-tight text-center transition-all duration-700 ease-out cursor-pointer select-none
          ${isActive 
            ? 'text-white scale-100 opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]' // Active: Glow, full size
            : 'text-white/30 scale-90 opacity-40 blur-[3px] hover:blur-none hover:opacity-80' // Inactive: Blurred, shrunk, transparent
          }
        `}
      >
        {text}
      </h3>
    </div>
  );
};

export default LyricLine;