const TrackInfo = () => {
    return (
      <div className="flex items-center gap-3 sm:gap-4 w-[25%] sm:w-[30%] min-w-[120px]">
        {/* Mini Album Art */}
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white/5 border border-white/10 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />
          {/* Animated playing indicator overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-0.5 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="w-1 h-3 bg-white animate-bounce" style={{ animationDelay: '0ms' }}/>
             <div className="w-1 h-4 bg-white animate-bounce" style={{ animationDelay: '150ms' }}/>
             <div className="w-1 h-2 bg-white animate-bounce" style={{ animationDelay: '300ms' }}/>
          </div>
        </div>
  
        {/* Track Details */}
        <div className="hidden sm:flex flex-col justify-center overflow-hidden">
          <h4 className="text-sm font-bold text-white truncate cursor-pointer hover:underline">
            The ScorpeX Overture
          </h4>
          <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase truncate">
            ScorpeX
          </p>
        </div>
      </div>
    );
  };
  
  export default TrackInfo;