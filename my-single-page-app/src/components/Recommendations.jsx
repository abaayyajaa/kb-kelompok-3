const recos = [
  {
    title: "Dreamy Pop",
    cover: "https://i.pinimg.com/736x/b1/12/c4/b112c49725f8e29c3aaa7b6b56fbf358.jpg",
    src: "/songs/demo.mp3",
    artist: "Artist A"
  },
  {
    title: "Night Neon",
    cover: "https://i.pinimg.com/1200x/81/b3/ef/81b3efda7b2132c525fb49adb129cd30.jpg",
    src: "/songs/demo.mp3",
    artist: "Artist B"
  },
   {
    title: "Night Neon",
    cover: "https://i.pinimg.com/1200x/5f/a0/6b/5fa06b6bbc9266662c1cf84c458c83f1.jpg",
    src: "/songs/demo.mp3",
    artist: "Artist B"
  },
   {
    title: "Night Neon",
    cover: "https://i.pinimg.com/1200x/84/1a/c7/841ac7d110eb6d5f65cb68c13a282b66.jpg",
    src: "/songs/demo.mp3",
    artist: "Artist B"
  },
   {
    title: "Night Neon",
    cover: "https://i.pinimg.com/1200x/a1/4f/23/a14f230ce9c1b9762e66151a4edaabf6.jpg",
    src: "/songs/demo.mp3",
    artist: "Artist B"
  },
   {
    title: "Night Neon",
    cover: "https://i.pinimg.com/1200x/d9/f2/e9/d9f2e9d0bc11a75b6448ac8dd833568c.jpg",
    src: "/songs/demo.mp3",
    artist: "Artist B"
  },
  
  // dan seterusnya...
];


function Recommendations({ onPlay }) {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl text-pink-300 mb-3">Recommended For You</h2>
      <div className="flex space-x-4 overflow-x-auto">
        {recos.map((c,i) => (
          <div key={i} className="w-40 flex-shrink-0 bg-white/10 p-3 rounded-lg hover:bg-white/20 transition"
               onClick={() => onPlay({ ...c })}>
            <img src={c.cover} alt="" className="w-full h-40 object-cover rounded-md mb-2" />
            <div className="text-white font-semibold">{c.title}</div>
            <div className="text-sm text-gray-400">{c.artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
