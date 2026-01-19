import swayboxLogo from "@/assets/swaybox-logo.png";

const HeroSection = () => {
  const scrollToProposal = () => {
    document.getElementById("context")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-primary text-primary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-lg tracking-wide opacity-80">Factorial IT ×</span>
          </div>
          <img
            src={swayboxLogo}
            alt="Swaybox Studios"
            className="h-10 md:h-12 w-auto brightness-0 invert"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-3xl">
          Operational structure for studios that create with their hands.
        </h1>

        <p className="text-lg md:text-xl opacity-80 max-w-2xl mb-12 font-light leading-relaxed">
          Factorial IT brings clarity, security, and control to growing creative teams without adding friction.
        </p>

        <button
          onClick={scrollToProposal}
          className="inline-flex items-center gap-2 border border-primary-foreground/40 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
        >
          View the proposal
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
