function SkillCard({ title, skills }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
            <h3 className="mb-4 text-xl font-semibold text-white">
                {title}
            </h3>

            <ul className="space-y-3">
                {skills.map(({ name, icon: Icon }) => {
                    return (
                        <li
                            key={name}
                            className="flex items-center gap-3 text-slate-400"
                        >
                            <Icon className="text-lg text-blue-400" />
                            <span>{name}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SkillCard;