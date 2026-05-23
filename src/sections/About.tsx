import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligence into enterprise platforms"
          description="I bridge the gap between cutting-edge AI research and production systems that teams rely on every day."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-base leading-relaxed text-zinc-400"
          >
            <p>
              With over seven years across healthcare, gaming, media, and
              enterprise, I architect systems where data engineering meets
              generative AI — from lakehouse migrations to autonomous agents
              that reason over your organization&apos;s knowledge.
            </p>
            <p>
              At ConcertAI, I lead initiatives spanning Agentic RAG assistants,
              AI observability platforms, MCP tool orchestration, and
              production LLMOps pipelines on AWS and Databricks. Previously at
              Agilisium and LinkCXO, I delivered ML platforms, MLOps
              infrastructure, and AI products from concept to deployment.
            </p>
            <p>
              I work best at the intersection of platform engineering and AI
              product development — turning complex requirements into reliable,
              measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="glass glow-ring rounded-2xl p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a
                    href={site.links.email}
                    className="hover:text-white transition-colors"
                  >
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <Phone className="h-4 w-4 text-indigo-400" />
                  {site.phone}
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  {site.location}
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-500">
                Education
              </h3>
              <p className="font-medium text-white">{education.school}</p>
              <p className="mt-1 text-sm text-zinc-400">{education.degree}</p>
              <p className="mt-2 text-xs text-zinc-500">
                {education.period} · {education.location}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {site.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-semibold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
