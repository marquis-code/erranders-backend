import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendConfirmationEmail(user: any): Promise<void> {
    const url = `http://example.com/confirm?token=${user.confirmationToken}`;
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Our Service! Confirm Your Email',
      template: './confirmation', // `.hbs` extension is appended automatically
      context: {
        // Data to be sent to template engine.
        name: user.name,
        url,
      },
    });
  }

  async sendWelcomeEmail(user: any): Promise<void> {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Our Service!',
      template: './welcome', // The `.hbs` file should be in your templates directory
      context: {
        // Data to be sent to template engine.
        name: user.name,
      },
    });
  }
}
