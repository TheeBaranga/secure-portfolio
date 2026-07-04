import Hero from "./components/sections/Hero.jsx";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;