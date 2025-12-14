import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Globe, MapPin } from 'lucide-react';
import type { PersonalInfo } from '@/types/portfolio';

interface ContactProps {
  personalInfo: PersonalInfo;
}

export function Contact({ personalInfo }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
            Contacto
          </h2>
          <p className="text-xl text-foreground/85 dark:text-foreground/95">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <Card className="glass-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Conectemos</CardTitle>
            <CardDescription>
              Estoy siempre abierto a discutir nuevos proyectos, ideas creativas
              o oportunidades para formar parte de tu visión.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-foreground dark:text-foreground">
                  Información de Contacto
                </h3>

                <div className="space-y-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-foreground/75 dark:text-foreground/85 hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>{personalInfo.email}</span>
                  </a>

                  {personalInfo.phone && (
                    <div className="flex items-center gap-3 text-foreground/75 dark:text-foreground/85">
                      <MapPin className="w-5 h-5" />
                      <span>{personalInfo.phone}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-foreground/75 dark:text-foreground/85">
                    <MapPin className="w-5 h-5" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-foreground dark:text-foreground">
                  Redes Sociales
                </h3>

                <div className="space-y-3">
                  {personalInfo.social.github && (
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground/75 dark:text-foreground/85 hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {personalInfo.social.linkedin && (
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground/75 dark:text-foreground/85 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}

                  {personalInfo.social.website && (
                    <a
                      href={personalInfo.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground/75 dark:text-foreground/85 hover:text-primary transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Sitio Web</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 flex justify-center">
              <Button size="lg" asChild className="w-full md:w-auto">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Enviar un Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alternative CTA */}
        <div className="mt-8 text-center text-muted-foreground">
          <p>
            También puedes descargar mi{' '}
            <button className="text-primary hover:underline font-semibold">
              CV en PDF
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
