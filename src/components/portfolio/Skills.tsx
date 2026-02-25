import Section from "./Section";

const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "Dart", "HTML", "CSS"] },
  { label: "Backend & Frameworks", items: ["Spring Boot", "Spring Security", "Spring AI", "Hibernate", "Flutter"] },
  { label: "Architecture & Security", items: ["Microservices", "REST APIs", "JWT Authentication"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL"] },
  { label: "Tools", items: ["Maven", "GitHub", "Docker"] },
];

const Skills = () => (
  <Section id="skills" title="Technical Skills" label="05 — Stack">
    <div className="space-y-8">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium border border-border hover:border-glow/20 hover:bg-surface-hover transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
