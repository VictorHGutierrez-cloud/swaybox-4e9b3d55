const capabilities = [
  "Device lifecycle management",
  "Secure access by role and project",
  "Fast onboarding for short and long-term collaborators",
  "Visibility for IT without micromanagement",
];

const ProposalSection = () => {
  return (
    <section
      id="proposal"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 leading-tight">
          One operational layer.<br />
          Zero creative interference.
        </h2>
        
        <p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl font-light leading-relaxed">
          Factorial IT centralizes devices, access, and permissions using HR data as the source of truth.
        </p>
        
        <ul className="space-y-4">
          {capabilities.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-3 flex-shrink-0" />
              <span className="opacity-90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProposalSection;
