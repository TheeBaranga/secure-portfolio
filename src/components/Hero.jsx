import { heroData } from "../data/heroData";

function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8">

        <span className="text-blue-400 border border-blue-400 rounded-full px-4 py-2 text-sm">
          {heroData.badge}
        </span>

        <h1 className="text-6xl font-bold mt-8 whitespace-pre-line">
          {heroData.title}
        </h1>

        <h2 className="text-3xl text-slate-300 mt-6">
          {heroData.name}
        </h2>

        <p className="text-xl text-slate-400 mt-4 max-w-3xl">
          {heroData.subtitle}
        </p>

        <p className="mt-6 text-slate-500 max-w-2xl">
          {heroData.description}
        </p>

      </div>
    </section>
  );
}

export default Hero;