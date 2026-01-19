const phases = [
  {
    phase: "Phase 1",
    title: "Discovery & Audit",
    duration: "Weeks 1-2",
    tasks: [
      "Complete inventory of all 200 computers",
      "Audit of all 160+ software licenses",
      "Document current workflows and pain points",
      "Identify integration requirements",
    ],
  },
  {
    phase: "Phase 2",
    title: "Platform Setup",
    duration: "Weeks 3-4",
    tasks: [
      "Deploy IT Asset Management platform",
      "Configure user roles and permissions",
      "Set up automated renewal reminders",
      "Import existing asset data",
    ],
  },
  {
    phase: "Phase 3",
    title: "Team Onboarding",
    duration: "Weeks 5-6",
    tasks: [
      "Train administrators on platform usage",
      "Onboard all 200 employees",
      "Configure cost tracking and reporting",
      "Establish support workflows",
    ],
  },
  {
    phase: "Phase 4",
    title: "Optimization & Scaling",
    duration: "Ongoing",
    tasks: [
      "Refine processes based on feedback",
      "Optimize cost allocation",
      "Scale infrastructure as needed",
      "Continuous improvement and support",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section
      id="roadmap"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          Implementation roadmap
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-16 max-w-2xl">
          A structured approach to operational transformation
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-foreground/20 hidden md:block" />
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-6 top-2 w-4 h-4 rounded-full border-2 border-foreground/40 bg-background hidden md:block" />
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="md:w-48 flex-shrink-0">
                    <div className="text-sm tracking-wide opacity-60">{phase.phase}</div>
                    <div className="text-xl font-normal">{phase.title}</div>
                    <div className="text-sm opacity-50 mt-1">{phase.duration}</div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {phase.tasks.map((task, tIndex) => (
                      <li key={tIndex} className="flex items-start gap-3 text-sm opacity-80">
                        <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
