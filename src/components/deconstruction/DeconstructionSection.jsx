import { useState } from 'react';
import StemTrack from './StemTrack';
import { SlidersHorizontal } from 'lucide-react';

const stemData = [
  { id: 'synth', name: 'Lead Synths', color: '#a855f7' }, // Purple
  { id: 'bass', name: 'Sub Bass', color: '#3b82f6' },     // Blue
  { id: 'strings', name: 'Orchestral', color: '#10b981' }, // Green
  { id: 'drums', name: 'Percussion', color: '#f59e0b' },  // Amber
];

const DeconstructionSection = () => {
  // State to track which stems are muted (empty array means everything is playing)
  const [mutedStems, setMutedStems] = useState([]);

  const toggleMute = (id) => {
    setMutedStems(prev => 
      prev.includes(id) 
        ? prev.filter(stemId => stemId !== id) // Unmute
        : [...prev, id]                        // Mute
    );
  };

  return (
    <section id="deconstruction" className="relative w-full py-24 md:py-32 bg-[#050505] border-t border-white/5 z-10">
      
      <div className="container px-6 mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <SlidersHorizontal className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-mono tracking-[0.3em] text-gray-400 uppercase">
                // Interactive Studio
              </h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Anatomy of a Track
            </h2>
          </div>
          
          <div className="text-left md:text-right max-w-sm">
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Deconstruct "The ScorpeX Overture". Isolate individual elements to hear how the cinematic layers combine to create the final universe.
            </p>
          </div>
        </div>

        {/* The Mixer Interface */}
        <div className="flex flex-col gap-4 p-4 md:p-8 rounded-3xl bg-black border border-white/10 shadow-2xl">
          {stemData.map((stem) => (
            <StemTrack 
              key={stem.id}
              name={stem.name}
              color={stem.color}
              isMuted={mutedStems.includes(stem.id)}
              onToggle={() => toggleMute(stem.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeconstructionSection;