export default function Navbar() {
  const sections = ["about", "personal", "education", "skills", "projects"];

  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex items-center justify-between
        backdrop-blur-lg bg-white/20
        border border-white/30 shadow-xl
        rounded-full px-8 py-3 md:px-12
        w-[90%] md:w-auto
        transition-all duration-300
      "
    >
      
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="
              relative text-gray-900 hover:text-blue-600 
              transition-all duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:w-0 after:h-[2px] after:bg-blue-500 after:rounded-full
              hover:after:w-full after:transition-all after:duration-300
              hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]
            "
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button (for later) */}
      <button className="md:hidden text-blue-600 hover:text-blue-800 transition text-2xl">
        ☰
      </button>
    </nav>
  );
}
