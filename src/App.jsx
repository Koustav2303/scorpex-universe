import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Library from './components/library/Library';
import LyricsSection from './components/lyrics/LyricsSection';
import AudioPlayer from './components/player/AudioPlayer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <main className="pb-32">
        <Hero />
        <Library />
        <LyricsSection />
      </main>
      <AudioPlayer />
    </div>
  );
}

export default App;