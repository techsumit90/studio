import { Mail, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/80 md:text-xl">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 rounded-lg bg-card p-8 shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-foreground/80">
                Fill out the form, or contact us directly through email or phone. We're always happy to discuss your project.
              </p>
              <div className="space-y-4">
                <a href="mailto:annexsodt.com@gmail.com" className="flex items-center gap-3 group">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="group-hover:text-primary transition-colors">annexsodt.com@gmail.com</span>
                </a>
                <a href="tel:+918308848771" className="flex items-center gap-3 group">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="group-hover:text-primary transition-colors">+91 83088 48771</span>
                </a>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
