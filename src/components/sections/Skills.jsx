import SkillCard from "../ui/SkillCard";
import { skillGroups } from "../../data/skills";

function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            <h2 className="text-4xl font-bold text-white">
                Skills
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
                Technologies I use to build modern, secure, and maintainable software.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <SkillCard
                        key={group.title}
                        title={group.title}
                        skills={group.skills}
                    />
                ))}
            </div>
        </section>
    );
}

export default Skills;