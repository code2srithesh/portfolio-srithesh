import Section from "./Section";

const skillGroups = [
  {
    label: "💻 Programming Languages",
    items: ["Java", "Python", "Dart", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "🌐 Backend & Frameworks",
    items: ["Spring Boot", "Spring Security", "Spring AI", "Hibernate", "Firebase", "Apache Tomcat", "Apache Maven", "JWT Authentication"],
  },
  {
    label: "🏗️ Architecture & Systems",
    items: ["Microservices", "REST APIs", "Distributed Systems", "Cloud Infrastructure (AWS)"],
  },
  {
    label: "🗄️ Databases",
    items: ["MySQL", "PostgreSQL", "SQLite", "Neo4j"],
  },
  {
    label: "📱 Mobile Development",
    items: ["Flutter"],
  },
  {
    label: "🤖 Machine Learning & Data Science",
    items: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Whisper AI", "OCR"],
  },
  {
    label: "🔧 DevOps & Version Control",
    items: ["Git", "GitHub", "Docker", "Linux"],
  },
  {
    label: "🎨 Design & Creative Tools",
    items: ["Figma", "Adobe Premiere Pro", "Canva", "Blender"],
  },
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
                className="px-4 py-2 rounded-xl glass glass-hover text-foreground text-sm font-medium transition-all duration-200"
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
