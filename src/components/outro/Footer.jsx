import { Disc3, ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaTwitter, FaInstagram, FaSpotify, FaSoundcloud } from 'react-icons/fa';

const Footer = () => {
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative w-full bg-[#030303] overflow-hidden border-t border-white/10 pt-12 pb-24 sm:pb-32 z-10">
      
      {/* 1. Infinite Cinematic Marquee / Ticker */}
      <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/5 py-3 mb-16 md:mb-24 backdrop-blur-sm">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono tracking-[0.3em] text-gray-500 uppercase">
          <span>// ORIGINAL COMPOSITIONS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          <span>CINEMATIC AUDIO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
          <span>IMMERSIVE EXPERIENCES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          <span>// ORIGINAL COMPOSITIONS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
          <span>CINEMATIC AUDIO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          <span>IMMERSIVE EXPERIENCES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
        </div>
        {/* Duplicate for seamless infinite loop */}
        <div className="absolute top-3 animate-marquee2 whitespace-nowrap flex items-center gap-8 text-xs font-mono tracking-[0.3em] text-gray-500 uppercase ml-8">
          <span>// ORIGINAL COMPOSITIONS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          <span>CINEMATIC AUDIO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
          <span>IMMERSIVE EXPERIENCES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          <span>// ORIGINAL COMPOSITIONS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
          <span>CINEMATIC AUDIO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></span>
          <span>IMMERSIVE EXPERIENCES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
        </div>
      </div>

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: Brand & Status */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer group w-fit">
              <Disc3 className="w-8 h-8 text-purple-400 transition-transform duration-700 group-hover:rotate-180" />
              <span className="text-2xl font-black tracking-widest text-white uppercase">
                ScorpeX
              </span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
              Crafting immersive digital audio experiences and original cinematic compositions.
            </p>
            {/* Live Studio Status */}
            <div className="mt-4 inline-flex flex-col gap-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md w-fit">
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Studio Status</span>
              <div className="flex items-center gap-2 text-xs font-medium text-white tracking-wide">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-green-400"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
                </span>
                ONLINE / CREATING
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h4 className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase">Sitemap</h4>
            <nav className="flex flex-col gap-4">
              {['Library', 'Visuals', 'Deconstruction', 'Lyrics'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="flex items-center gap-2 text-sm md:text-base font-medium text-gray-300 transition-all hover:text-white group w-fit"
                >
                  <span className="w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover:w-4" />
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">{link}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Socials & Platforms */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase">Platforms</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors group">
                <FaSpotify className="w-5 h-5 group-hover:scale-110 transition-transform" /> Spotify
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-orange-400 transition-colors group">
                <FaSoundcloud className="w-5 h-5 group-hover:scale-110 transition-transform" /> SoundCloud
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors group mt-2">
                <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" /> Twitter
              </a>
              <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-pink-400 transition-colors group mt-2">
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" /> Instagram
              </a>
            </div>
          </div>

          {/* Column 4: VIP Access */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase">VIP Guest List</h4>
            <p className="text-sm text-gray-400 font-light">
              Get exclusive early access to unreleased stems, project files, and secret live sets.
            </p>
            <div className="relative group mt-2">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 w-10 bg-white text-black rounded-full flex items-center justify-center transition-all hover:bg-purple-500 hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">
            &copy; {new Date().getFullYear()} ScorpeX Universe. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-gray-400 uppercase hover:text-white transition-colors group"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-500 transition-all">
              <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

      </div>

      {/* Massive Background Typography - Sits behind everything */}
      <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[18vw] font-black tracking-tighter text-white opacity-[0.02] leading-none">
          SCORPEX
        </h1>
      </div>

    </footer>
  );
};

export default Footer;