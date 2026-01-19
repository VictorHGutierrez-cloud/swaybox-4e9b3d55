const NextStepSection = () => {
  const emailAddress = "contact@factorialit.com";
  const emailSubject = "Swaybox Studios — Working Session Request";
  const emailBody = "Hello,\n\nI would like to schedule a working session to discuss the operational proposal.\n\nBest regards";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section
      id="next-step"
      className="py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-6 mb-12">
          <p className="text-lg md:text-xl opacity-80 font-light">
            This is not a software rollout.
          </p>
          <p className="text-2xl md:text-3xl font-light">
            It is an operational decision.
          </p>
        </div>
        
        <a
          href={mailtoLink}
          className="inline-flex items-center gap-2 border border-primary-foreground/40 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
        >
          Schedule a working session
        </a>
      </div>
    </section>
  );
};

export default NextStepSection;
