import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

type NavbarProps = {
  onOpenCommand: () => void;
};

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/5 bg-[#050508]/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav
          className="container-narrow mx-auto flex h-16 items-center justify-between px-5 md:px-8"
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="group flex items-center gap-2 text-sm font-semibold text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-bold">
              RK
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                  active === item.id
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenCommand}
              className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400 transition hover:border-white/20 hover:text-white sm:inline-flex"
              aria-label="Open command palette"
            >
              <kbd className="font-mono">⌘K</kbd>
            </button>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-950 transition hover:bg-zinc-100 sm:inline-block"
            >
              Resume
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-[#050508]/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-left text-sm",
                    active === item.id
                      ? "bg-white/10 text-white"
                      : "text-zinc-400",
                  )}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-zinc-950"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
