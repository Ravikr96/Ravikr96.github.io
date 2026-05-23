import { motion } from "framer-motion";
import { Calendar, Github, Linkedin, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${name}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something exceptional"
          description="Hiring, freelance, or collaboration — I typically respond within 24 hours."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Currently accepting projects
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Prefer async? Email works best. For scheduling, add your Calendly
                link below.
              </p>
              <a
                href="#"
                className="mt-4 flex items-center gap-3 rounded-xl border border-dashed border-white/15 p-4 text-sm text-zinc-500 transition hover:border-white/25 hover:text-zinc-300"
                onClick={(e) => e.preventDefault()}
                title="Replace href with your Calendly URL"
              >
                <Calendar className="h-5 w-5 text-indigo-400" />
                Calendly — add your link
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm text-zinc-300 transition hover:text-white"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm text-zinc-300 transition hover:text-white"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>

            <a
              href={site.links.email}
              className="flex items-center gap-3 text-sm text-zinc-400 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-indigo-400" />
              {site.email}
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass glow-ring space-y-5 rounded-2xl p-6 md:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Name
                </span>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500/50"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500/50"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-500">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500/50"
                placeholder="Tell me about your project, role, or timeline..."
              />
            </label>
            <MagneticButton type="submit" className="w-full sm:w-auto">
              {submitted ? "Opening email client…" : "Send message"}
              <Send className="h-4 w-4" />
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
