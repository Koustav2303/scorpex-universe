import RoadmapTimeline from './RoadmapTimeline';
import ClosingQuote from './ClosingQuote';
import Footer from './Footer';

const OutroSection = () => {
  return (
    <section id="about" className="relative w-full pt-24 bg-black border-t border-white/5 z-10">
      <div className="container px-6 mx-auto max-w-7xl">
        <RoadmapTimeline />
      </div>
      <ClosingQuote />
      <Footer />
    </section>
  );
};

export default OutroSection;