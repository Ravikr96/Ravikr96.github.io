import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Mail,
  Search,
} from "lucide-react";
import { useEffect } from "react";
import { navItems, site } from "@/data/site";
import { projects } from "@/data/projects";

type CommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[20%] z-[201] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2"
          >
            <Command
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12] shadow-2xl"
              label="Command menu"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4">
                <Search className="h-4 w-4 shrink-0 text-zinc-500" />
                <Command.Input
                  placeholder="Search sections, projects, links..."
                  className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-zinc-500">
                  No results found.
                </Command.Empty>

                <Command.Group
                  heading="Navigate"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500"
                >
                  {navItems.map((item) => (
                    <Command.Item
                      key={item.id}
                      value={item.label}
                      onSelect={() => scrollTo(item.id)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/10 aria-selected:text-white"
                    >
                      <ArrowDown className="h-4 w-4 rotate-[-90deg] text-zinc-500" />
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group
                  heading="Projects"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500"
                >
                  {projects.slice(0, 6).map((p) => (
                    <Command.Item
                      key={p.id}
                      value={p.title}
                      onSelect={() => scrollTo("projects")}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/10 aria-selected:text-white"
                    >
                      <Briefcase className="h-4 w-4 text-zinc-500" />
                      {p.title}
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group
                  heading="Links"
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-zinc-500"
                >
                  <Command.Item
                    value="Resume PDF"
                    onSelect={() => window.open(site.resumeUrl, "_blank")}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <FileText className="h-4 w-4 text-zinc-500" />
                    Download Resume
                  </Command.Item>
                  <Command.Item
                    value="Email"
                    onSelect={() => {
                      window.location.href = site.links.email;
                      onOpenChange(false);
                    }}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Mail className="h-4 w-4 text-zinc-500" />
                    {site.email}
                  </Command.Item>
                  <Command.Item
                    value="GitHub"
                    onSelect={() => window.open(site.links.github, "_blank")}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Github className="h-4 w-4 text-zinc-500" />
                    GitHub
                  </Command.Item>
                  <Command.Item
                    value="LinkedIn"
                    onSelect={() => window.open(site.links.linkedin, "_blank")}
                    className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 aria-selected:bg-white/10 aria-selected:text-white"
                  >
                    <Linkedin className="h-4 w-4 text-zinc-500" />
                    LinkedIn
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
