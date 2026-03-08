import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-secondary/50" role="contentinfo">
    <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Matthew Parlee. All rights reserved.
      </p>
      <nav aria-label="Footer navigation" className="flex items-center gap-6">
        <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Home</Link>
        <Link to="/case-studies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Case Studies</Link>
        <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
        <a
          href="https://www.linkedin.com/in/matthew-parlee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-muted-foreground transition-colors hover:text-primary"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
