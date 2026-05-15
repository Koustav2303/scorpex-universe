import { useState, useEffect } from 'react';
import NavLogo from './NavLogo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 flex justify-center ${
          scrolled ? 'pt-4' : 'pt-0'
        }`}
      >
        <div
          className={`relative flex items-center justify-between w-full transition-all duration-700 ease-in-out border-white/5 ${
            scrolled 
              ? 'max-w-5xl px-8 py-3 bg-black/40 backdrop-blur-xl rounded-full border shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
              : 'max-w-full px-10 py-8 bg-transparent border-b-0'
          }`}
        >
          <NavLogo />
          <DesktopMenu />

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-white hover:text-purple-400 transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;