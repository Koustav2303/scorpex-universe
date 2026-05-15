import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const FloatingArtwork = () => {
  const artworkRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Subtle floating animation for the artwork
    gsap.to(artworkRef.current, {
      y: -20,
      rotation: 2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Pulsing glow effect
    gsap.to(glowRef.current, {
      opacity: 0.8,
      scale: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px] md:min-h-[600px]">
      {/* Background Cinematic Glow */}
      <div 
        ref={glowRef}
        className="absolute w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[100px]"
      />
      
      {/* Main Artwork Container with Glassmorphism */}
      <div 
        ref={artworkRef}
        className="relative z-10 w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
      >
        {/* Placeholder gradient for artwork - replace with actual img tag later */}
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
           <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-50 blur-2xl animate-spin-slow" />
        </div>
      </div>
    </div>
  );
};

export default FloatingArtwork;