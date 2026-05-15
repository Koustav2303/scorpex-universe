import { Volume2, ListMusic, Mic2 } from 'lucide-react';
import usePlayerStore from '../../store/usePlayerStore';

const VolumeControl = () => {
  const { showLyrics, toggleLyrics } = usePlayerStore();

  return (
    <div className="flex items-center justify-end gap-4 w-[25%] sm:w-[30%]">
      <div className="hidden lg:flex items-center gap-2 group cursor-pointer">
        <Volume2 className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="w-[70%] h-full bg-white transition-colors" />
        </div>
      </div>

      <div className="flex items-center gap-3 border-l border-white/10 pl-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <ListMusic className="w-4 h-4" />
        </button>
        {/* Connect the Lyrics Toggle Button */}
        <button 
          onClick={toggleLyrics}
          className={`transition-colors duration-300 ${showLyrics ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'text-gray-400 hover:text-white'}`}
          title="Toggle Lyrics"
        >
          <Mic2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VolumeControl;