const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Srithesh. Designed & built with precision.
      </p>
      <nav className="flex gap-6">
        {["Summary", "Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
