import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050508]">
      <div className="container-narrow section-padding flex flex-col items-center justify-between gap-6 py-12 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-white">{site.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            {site.title} · {site.location}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={site.links.email}
            className="rounded-full p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="text-xs text-zinc-600">
          © {year} {site.name}. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
