import { Atom, Bot, Eye, Cpu, Globe, Code } from "lucide-react";

const expertise = [
  {
    icon: Atom,
    title: "Quantum",
    accent: "Computing",
    body: (
      <>
        Variational quantum error correction with{" "}
        <span className="text-foreground font-medium">PennyLane, stim, pymatching</span>. Co-authored a
        research paper achieving an 18.4% logical error rate improvement.
      </>
    ),
  },
  {
    icon: Bot,
    title: "Reinforcement",
    accent: "Learning & MARL",
    body: (
      <>
        PPO, SAC, and MAPPO agents in{" "}
        <span className="text-foreground font-medium">PyTorch, Stable-Baselines3, Gymnasium</span> —
        from drone swarms with emergent behavior to real hardware deployments.
      </>
    ),
  },
  {
    icon: Eye,
    title: "Computer Vision",
    accent: "& Robotics",
    body: (
      <>
        Real-time perception with{" "}
        <span className="text-foreground font-medium">YOLOv8, OpenCV, MediaPipe</span>, integrated with{" "}
        <span className="text-foreground font-medium">PyBullet, MuJoCo, MAVSDK/PX4</span> for closed-loop control.
      </>
    ),
  },
  {
    icon: Cpu,
    title: "Systems",
    accent: "& GPU Compute",
    body: (
      <>
        CUDA benchmarking, local LLM inference with{" "}
        <span className="text-foreground font-medium">MLX, Whisper, Kokoro TTS</span>, and PID control on
        embedded hardware.
      </>
    ),
  },
  {
    icon: Globe,
    title: "Web",
    accent: "& Platform",
    body: (
      <>
        Production full-stack apps with{" "}
        <span className="text-foreground font-medium">React, TypeScript, Tailwind, shadcn/ui, Supabase</span> —
        powering a STEM nonprofit reaching 400+ students.
      </>
    ),
  },
  {
    icon: Code,
    title: "Languages",
    accent: "& Foundations",
    body: (
      <>
        <span className="text-foreground font-medium">Python, TypeScript, JavaScript, Java, C++/CUDA</span>.
        College-level CS coursework + MIT BWSI certifications in Quantum Software and Python.
      </>
    ),
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six domains, one builder — research-grade ML, real hardware, and shipped products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {expertise.map(({ icon: Icon, title, accent, body }) => (
            <div
              key={title}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <Icon className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                  <h3 className="text-2xl font-bold text-primary">{accent}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}

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
