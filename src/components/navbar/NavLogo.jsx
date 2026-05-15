import { Disc3 } from 'lucide-react';

const NavLogo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <Disc3 className="w-8 h-8 text-white transition-transform duration-1000 group-hover:rotate-[360deg]" />
        {/* Absolute positioned frequency bars */}
        <div className="absolute -right-1 -bottom-1 flex gap-[2px] h-3 items-end">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className="w-[2px] bg-purple-500 animate-pulse" 
              style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.2}s` }} 
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
          ScorpeX
        </span>
        <span className="text-[8px] font-mono tracking-[0.3em] text-purple-500 uppercase leading-none mt-1">
          Universe
        </span>
      </div>
    </div>
  );
};

export default NavLogo;