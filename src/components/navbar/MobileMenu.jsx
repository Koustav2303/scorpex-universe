const navItems = [
    { name: 'Library', href: '#library', sub: 'The Archive' },
    { name: 'Visuals', href: '#visuals', sub: 'Synesthesia' },
    { name: 'Studio', href: '#deconstruction', sub: 'Anatomy' },
    { name: 'Lyrics', href: '#lyrics', sub: 'Sync Mode' },
  ];
  
  const MobileMenu = ({ isOpen, closeMenu }) => {
    return (
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/98 backdrop-blur-3xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}
      >
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[40vw] font-black rotate-90">SCORPEX</h1>
        </div>
  
        <nav className="relative z-50 flex flex-col gap-10 text-center">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`group flex flex-col items-center transform transition-all duration-700 delay-${index * 100} ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="text-[10px] font-mono tracking-[0.5em] text-purple-500 uppercase mb-2">
                {item.sub}
              </span>
              <span className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase group-hover:italic group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500">
                {item.name}
              </span>
            </a>
          ))}
        </nav>
      </div>
    );
  };
  
  export default MobileMenu;