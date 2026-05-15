import PhaseCard from './PhaseCard';

const roadmapData = [
  { phase: "Phase 01", title: "Foundation", desc: "Frontend foundation, glassmorphism UI system, and responsive architecture.", isActive: true },
  { phase: "Phase 02", title: "Motion & Audio", desc: "Advanced GSAP animations, Bento Grid, and sticky audio player integration.", isActive: true },
  { phase: "Phase 03", title: "Lyrics Sync", desc: "Karaoke-style synchronized lyrics, visual blur effects, and state management.", isActive: true },
  { phase: "Phase 04", title: "Backend Scale", desc: "User authentication, music management system, and live streaming analytics.", isActive: false },
];

const RoadmapTimeline = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-32">
      <div className="mb-12">
        <h3 className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase mb-2">
          // The Evolution
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
          Future Roadmap
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full bg-[#0a0a0a] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden">
        {roadmapData.map((item, index) => (
          <PhaseCard 
            key={index}
            phase={item.phase}
            title={item.title}
            description={item.desc}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;