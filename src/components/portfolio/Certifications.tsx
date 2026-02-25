import Section from "./Section";

const certs = [
  { title: "Neo4j Certified Professional", issuer: "Neo4j" },
  { title: "Python Essentials", issuer: "Cisco Networking Academy" },
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI" },
  { title: "Java Spring Framework & Spring AI / GenAI", issuer: "Telusko" },
];

const Certifications = () => (
  <Section id="certifications" title="Certifications" label="06 — Credentials">
    <div className="grid sm:grid-cols-2 gap-4">
      {certs.map((cert, i) => (
        <div
          key={i}
          className="p-5 rounded-xl bg-card border border-border hover:border-glow/20 transition-colors duration-300"
        >
          <h3 className="font-semibold text-foreground">{cert.title}</h3>
          <p className="text-sm text-muted-foreground mt-1 font-mono">{cert.issuer}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Certifications;
