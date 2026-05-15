const ClosingQuote = () => {
    return (
      <div className="relative w-full py-32 flex items-center justify-center text-center overflow-hidden">
        {/* Deep cinematic background glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 italic leading-tight">
            "Every composition deserves its own <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-bold">universe.</span>"
          </h2>
          <p className="mt-8 text-gray-500 tracking-[0.3em] uppercase text-sm font-mono">
            — ScorpeX
          </p>
        </div>
      </div>
    );
  };
  
  export default ClosingQuote;