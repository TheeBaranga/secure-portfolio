import Hero from "./components/sections/Hero.jsx";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";


function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;