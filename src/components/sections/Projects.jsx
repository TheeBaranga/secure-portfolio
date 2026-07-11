import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

function Projects() {

  const featuredProjects = projects.slice(0, 3);
  const otherProjects = projects.slice(3);

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-4xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mb-12 text-slate-400">
            A selection of projects that best represent my skills and interests.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={index === 0 ? "lg:col-span-2" : ""}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      {otherProjects.length > 0 && (
        <>

          <h3 className="mt-20 mb-8 text-2xl font-semibold text-white">
            Other Projects
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </>
      )}
    </div>
    </section >
  );
}

export default Projects;