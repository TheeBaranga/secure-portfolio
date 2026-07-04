function CommandBlock({ command, title, subtitle }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
            <p className="font-mono text-sm text-blue-400">
                &gt; {command}
                <span className="terminal-cursor">_</span>
            </p>
            <div className="mt-8 space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                    {title}
                </h3>

                <p className="text-slate-400">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

export default CommandBlock;