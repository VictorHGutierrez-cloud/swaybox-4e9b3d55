const problems = [
  {
    title: "Device chaos across productions",
    description: "Equipment scattered between projects without clear ownership or tracking.",
  },
  {
    title: "Access and security risk between projects",
    description: "Credentials shared informally, permissions that outlive their purpose.",
  },
  {
    title: "Time lost onboarding artists and collaborators",
    description: "Manual processes repeated for every new team member, every production.",
  },
];

const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">
          The invisible problem
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 border border-secondary-foreground/20"
            >
              <h3 className="text-xl font-normal mb-4 leading-tight">
                {problem.title}
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
