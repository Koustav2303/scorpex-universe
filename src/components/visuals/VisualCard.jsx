const VisualCard = ({ number, title, mood }) => {
    return (
      <div className="relative flex-shrink-0 w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden group">
        {/* Image Placeholder: This is where you would put hyper-realistic, 
          cinematicly lit imagery (e.g., moody studio shots, detailed macro textures) 
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black transition-transform duration-1000 group-hover:scale-105">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-purple-900/30 blur-xl" />
        </div>
  
        {/* Heavy Vignette for cinematic framing */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
  
        {/* Floating Glass Meta-Data */}
        <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 transform transition-transform duration-500 group-hover:-translate-y-2">
          <span className="text-xs font-mono tracking-[0.3em] text-purple-400 uppercase mb-2 block">
            // {number} — {mood}
          </span>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            Original Visual Concept
          </p>
        </div>
      </div>
    );
  };
  
  export default VisualCard;