import { useState, useEffect } from 'react';

function NowPlaying({ audioRef, current }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const update = () => setProgress((audio.currentTime/audio.duration)*100);
    audio.addEventListener('timeupdate', update);
    return () => audio.removeEventListener('timeupdate', update);
  }, [audioRef, current]);

  if (!current) return null;

  return (
    <div className="fixed bottom-0 left-60 right-0 bg-gray-900 text-white p-4 flex items-center space-x-4">
      <img src={current.cover} alt="" className="w-12 h-12 rounded-sm" />
      <div className="flex-1">
        <div className="font-semibold">{current.title}</div>
        <div className="text-sm text-gray-400">{current.artist}</div>
        <div className="h-1 bg-gray-600 rounded mt-2">
          <div className="h-full bg-green-500" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <button onClick={() => audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause()}
        className="text-green-500 hover:text-green-400 transform hover:scale-110 transition">
        {audioRef.current?.paused ? "▶️" : "⏸️"}
      </button>
    </div>
  );
}

export default NowPlaying;
