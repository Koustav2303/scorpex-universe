const navItems = [
    { name: 'Library', href: '#library' },
    { name: 'Visuals', href: '#visuals' },
    { name: 'About', href: '#about' },
  ];
  
  const DesktopMenu = () => {
    return (
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative text-sm font-medium tracking-wide text-gray-300 transition-colors duration-300 hover:text-white group"
          >
            {item.name}
            {/* Animated underline effect for premium feel */}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <button className="px-5 py-2 text-sm font-medium text-black bg-white rounded-full transition-transform duration-300 hover:scale-105 hover:bg-gray-200">
          Listen Now
        </button>
      </nav>
    );
  };
  
  export default DesktopMenu;