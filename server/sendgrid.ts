import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

interface EmailParams {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    const msg: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    };

    if (params.replyTo) {
      msg.replyTo = params.replyTo;
    }
    
    console.log('Tentando enviar email com:', { to: msg.to, from: msg.from, subject: msg.subject });
    await mailService.send(msg);
    console.log('Email enviado com sucesso!');
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    console.error('Response body:', error.response?.body);
    
    // Se o erro for relacionado a sender não verificado, vamos tentar uma abordagem diferente
    if (error.code === 403) {
      console.log('Erro 403: Sender não verificado. Detalhes do erro:', error.response?.body?.errors);
    }
    
    return false;
  }
}