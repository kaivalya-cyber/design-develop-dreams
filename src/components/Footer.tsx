import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text">Kaivalya Singh</h3>
            <p className="text-muted-foreground max-w-xs">
              Building at the intersection of Quantum, RL, and Computer Vision.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex space-x-6">
              <a
                href="https://github.com/kaivalya-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaivalya-singh-732190374/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:singh.kaivalya@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary group"
            >
              Back to top
              <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kaivalya Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
