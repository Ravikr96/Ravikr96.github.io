import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current =
    skillCategories.find((c) => c.id === active) ?? skillCategories[0];

  return (
    <section id="skills" className="section-padding border-y border-white/5 bg-[#08080f]">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Expertise"
          title="Deep technical range across the AI stack"
          description="From vector search to lakehouse governance — production systems, not prototypes."
        />

        <div className="flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all duration-300",
                active === cat.id
                  ? "border-indigo-500/50 bg-indigo-500/15 text-white"
                  : "border-white/10 text-zinc-400 hover:border-white/20 hover:text-white",
              )}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 glass glow-ring rounded-2xl p-6 md:p-8"
        >
          <p className="mb-8 max-w-2xl text-zinc-400">{current.description}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {current.skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-zinc-200">{skill.name}</span>
                  <span className="text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
