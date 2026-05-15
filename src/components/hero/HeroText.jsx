import MagneticButton from './MagneticButton';

const HeroText = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full z-10 space-y-8">
      
      {/* 1. Cinematic Status Badge */}
      <div className="overflow-hidden">
        <div className="hero-text inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          {/* Pulsing "Live" Dot */}
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-purple-400"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-purple-500"></span>
          </span>
          <span className="text-xs font-medium tracking-[0.3em] text-gray-300 uppercase">
            Songwriter & Composer
          </span>
        </div>
      </div>

      {/* 2. Massive Layered Typography */}
      <div className="space-y-1">
        <div className="overflow-hidden">
          <h2 className="hero-title text-2xl md:text-3xl lg:text-4xl font-light tracking-widest text-gray-400">
            Experience the
          </h2>
        </div>
        
        <div className="overflow-hidden relative">
          {/* Main Name with intense gradient and subtle drop shadow */}
          <h1 className="hero-title text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-700 leading-none pb-2">
            SCORPEX
          </h1>
          {/* Under-glow effect for the text */}
          <span className="absolute left-0 top-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-2xl -z-10 pointer-events-none select-none">
            SCORPEX
          </span>
        </div>
        
        <div className="overflow-hidden">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter italic text-white/80">
            Universe.
          </h1>
        </div>
      </div>

      {/* 3. Refined Description */}
      <div className="overflow-hidden max-w-lg">
        <p className="hero-action text-gray-400 md:text-lg leading-relaxed font-light">
          Step into an immersive digital realm. Where original compositions are crafted to be felt as deeply as they are heard.
        </p>
      </div>

      {/* 4. Action Area with Portfolio "Metadata" */}
      <div className="hero-action w-full flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
        <MagneticButton>Enter Library</MagneticButton>
        
        {/* Technical looking divider and metadata */}
        <div className="hidden sm:flex items-center gap-4 text-xs tracking-widest text-gray-600 uppercase font-mono">
           <span>// 01</span>
           <div className="w-12 h-[1px] bg-white/10"></div>
           <span>Cinematic Audio</span>
        </div>
      </div>
      
    </div>
  );
};

export default HeroText;