import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Educación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-header shadow-lg' : 'bg-transparent',
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="
              text-xl font-bold 
              text-foreground hover:text-primary 
              transition-all duration-300 
              hover:scale-110 
              relative
              px-3 py-2 rounded-lg
              hover:bg-primary/5
              active:scale-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
              group
            "
          >
            <span className="relative z-10">RC</span>
            <span className="absolute inset-0 rounded-lg bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    `relative
                    hover:bg-primary/10 
                    hover:text-primary
                    transition-all duration-300
                    active:scale-95
                    group
                    font-medium
                    hover:shadow-md
                    hover:shadow-primary/10
                    dark:hover:shadow-primary/20`,
                    isActive && 'text-primary bg-primary/5',
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Underline effect */}
                  <span
                    className={cn(
                      'absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 rounded-full',
                      isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4',
                    )}
                  />
                </Button>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                hover:bg-primary/10 
                hover:text-primary
                active:scale-90
                transition-all duration-300
                hover:shadow-md
                hover:shadow-primary/10
                dark:hover:shadow-primary/20
              "
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 animate-slide-in-bottom">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn(
                    `w-full justify-start
                    hover:bg-primary/10
                    hover:text-primary
                    hover:translate-x-2
                    transition-all duration-300
                    active:scale-95
                    font-medium
                    border-l-2 border-transparent
                    hover:border-primary
                    hover:shadow-md
                    hover:shadow-primary/10
                    dark:hover:shadow-primary/20`,
                    isActive &&
                      'bg-primary/5 text-primary border-primary translate-x-1',
                  )}
                  onClick={() => scrollToSection(item.href)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
