const navItems = [
    { name: 'Library', href: '#library' },
    { name: 'Visuals', href: '#visuals' },
    { name: 'About', href: '#about' },
  ];
  
  const MobileMenu = ({ isOpen, closeMenu }) => {
    return (
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className={`text-3xl font-light tracking-widest text-white uppercase transform transition-all duration-500 delay-${index * 100} ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    );
  };
  
  export default MobileMenu;