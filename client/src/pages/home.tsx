import { useEffect } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";
import { useScrollAnimation, initializeAnimations } from "@/lib/animations";

export default function Home() {
  const { observeElements } = useScrollAnimation();

  useEffect(() => {
    observeElements();
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Manuel de Deus. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Desenvolvido com dedicação e paixão por tecnologia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
