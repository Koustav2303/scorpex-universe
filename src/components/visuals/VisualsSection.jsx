import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VisualCard from './VisualCard';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const visualData = [
  { id: 1, number: "V.01", title: "The Red Room", mood: "Aggressive / Synth" },
  { id: 2, number: "V.02", title: "Neon Noir", mood: "Cyberpunk / Dark" },
  { id: 3, number: "V.03", title: "Ethereal Plane", mood: "Ambient / Orchestral" },
  { id: 4, number: "V.04", title: "Deep Trench", mood: "Sub-bass / Experimental" },
];

const VisualsSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Calculate how far to move horizontally based on the number of cards
      const scrollWidth = sectionRef.current.scrollWidth - window.innerWidth;

      gsap.to(sectionRef.current, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,           // Pin the section to the viewport
          scrub: 1,            // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          end: () => `+=${scrollWidth}`, // The pinning lasts as long as the content width
        }
      });
    }, triggerRef);

    return () => ctx.revert(); // Clean up ScrollTrigger on unmount
  }, []);

  return (
    <section id="visuals" ref={triggerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center border-t border-white/5">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Fixed Section Header */}
      <div className="absolute top-24 left-6 md:left-12 lg:left-24 z-20">
        <h3 className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase mb-2">
          // Synesthesia
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
          Visual Concepts
        </h2>
      </div>

      {/* The Horizontally Scrolling Container */}
      <div ref={sectionRef} className="flex gap-8 md:gap-16 px-6 md:px-12 lg:px-24 mt-20">
        {visualData.map((item) => (
          <VisualCard 
            key={item.id}
            number={item.number}
            title={item.title}
            mood={item.mood}
          />
        ))}
      </div>
      
    </section>
  );
};

export default VisualsSection;