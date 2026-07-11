import { useEffect, useState } from "react";


const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

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
            </div>
        </nav>
    );
}

export default Navbar;