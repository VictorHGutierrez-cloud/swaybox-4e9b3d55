const features = [
  {
    number: "01",
    title: "Complete Asset Visibility",
    description: "See exactly what hardware and software each employee is assigned to. Real-time dashboards show device status, location, and usage patterns.",
  },
  {
    number: "02",
    title: "Automated Subscription Management",
    description: "Never miss a renewal deadline. The system tracks subscription start/renewal dates and sends automated reminders before expiration.",
  },
  {
    number: "03",
    title: "Cost Tracking & Analytics",
    description: "Track hardware and software costs per person, per month, or per department. Generate detailed reports for budget planning and optimization.",
  },
  {
    number: "04",
    title: "Lifecycle Management",
    description: "Plan device refresh cycles, manage warranties, and optimize asset utilization. Make data-driven decisions about when to upgrade or replace equipment.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">
          Platform features
        </h2>
        
        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-secondary-foreground/20 last:border-0 last:pb-0"
            >
              <div className="text-3xl md:text-4xl font-light opacity-40 md:w-24 flex-shrink-0">
                {feature.number}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-normal mb-3">
                  {feature.title}
                </h3>
                <p className="text-base opacity-80 leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
