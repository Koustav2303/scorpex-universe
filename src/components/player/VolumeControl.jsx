import { Volume2, ListMusic, Maximize2 } from 'lucide-react';

const VolumeControl = () => {
  return (
    <div className="flex items-center justify-end gap-4 w-[25%] sm:w-[30%]">
      {/* Volume Slider (Hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-2 group cursor-pointer">
        <Volume2 className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden group-hover:h-1.5 transition-all">
          <div className="w-[70%] h-full bg-white group-hover:bg-purple-400 transition-colors" />
        </div>
      </div>

      {/* Queue & Theater Mode Toggles */}
      <div className="flex items-center gap-3 border-l border-white/10 pl-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <ListMusic className="w-4 h-4" />
        </button>
        <button className="hidden sm:block text-gray-400 hover:text-white transition-colors">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VolumeControl;