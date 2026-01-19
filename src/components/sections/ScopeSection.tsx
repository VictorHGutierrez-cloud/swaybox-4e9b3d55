const scopeItems = [
  "IT device management",
  "Access control",
  "Security policies",
  "Onboarding automation",
  "Support and setup",
];

const ScopeSection = () => {
  return (
    <section
      id="scope"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">
          What's included
        </h2>
        
        <div className="border border-foreground/20">
          {scopeItems.map((item, index) => (
            <div
              key={index}
              className={`px-8 py-6 text-lg ${
                index !== scopeItems.length - 1 ? "border-b border-foreground/20" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScopeSection;
