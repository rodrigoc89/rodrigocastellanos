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
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            Experiencia Laboral
          </h2>
          <p className="text-xl text-muted-foreground">
            Mi trayectoria profesional en desarrollo web
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {experience.map((exp, index) => (
            <ScrollAnimate key={exp.id} animation="fade-left" delay={index + 1}>
              <div className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <Card className="md:ml-20 glass-card glass-hover">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-foreground">
                          {exp.company}
                        </CardDescription>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(exp.startDate)} -{' '}
                            {formatDate(exp.endDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>

                    {exp.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold">Logros destacados:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
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
