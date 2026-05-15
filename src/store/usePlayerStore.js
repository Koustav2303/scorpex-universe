import { create } from 'zustand';

const usePlayerStore = create((set) => ({
  isPlaying: false,
  showLyrics: false,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  toggleLyrics: () => set((state) => {
    // If we are opening the lyrics, we might want to automatically play the song too
    return { showLyrics: !state.showLyrics };
  }),
}));

export default usePlayerStore;