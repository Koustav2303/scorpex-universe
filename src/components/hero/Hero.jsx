import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroText from './HeroText';
import FloatingArtwork from './FloatingArtwork';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create a GSAP Context to ensure cleanup and proper scoping
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Master Intro Timeline with heavier, premium easing
      tl.fromTo('.hero-text', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      )
      .fromTo('.hero-title',
        { y: 120, opacity: 0, rotationZ: 2 }, // Slight rotation for a dynamic, weighty reveal
        { y: 0, opacity: 1, rotationZ: 0, duration: 1.5, stagger: 0.15, ease: 'expo.out' },
        '-=0.8'
      )
      .fromTo('.hero-action',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
        '-=1'
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black -z-10" />
      
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 flex items-center h-full">
             <HeroText />
          </div>

          {/* Right Column: Visuals */}
          <div className="order-1 lg:order-2 flex items-center justify-center h-full">
            <FloatingArtwork />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;