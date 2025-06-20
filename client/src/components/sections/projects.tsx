import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Booking Platform",
      badge: { text: "2025 🆕", variant: "default" as const },
      description: "Plataforma de reserva de serviços tipo BlackLane para carros executivos. Interface completa de agendamento com backend funcional.",
      technologies: ["Node.js", "Express", "Replit", "GitHub"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Alertamente",
      badge: { text: "AI", variant: "secondary" as const },
      description: "App educacional com IA que ensina escrita infantil. Destaque na comunidade Alura durante a Imersão IA.",
      technologies: ["Python", "Google Cloud Vision", "IA"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      links: { demo: "https://alertame.netlify.app/", github: "#" }
    },
    {
      title: "Sistema de Gestão de Estacionamento",
      badge: { text: "TCC", variant: "outline" as const },
      description: "Sistema completo para registro, controle e acompanhamento de veículos. Desenvolvido com metodologia XP.",
      technologies: ["PHP", "CodeIgniter 4", "MySQL"],
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Aplicação Excel - Gestão de Estoque",
      description: "Sistema completo com entrada/saída de estoque, ordens de trabalho, controle de SIM cards e dashboard interativo.",
      technologies: ["Excel VBA", "Dashboards", "Automação"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Sistema com Airtable",
      description: "Gerenciamento de estoque nacional com formulários de entrada e saída por técnicos em várias províncias.",
      technologies: ["Airtable", "Formulários", "Gestão"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "FrontendFusion",
      description: "Projeto colaborativo para aprimoramento de frontend com foco em boas práticas visuais e responsividade.",
      technologies: ["HTML", "CSS", "SASS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      links: { github: "https://github.com/nicolemos56/projetoFrontendFusion1.git" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Projetos Realizados</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Portfolio de projetos que demonstram expertise técnica e capacidade de entrega
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card bg-slate-50 border-slate-200 overflow-hidden fade-in">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                  {project.badge && (
                    <Badge variant={project.badge.variant}>
                      {project.badge.text}
                    </Badge>
                  )}
                </div>
                <p className="text-slate-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {project.links && (
                  <div className="flex space-x-3">
                    {project.links.demo && (
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="p-0 h-auto text-accent"
                        onClick={() => window.open(project.links.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="p-0 h-auto text-accent"
                        onClick={() => window.open(project.links.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        Código
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
