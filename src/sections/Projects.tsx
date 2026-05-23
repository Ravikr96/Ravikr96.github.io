import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "group glass overflow-hidden rounded-2xl transition-all duration-500 hover:border-white/15",
        project.featured && "md:col-span-2",
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />
        {project.featured && (
          <span className="absolute top-4 left-4 rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-medium text-white">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
          {project.subtitle}
        </p>
        <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-zinc-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm text-zinc-400 transition hover:text-white"
            aria-expanded={expanded}
          >
            Case study
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                expanded && "rotate-180",
              )}
            />
          </button>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
                aria-label={`GitHub — ${project.title}`}
              >
                <Github size={16} />
              </a>
            )}
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
              aria-label="View details"
            >
              <ExternalLink size={16} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-zinc-300 before:content-['→'] before:text-indigo-400"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 px-2 py-0.5 text-xs text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Work"
          title="Projects that ship impact"
          description="Enterprise AI platforms, data engineering at scale, and production ML systems."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-all",
                filter === cat.id
                  ? "bg-white text-zinc-950"
                  : "text-zinc-400 hover:text-white",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
