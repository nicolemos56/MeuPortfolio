import { Button } from "@/components/ui/button";
import profileImage from "@assets/59459D62-3051-4B4C-B330-90FBFEC5C18E-Photoroom.png-Photoroom-removebg_1750429569187.png";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-20 pb-16 bg-gradient-to-br from-primary to-secondary text-white overflow-hidden">
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0L8.5 8.5L0 12l8.5 3.5L12 24l3.5-8.5L24 12l-8.5-3.5L12 0z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-500">
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm4-8h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h4v2h-4v-2z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-700">
          <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute top-60 right-10 animate-pulse delay-300">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 right-40 animate-bounce delay-1200">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
                Manuel de Deus
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-bounce delay-300">
                Fullstack Developer & Network Specialist
              </p>
              <p className="text-lg mb-12 max-w-3xl text-blue-50 leading-relaxed">
                Desenvolvedor especializado em soluções completas, desde frontend até backend, 
                com expertise em redes e automação. Apaixonado por criar sistemas eficientes 
                e resolver problemas complexos através da tecnologia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="fade-in relative">
              <div className="relative z-10 animate-pulse">
                <img 
                  src={profileImage} 
                  alt="Manuel de Deus" 
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
              </div>
              {/* Floating rings around profile */}
              <div className="absolute inset-0 animate-spin slow">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-dashed border-white/30"></div>
              </div>
              <div className="absolute inset-4 animate-spin reverse slow">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-dotted border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
