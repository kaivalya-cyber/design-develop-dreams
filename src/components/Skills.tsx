import { Monitor, Atom, Smartphone, Code } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Expertise</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Software Development */}
          <div className="glass-card p-8 group hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Monitor className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Software</h3>
                <h3 className="text-2xl font-bold text-primary">Development</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in both functional and OOP: 
              <span className="text-foreground font-medium"> Python, Java, JavaScript, TypeScript</span>. 
              Building scalable applications with clean, maintainable code.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="glass-card p-8 group hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Atom className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Frontend Dev</h3>
                <h3 className="text-2xl font-bold text-primary">React, NextJS</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about UI/UX. Over <span className="text-foreground font-medium">5 years</span> 
              of development experience in 
              <span className="text-foreground font-medium"> HTML, CSS, JS, React and NextJS</span> frameworks.
            </p>
          </div>

          {/* Mobile Development */}
          <div className="glass-card p-8 group hover:border-primary/50 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Smartphone className="w-8 h-8 text-primary mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Mobile Dev</h3>
                <h3 className="text-2xl font-bold text-primary">React Native</h3>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Skilled in developing 
              <span className="text-foreground font-medium"> cross-platform mobile apps</span> 
              and native solutions using modern frameworks and best practices.
            </p>
          </div>

          {/* Philosophy Quote */}
          <div className="md:col-span-2 lg:col-span-3 mt-8">
            <div className="glass-card p-8 text-center border-l-4 border-primary bg-primary/5">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-4 italic">
                "Sometimes the best way to solve a problem is to help others."
              </blockquote>
              <cite className="text-muted-foreground">
                - Uncle Iroh, 'Avatar: The Last Airbender'
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;