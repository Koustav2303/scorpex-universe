import { Menu, X } from 'lucide-react';

const MenuToggle = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="md:hidden relative z-50 p-2 text-white transition-transform duration-300 active:scale-95"
      aria-label="Toggle Menu"
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

export default MenuToggle;