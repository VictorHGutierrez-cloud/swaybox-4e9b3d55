const painPoints = [
  {
    title: "No centralized visibility",
    description: "Cannot track which employee has which device. No real-time view of asset distribution across 200 computers and 160+ software licenses.",
  },
  {
    title: "Manual subscription tracking",
    description: "Manual tracking leads to missed deadlines, service interruptions, and unexpected costs from late renewals.",
  },
  {
    title: "Lack of cost transparency",
    description: "No visibility into costs per employee or department. Difficult to budget accurately or identify cost-saving opportunities.",
  },
  {
    title: "License management complexity",
    description: "Risk of license violations, over-purchasing unused licenses, or under-provisioning critical software across 160+ users.",
  },
  {
    title: "No automated reminders",
    description: "No automated system for subscription renewals leads to service disruptions and emergency procurement costs.",
  },
  {
    title: "Scaling challenges",
    description: "Cannot quickly onboard new team members or provision resources for new projects. Bottlenecks during production peaks.",
  },
];

const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          The technology challenge
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl">
          Current pain points affecting operations
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 border border-secondary-foreground/20 hover:border-secondary-foreground/40 transition-colors"
            >
              <h3 className="text-lg font-normal mb-3 leading-tight">
                {point.title}
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
