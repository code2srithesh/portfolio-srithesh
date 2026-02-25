import Section from "./Section";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "SkillSwap",
    subtitle: "Campus-Exclusive Peer Learning Ecosystem",
    bullets: [
      "Secure platform restricted to campus-authenticated logins",
      "Eliminated monetary barriers in peer skill exchange",
      "Reduced search friction by 40% through localized credential-based matching",
      "Ensured data privacy and institutional integrity",
    ],
    tags: ["Platform", "Auth", "Matching"],
  },
  {
    title: "PROBE",
    subtitle: "Skill Reality Verification Engine",
    bullets: [
      "Designed Judge–Witness architecture to combat resume inflation",
      "Treated technical claims as hypotheses requiring proof",
      "Implemented logic-driven probing challenges",
      "Delivered bias-free, auditable competency evaluation beyond black-box scoring",
    ],
    tags: ["Architecture", "Verification", "Logic"],
  },
  {
    title: "CreditCore",
    subtitle: "Credit Management Engine",
    bullets: [
      "Backend-first financial engine with RESTful APIs",
      "Automated debt tracking and behavioral credit signals",
      "JWT authentication + secure audit logging",
      "Enabled predictive financial planning via structured transaction analysis",
    ],
    tags: ["Backend", "Finance", "Security"],
  },
  {
    title: "Intelligent Expense Categorizer",
    subtitle: "AI-Powered Spending Analysis",
    bullets: [
      "Multi-modal pipeline using Whisper AI + OCR",
      "Extracted spending data from physical receipts",
      "Achieved 85% automated categorization accuracy",
      "Real-time dashboards translating data into behavioral insights",
    ],
    tags: ["AI/ML", "OCR", "Analytics"],
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <Section id="projects" title="Projects" label="04 — Case Studies">
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          const isExpanded = expandedIndex === i;
          return (
            <motion.div
              key={i}
              layout
              onClick={() => setExpandedIndex(isExpanded ? null : i)}
              className="cursor-pointer group p-6 rounded-2xl glass glass-hover transition-all duration-300"
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
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {project.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-secondary-foreground leading-relaxed">
                        <span className="text-primary shrink-0">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
