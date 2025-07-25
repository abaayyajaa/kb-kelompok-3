import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-60 bg-black/90 text-gray-300 h-screen flex flex-col p-4 space-y-6">
      <h2 className="text-2xl font-bold text-green-500 mb-4">Beats</h2>
      <nav className="space-y-3">
        <Link className="block hover:text-white" to="/">Home</Link>
        <Link className="block hover:text-white" to="/playlist">Playlist</Link>
        <Link className="block hover:text-white" to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
