import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { sendEmail } from "./sendgrid";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email using SendGrid
      const emailSent = await sendEmail({
        to: "nicocohen56@gmail.com",
        from: "nicocohen56@gmail.com", // Must be verified in SendGrid
        subject: `Nova mensagem de contato: ${validatedData.subject}`,
        text: `
Nome: ${validatedData.name}
Email: ${validatedData.email}
Assunto: ${validatedData.subject}

Mensagem:
${validatedData.message}
        `,
        html: `
          <h2>Nova mensagem de contato</h2>
          <p><strong>Nome:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Assunto:</strong> ${validatedData.subject}</p>
          <br>
          <p><strong>Mensagem:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `
      });

      if (emailSent) {
        console.log("Contact message received and email sent:", message);
        res.json({ 
          success: true, 
          message: "Mensagem enviada com sucesso! Entrarei em contato em breve." 
        });
      } else {
        console.error("Failed to send email, but message was stored:", message);
        res.json({ 
          success: true, 
          message: "Mensagem recebida! Houve um problema no envio do email, mas sua mensagem foi salva." 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos. Verifique os campos e tente novamente." 
        });
      } else {
        console.error("Error creating contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor. Tente novamente mais tarde." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
