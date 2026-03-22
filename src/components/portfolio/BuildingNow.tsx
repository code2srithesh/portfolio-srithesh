import Section from "./Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Brain, Cloud, Blocks } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "Production Systems",
    description: "Scaling the POS + CRM ecosystem with advanced analytics and predictive engines.",
    status: "In Progress",
  },
  {
    icon: Brain,
    title: "AI-Integrated Backends",
    description: "Exploring Spring AI and GenAI integration for intelligent automation pipelines.",
    status: "Exploring",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Learning AWS services and Docker-based deployment for distributed systems.",
    status: "Learning",
  },
  {
    icon: Blocks,
    title: "Open Source Contributions",
    description: "Building developer tools and sharing solutions with the community.",
    status: "Ongoing",
  },
];

const statusColors: Record<string, string> = {
  "In Progress": "bg-green-500/20 text-green-400 border-green-500/30",
  Exploring: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Learning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Ongoing: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const BuildingNow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Section id="building" title="What I'm Building" label="10 — Currently">
      <div ref={ref} className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl glass glass-hover transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <span
                  className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${statusColors[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
              <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default BuildingNow;
