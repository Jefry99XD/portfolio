export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <ul className="flex justify-center space-x-8">
        <li><a href="#about-me" className="hover:underline">About Me</a></li>
        <li><a href="#my-projects" className="hover:underline">My Projects</a></li>
        <li><a href="#my-technologies" className="hover:underline">My Technologies</a></li>
        <li><a href="#my-experiences" className="hover:underline">My Experiences</a></li>
        <li><a href="#knowledge" className="hover:underline">Knowledge</a></li>
      </ul>
    </nav>
  );
}
