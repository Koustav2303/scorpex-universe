import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SongCard from './SongCard';

// Enhanced mock data with composer-specific metadata and specific grid spans
const libraryData = [
  { 
    id: 1, title: 'Midnight Synthesis', duration: '4:23', category: 'Featured Cinematic', 
    bpm: '120', key: 'Am', gridClass: 'md:col-span-2 md:row-span-2' // Massive Feature Block
  },
  { 
    id: 2, title: 'Echoes of the Void', duration: '3:45', category: 'Ambient', 
    bpm: '95', key: 'Fm', gridClass: 'md:col-span-1 md:row-span-2'  // Tall Portrait Block
  },
  { 
    id: 3, title: 'Quantum Drift', duration: '6:01', category: 'Experimental', 
    bpm: '140', key: 'Cm', gridClass: 'md:col-span-1 md:row-span-1' // Standard Square
  },
  { 
    id: 4, title: 'Neon Rain', duration: '5:12', category: 'Electronic', 
    bpm: '118', key: 'Dm', gridClass: 'md:col-span-2 md:row-span-1' // Wide Cinematic Strip
  },
];

const BentoGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    // GSAP entrance animation for the bento pieces
    let ctx = gsap.context(() => {
      gsap.fromTo('.bento-item', 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.95
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1.2, 
          stagger: 0.15, 
          ease: 'expo.out',
          delay: 0.2 // Slight delay to wait for scroll
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={gridRef}
      // The core grid setup: 3 columns, auto-sizing rows based on content
      className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-4 md:gap-6"
    >
      {libraryData.map((song, index) => (
        <div key={song.id} className={`bento-item ${song.gridClass} h-full`}>
          <SongCard 
            index={index}
            title={song.title}
            duration={song.duration}
            category={song.category}
            bpm={song.bpm}
            musicalKey={song.key}
            // We pass h-full so the card stretches to fill the grid cell area
            gridClass="h-full w-full" 
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;