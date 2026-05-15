import { Volume2, VolumeX } from 'lucide-react';

const StemTrack = ({ name, color, isMuted, onToggle }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 md:p-6 rounded-2xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 group">
      
      {/* Controls */}
      <div className="flex items-center justify-between w-full sm:w-48 flex-shrink-0">
        <span className="text-sm font-bold tracking-widest text-white uppercase">
          {name}
        </span>
        <button 
          onClick={onToggle}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isMuted 
              ? 'bg-red-500/20 text-red-400 hover:bg-red-500/40' 
              : 'bg-white/10 text-white hover:bg-white hover:text-black'
          }`}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Simulated Waveform / Visualizer */}
      <div className="flex-grow w-full h-12 flex items-center gap-1 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
        {[...Array(40)].map((_, i) => {
          // Generate a random height for the waveform bars
          const height = isMuted ? '4px' : `${Math.max(10, Math.random() * 100)}%`;
          
          return (
            <div 
              key={i}
              className={`w-1.5 md:w-2 rounded-full transition-all duration-500 ease-out`}
              style={{ 
                height,
                backgroundColor: isMuted ? '#333' : color,
                // Add a pulsing animation only if it's not muted
                animation: isMuted ? 'none' : `pulse-height 1s ease-in-out infinite alternate ${i * 0.05}s`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StemTrack;