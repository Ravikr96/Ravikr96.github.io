import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-y border-white/5 bg-[#08080f]"
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Career"
          title="Experience built in production"
          description="Delivering measurable outcomes across healthcare AI, gaming analytics, and enterprise platforms."
        />

        <div className="relative">
          <div
            className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid gap-6 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`md:text-right ${index % 2 === 1 ? "md:order-2 md:text-left" : ""}`}
                >
                  <div
                    className={`flex items-start gap-4 md:justify-end ${index % 2 === 1 ? "md:justify-start" : ""}`}
                  >
                    <span className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-bold text-indigo-300 md:absolute md:left-1/2 md:-translate-x-1/2">
                      {String(experience.length - index).padStart(2, "0")}
                    </span>
                    <div className={index % 2 === 1 ? "md:pl-14" : "md:pr-14"}>
                      <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
                        {job.period}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl text-white">
                        {job.company}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {job.role} · {job.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`glass rounded-2xl p-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <ul className="space-y-3">
                    {job.highlights.map((h) => (
                      <li
                        key={h.slice(0, 40)}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
