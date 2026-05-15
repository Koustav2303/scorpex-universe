const ProgressBar = () => {
    return (
      <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2 group cursor-pointer flex items-center h-4 px-0">
        <div className="w-full h-[2px] bg-white/10 group-hover:h-1 transition-all duration-200 relative rounded-full overflow-hidden">
          {/* Buffered Amount */}
          <div className="absolute top-0 left-0 bottom-0 w-[60%] bg-white/20" />
          {/* Current Progress */}
          <div className="absolute top-0 left-0 bottom-0 w-[35%] bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] relative">
              {/* Scrubber Knob (Visible on hover) */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
          </div>
        </div>
        
        {/* Timestamps (Hidden on very small screens, absolutely positioned to float above the bar on hover) */}
        <div className="absolute bottom-full left-4 text-[10px] font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1">
          1:24
        </div>
        <div className="absolute bottom-full right-4 text-[10px] font-mono text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1">
          9:45
        </div>
      </div>
    );
  };
  
  export default ProgressBar;