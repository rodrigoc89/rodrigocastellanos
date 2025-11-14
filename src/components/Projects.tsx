import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import type { Project } from '@/types/portfolio';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimate animation="fade-up">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
              Proyectos
            </h2>
            <p className="text-xl text-foreground/80 dark:text-foreground/90">
              Algunos de mis trabajos recientes y proyectos destacados
            </p>
          </div>
        </ScrollAnimate>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-6 mb-12">
            <ScrollAnimate animation="fade-left" delay={1}>
              <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-foreground/90 dark:text-foreground">
                <Star className="w-7 h-7 fill-yellow-500 text-yellow-500 animate-pulse" />
                Proyectos Destacados
              </h3>
            </ScrollAnimate>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <ScrollAnimate
                  key={project.id}
                  animation="scale"
                  delay={index + 1}
                >
                  <ProjectCard project={project} featured />
                </ScrollAnimate>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <ScrollAnimate animation="fade-left" delay={2}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground/90 dark:text-foreground flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full" />
                Otros Proyectos
              </h3>
            </ScrollAnimate>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ScrollAnimate
                  key={project.id}
                  animation="fade-up"
                  delay={index + 1}
                >
                  <ProjectCard project={project} />
                </ScrollAnimate>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={
        featured
          ? 'glass-card glass-hover border-primary border-2 group overflow-hidden relative h-full flex flex-col shadow-lg shadow-primary/10 dark:shadow-primary/20'
          : 'glass-card glass-hover group overflow-hidden relative h-full flex flex-col'
      }
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-yellow-500 text-yellow-950 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Destacado
          </div>
        </div>
      )}

      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${
          featured
            ? 'from-primary/5 via-primary/2 to-accent/5'
            : 'from-primary/0 via-primary/2 to-primary/0'
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      <CardHeader className="relative z-10">
        <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
          {project.title}
        </CardTitle>
        <CardDescription className="text-foreground/70 dark:text-foreground/80 leading-relaxed">
          {featured
            ? project.longDescription || project.description
            : project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10 flex-1">
        <div>
          <h4 className="text-xs font-bold text-foreground/70 dark:text-foreground/80 uppercase tracking-wider mb-2">
            Tecnologías
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 relative z-10">
        {project.github && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 group/btn hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
              Código
            </a>
          </Button>
        )}
        {project.demo && (
          <Button
            size="sm"
            asChild
            className="flex-1 group/btn hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
