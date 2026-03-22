import Section from "./Section";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/code2srithesh" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/srithesh26" },
  { icon: Mail, label: "Email", href: "mailto:srithesh26@gmail.com", note: "srithesh26@gmail.com" },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("srithesh26@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" title="Get in Touch" label="11 — Contact">
      <p className="text-muted-foreground text-lg mb-10 max-w-xl">
        Open to opportunities in backend engineering, systems design, and AI-integrated development.
        Reach out through any channel below.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {links.map(({ icon: Icon, label, href, note }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl glass glass-hover transition-all duration-300 text-center block hover:shadow-[0_8px_40px_-12px_hsl(0_72%_51%_/_0.15)] hover:-translate-y-1"
          >
            <Icon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-display font-semibold text-foreground">{label}</h3>
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              {note || href.replace("https://", "")}
            </p>
          </a>
        ))}
      </div>

      {/* Copy email */}
      <motion.button
        onClick={copyEmail}
        whileTap={{ scale: 0.97 }}
        className="mx-auto flex items-center gap-2 px-5 py-2.5 rounded-xl glass glass-hover text-sm font-mono text-muted-foreground hover:text-foreground transition-all"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-green-400" />
            <span className="text-green-400">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>Copy email to clipboard</span>
          </>
        )}
      </motion.button>
    </Section>
  );
};

export default Contact;
