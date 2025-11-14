import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="
        rounded-full
        hover:bg-primary/10
        hover:text-primary
        hover:rotate-180
        hover:scale-110
        transition-all duration-500
        active:scale-95
        hover:shadow-lg
        hover:shadow-primary/20
        dark:hover:shadow-primary/30
        relative
        overflow-hidden
        group
      "
      aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {/* Animated background */}
      <span className="absolute inset-0 rounded-full bg-linear-to-br from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {theme === 'light' ? (
        <Moon className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
      )}
    </Button>
  );
}
