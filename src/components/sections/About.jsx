import CommandBlock from "../ui/CommandBlock";

function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            {/* Section Header */}
            <div className="mb-12">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                    About
                </p>

                <h2 className="text-4xl font-bold text-white md:text-5xl">
                    Building Software With Purpose
                </h2>
            </div>

            {/* Introduction */}
            <p className="max-w-3xl text-lg leading-8 text-slate-400">
                I'm a third-year Software Engineering student at USIU-Africa, building
                modern full-stack applications while growing into secure software
                engineering.
            </p>

            {/* Cards */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
                {/* Command Blocks */}
                <CommandBlock
                    command="whoami"
                    title="Third-Year Software Engineering Student"
                    subtitle="USIU-Africa"
                />

                <CommandBlock
                    command="building"
                    title="Modern Full-Stack Applications"
                    subtitle="Responsive, user-focused web experiences"
                />

                <CommandBlock
                    command="learning"
                    title="Application Security & DevSecOps"
                    subtitle="Designing software that's secure and reliable"
                />

            </div>
        </section>
    );
}

export default About;