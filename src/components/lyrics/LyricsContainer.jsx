import { useState, useEffect } from 'react';
import LyricLine from './LyricLine';

// Mock synchronized lyrics data
const songLyrics = [
  { id: 1, text: "Lost in the static, searching for a spark" },
  { id: 2, text: "Neon rain falling in the dark" },
  { id: 3, text: "Synthesized heartbeats synchronize" },
  { id: 4, text: "Looking for the truth in digital eyes" },
  { id: 5, text: "We are the echoes of a future past" },
  { id: 6, text: "Building a universe meant to last" },
  { id: 7, text: "Feel the frequency, let it take control" },
  { id: 8, text: "Cinematic audio for the soul" },
];

const LyricsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Simulation: Automatically advance the lyrics every 3 seconds for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % songLyrics.length);
    }, 3000); // 3 seconds per line

    return () => clearInterval(interval);
  }, []);

  return (
    // The container is given a fixed height and hidden scrollbar so the text flows through it
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-y-auto no-scrollbar flex flex-col items-center pt-[30vh] pb-[30vh] mask-image-fade">
      {songLyrics.map((lyric, index) => (
        <LyricLine 
          key={lyric.id} 
          text={lyric.text} 
          isActive={index === activeIndex} 
        />
      ))}
    </div>
  );
};

export default LyricsContainer;