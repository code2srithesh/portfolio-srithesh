import Section from "./Section";

const Summary = () => (
  <Section id="summary" title="About" label="01 — Overview">
    <div className="p-6 md:p-8 rounded-2xl glass-strong">
      <p className="text-lg md:text-xl leading-relaxed text-secondary-foreground max-w-3xl">
        Pre-final year Integrated M.Tech student in Software Engineering with strong programming skills in{" "}
        <span className="text-foreground font-medium">Java</span> and{" "}
        <span className="text-foreground font-medium">Python</span>.
        Experienced in{" "}
        <span className="text-foreground font-medium">backend web development</span>, building{" "}
        <span className="text-foreground font-medium">REST APIs</span>, and designing{" "}
        <span className="text-foreground font-medium">microservices</span> with a strict focus on clean
        code and software engineering best practices. Hands-on exposure to automation workflows,{" "}
        <span className="text-foreground font-medium">cloud platforms (AWS)</span>, and
        Linux fundamentals. A proactive quick learner and strong communicator seeking to collaborate
        with cross-functional teams to deliver high-quality software solutions.
      </p>
    </div>
  </Section>
);

export default Summary;
