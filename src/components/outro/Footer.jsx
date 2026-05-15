import { Disc3 } from 'lucide-react';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black pt-16 pb-32"> {/* Extra padding bottom for the sticky player */}
      <div className="container px-6 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <Disc3 className="w-5 h-5 text-white" />
          <span className="text-lg font-bold tracking-widest text-white uppercase">
            ScorpeX
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium tracking-widest text-gray-500 uppercase">
          <a href="#library" className="hover:text-white transition-colors">Library</a>
          <a href="#visuals" className="hover:text-white transition-colors">Visuals</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4 text-gray-500">
          <a href="#" className="hover:text-purple-400 transition-colors"><FaTwitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><FaInstagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><FaGithub className="w-5 h-5" /></a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;