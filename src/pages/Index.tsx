import HeroSection from "@/components/sections/HeroSection";
import ContextSection from "@/components/sections/ContextSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ScopeSection from "@/components/sections/ScopeSection";
import PricingSection from "@/components/sections/PricingSection";
import NextStepSection from "@/components/sections/NextStepSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContextSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <RoadmapSection />
      <BenefitsSection />
      <ScopeSection />
      <PricingSection />
      <NextStepSection />
    </main>
  );
};

export default Index;
