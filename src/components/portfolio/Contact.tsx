import Section from "./Section";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", note: "Available on request" },
  { icon: Linkedin, label: "LinkedIn", note: "Available on request" },
  { icon: Mail, label: "Email", note: "Available on request" },
];

const Contact = () => (
  <Section id="contact" title="Get in Touch" label="07 — Contact">
    <p className="text-muted-foreground text-lg mb-10 max-w-xl">
      Open to opportunities in backend engineering, systems design, and AI-integrated development.
      Reach out through any channel below.
    </p>
    <div className="grid sm:grid-cols-3 gap-4">
      {links.map(({ icon: Icon, label, note }) => (
        <div
          key={label}
          className="group p-6 rounded-xl bg-card border border-border hover:border-glow/20 transition-colors duration-300 text-center"
        >
          <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-foreground">{label}</h3>
          <p className="text-xs text-muted-foreground mt-2 font-mono">{note}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default Contact;
