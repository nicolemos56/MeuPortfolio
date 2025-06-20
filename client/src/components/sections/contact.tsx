import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Check, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Sucesso!",
        description: data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Erro",
        description: error.message || "Erro ao enviar mensagem. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" />,
      title: "Email",
      value: "nicocohen56@gmail.com",
      href: "mailto:nicocohen56@gmail.com"
    },
    {
      icon: <Github className="text-white" />,
      title: "GitHub",
      value: "github.com/nicolemos56",
      href: "https://github.com/nicolemos56"
    },
    {
      icon: <Linkedin className="text-white" />,
      title: "LinkedIn",
      value: "linkedin.com/in/manuel-de-deus-694956199",
      href: "https://linkedin.com/in/manuel-de-deus-694956199"
    }
  ];

  const services = [
    "Desenvolvimento Fullstack",
    "Consultoria em Redes",
    "Automação de Processos",
    "Projetos com IA"
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Vamos conversar sobre como posso contribuir para o seu próximo projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{info.title}</p>
                    <a 
                      href={info.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4">Disponível para:</h4>
              <ul className="space-y-2 text-blue-100">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-accent mr-2 h-4 w-4" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white">Nome</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-white">Assunto</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      placeholder="Sobre o que você gostaria de conversar"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-blue-200 resize-none"
                      placeholder="Conte-me mais sobre seu projeto ou como posso ajudar..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-3"
                  >
                    {contactMutation.isPending ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
