const benefits = [
  {
    title: "Time Savings",
    description: "Automated tracking eliminates hours of manual inventory management. Reduced administrative overhead and faster onboarding processes.",
  },
  {
    title: "Cost Optimization",
    description: "Identify unused licenses and optimize software spend across 160+ users. Better budget planning and reduced emergency procurement costs.",
  },
  {
    title: "Risk Reduction",
    description: "Never miss a renewal deadline or face compliance issues. Improved security posture and better compliance with partner requirements.",
  },
  {
    title: "Scalability",
    description: "Easily scale technology as production demands grow. Quick provisioning for new projects and flexible resource allocation.",
  },
  {
    title: "Visibility",
    description: "Complete transparency into technology costs and usage. Real-time dashboards and data-driven decision making.",
  },
  {
    title: "Focus on Creativity",
    description: "Let your team focus on creating magic while we manage the technology. Reduced IT distractions and more time for creative work.",
  },
];

const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          ROI & Benefits
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-16 max-w-2xl">
          Expected outcomes from this partnership
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-normal">{benefit.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
