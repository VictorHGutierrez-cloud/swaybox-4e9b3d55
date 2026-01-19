const ContextSection = () => {
  return (
    <section
      id="context"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light">
          <p className="text-2xl md:text-3xl font-normal">
            Swaybox builds films differently.
          </p>
          
          <div className="space-y-2 opacity-90">
            <p>Real sets.</p>
            <p>Real materials.</p>
            <p>Real people.</p>
          </div>
          
          <p className="pt-4 opacity-80">
            As teams grow and productions scale, the operational layer must evolve at the same pace, without compromising the creative flow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
