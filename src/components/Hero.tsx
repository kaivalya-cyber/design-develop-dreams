import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Enhanced Floating Elements with More Effects */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float hover:border-primary/60 transition-colors duration-300" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-float hover:bg-primary/40 transition-colors duration-300" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-primary-glow/40 rounded-full animate-float hover:border-primary-glow/80 transition-colors duration-300" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-40 right-1/3 w-6 h-6 border border-primary-glow/50 rounded-sm rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="sr-only">Kaivalya Singh</h1>
            <svg
              viewBox="0 0 900 220"
              className="w-full max-w-[720px] mx-auto h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroNameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="'Brush Script MT', 'Snell Roundhand', 'Segoe Script', cursive"
                fontSize="140"
                fontStyle="italic"
                fontWeight="500"
                stroke="url(#heroNameGradient)"
                strokeWidth="2"
                fill="transparent"
                className="hero-handwriting"
              >
                Kaivalya Singh
              </text>
            </svg>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              Quantum Computing • Reinforcement Learning • Computer Vision
            </h2>
          </div>
          <style>{`
            .hero-handwriting {
              stroke-dasharray: 2400;
              stroke-dashoffset: 2400;
              animation: heroDrawName 3s ease-in-out forwards, heroFillName 0.8s ease-in 2.8s forwards;
            }
            @keyframes heroDrawName {
              to { stroke-dashoffset: 0; }
            }
            @keyframes heroFillName {
              to { fill: hsl(var(--primary-glow)); }
            }
          `}</style>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Sophomore building research-grade ML systems — from MARL drone swarms to a
            variational quantum error correction decoder. I don't just learn technology, I build with it.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="btn-primary-glow text-lg px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            <a 
              href="https://github.com/kaivalya-cyber" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kaivalya-singh-732190374/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:singh.kaivalya@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;