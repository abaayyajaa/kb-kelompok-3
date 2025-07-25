import Sidebar from './components/Sidebar';
import NowPlaying from './components/NowPlaying';
import Recommendations from './components/Recommendations';
import Playlist from './components/Playlist';
import { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlaylistPage from './pages/Playlist';
import About from './pages/About';

function App() {
  const audioRef = useRef(null);
  const [current, setCurrent] = useState(null);

  const playSong = (song) => {
    setCurrent(song);
    audioRef.current.src = song.src;
    audioRef.current.play();
  };

  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />
      <div className="flex-1 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playlist" element={<PlaylistPage onPlay={playSong} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Recommendations onPlay={playSong} />
        <NowPlaying audioRef={audioRef} current={current} />
        <audio ref={audioRef} className="hidden" />
      </div>
    </div>
  );
}

export default App;
