import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import type { Experience } from '@/types/portfolio';

interface ExperienceProps {
  experience: Experience[];
}

export function ExperienceSection({ experience }: ExperienceProps) {
  const formatDate = (date: string | 'present') => {
    if (date === 'present') return 'Presente';
    const [year, month] = date.split('-');
    const monthNames = [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimate animation="fade-up">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
              Experiencia Laboral
            </h2>
            <p className="text-xl text-foreground/85 dark:text-foreground/95">
              Mi trayectoria profesional en desarrollo web
            </p>
          </div>
        </ScrollAnimate>

        <div className="relative space-y-8">
          {/* Timeline line - mejorada con gradiente */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/50 via-primary/30 to-transparent hidden md:block rounded-full" />

          {experience.map((exp, index) => (
            <ScrollAnimate key={exp.id} animation="fade-left" delay={index + 1}>
              <div className="relative group">
                {/* Timeline dot - mejorado con animación */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300" />

                {/* Glow ring para el dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

                <Card className="md:ml-20 glass-card glass-hover overflow-hidden relative">
                  {/* Animated background on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/3 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <CardHeader className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-3">
                        <CardTitle className="text-2xl md:text-3xl flex items-center gap-3 font-bold group-hover:text-primary transition-colors duration-300">
                          <Briefcase className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-bold text-foreground dark:text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {exp.company}
                        </CardDescription>
                        <div className="flex flex-wrap gap-4 text-sm text-foreground/75 dark:text-foreground/85 font-medium">
                          <span className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                            <Calendar className="w-4 h-4" />
                            {formatDate(exp.startDate)} -{' '}
                            {formatDate(exp.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 relative z-10">
                    <p className="text-foreground/85 dark:text-foreground/95 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.achievements.length > 0 && (
                      <div className="space-y-3 p-4 rounded-lg bg-accent/5 border-l-4 border-primary hover:bg-accent/10 transition-colors duration-300">
                        <h4 className="font-bold text-foreground/90 dark:text-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          Logros destacados
                        </h4>
                        <ul className="space-y-2 ml-4">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-foreground/70 dark:text-foreground/80 relative pl-6 before:content-['→'] before:absolute before:left-0 before:text-primary before:font-bold hover:text-foreground transition-colors duration-300"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-foreground/70 dark:text-foreground/80 uppercase tracking-wider">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-105 cursor-default font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
