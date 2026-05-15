import { useState, useEffect } from 'react';
import LyricLine from './LyricLine';
import usePlayerStore from '../../store/usePlayerStore';

// Mock synchronized lyrics data
const songLyrics = [
  { id: 1, text: "Lost in the static, searching for a spark" },
  { id: 2, text: "Neon rain falling in the dark" },
  { id: 3, text: "Synthesized heartbeats synchronize" },
  { id: 4, text: "Looking for the truth in digital eyes" },
];

const LyricsContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Pull the isPlaying state from our Zustand store
  const isPlaying = usePlayerStore((state) => state.isPlaying);

  useEffect(() => {
    let interval;
    // Only run the timer if the song is actually playing
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % songLyrics.length);
      }, 3000); 
    }

    return () => clearInterval(interval);
  }, [isPlaying]); // Re-run effect when isPlaying changes

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-y-auto no-scrollbar flex flex-col items-center pt-[30vh] pb-[30vh] mask-image-fade scroll-smooth">
      {songLyrics.map((lyric, index) => (
        <LyricLine 
          key={lyric.id} 
          text={lyric.text} 
          // Pass down isPlaying so the individual line knows if it should scroll
          isActive={index === activeIndex} 
          isPlaying={isPlaying}
        />
      ))}
    </div>
  );
};

export default LyricsContainer;