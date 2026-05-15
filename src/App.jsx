import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Library from './components/library/Library';
import LyricsSection from './components/lyrics/LyricsSection';
import OutroSection from './components/outro/OutroSection';
import AudioPlayer from './components/player/AudioPlayer';
import usePlayerStore from './store/usePlayerStore';
import VisualsSection from './components/visuals/VisualsSection';
import DeconstructionSection from './components/deconstruction/DeconstructionSection';

function App() {
  const showLyrics = usePlayerStore((state) => state.showLyrics);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Library />
        <VisualsSection />
        <DeconstructionSection />
        {showLyrics && <LyricsSection />}
        <OutroSection />
      </main>
      <AudioPlayer />
    </div>
  );
}

export default App;