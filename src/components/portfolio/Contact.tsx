import Section from "./Section";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/code2srithesh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/srithesh26" },
  { icon: Mail, label: "Email", href: "mailto:srithesh26@gmail.com", note: "srithesh26@gmail.com" },
];

const Contact = () => (
  <Section id="contact" title="Get in Touch" label="07 — Contact">
    <p className="text-muted-foreground text-lg mb-10 max-w-xl">
      Open to opportunities in backend engineering, systems design, and AI-integrated development.
      Reach out through any channel below.
    </p>
    <div className="grid sm:grid-cols-3 gap-4">
      {links.map(({ icon: Icon, label, href, note }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl glass glass-hover transition-all duration-300 text-center block"
        >
          <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-display font-semibold text-foreground">{label}</h3>
          <p className="text-xs text-muted-foreground mt-2 font-mono">
            {note || href.replace("https://", "")}
          </p>
        </a>
      ))}
    </div>
  </Section>
);

export default Contact;
