import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import { TechIcon } from '@/components/TechIcon';
import type { PersonalInfo, Skill } from '@/types/portfolio';

interface AboutProps {
  personalInfo: PersonalInfo;
  skills: Skill[];
}

export function About({ personalInfo, skills }: AboutProps) {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Bases de Datos',
    devops: 'DevOps',
    tools: 'Herramientas',
    other: 'Otros',
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimate animation="fade-up">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
              Sobre Mí
            </h2>
            <p className="text-xl text-foreground/80 dark:text-foreground/90 max-w-3xl leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>
        </ScrollAnimate>

        <div className="space-y-8">
          <ScrollAnimate animation="scale" delay={1}>
            <Card className="glass-card glass-hover group">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full group-hover:h-10 transition-all duration-300" />
                  Habilidades Técnicas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {Object.entries(skillsByCategory).map(
                  ([category, categorySkills], index) => (
                    <div
                      key={category}
                      className="space-y-4 p-4 rounded-lg hover:bg-accent/5 transition-colors duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h3 className="text-lg font-bold text-foreground/90 dark:text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {categoryLabels[category] || category}
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
                        {categorySkills.map((skill) => (
                          <TechIcon
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                          />
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </CardContent>
            </Card>
          </ScrollAnimate>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimate animation="fade-up" delay={2}>
              <Card className="glass-card glass-hover group cursor-default overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg font-bold text-foreground/90 dark:text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                    Experiencia
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    3+ años
                  </p>
                  <p className="text-sm text-foreground/70 dark:text-foreground/80 mt-2 font-medium">
                    Desarrollando aplicaciones web
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={3}>
              <Card className="glass-card glass-hover group cursor-default overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg font-bold text-foreground/90 dark:text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
                    Proyectos
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    10+
                  </p>
                  <p className="text-sm text-foreground/70 dark:text-foreground/80 mt-2 font-medium">
                    Proyectos completados exitosamente
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={4}>
              <Card className="glass-card glass-hover group cursor-default overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg font-bold text-foreground/90 dark:text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    Clientes
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-4xl md:text-5xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 inline-block">
                    10+
                  </p>
                  <p className="text-sm text-foreground/70 dark:text-foreground/80 mt-2 font-medium">
                    Clientes satisfechos
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
}
