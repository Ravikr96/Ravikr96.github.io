import { motion } from "framer-motion";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Services() {
  return (
    <section
      id="services"
      className="section-padding border-y border-white/5 bg-[#08080f]"
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Freelance"
          title="Services for ambitious teams"
          description="From GenAI prototypes to production platforms — I deliver end-to-end with enterprise discipline."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-6 transition-colors duration-300 hover:border-white/15"
            >
              <service.icon className="mb-4 h-7 w-7 text-indigo-400 transition group-hover:text-cyan-400" />
              <h3 className="text-lg font-medium text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {service.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-xs text-zinc-500 before:mr-2 before:text-indigo-400 before:content-['·']"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <MagneticButton
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Discuss your project
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
