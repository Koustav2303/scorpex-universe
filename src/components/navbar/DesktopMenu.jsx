const navItems = [
    { name: 'Library', href: '#library', id: '01' },
    { name: 'Visuals', href: '#visuals', id: '02' },
    { name: 'Studio', href: '#deconstruction', id: '03' },
    { name: 'Lyrics', href: '#lyrics', id: '04' },
  ];
  
  const DesktopMenu = () => {
    return (
      <nav className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative flex items-center gap-2 group py-2"
          >
            <span className="text-[10px] font-mono text-purple-500 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              {item.id}
            </span>
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase transition-colors duration-300 group-hover:text-white">
              {item.name}
            </span>
            {/* Creative Underline: A dot that expands into a line */}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
          </a>
        ))}
        
        {/* Premium CTA: Magnetic Button Style */}
        <button className="ml-4 px-6 py-2.5 text-[11px] font-black tracking-[0.2em] text-white uppercase bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
          Get Access
        </button>
      </nav>
    );
  };
  
  export default DesktopMenu;