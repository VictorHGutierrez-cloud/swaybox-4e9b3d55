import HeroSection from "@/components/sections/HeroSection";
import ContextSection from "@/components/sections/ContextSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ProposalSection from "@/components/sections/ProposalSection";
import WhySection from "@/components/sections/WhySection";
import ScopeSection from "@/components/sections/ScopeSection";
import NextStepSection from "@/components/sections/NextStepSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContextSection />
      <ProblemSection />
      <ProposalSection />
      <WhySection />
      <ScopeSection />
      <NextStepSection />
    </main>
  );
};

export default Index;
