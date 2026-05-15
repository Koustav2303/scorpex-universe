import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Library from './components/library/Library';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Library />
      </main>
    </div>
  );
}

export default App;