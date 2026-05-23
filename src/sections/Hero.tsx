import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { heroRoles, site } from "@/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedGrid } from "@/components/effects/AnimatedGrid";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % heroRoles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16"
    >
      <AnimatedGrid />

      <div className="container-narrow relative z-10 mx-auto px-5 py-20 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-indigo-400"
            >
              {site.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-[family-name:var(--font-display)] text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Building intelligent
              <br />
              <span className="text-gradient">systems at scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400"
            >
              {site.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 flex h-8 items-center gap-2 text-sm text-zinc-500"
            >
              <Sparkles className="h-4 w-4 text-indigo-400" />
              <span className="text-zinc-400">Specializing in</span>
              <span className="relative inline-block min-w-[220px] overflow-hidden text-white">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0"
                  >
                    {heroRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                href={site.resumeUrl}
                external
              >
                View resume
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 blur-2xl" />
              <div className="glow-ring relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-1">
                <img
                  src="/profile.jpg"
                  alt={`${site.name} — ${site.title}`}
                  width={320}
                  height={320}
                  className="aspect-square w-64 rounded-[1.35rem] object-cover sm:w-72 lg:w-80"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -bottom-4 -left-4 rounded-xl px-4 py-3 text-xs"
              >
                <p className="font-medium text-white">7+ years</p>
                <p className="text-zinc-500">Enterprise AI & Data</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="glass absolute -top-2 -right-2 rounded-xl px-4 py-3 text-xs"
              >
                <p className="font-medium text-white">GenAI · RAG</p>
                <p className="text-zinc-500">Agentic AI · LLMOps</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
