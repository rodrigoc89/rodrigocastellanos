import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
          <h2 className="text-4xl font-bold tracking-tight">Educación</h2>
          <p className="text-xl text-muted-foreground">
            Mi formación académica y certificaciones profesionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <GraduationCap className="w-6 h-6" />
              Formación Académica
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id} className="glass-card glass-hover">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground pt-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div>
                      <span className="font-semibold">Campo: </span>
                      <span className="text-muted-foreground">{edu.field}</span>
                    </div>
                    {edu.grade && (
                      <div>
                        <span className="font-semibold">Promedio: </span>
                        <span className="text-muted-foreground">
                          {edu.grade}
                        </span>
                      </div>
                    )}
                    {edu.description && (
                      <p className="text-muted-foreground text-sm">
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
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="w-6 h-6" />
              Certificaciones
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={cert.id} className="glass-card glass-hover">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">
                      {cert.issuer}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="text-sm">
                        <span className="font-semibold">ID: </span>
                        <Badge variant="outline" className="font-mono text-xs">
                          {cert.credentialId}
                        </Badge>
                      </div>
                    )}

                    {cert.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full"
                      >
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver Certificado
                        </a>
                      </Button>
                    )}
                  </CardContent>

                  {index < certifications.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
