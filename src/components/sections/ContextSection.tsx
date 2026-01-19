const stats = [
  { number: "200", label: "Employees with computers" },
  { number: "160+", label: "Software licenses to manage" },
  { number: "150+", label: "Creative professionals" },
];

const ContextSection = () => {
  return (
    <section
      id="context"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">
          Understanding Swaybox Studios
        </h2>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light mb-16">
          <p className="text-2xl md:text-3xl font-normal">
            Swaybox builds films differently.
          </p>
          
          <div className="space-y-2 opacity-90">
            <p>Real sets. Real materials. Real people.</p>
          </div>
          
          <p className="pt-4 opacity-80">
            Since 2014, Swaybox has revolutionized practical puppetry, bringing unprecedented visual storytelling to the big screen. Currently producing a feature film with Matt Reeves and 6th & Idaho, requiring enterprise-level technology management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-foreground/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-light mb-2">{stat.number}</div>
              <div className="text-sm opacity-60 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
