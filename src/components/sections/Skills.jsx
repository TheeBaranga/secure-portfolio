import SkillCard from "../ui/SkillCard";
import { skillGroups } from "../../data/skills";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";

function Skills() {
    return (
        <SectionWrapper delay={0.2}>
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
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                        >
                            <SkillCard
                                title={group.title}
                                skills={group.skills}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>
        </SectionWrapper>

    );
}

export default Skills;