const songs = [
  { title: "Feel The Vibe", artist: "Luna Pop", src: "/songs/demo.mp3" },
  { title: "Neon Heart", artist: "Starshine", src: "/songs/demo.mp3" },
   { title: "Neon Heart", artist: "Starshine", src: "/songs/demo.mp3" },
   { title: "Neon Heart", artist: "Starshine", src: "/songs/demo.mp3" },
   { title: "Neon Heart", artist: "Starshine", src: "/songs/demo.mp3" },
   { title: "Neon Heart", artist: "Starshine", src: "/songs/demo.mp3" },
];

function Playlist({ onPlay }) {
  return (
    <div className="mt-6 space-y-4">
      {songs.map((song, idx) => (
        <div
          key={idx}
          className="p-4 bg-white/5 backdrop-blur-lg rounded-md flex justify-between items-center text-left text-white hover:bg-white/10 transition"
        >
          <div>
            <div className="font-semibold text-pink-200">{song.title}</div>
            <div className="text-sm text-pink-100">{song.artist}</div>
          </div>
          <button
            onClick={() => onPlay(song.src)}
            className="bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 px-4 py-1 rounded-full text-sm shadow-md hover:shadow-pink-500/50 transition"
          >
            ▶ Play
          </button>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
