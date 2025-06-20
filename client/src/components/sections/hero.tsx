import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Manuel de Deus
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Fullstack Developer & Network Specialist
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-50 leading-relaxed">
              Desenvolvedor especializado em soluções completas, desde frontend até backend, 
              com expertise em redes e automação. Apaixonado por criar sistemas eficientes 
              e resolver problemas complexos através da tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-accent hover:bg-blue-600 text-white px-8 py-3 font-semibold"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 font-semibold"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
