import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  label?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, label, children, className = "" }: SectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className={`py-24 md:py-32 ${className}`} ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          {label && (
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-3">
              {label}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          <div className="h-px w-16 glow-line mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
