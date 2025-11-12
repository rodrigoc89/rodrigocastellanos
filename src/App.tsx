import './index.css';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Projects } from '@/components/Projects';
import { EducationSection } from '@/components/EducationSection';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolio';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero personalInfo={portfolioData.personalInfo} />
        <About
          personalInfo={portfolioData.personalInfo}
          skills={portfolioData.skills}
        />
        <ExperienceSection experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <EducationSection
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />
        <Contact personalInfo={portfolioData.personalInfo} />
      </main>

      <Footer personalInfo={portfolioData.personalInfo} />
    </div>
  );
}

export default App;
