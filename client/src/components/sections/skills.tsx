import { Card, CardContent } from "@/components/ui/card";
import { Code, BarChart3, Network, Lightbulb, Users, Cog, MessageCircle, Target, GraduationCap } from "lucide-react";

export function SkillsSection() {
  const hardSkills = [
    {
      icon: <Code className="text-3xl" />,
      title: "💻 Programação & Desenvolvimento",
      skills: [
        { category: "Linguagens", items: "Python, PHP, JavaScript, C#, Node.js" },
        { category: "Frontend", items: "HTML, CSS, JS, SASS" },
        { category: "Backend", items: "Node.js + Express.js, PHP + CodeIgniter 4" },
        { category: "Bancos de Dados", items: "MySQL, MongoDB, SQL Server" },
        { category: "Outros", items: "API REST, Git/GitHub, Azure DevOps" }
      ]
    },
    {
      icon: <BarChart3 className="text-3xl" />,
      title: "📊 Análise de Dados & Automação",
      skills: [
        { category: "Excel Avançado", items: "PROCV, PROCH, PROCX, Tabela Dinâmica, Dashboards" },
        { category: "Automação", items: "Excel + IA, Scripts de análise" },
        { category: "Ferramentas", items: "Zabbix, Airtable, Postman" }
      ]
    },
    {
      icon: <Network className="text-3xl" />,
      title: "🌐 Redes e Sistemas",
      skills: [
        { category: "Certificações", items: "CCNA 3 (200-301) Cisco, DevNet Associate" },
        { category: "Protocolos", items: "TCP/IP, DNS, HTTP" },
        { category: "Sistemas", items: "Linux (CLI, shell scripts)" },
        { category: "Monitoramento", items: "Zabbix, análise de relatórios" }
      ]
    }
  ];

  const softSkills = [
    {
      icon: <Lightbulb className="text-2xl" />,
      title: "Proatividade",
      description: "Identificação de problemas e proposição de soluções práticas para melhoria da produtividade"
    },
    {
      icon: <Users className="text-2xl" />,
      title: "Gestão de Equipes",
      description: "Coordenação técnica e uso de ferramentas como Trello para monitoramento de tarefas"
    },
    {
      icon: <Cog className="text-2xl" />,
      title: "Resolução de Problemas",
      description: "Atuação direta na resolução de falhas de APs e redes com abordagem sistemática"
    },
    {
      icon: <MessageCircle className="text-2xl" />,
      title: "Comunicação",
      description: "Criação de materiais explicativos e campanhas para clientes e equipe técnica"
    },
    {
      icon: <Target className="text-2xl" />,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de programas como 'WiConnect em Ação' para otimização de processos"
    },
    {
      icon: <GraduationCap className="text-2xl" />,
      title: "Autodidatismo",
      description: "Aprendizagem contínua através de cursos especializados (Alura, Cisco, etc.)"
    }
  ];

  return (
    <>
      {/* Hard Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hard Skills</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Competências técnicas desenvolvidas através de experiência prática e certificações profissionais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {hardSkills.map((skill, index) => (
              <Card key={index} className="skill-card bg-slate-50 border-slate-200 fade-in">
                <CardContent className="p-8">
                  <div className="text-accent mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{skill.title}</h3>
                  <div className="space-y-3">
                    {skill.skills.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <p className="font-medium text-slate-800">{item.category}:</p>
                        <p className="text-slate-600">{item.items}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Soft Skills</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Competências comportamentais desenvolvidas através da liderança e gestão de equipes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="bg-white border-slate-200 fade-in">
                <CardContent className="p-6">
                  <div className="text-accent mb-3">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{skill.title}</h3>
                  <p className="text-slate-600 text-sm">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
