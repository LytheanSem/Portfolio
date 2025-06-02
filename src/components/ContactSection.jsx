import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const webhookUrl =
    "https://n8n.srv822120.hstgr.cloud/webhook/31fcfb65-5967-4698-898b-70274617509c";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="terminal-window p-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto font-mono">
          Let's connect and build something amazing together
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-mono text-primary mb-6 text-center">
              Contact Information
            </h3>
            <div className="space-y-6 w-full flex flex-col items-center justify-center">
              <div className="flex items-center space-x-4 justify-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <a
                  href="mailto:lytheansem430@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  lytheansem430@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4 justify-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/10">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <span className="text-muted-foreground font-mono">
                  Phnom Penh, Cambodia
                </span>
              </div>
            </div>
          </div>

          <div className="code-block p-8">
            <h3 className="text-2xl font-mono text-primary mb-6">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono text-primary"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-card font-mono focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                  placeholder="John Doe..."
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono text-primary"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-card font-mono focus:outline-none focus:ring-2 focus:ring-primary mt-2"
                  placeholder="john@example.com..."
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-primary"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-card font-mono focus:outline-none focus:ring-2 focus:ring-primary mt-2 resize-none"
                  placeholder="Your message here..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "code-button w-full flex items-center justify-center gap-2",
                  loading && "opacity-60 cursor-not-allowed"
                )}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-500 text-center font-mono mt-2">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-mono mt-2">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
