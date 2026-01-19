const solutions = [
  {
    title: "IT Asset Management",
    description: "Complete visibility into all hardware and software assets",
    features: [
      "Real-time inventory of all 200 computers",
      "Track hardware assignments per employee",
      "Monitor device lifecycle and warranty status",
      "Asset location tracking",
    ],
  },
  {
    title: "Software License Management",
    description: "Centralized control and tracking of all software subscriptions",
    features: [
      "Track all 160+ software licenses",
      "Monitor license assignments per employee",
      "Track subscription start and renewal dates",
      "Automated renewal reminders",
    ],
  },
  {
    title: "Cost Tracking & Reporting",
    description: "Complete financial visibility into technology investments",
    features: [
      "Hardware costs per person/per month",
      "Software costs per person/per month",
      "Department-level cost breakdowns",
      "Budget forecasting and planning",
    ],
  },
  {
    title: "IT Support & Helpdesk",
    description: "24/7 support for your creative team during production",
    features: [
      "Rapid response to technical issues",
      "Proactive maintenance and updates",
      "Remote device management",
      "Minimize production downtime",
    ],
  },
  {
    title: "Cybersecurity & IP Protection",
    description: "Enterprise-grade security for high-profile productions",
    features: [
      "Protect unreleased content and IP",
      "Compliance with studio security requirements",
      "Secure file sharing and collaboration",
      "Data loss prevention",
    ],
  },
  {
    title: "Cloud Services & Storage",
    description: "Scalable infrastructure for massive creative assets",
    features: [
      "High-resolution footage storage",
      "3D scans and design files",
      "Project archives and backups",
      "Remote collaboration tools",
    ],
  },
];

const SolutionSection = () => {
  return (
    <section
      id="solution"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          The Factorial IT solution
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-16 max-w-3xl">
          One operational layer. Zero creative interference.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="border border-foreground/10 p-8 hover:border-foreground/30 transition-colors"
            >
              <h3 className="text-xl font-normal mb-2">
                {solution.title}
              </h3>
              <p className="text-sm opacity-60 mb-6">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm opacity-80">
                    <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
