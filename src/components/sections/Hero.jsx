import { hero } from "../../data/hero";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="max-w-xl">

          <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
            {hero.badge}
          </span>

          <h1 className="mt-6 max-w-2xl whitespace-pre-line text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
            {hero.heading}
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-300">
            {hero.name}
          </h2>

          <p className="mt-3 text-lg leading-relaxed text-slate-300">
            {hero.subtitle}
          </p>

          <p className="mt-6 leading-8 text-slate-400">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30">
            {hero.buttons.primary}
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-white">
            {hero.buttons.secondary}
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

          <h3 className="text-xl font-semibold text-white">
            🔒 Security Profile
          </h3>

          <div className="mt-8">

            <h4 className="text-sm uppercase tracking-wider text-slate-500">
              Status
            </h4>

            <p className="mt-2 text-green-400">
              🟢 {hero.status}
            </p>

          </div>

          <div className="mt-8">

            <h4 className="text-sm uppercase tracking-wider text-slate-500">
              Focus Areas
            </h4>

            <ul className="mt-3 space-y-2">

              {hero.focus.map((item) => (
                <li key={item} className="text-slate-300">
                  • {item}
                </li>
              ))}

            </ul>

          </div>

          <div className="mt-8">

            <h4 className="text-sm uppercase tracking-wider text-slate-500">
              Languages
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">

              {hero.languages.map((language) => (
                <span
                  key={language}
                  className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {language}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-8">

            <h4 className="text-sm uppercase tracking-wider text-slate-500">
              Currently Learning
            </h4>

            <div className="mt-3 flex flex-wrap gap-2">

              {hero.learning.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;