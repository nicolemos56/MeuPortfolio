import { MailService } from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
let mailService: MailService | null = null;

if (SENDGRID_API_KEY) {
  mailService = new MailService();
  mailService.setApiKey(SENDGRID_API_KEY);
} else {
  console.warn('SENDGRID_API_KEY not found. Email functionality will be disabled in development mode.');
}

interface EmailParams {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  // If SendGrid is not configured, simulate email sending in development
  if (!mailService) {
    console.log('Email service not configured. Simulating email send:', {
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text?.substring(0, 100) + '...'
    });
    return true;
  }

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
    
    console.log('Attempting to send email:', { to: msg.to, from: msg.from, subject: msg.subject });
    await mailService!.send(msg);
    console.log('Email sent successfully!');
    return true;
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    console.error('Response body:', error.response?.body);
    
    if (error.code === 403) {
      console.log('Error 403: Sender not verified. Error details:', error.response?.body?.errors);
    }
    
    return false;
  }
}