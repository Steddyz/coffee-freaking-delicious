import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className="h-dvh border border-red-500" />
    </main>
  );
};

export default App;
