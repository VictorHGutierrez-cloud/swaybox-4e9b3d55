const scopeItems = [
  { item: "IT Asset Management (ITAM)", included: true },
  { item: "Software License Management", included: true },
  { item: "Cost Tracking & Reporting", included: true },
  { item: "IT Support & Helpdesk", included: true },
  { item: "Cybersecurity & IP Protection", included: true },
  { item: "Cloud Services & Storage", included: true },
  { item: "Implementation & Onboarding", included: true },
  { item: "Ongoing Support & Optimization", included: true },
];

const ScopeSection = () => {
  return (
    <section
      id="scope"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          What's included
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl">
          Complete partnership scope
        </p>
        
        <div className="border border-foreground/20">
          {scopeItems.map((scope, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-8 py-5 ${
                index !== scopeItems.length - 1 ? "border-b border-foreground/10" : ""
              }`}
            >
              <span className="text-lg">{scope.item}</span>
              <span className="text-sm opacity-60">Included</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
