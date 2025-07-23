
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Restaurant Website",
    description: "A sleek, responsive restaurant website featuring online ordering, interactive menu, reservation system, and location mapping. Built with modern design principles and optimized for mobile devices.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe API"],
    liveUrl: "https://dine-smooth-app.lovable.app",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "E-Learning Platform Dashboard",
    description: "A comprehensive learning management system with course tracking, progress analytics, interactive quizzes, and student-teacher communication. Features real-time updates and beautiful data visualization.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Chart.js", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Real Estate Property Portal",
    description: "A dynamic property listing platform with advanced search filters, virtual tours, mortgage calculator, and agent contact system. Includes map integration and favorites functionality.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["React", "Express.js", "MongoDB", "Google Maps API", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing modern web applications built with cutting-edge technologies 
            and user-centered design principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200 shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                    Featured
                  </Badge>
                )}
              </div>
              
              {/* Project Content */}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs bg-slate-100 text-slate-700 border-0 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href={project.liveUrl}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all duration-300"
                  >
                    <a href={project.githubUrl}>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-blue-500/50 hover:border-blue-500 hover:bg-blue-50 text-blue-600 hover:text-blue-700 text-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
