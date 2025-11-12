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
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Proyectos</h2>
          <p className="text-xl text-muted-foreground">
            Algunos de mis trabajos recientes y proyectos destacados
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              Proyectos Destacados
            </h3>
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
            <h3 className="text-2xl font-semibold">Otros Proyectos</h3>
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
          ? 'glass-card glass-hover border-primary border-2'
          : 'glass-card glass-hover'
      }
    >
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>
          {featured
            ? project.longDescription || project.description
            : project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {project.github && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Código
            </a>
          </Button>
        )}
        {project.demo && (
          <Button size="sm" asChild>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
