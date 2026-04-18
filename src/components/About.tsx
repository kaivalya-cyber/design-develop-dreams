import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Users,
  BrainCircuit,
  Trophy,
  Atom,
  Boxes,
  Wrench,
  Linkedin,
} from "lucide-react";

const skills = [
  {
    category: "ML & RL",
    icon: BrainCircuit,
    technologies: [
      "PyTorch",
      "Stable-Baselines3",
      "Gymnasium",
      "PennyLane",
      "OpenCV",
      "YOLOv8",
      "MediaPipe",
    ],
  },
  {
    category: "Quantum",
    icon: Atom,
    technologies: ["PennyLane", "stim", "pymatching", "Rigetti/pyQuil"],
  },
  {
    category: "Simulation",
    icon: Boxes,
    technologies: ["PyBullet", "MuJoCo", "Flightmare", "MAVSDK/PX4"],
  },
  {
    category: "Frontend",
    icon: Code,
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  },
  {
    category: "Backend",
    icon: Database,
    technologies: ["Supabase", "Node.js", "Python", "Firebase"],
  },
  {
    category: "Tools",
    icon: Wrench,
    technologies: ["Git", "CUDA", "tmux", "conda", "pytest"],
  },
];

const strengths = [
  {
    icon: BrainCircuit,
    title: "Research-Grade Execution",
    description:
      "I don't just prototype. My projects have real results: 18.4% LER improvement on QEC, 23 passing tests on MARL systems, real drone deployment.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description:
      "Founded a nonprofit reaching 400+ students, 200+ hours tutoring, 100+ hours at Second Harvest Food Bank.",
  },
  {
    icon: Code,
    title: "Full-Stack ML",
    description:
      "PyTorch, PennyLane, Gymnasium, PyBullet, OpenCV, YOLOv8, React, Supabase — I move between research and production.",
  },
  {
    icon: Trophy,
    title: "Competitive Edge",
    description:
      "1st Place SF Hackathon, Silver Medal Cove Hackathon, FTC Dean's List Finalist, NHS, 3.85 UW / 4.6 W GPA.",
  },
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
            Sophomore at Evergreen Valley High School building at the intersection of quantum
            computing, reinforcement learning, and computer vision. I've shipped real projects —
            from MARL drone swarms to a variational quantum error correction decoder with a
            published research paper — while founding a STEM nonprofit serving 400+ students across
            five schools. I don't just learn technology, I build with it.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.linkedin.com/in/kaivalya-singh-732190374/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover-scale"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started coding in middle school, but things got serious when I began competing
                  in FTC Robotics. Captaining Team Qbit 23642 as a Dean's List Finalist taught me
                  how to build systems under pressure — hardware, software, and strategy all at
                  once.
                </p>
                <p>
                  From there I went deep into machine learning and reinforcement learning,
                  completing college-level CS courses at Evergreen Valley College and earning
                  certifications from MIT BWSI in Quantum Software and Python. I've built RL agents
                  that run on real drones, MARL systems with emergent behavior, and a variational
                  quantum error correction decoder that I co-authored into a research paper
                  currently being submitted to arXiv.
                </p>
                <p>
                  Outside of code I'm a varsity swimmer, have logged 200+ hours tutoring on
                  Upchieve, and run Vantage Point Learning — a STEM nonprofit I founded in 2023
                  that now serves students across San Jose and Asia.
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
                <Card
                  key={index}
                  className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-300"
                >
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
