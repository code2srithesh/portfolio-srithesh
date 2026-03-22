import Section from "./Section";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  {
    year: "2022",
    title: "Started M.Tech at VIT-AP",
    description: "Began Integrated M.Tech in Software Engineering with a perfect foundation from school.",
  },
  {
    year: "2023",
    title: "Deep Dive into Backend",
    description: "Mastered Java, Spring Boot, and REST API architecture. Built first microservice projects.",
  },
  {
    year: "2024",
    title: "AI & ML Exploration",
    description: "Explored machine learning with PyTorch, scikit-learn. Built the Intelligent Expense Categorizer with Whisper AI.",
  },
  {
    year: "2024",
    title: "PROBE & SkillSwap",
    description: "Developed Judge–Witness architecture for PROBE and engineered SkillSwap's peer learning platform.",
  },
  {
    year: "2025",
    title: "Production Deployment",
    description: "Deployed a production-grade POS + CRM ecosystem for NSM Retail Pharmacy, reducing errors by 90%.",
  },
  {
    year: "Now",
    title: "Building What's Next",
    description: "Exploring distributed systems, cloud-native architecture, and AI-integrated backend solutions.",
  },
];

const TimelineItem = ({ item, index }: { item: typeof milestones[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:text-left`}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className="p-5 rounded-2xl glass glass-hover transition-all duration-300 inline-block max-w-sm">
          <span className="font-mono text-xs text-primary tracking-wider">{item.year}</span>
          <h3 className="font-display font-semibold text-foreground mt-1">{item.title}</h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Dot */}
      <div className="relative shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
          className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(0_72%_51%_/_0.4)]"
        />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

const Journey = () => (
  <Section id="journey" title="My Journey" label="08 — Timeline">
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block" />
      <div className="space-y-8 md:space-y-12">
        {milestones.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  </Section>
);

export default Journey;
