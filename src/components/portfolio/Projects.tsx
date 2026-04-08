import Section from "./Section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CreditCore",
    subtitle: "Distributed Financial Engine",
    description:
      "Architected a backend-focused microservice application to automate debt tracking via a robust RESTful API infrastructure. Enforced clean code practices and integrated JWT authentication to ensure 100% financial data integrity with validated, reliable outputs. Demonstrates scalable distributed system design, secure data modeling, and production-grade performance optimization.",
    tags: ["Microservices", "REST API", "JWT", "Backend"],
    category: "Backend",
    github: "https://github.com/code2srithesh/CreditCore.git",
  },
  {
    title: "SkillSwap",
    subtitle: "Web Development Ecosystem",
    description:
      "Engineered a secure full-stack web platform utilizing robust data structures and algorithms to perform localized skill-matching. Enforced strict version control and platform integrity via academic credential verification, reducing search friction by 40% while showcasing collaborative web development and clean software architecture.",
    tags: ["Full-Stack", "Web App", "Auth", "Firebase"],
    category: "Web",
    github: undefined,
    live: "https://skillswap-26.web.app/",
  },
  {
    title: "PROBE",
    subtitle: "AI Automation Verification Engine",
    description:
      "Developed an automated Python scripting workflow utilizing a Judge–Witness AI architecture to validate technical competencies. Integrated ML-driven probing for bias-free, auditable evaluation with end-to-end model validation. Demonstrates reliable AI/ML pipeline design and complex backend logic execution.",
    tags: ["AI/ML", "Python", "Automation", "Architecture"],
    category: "AI",
    github: "https://github.com/code2srithesh/probe.git",
  },
  {
    title: "Intelligent Expense Categorizer",
    subtitle: "Python & ML Pipeline",
    description:
      "Minimized manual data entry by developing a multi-modal ML automation pipeline utilizing Python, Whisper AI, and OCR integration. Achieved 85% accuracy in automated expense categorization with validated model outputs, translating raw logs into actionable behavioral insights via real-time dashboards.",
    tags: ["Python", "Whisper AI", "OCR", "ML"],
    category: "AI",
  },
];

const categories = ["All", "Backend", "Web", "AI"];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" title="Projects" label="04 — Case Studies">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setExpandedIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
              filter === cat
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(0_72%_51%_/_0.4)]"
                : "glass glass-hover text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className="cursor-pointer group p-6 rounded-2xl glass glass-hover transition-all duration-300 hover:shadow-[0_8px_40px_-12px_hsl(0_72%_51%_/_0.15)] hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    className="text-primary text-xl shrink-0 mt-1"
                  >
                    +
                  </motion.span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-secondary-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            Source Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};

export default Projects;
