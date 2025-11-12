import { Github, Linkedin, Mail } from 'lucide-react';
import type { PersonalInfo } from '@/types/portfolio';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export function Footer({ personalInfo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground">
              {personalInfo.title} apasionado por crear experiencias web
              excepcionales.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="hover:text-foreground transition-colors"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-foreground transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-foreground transition-colors"
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Sígueme</h3>
            <div className="flex gap-4">
              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
