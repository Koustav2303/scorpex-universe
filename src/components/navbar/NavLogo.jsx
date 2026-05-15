import { Disc3 } from 'lucide-react';

const NavLogo = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
      <Disc3 className="w-6 h-6 text-white transition-transform duration-500 group-hover:rotate-180" />
      <span className="text-xl font-bold tracking-widest text-white uppercase transition-colors duration-300 group-hover:text-gray-300">
        ScorpeX
      </span>
    </div>
  );
};

export default NavLogo;