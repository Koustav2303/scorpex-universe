import { Play, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';

const PlayerControls = () => {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 w-[50%] sm:w-[40%]">
      <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">
        <Shuffle className="w-4 h-4" />
      </button>
      
      <button className="text-gray-300 hover:text-white transition-colors active:scale-95">
        <SkipBack className="w-5 h-5 fill-current" />
      </button>

      {/* Primary Play Button */}
      <button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] active:scale-95">
        <Play className="w-5 h-5 sm:w-6 sm:h-6 ml-1 fill-current" />
      </button>

      <button className="text-gray-300 hover:text-white transition-colors active:scale-95">
        <SkipForward className="w-5 h-5 fill-current" />
      </button>

      <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">
        <Repeat className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PlayerControls;