import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Smartphone, Users, Lightbulb } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code,
    technologies: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SASS"]
  },
  {
    category: "Backend",
    icon: Database,
    technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Firebase"]
  },
  {
    category: "Design",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Prototyping"]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "Progressive Web Apps", "Mobile-First Design"]
  }
];

const strengths = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "I love tackling complex challenges and finding elegant solutions that work for both users and businesses."
  },
  {
    icon: Users,
    title: "Client Communication",
    description: "Clear communication throughout the project lifecycle ensures we're always aligned on goals and expectations."
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that follows best practices and industry standards."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate young developer who started coding in middle school and is currently 
            a sophomore in high school. I combine technical expertise with creative thinking to 
            deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started my journey in web development during middle school, fascinated by the intersection 
                  of creativity and technology. What began as curiosity quickly grew into a passion for 
                  building digital experiences that solve real problems.
                </p>
                <p>
                  Currently a sophomore in high school, I've already had the privilege of working on various 
                  projects, helping businesses establish their digital presence. Each project has taught me 
                  something new and shaped my approach to development at such a young age.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, working on personal projects, 
                  or balancing my studies while continuing to grow my development skills.
                </p>
              </div>
            </div>

            {/* Strengths */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">What I Bring</h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <strength.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{strength.title}</h4>
                      <p className="text-muted-foreground text-sm">{strength.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Technical Skills</h3>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-muted/50 text-muted-foreground border-0 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;