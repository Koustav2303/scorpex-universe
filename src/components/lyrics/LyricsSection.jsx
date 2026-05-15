import LyricsContainer from './LyricsContainer';
import { Mic2 } from 'lucide-react';

const LyricsSection = () => {
  return (
    <section id="lyrics" className="relative w-full py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12 opacity-60">
          <Mic2 className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-mono tracking-[0.3em] text-gray-300 uppercase">
            Live Lyrics Sync
          </span>
        </div>

        {/* The Immersive Container */}
        <LyricsContainer />
        
      </div>
    </section>
  );
};

export default LyricsSection;