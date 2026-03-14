import Section from "./Section";

const bullets = [
  "Architected a production-grade web-based POS + CRM ecosystem deployed on cloud infrastructure, leveraging software engineering best practices to reduce manual data-entry errors by 90%.",
  "Engineered an automated predictive refill engine using programmatic scripting to trigger proactive patient follow-ups, optimizing inventory workflows.",
  "Integrated a secure prescription management REST API and developed real-time analytical dashboards.",
  "Executed tasks independently to provide 100% visibility into daily metrics, delivering a high-quality, distributed software solution for the storefront.",
];

const Experience = () => (
  <Section id="experience" title="Experience" label="03 — Work">
    <div className="p-6 md:p-8 rounded-2xl glass-strong">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">NSM Retail Pharmacy</h3>
          <p className="text-muted-foreground mt-1">Freelance Software Developer — Web & Automation</p>
          <p className="text-muted-foreground text-sm">Karimnagar, India</p>
        </div>
        <p className="font-mono text-xs text-primary shrink-0">Jan 2025 – Present</p>
      </div>
      <ul className="space-y-4">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-secondary-foreground leading-relaxed">
            <span className="text-primary mt-1.5 shrink-0">▹</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Experience;
