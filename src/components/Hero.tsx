import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import type { PersonalInfo } from '@/types/portfolio';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export function Hero({ personalInfo }: HeroProps) {
  const initials = personalInfo.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar & Info */}
          <div className="shrink-0">
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-2xl shadow-primary/20 ring-4 ring-primary/10 transition-transform hover:scale-105">
              <AvatarFallback className="text-6xl font-bold bg-linear-to-br from-primary to-accent text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
                {personalInfo.name}
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                {personalInfo.title}
              </p>
              <p className="text-lg text-muted-foreground">
                {personalInfo.nationality} • {personalInfo.age} años •{' '}
                {personalInfo.location}
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {personalInfo.social.github && (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {personalInfo.social.linkedin && (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              )}
              {personalInfo.social.website && (
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <a
                    href={personalInfo.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                </Button>
              )}
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                Ver Proyectos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="font-semibold glass-card hover:border-primary transition-all"
              >
                Contáctame
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
