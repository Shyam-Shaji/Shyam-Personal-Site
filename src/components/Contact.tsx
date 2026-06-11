import { useState } from 'react'
import {motion} from 'framer-motion'
import { ArrowUpRight, Mail, Send } from 'lucide-react'
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { toast } from 'sonner';

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Missing fields", {
        description: "Please fill in your name, email, and message before sending.",
      });
      return;
    }
    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...form,
          subject: `New Contact Form Submission from ${form.name}`,
          form_name: "Portfolio Contact Form"
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent!", {
          description: "Thanks for reaching out — I'll get back to you within 24 hours.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Delivery failed", {
          description: result.message || "Something went wrong on our end. Please try again.",
        });
      }

    } catch (error) {
      toast.error("Network error", {
        description: "Couldn't reach the server. Check your connection and try again.",
      });
      console.error("Error sending message:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[500px] rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto w-[min(92%,1100px)]">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">04 — Contact</span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-5xl md:text-7xl font-bold leading-[0.95]"
          >
            Let's build <span className="text-gradient">something</span> great.
          </motion.h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Got a project, role, or idea? Drop me a message — I'll get back to you.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-background/60 backdrop-blur p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none focus:border-primary transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project…"
                rows={5}
                className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none focus:border-primary transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"} <Send className="size-4" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-border bg-background/60 backdrop-blur p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Reach me directly
              </p>
              <p className="mt-3 text-2xl font-semibold">Shyam Shaji</p>
              <a
                href="mailto:shyamshaji@example.com"
                className="mt-4 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
              >
                shyamshaji2614@gmail.com <ArrowUpRight className="size-4" />
              </a>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { Icon: FaGithub, href: "https://github.com/Shyam-Shaji", label: "GitHub" },
                  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/shyam-shaji/", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:shyamshaji2614@gmail.com", label: "Email" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="size-11 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors"
                    aria-label={label}
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-background/40 backdrop-blur p-6 md:p-8">
              <p className="text-sm text-muted-foreground">
                Currently open to <span className="text-foreground font-medium">freelance & junior MERN roles</span>. Typical reply within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="relative mt-24 mx-auto w-[min(92%,1200px)] flex flex-wrap items-center justify-between gap-3 pt-8 border-t border-border text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Shyam Shaji — Built with ◉ MERN.</span>
        <span className="font-mono text-xs">crafted with care</span>
      </footer>
    </section>
  );
}