import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialsSection from "./sections/TestimonialsSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div className="">
            <BenefitSection />
            <TestimonialsSection />
          </div>
          <div className="h-dvh border border-red-500" />
        </div>
      </div>
    </main>
  );
};

export default App;
