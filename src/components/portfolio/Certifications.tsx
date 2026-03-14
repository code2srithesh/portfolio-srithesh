import Section from "./Section";
import { ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Neo4j Certified Professional",
    issuer: "Neo4j",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/a626bfee-297d-4e8c-81d6-1d71e235f53b/public_url",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    link: "https://coursera.org/share/8ade9b7f575b6ac02ba95b40feb7354f",
  },
  {
    title: "Java Spring Framework & Spring AI / GenAI",
    issuer: "Telusko",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
  },
];

const Certifications = () => (
  <Section id="certifications" title="Certifications" label="06 — Credentials">
    <div className="grid sm:grid-cols-2 gap-4">
      {certs.map((cert, i) => (
        <div
          key={i}
          className="group p-5 rounded-2xl glass glass-hover transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display font-semibold text-foreground">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 font-mono">{cert.issuer}</p>
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors shrink-0 mt-1"
                aria-label={`View ${cert.title} credential`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Certifications;
