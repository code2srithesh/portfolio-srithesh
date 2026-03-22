import Section from "./Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "💻 Programming Languages",
    items: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "Dart", level: 65 },
      { name: "JavaScript", level: 70 },
      { name: "TypeScript", level: 65 },
      { name: "HTML/CSS", level: 80 },
    ],
  },
  {
    label: "🌐 Backend & Frameworks",
    items: [
      { name: "Spring Boot", level: 88 },
      { name: "Spring Security", level: 80 },
      { name: "Spring AI", level: 70 },
      { name: "Hibernate", level: 75 },
      { name: "Firebase", level: 72 },
      { name: "REST APIs", level: 90 },
      { name: "JWT Auth", level: 85 },
    ],
  },
  {
    label: "🗄️ Databases",
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQLite", level: 70 },
      { name: "Neo4j", level: 65 },
    ],
  },
  {
    label: "🤖 ML & Data Science",
    items: [
      { name: "PyTorch", level: 65 },
      { name: "scikit-learn", level: 70 },
      { name: "NumPy", level: 75 },
      { name: "Pandas", level: 75 },
      { name: "Matplotlib", level: 70 },
    ],
  },
  {
    label: "🔧 DevOps & Tools",
    items: [
      { name: "Git/GitHub", level: 88 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 72 },
      { name: "Maven", level: 78 },
      { name: "AWS", level: 60 },
    ],
  },
  {
    label: "📱 Mobile & Design",
    items: [
      { name: "Flutter", level: 65 },
      { name: "Figma", level: 72 },
      { name: "Premiere Pro", level: 60 },
      { name: "Blender", level: 55 },
      { name: "Canva", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3 }}
          className="text-xs font-mono text-muted-foreground"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, hsl(0 72% 51%), hsl(15 80% 55%))`,
          }}
        />
      </div>
    </div>
  );
};

const Skills = () => (
  <Section id="skills" title="Technical Skills" label="05 — Stack">
    <div className="grid md:grid-cols-2 gap-8">
      {skillGroups.map((group) => (
        <div key={group.label} className="p-6 rounded-2xl glass">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-primary mb-5">
            {group.label}
          </p>
          <div className="space-y-4">
            {group.items.map((item, i) => (
              <SkillBar key={item.name} name={item.name} level={item.level} delay={i * 0.05} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
