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

// Colores oficiales de cada tecnología
const techColors: Record<string, string> = {
  React: '#61DAFB',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  'Tailwind CSS': '#06B6D4',
  'Next.js': '#000000',
  'Vue.js': '#4FC08D',
  'Node.js': '#339933',
  Express: '#000000',
  NestJS: '#E0234E',
  Python: '#3776AB',
  FastAPI: '#009688',
  Django: '#092E20',
  GraphQL: '#E10098',
  PostgreSQL: '#4169E1',
  MongoDB: '#47A248',
  MySQL: '#4479A1',
  Redis: '#DC382D',
  Docker: '#2496ED',
  Nginx: '#009639',
  Git: '#F05032',
  Postman: '#FF6C37',
  Vite: '#646CFF',
  Webpack: '#8DD6F9',
};

export function TechIcon({ name, level }: TechIconProps) {
  const IconComponent = techIconMap[name] || Code;
  const iconColor = techColors[name];

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="
              w-12 h-12 flex items-center justify-center rounded-lg
              glass-card glass-hover cursor-pointer
              transition-all duration-300
            "
          >
            <div
              className="w-7 h-7"
              style={iconColor ? { color: iconColor } : undefined}
            >
              <IconComponent className="w-full h-full" />
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="font-medium">
          <div className="text-center">
            <div>{name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {levelLabels[level]}
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
