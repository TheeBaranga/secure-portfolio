import { hero } from "../../data/hero";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div>

          <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
            {hero.badge}
          </span>

          <h1 className="mt-8 whitespace-pre-line text-5xl font-bold">
            {hero.heading}
          </h1>

          <h2 className="mt-4 text-2xl text-slate-300">
            {hero.name}
          </h2>

          <p className="mt-4 max-w-xl text-lg text-slate-400">
            {hero.subtitle}
          </p>

          <p className="mt-6 max-w-xl text-slate-500">
            {hero.description}
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium">
              {hero.buttons.primary}
            </button>

            <button className="rounded-lg border border-slate-600 px-6 py-3">
              {hero.buttons.secondary}
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

          <h3 className="text-xl font-semibold">
            Current Focus
          </h3>

          <ul className="mt-6 space-y-4">

            {hero.focus.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </div>

      </div>
    </section>
  );
}

export default Hero;