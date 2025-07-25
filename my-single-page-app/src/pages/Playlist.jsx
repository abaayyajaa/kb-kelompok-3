import Playlist from '../components/Playlist';
import { useRef } from 'react';

function PlaylistPage() {
  const audioRef = useRef(null);

  const playSong = (src) => {
    if (audioRef.current) {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  };

  return (
    <div className="px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-pink-200 mb-6">🎶 Playlist</h2>
      <Playlist onPlay={playSong} />
      <audio ref={audioRef} className="hidden" controls />
    </div>
  );
}

export default PlaylistPage;
