import Section from "./Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    label: "🤖 AI / ML / Deep Learning",
    items: [
      { name: "PyTorch", level: 70 },
      { name: "TensorFlow / Keras", level: 65 },
      { name: "scikit-learn", level: 78 },
      { name: "NLP (NLTK, TF-IDF)", level: 72 },
      { name: "Computer Vision", level: 60 },
      { name: "LLMs & Prompt Eng.", level: 68 },
      { name: "Whisper AI / OCR", level: 65 },
    ],
  },
  {
    label: "📊 Data Science & Analytics",
    items: [
      { name: "NumPy", level: 80 },
      { name: "Pandas", level: 80 },
      { name: "Matplotlib / Seaborn", level: 75 },
      { name: "Feature Engineering", level: 72 },
      { name: "Model Validation", level: 70 },
    ],
  },
  {
    label: "💻 Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 88 },
      { name: "JavaScript / TypeScript", level: 72 },
      { name: "Dart", level: 65 },
      { name: "HTML / CSS", level: 80 },
    ],
  },
  {
    label: "🌐 Backend & Frameworks",
    items: [
      { name: "Spring Boot", level: 88 },
      { name: "Spring AI / Gen AI", level: 70 },
      { name: "REST APIs", level: 90 },
      { name: "Firebase", level: 72 },
      { name: "JWT Auth", level: 85 },
      { name: "Hibernate", level: 75 },
    ],
  },
  {
    label: "🗄️ Databases & Infra",
    items: [
      { name: "MySQL / PostgreSQL", level: 85 },
      { name: "Neo4j", level: 65 },
      { name: "SQLite", level: 70 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 62 },
      { name: "Git / GitHub", level: 88 },
      { name: "Linux", level: 72 },
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
