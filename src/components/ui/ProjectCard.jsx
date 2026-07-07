import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
    return (
        <div className="group relative flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
            {project.featured && (
                <div className="absolute left-8 top-8 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    ★ Featured
                </div>
            )}
            <div className="relative mb-6 h-56 overflow-hidden rounded-xl bg-slate-800">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover brightness-90 transition-all duration-500 group-hover:scale-110 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-20"></div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white">
                {project.title}
            </h3>

            <p className="mt-3 flex-1 text-slate-400">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex gap-3">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-white"
                >
                    <FiGithub className="text-base" />
                    GitHub
                </a>

                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
                    >
                        <FiExternalLink className="text-base" />
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard