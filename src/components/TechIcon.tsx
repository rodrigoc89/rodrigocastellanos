import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiNginx,
  SiExpress,
  SiNestjs,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiPostman,
  SiVite,
  SiWebpack,
} from 'react-icons/si';
import { Cloud, Code } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Mapeo de tecnologías a iconos reales de react-icons
const techIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  // Frontend
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,

  // Backend
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  Python: SiPython,
  FastAPI: SiFastapi,
  Django: SiDjango,
  'RESTful APIs': Code,
  GraphQL: SiGraphql,

  // Database
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Redis: SiRedis,

  // DevOps
  Docker: SiDocker,
  'CI/CD': Cloud,
  AWS: Cloud,
  Vercel: Cloud,
  Nginx: SiNginx,

  // Tools
  Git: SiGit,
  Postman: SiPostman,
  Vite: SiVite,
  Webpack: SiWebpack,
};

interface TechIconProps {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const levelLabels: Record<string, string> = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
  expert: 'Experto',
};

// Colores optimizados para mejor contraste en modo claro
const techColors: Record<string, string> = {
  React: '#1fa2c9', // Oscurecido para mejor contraste
  TypeScript: '#2968b3',
  JavaScript: '#d4b900', // Oscurecido considerablemente
  HTML5: '#d9431e',
  CSS3: '#1166a3',
  'Tailwind CSS': '#0891a8',
  'Next.js': '#000000',
  'Vue.js': '#3a9e7a', // Oscurecido
  'Node.js': '#2a7a2a',
  Express: '#000000',
  NestJS: '#c01e41',
  Python: '#2b6495',
  FastAPI: '#007a6e',
  Django: '#092E20',
  GraphQL: '#c71a7f', // Oscurecido
  PostgreSQL: '#2f5bb8',
  MongoDB: '#369a38',
  MySQL: '#3a6a8d',
  Redis: '#b52f25',
  Docker: '#1a7dca',
  Nginx: '#007a2f',
  Git: '#d93d22',
  Postman: '#e65424',
  Vite: '#4f52d9', // Oscurecido
  Webpack: '#62aad3', // Oscurecido
};

export function TechIcon({ name, level }: TechIconProps) {
  const IconComponent = techIconMap[name] || Code;
  const iconColor = techColors[name];

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="
              w-12 h-12 flex items-center justify-center rounded-lg
              glass-card glass-hover cursor-pointer
              transition-all duration-300
              hover:scale-110
              hover:-translate-y-1
              active:scale-95
              group
              relative
              overflow-hidden
            "
          >
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
              style={iconColor ? { backgroundColor: iconColor } : undefined}
            />

            <div
              className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110 [filter:brightness(0.9)_saturate(1.1)] dark:[filter:brightness(1.1)_saturate(1.05)]"
              style={iconColor ? { color: iconColor } : undefined}
            >
              <IconComponent className="w-full h-full" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="font-medium border-2 shadow-lg"
          sideOffset={8}
        >
          <div className="text-center">
            <div className="font-bold text-foreground">{name}</div>
            <div className="text-xs text-muted-foreground mt-1 font-medium">
              {levelLabels[level]}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
