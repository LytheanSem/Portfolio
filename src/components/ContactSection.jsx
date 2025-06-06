import { Mail, MapPin } from "lucide-react";

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <div className="terminal-window p-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-mono">
          Let's connect and build something amazing together
        </p>

        <div className="code-block p-8">
          <h3 className="text-2xl font-mono text-primary mb-8 text-center">
            Contact Information
          </h3>
          <div className="space-y-8">
            <div className="flex items-center space-x-6 justify-center group hover:bg-primary/5 p-4 rounded-lg transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary h-6 w-6" />
              </div>
              <a
                href="mailto:lytheansem430@gmail.com"
                className="text-lg text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                lytheansem430@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-6 justify-center group hover:bg-primary/5 p-4 rounded-lg transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="text-primary h-6 w-6" />
              </div>
              <span className="text-lg text-muted-foreground font-mono">
                Phnom Penh, Cambodia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
