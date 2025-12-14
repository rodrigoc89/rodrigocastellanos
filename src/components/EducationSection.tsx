import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Education, Certification } from '@/types/portfolio';

interface EducationProps {
  education: Education[];
  certifications: Certification[];
}

export function EducationSection({
  education,
  certifications,
}: EducationProps) {
  const formatDate = (date: string | 'present') => {
    if (date === 'present') return 'Presente';
    return date;
  };

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
            Educación
          </h2>
          <p className="text-xl text-foreground/85 dark:text-foreground/95">
            Mi formación académica y certificaciones profesionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-foreground dark:text-foreground">
              <GraduationCap className="w-7 h-7 text-primary" />
              Formación Académica
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className="glass-card glass-hover group overflow-hidden relative"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/3 to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-base font-bold text-foreground dark:text-foreground">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex flex-col gap-2 text-sm text-foreground/75 dark:text-foreground/85 pt-2 font-medium">
                      <span className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
                        <Calendar className="w-4 h-4" />
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3 relative z-10">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-foreground dark:text-foreground">
                        Campo:
                      </span>
                      <span className="text-foreground/75 dark:text-foreground/85">
                        {edu.field}
                      </span>
                    </div>
                    {edu.grade && (
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-foreground/90 dark:text-foreground">
                          Promedio:
                        </span>
                        <Badge
                          variant="secondary"
                          className="hover:scale-105 transition-transform duration-300"
                        >
                          {edu.grade}
                        </Badge>
                      </div>
                    )}
                    {edu.description && (
                      <p className="text-foreground/75 dark:text-foreground/85 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-foreground dark:text-foreground">
              <Award className="w-7 h-7 text-accent" />
              Certificaciones
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card
                  key={cert.id}
                  className="glass-card glass-hover group overflow-hidden relative"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/5 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10">
                    <CardTitle className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                      <Award className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="font-bold text-foreground dark:text-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10">
                    <div className="flex items-center gap-2 text-sm text-foreground/75 dark:text-foreground/85 font-medium hover:text-primary transition-colors duration-300">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="text-sm flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-foreground dark:text-foreground">
                          ID:
                        </span>
                        <Badge
                          variant="outline"
                          className="font-mono text-xs hover:bg-accent/10 hover:border-accent transition-all duration-300"
                        >
                          {cert.credentialId}
                        </Badge>
                      </div>
                    )}

                    {cert.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full hover:bg-accent/10 hover:text-accent hover:border-accent hover:shadow-md hover:shadow-accent/20 transition-all duration-300 group/btn"
                      >
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                          Ver Certificado
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
