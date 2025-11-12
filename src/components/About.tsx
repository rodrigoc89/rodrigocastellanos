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
            <h2 className="text-4xl font-bold tracking-tight">Sobre Mí</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {personalInfo.bio}
            </p>
          </div>
        </ScrollAnimate>

        <div className="space-y-8">
          <ScrollAnimate animation="scale" delay={1}>
            <Card className="glass-card glass-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Habilidades Técnicas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skillsByCategory).map(
                  ([category, categorySkills]) => (
                    <div key={category} className="space-y-3">
                      <h3 className="text-lg font-semibold text-muted-foreground">
                        {categoryLabels[category] || category}
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
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
              <Card className="glass-card glass-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Experiencia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">6+ años</p>
                  <p className="text-sm text-muted-foreground">
                    Desarrollando aplicaciones web
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={3}>
              <Card className="glass-card glass-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Proyectos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">
                    Proyectos completados exitosamente
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimate>

            <ScrollAnimate animation="fade-up" delay={4}>
              <Card className="glass-card glass-hover">
                <CardHeader>
                  <CardTitle className="text-lg">Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">
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
