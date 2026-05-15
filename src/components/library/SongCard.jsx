import { Play, Clock, Activity } from 'lucide-react';

const SongCard = ({ title, duration, category, bpm, musicalKey, index, gridClass }) => {
  return (
    <div 
      className={`relative group overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 cursor-pointer transition-all duration-700 hover:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] ${gridClass} min-h-[250px]`}
    >
      {/* Cinematic Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transition-transform duration-700 group-hover:scale-105">
        <div className={`absolute inset-0 opacity-20 blur-2xl mix-blend-overlay transition-opacity duration-500 group-hover:opacity-60 ${index % 2 === 0 ? 'bg-purple-600' : 'bg-blue-600'}`} />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
        
        {/* Top Header: Badge & Play Button */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <span className="w-fit text-[10px] sm:text-xs font-mono tracking-widest text-white uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {category}
            </span>
            
            {/* Animated Audio Visualizer (Shows on Hover) */}
            <div className="flex items-end gap-1 h-4 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-purple-400 rounded-full animate-pulse"
                  style={{ 
                    height: `${Math.random() * 100}%`, 
                    animationDelay: `${i * 150}ms`,
                    animationDuration: '800ms'
                  }}
                />
              ))}
            </div>
          </div>

          <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform scale-90 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            <Play className="w-5 h-5 ml-1" fill="currentColor" />
          </button>
        </div>

        {/* Bottom Details */}
        <div className="flex flex-col gap-3 transform transition-transform duration-500 group-hover:-translate-y-2">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h4>
          
          {/* Composer Metadata */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500 font-mono uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {duration}
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-700" />
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-gray-400" />
              {bpm} BPM
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-700" />
            <span className="text-gray-400 border border-gray-700 px-2 py-0.5 rounded">
              KEY: {musicalKey}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SongCard;