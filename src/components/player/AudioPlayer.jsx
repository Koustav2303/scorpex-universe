import TrackInfo from './TrackInfo';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';

const AudioPlayer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transform translate-y-0 transition-transform duration-500">
      {/* Glassmorphism Wrapper */}
      <div className="relative w-full h-20 sm:h-24 bg-black/60 backdrop-blur-2xl border-t border-white/10 px-4 sm:px-8">
        
        {/* Floating Progress Bar at the very top edge of the player */}
        <ProgressBar />

        {/* Player Layout */}
        <div className="w-full h-full max-w-[1600px] mx-auto flex items-center justify-between">
          <TrackInfo />
          <PlayerControls />
          <VolumeControl />
        </div>
        
      </div>
    </div>
  );
};

export default AudioPlayer;