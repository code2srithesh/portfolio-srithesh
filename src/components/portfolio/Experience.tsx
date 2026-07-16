import Section from "./Section";
import { Brain, Code, FlaskConical, Briefcase, Sparkles, Smartphone } from "lucide-react";

const experiences = [
  {
    company: "PowerSchool",
    role: "Software Engineer Intern",
    location: "Remote",
    duration: "Jul 2026 – Present",
    icons: [Briefcase, Code, Sparkles],
    highlight: true,
    bullets: [
      "Contributing to large-scale EdTech platforms serving millions of students, educators, and administrators worldwide.",
      "Collaborating with senior engineers on backend services, API design, and platform reliability improvements.",
      "Writing production-grade code with strong emphasis on testing, code review, and scalable software engineering practices.",
    ],
  },
  {
    company: "Silveri Consulting Services Pvt. Ltd.",
    role: "Software Developer Intern",
    location: "Koratla, Telangana, India",
    duration: "May 2026 – Jul 2026",
    icons: [Code, Smartphone, Sparkles],
    bullets: [
      "Designed and developed cross-platform mobile applications using Flutter and Dart, delivering responsive UI/UX and efficient state management.",
      "Built a comprehensive Restaurant POS mobile application with order management, billing, menu handling, and transaction processing workflows.",
      "Developed a Bluetooth Peer-to-Peer Chat Application enabling real-time messaging between nearby devices without internet connectivity.",
      "Tested, debugged, and optimized application performance across multiple Android devices while maintaining version control and project documentation with Git.",
    ],
  },
  {
    company: "NSM Retail Pharmacy",
    role: "Freelance Software Developer — Web & Automation",
    location: "Karimnagar, India",
    duration: "Jan 2025 – Present",
    bullets: [
      "Architected a production-grade web-based POS + CRM ecosystem deployed on cloud infrastructure, leveraging software engineering best practices to reduce manual data-entry errors by 90%.",
      "Engineered an automated predictive refill engine using programmatic scripting to trigger proactive patient follow-ups, optimizing inventory workflows.",
      "Integrated a secure prescription management REST API and developed real-time analytical dashboards.",
      "Executed tasks independently to provide 100% visibility into daily metrics, delivering a high-quality, distributed software solution for the storefront.",
    ],
  },
  {
    company: "Future Interns",
    role: "Machine Learning Virtual Intern",
    location: "Remote",
    duration: "Mar 2026 – Apr 2026",
    icons: [Brain, Code, FlaskConical],
    bullets: [
      "Developed a time-series forecasting model using Python and Scikit-learn to predict business revenue trends, applying advanced feature engineering techniques.",
      "Built an NLP-based classification system using TF-IDF and NLTK to automatically categorize and prioritize customer support tickets.",
      "Focused on end-to-end ML pipelines including data preprocessing, model validation, and generating reliable outputs for real-world decision-making.",
    ],
  },
];

const Experience = () => (
  <Section id="experience" title="Experience" label="03 — Work">
    <div className="space-y-6">
      {experiences.map((exp: any, idx) => (
        <div
          key={idx}
          className={`relative p-6 md:p-8 rounded-2xl glass-strong transition-all duration-500 hover:-translate-y-1 ${
            exp.highlight
              ? "border border-primary/30 shadow-[0_0_40px_-10px_hsl(0_72%_51%_/_0.35)]"
              : ""
          }`}
        >
          {exp.highlight && (
            <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(0_72%_51%_/_0.5)]">
              Latest
            </span>
          )}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display text-xl font-semibold text-foreground">{exp.company}</h3>
                {exp.icons && (
                  <div className="flex gap-1.5">
                    {exp.icons.map((Icon, i) => (
                      <Icon key={i} className="w-4 h-4 text-primary/70" />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-muted-foreground mt-1">{exp.role}</p>
              <p className="text-muted-foreground text-sm">{exp.location}</p>
            </div>
            <p className="font-mono text-xs text-primary shrink-0">{exp.duration}</p>
          </div>
          <ul className="space-y-4">
            {exp.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-secondary-foreground leading-relaxed">
                <span className="text-primary mt-1.5 shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
