import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/kaivalya-singh-732190374/";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type Category = {
  name: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    name: "Quantum Computing",
    projects: [
      {
        title: "Adaptive Variational QEC Decoder",
        description:
          "Real-time noise classification using a CNN that routes syndrome data to specialized variational quantum decoders optimized per noise type. 18.4% avg logical error rate improvement, 27.2% peak, 94.2% classifier accuracy, 3.8% overhead.",
        technologies: ["PennyLane", "PyTorch", "stim", "pymatching"],
        githubUrl: "https://github.com/kaivalya-cyber/variational-qec-decoder",
      },
    ],
  },
  {
    name: "Multi-Agent Reinforcement Learning",
    projects: [
      {
        title: "MAPPO Drone Swarm",
        description:
          "Cooperative-competitive drone swarm using CTDE architecture. Two teams of three drones with emergent role specialization.",
        technologies: ["PyTorch", "PyBullet", "Gymnasium"],
        githubUrl: "https://github.com/kaivalya-cyber/drone_swarm_marl",
      },
      {
        title: "Opponent Modeling MARL",
        description:
          "1v1 predator-prey with GRU-based opponent modeling and PPO baseline. Full pytest suite, 23 tests passing.",
        technologies: ["PyTorch", "Stable-Baselines3", "Gymnasium"],
        githubUrl: "https://github.com/kaivalya-cyber/deeptrack-control-nn-policy",
      },
    ],
  },
  {
    name: "Reinforcement Learning",
    projects: [
      {
        title: "Drone Visual Tracking",
        description:
          "YOLOv8 + SAC agent with MAVSDK/PX4 integration, deployed on real drone hardware.",
        technologies: ["YOLOv8", "PyTorch", "Flightmare", "MAVSDK"],
        githubUrl: "https://github.com/kaivalya-cyber/drone_rl",
      },
      {
        title: "Drone Windy Navigation PPO",
        description:
          "PPO agent trained with wind curriculum in PyBullet for robustness.",
        technologies: ["PyBullet", "Gymnasium", "Stable-Baselines3"],
        githubUrl: "https://github.com/kaivalya-cyber/tracking_rl",
      },
      {
        title: "RL Car PPO",
        description:
          "Custom 2D physics environment with curriculum difficulty and vectorized envs.",
        technologies: ["PyTorch", "Gymnasium"],
        githubUrl: "https://github.com/kaivalya-cyber/car_neural_diff_learning",
      },
      {
        title: "MuJoCo Car RL",
        description:
          "Goal-reaching agent with hyperparameter sweeps and checkpoint saving.",
        technologies: ["MuJoCo", "Stable-Baselines3"],
        githubUrl: "https://github.com/kaivalya-cyber/RL-Mujoco-Learning-",
      },
      {
        title: "RL Triple Inverted Pendulum",
        description:
          "Nonlinear control via deep Q-learning and policy gradient.",
        technologies: ["PyTorch", "Gymnasium"],
      },
      {
        title: "ML Drone Racing",
        description:
          "RL agents for autonomous flight in simulation.",
        technologies: ["PyTorch", "Flightmare"],
      },
    ],
  },
  {
    name: "Computer Vision & Robotics",
    projects: [
      {
        title: "Swim Vision",
        description:
          "AI-powered biomechanical swim stroke analysis.",
        technologies: ["Python", "Computer Vision"],
        githubUrl: "https://github.com/kaivalya-cyber/Swim-Vision",
      },
      {
        title: "SignalDrive",
        description:
          "Gesture-controlled car simulation with hand tracking, real-time physics, PID-smoothed steering, and F1-style telemetry HUD.",
        technologies: ["MediaPipe", "PyBullet", "Python"],
        githubUrl: "https://github.com/kaivalya-cyber/SignalDrive",
      },
      {
        title: "Self-Balancing Two-Wheel Robot",
        description:
          "PID controller with state estimation for real hardware balancing.",
        technologies: ["PID", "Embedded", "Control Systems"],
      },
    ],
  },
  {
    name: "Systems & Infrastructure",
    projects: [
      {
        title: "GPU Parallelization Benchmarking",
        description:
          "CPU vs GPU performance benchmarking suite using NVIDIA CUDA.",
        technologies: ["CUDA", "C++", "Python"],
      },
      {
        title: "OpenJarvis",
        description:
          "Local voice AI on MacBook Air M4 using MLX, Qwen2.5-7B-4bit, Whisper, and Kokoro TTS.",
        technologies: ["MLX", "Qwen2.5", "Whisper", "Kokoro TTS"],
      },
    ],
  },
  {
    name: "Web & Platform",
    projects: [
      {
        title: "Vantage Point Learning",
        description:
          "STEM nonprofit platform with real-time volunteer feed, atomic claim logic, Google OAuth via PKCE.",
        technologies: ["React", "Supabase", "shadcn/ui"],
        githubUrl: "https://github.com/kaivalya-cyber/vantage-point-learning",
        liveUrl: "https://vantage-point-learning.lovable.app",
      },
    ],
  },
  {
    name: "Creative & Math",
    projects: [
      {
        title: "Fractal Dynamics Simulator",
        description:
          "Julia, Multibrot, and L-system fractal layers with energy field interference patterns, stability heatmap, and real-time animation.",
        technologies: ["Java"],
        githubUrl: "https://github.com/kaivalya-cyber/fractal_java",
      },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete portfolio across quantum computing, RL, robotics, systems, and the web.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name}>
              <div className="mb-8 flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {category.name}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent" />
                <Badge
                  variant="secondary"
                  className="bg-muted text-muted-foreground border-0"
                >
                  {category.projects.length}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.projects.map((project) => (
                  <Card
                    key={project.title}
                    className="group bg-card border-border/50 overflow-hidden hover:shadow-[var(--shadow-glow)] hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-muted text-muted-foreground border-0 hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-2">
                        {project.liveUrl && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-border hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-border hover:border-primary hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300"
                          aria-label="LinkedIn profile"
                        >
                          <a
                            href={LINKEDIN_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
