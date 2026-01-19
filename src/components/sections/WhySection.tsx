const WhySection = () => {
  return (
    <section
      id="why"
      className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">
          Why this makes sense for a creative studio
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light">
          <p>
            Creative studios do not fail because of lack of talent.
          </p>
          
          <p className="opacity-90">
            They fail when operations cannot keep up with ambition.
          </p>
          
          <p className="pt-4 text-xl md:text-2xl font-normal">
            This proposal focuses on protecting your time, your people, and your process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
