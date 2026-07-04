function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
            href="#"
            className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-blue-400"
        >
            KB<span className="text-blue-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
            <a
                href="#about"
                className="text-slate-300 transition-colors duration-300 hover:text-white"
            >
                About
            </a>

            <a
                href="#skills"
                className="text-slate-300 transition-colors duration-300 hover:text-white"
            >
                Skills
            </a>

            <a
                href="#projects"
                className="text-slate-300 transition-colors duration-300 hover:text-white"
            >
                Projects
            </a>

            <a
                href="#contact"
                className="text-slate-300 transition-colors duration-300 hover:text-white"
            >
                Contact
            </a>
        </div>

        {/* Resume Button */}
        <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-blue-500 px-5 py-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:text-white md:inline-flex"
        >
            Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;