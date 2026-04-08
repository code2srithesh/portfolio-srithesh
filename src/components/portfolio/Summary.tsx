import Section from "./Section";

const Summary = () => (
  <Section id="summary" title="About" label="01 — Overview">
    <div className="p-6 md:p-8 rounded-2xl glass-strong">
      <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground max-w-3xl">
        Pre-final year Integrated M.Tech student in Software Engineering with a dual focus on{" "}
        <span className="text-foreground font-medium">AI/ML Engineering</span> and{" "}
        <span className="text-foreground font-medium">Backend Development</span>.
        Proficient in{" "}
        <span className="text-foreground font-medium">Python</span>,{" "}
        <span className="text-foreground font-medium">Java</span>, and modern{" "}
        <span className="text-foreground font-medium">ML frameworks (PyTorch, scikit-learn, TensorFlow)</span>.
        Experienced in building{" "}
        <span className="text-foreground font-medium">end-to-end ML pipelines</span>,{" "}
        <span className="text-foreground font-medium">NLP systems</span>,{" "}
        <span className="text-foreground font-medium">REST APIs</span>, and{" "}
        <span className="text-foreground font-medium">microservices</span> with production-grade reliability.
        Hands-on with{" "}
        <span className="text-foreground font-medium">Deep Learning, Generative AI, LLMs</span>,
        cloud platforms (AWS), and DevOps tooling. A proactive builder who bridges
        intelligent automation with scalable software architecture.
      </p>
    </div>
  </Section>
);

export default Summary;
