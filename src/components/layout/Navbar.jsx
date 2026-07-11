import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";


const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.getAttribute("id"));
                    }
                });
            },
            {
                /*Consider a section active when it reaches the middle area of the screen.*/
                rootMargin: "-40% 0px -40% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50 bg-slate-950/70 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-blue-400"
                    >
                        KB<span className="text-blue-500">.</span>
                    </a>

                    {/* Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`transition-colors duration-300 hover:text-white ${activeSection === link.href.slice(1)
                                    ? "text-blue-400"
                                    : "text-slate-300"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-lg p-2 text-slate-300 transition-colors duration-300 hover:text-white md:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        <FaBars size={20} />
                    </button>

                </div>
            </nav>
            <div
                className={`fixed inset-0 z-[60] bg-slate-950/20 backdrop-blur-sm transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}`}
                onClick={() => setIsMenuOpen(false)}
            />

            <div className={`fixed right-0 top-0 z-[70] h-screen w-72 bg-slate-950 shadow-2xl transition-transform duration-300 ease-out md:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex h-full flex-col px-6 pt-8 pb-8">
                    <div className="mb-10 flex items-center justify-between border-b border-slate-800 pb-4">
                        <a
                            href="#home"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-xl font-bold tracking-tight text-white"
                        >
                            KB<span className="text-blue-500">.</span>
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(false)}
                            aria-label="Close navigation menu"
                            className="rounded-lg p-2 text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-white"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                transitionDelay: isMenuOpen ? `${index * 60}ms` : "0ms",
                            }}
                            className={`rounded-xl px-4 py-4 text-lg font-medium transition-all duration-300 hover:translate-x-2 hover:bg-slate-800 hover:text-white ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"} ${activeSection === link.href.slice(1)
                                ? "bg-slate-800 text-blue-400"
                                : "text-slate-300"
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            transitionDelay: isMenuOpen ? `${navLinks.length * 60}ms` : "0ms",
                        }}
                        className={`mt-6 inline-flex items-center justify-center rounded-lg border border-blue-500 bg-blue-500 px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}`}
                    >
                        Resume
                    </a>

                    <div className="mt-auto border-t border-slate-800 pt-6">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Connect
                        </p>

                        <div className="flex items-center gap-5">
                            <a
                                href="https://github.com/TheeBaranga"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                            >
                                <FaGithub size={22} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/kalvinbaranga"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                            >
                                <FaLinkedin size={22} />
                            </a>

                            <a
                                href="mailto:kalvinkiprop@gmail.com"
                                aria-label="Email"
                                className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                            >
                                <FaEnvelope size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;