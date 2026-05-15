import { useEffect, useRef } from 'react';

const LyricLine = ({ text, isActive, isPlaying }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    // FIX: Only trigger scrollIntoView if the song is ACTUALLY playing
    if (isActive && isPlaying && lineRef.current) {
      lineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [isActive, isPlaying]);

  return (
    <div ref={lineRef} className="py-4 md:py-6 w-full flex justify-center">
      <h3 className={`text-3xl md:text-5xl lg:text-7xl font-black tracking-tight text-center transition-all duration-700 ease-out select-none
          ${isActive 
            ? 'text-white scale-100 opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
            : 'text-white/30 scale-90 opacity-40 blur-[3px]' 
          }
        `}
      >
        {text}
      </h3>
    </div>
  );
};

export default LyricLine;