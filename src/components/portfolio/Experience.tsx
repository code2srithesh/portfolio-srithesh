import Section from "./Section";

const bullets = [
  "Architected and deployed a production-grade POS + CRM ecosystem to digitize legacy pharmaceutical workflows, reducing manual data-entry errors by 90%.",
  "Engineered a predictive refill engine using automated purchase-frequency analysis to trigger proactive patient follow-ups, boosting repeat sales and improving inventory turnover accuracy.",
  "Integrated a secure prescription management module with cloud-based uploads.",
  "Built real-time analytical dashboards delivering 100% visibility into daily audit metrics, including COGS and net profit margins.",
  "Transformed raw transactional data into actionable business intelligence for business owners.",
];

const Experience = () => (
  <Section id="experience" title="Experience" label="03 — Work">
    <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">NSM Retail Pharmacy</h3>
          <p className="text-muted-foreground mt-1">Freelance Software Developer — Production Deployment</p>
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
