import { useState, useEffect } from 'react';
import NavLogo from './NavLogo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import MenuToggle from './MenuToggle';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 bg-black/60 backdrop-blur-lg border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between">
            <NavLogo />
            <DesktopMenu />
            <MenuToggle isOpen={isMobileMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Navbar;