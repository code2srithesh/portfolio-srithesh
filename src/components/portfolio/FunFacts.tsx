import Section from "./Section";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Coffee, Gamepad2, Music, Lightbulb, Globe } from "lucide-react";

const facts = [
  {
    icon: Code2,
    title: "First Code",
    front: "Wrote my first line of code in school and never stopped.",
    back: "Started with HTML in 8th grade — now I architect distributed systems.",
  },
  {
    icon: Coffee,
    title: "Fuel",
    front: "Powered by curiosity and way too much coffee.",
    back: "Average 3 cups a day. Peak productivity hits at 11 PM.",
  },
  {
    icon: Gamepad2,
    title: "Beyond Code",
    front: "When not coding, I'm exploring creative tools.",
    back: "Blender 3D, Premiere Pro, Figma — I love building things visually too.",
  },
  {
    icon: Music,
    title: "Workflow",
    front: "Code flows better with the right soundtrack.",
    back: "Lo-fi beats for debugging, synthwave for building features.",
  },
  {
    icon: Lightbulb,
    title: "Philosophy",
    front: "I believe every problem has an elegant solution.",
    back: "Clean code > clever code. Ship fast, refactor faster.",
  },
  {
    icon: Globe,
    title: "Open Source",
    front: "Contributing to the developer community.",
    back: "All my projects are open-source on GitHub.",
  },
];

const FlipCard = ({ fact, index }: { fact: typeof facts[0]; index: number }) => {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const Icon = fact.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer group perspective-1000"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-48"
      >
        {/* Front */}
        <div
          className="absolute inset-0 p-5 rounded-2xl glass glass-hover transition-all duration-300 flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Icon className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm">{fact.title}</h3>
            <p className="text-xs text-muted-foreground mt-1">{fact.front}</p>
          </div>
          <p className="text-[10px] font-mono text-muted-foreground/50">Click to flip →</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 p-5 rounded-2xl glass border border-primary/20 flex items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-sm text-secondary-foreground leading-relaxed">{fact.back}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FunFacts = () => (
  <Section id="funfacts" title="Beyond the Code" label="09 — Personality">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {facts.map((fact, i) => (
        <FlipCard key={i} fact={fact} index={i} />
      ))}
    </div>
  </Section>
);

export default FunFacts;
