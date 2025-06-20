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
        from: "nicocohen56@gmail.com", // Must match verified sender
        replyTo: validatedData.email,
        subject: `🔔 Nova mensagem de contato: ${validatedData.subject}`,
        text: `
Nome: ${validatedData.name}
Email: ${validatedData.email}
Assunto: ${validatedData.subject}

Mensagem:
${validatedData.message}

---
Esta mensagem foi enviada através do seu portfólio online.
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Nova mensagem de contato</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nome:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><strong>Assunto:</strong> ${validatedData.subject}</p>
            </div>
            <div style="margin: 20px 0;">
              <p><strong>Mensagem:</strong></p>
              <div style="background: #ffffff; padding: 15px; border-left: 4px solid #2563eb; margin: 10px 0;">
                ${validatedData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px;">Esta mensagem foi enviada através do seu portfólio online.</p>
          </div>
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
          message: "Mensagem recebida e salva! Para ativar o envio de emails, verifique seu email nicocohen56@gmail.com e confirme o remetente no SendGrid." 
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
