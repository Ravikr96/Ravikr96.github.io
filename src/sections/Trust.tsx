import { motion } from "framer-motion";
import { Quote, Shield, Users, Zap } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

const trustPoints = [
  {
    icon: Shield,
    title: "Enterprise-grade delivery",
    description:
      "Production systems with governance, observability, and security built in from day one.",
  },
  {
    icon: Zap,
    title: "Measurable outcomes",
    description:
      "50% faster onboarding, 60% engineering effort reduction — impact you can quantify.",
  },
  {
    icon: Users,
    title: "Cross-functional collaboration",
    description:
      "Proven track record partnering with data, platform, and product teams in fast-moving environments.",
  },
];

const placeholderTestimonials = [
  {
    quote:
      "Placeholder for client testimonial — replace with a quote from a manager or client when available.",
    author: "Engineering Leader",
    role: "Enterprise Healthcare",
  },
  {
    quote:
      "Your testimonial architecture is ready. Add real quotes to strengthen freelance conversion.",
    author: "Product Manager",
    role: "Data Platform Team",
  },
];

export function Trust() {
  return (
    <section id="trust" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Trust"
          title="Built for teams that demand reliability"
          description="Whether you're hiring or engaging for freelance — credibility starts with outcomes."
          align="center"
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <point.icon className="mx-auto mb-4 h-8 w-8 text-indigo-400" />
              <h3 className="font-medium text-white">{point.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {placeholderTestimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass relative rounded-2xl p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-indigo-500/50" />
              <p className="text-sm italic leading-relaxed text-zinc-400">
                {t.quote}
              </p>
              <footer className="mt-4 border-t border-white/5 pt-4">
                <p className="text-sm font-medium text-white">{t.author}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 p-8 text-center"
        >
          <p className="text-lg font-medium text-white">
            {site.availability}
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Open to full-time roles, contract engagements, and technical advisory.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
