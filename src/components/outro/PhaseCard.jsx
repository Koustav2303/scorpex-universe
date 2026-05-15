const PhaseCard = ({ phase, title, description, isActive }) => {
    return (
      <div className="relative group flex flex-col md:w-1/4 p-6 md:p-8 border-l border-white/10 md:border-l-0 md:border-t hover:bg-white/5 transition-colors duration-500">
        {/* Glowing Indicator Line */}
        <div className={`absolute top-0 left-0 w-[2px] h-full md:w-full md:h-[2px] transition-all duration-700 
          ${isActive ? 'bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]' : 'bg-transparent group-hover:bg-white/30'}`} 
        />
        
        <span className="text-xs font-mono tracking-[0.2em] text-purple-400 uppercase mb-4">
          {phase}
        </span>
        <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
          {title}
        </h4>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          {description}
        </p>
      </div>
    );
  };
  
  export default PhaseCard;