const Contact = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden py-24"
        >
            <div className="mx-auto max-w-4xl px-6 text-center">

                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    Contact
                </p>

                <h2 className="text-4xl font-bold text-white md:text-5xl">
                    Let's Build Something Great.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                    Whether you have an internship opportunity,
                    an exciting project, or simply want to connect,
                    I'd love to hear from you.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <a
                        href="mailto:kalvinkiprop@gmail.com"
                        className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                    >
                        Get in Touch
                    </a>

                    <a
                        href="https://github.com/TheeBaranga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kalvinbaranga"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-slate-700 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>

            <div className="mx-auto mt-20 max-w-6xl px-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Kalvin Baranga.
                    </p>

                    <p>
                        Built with React, Tailwind CSS & Framer Motion.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;