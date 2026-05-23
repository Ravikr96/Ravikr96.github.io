import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  className,
  href,
  external,
  onClick,
  variant = "primary",
  type = "button",
  disabled,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const variants = {
    primary:
      "bg-white text-zinc-950 hover:bg-zinc-100 shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)]",
    secondary:
      "glass text-white hover:border-white/20 hover:bg-white/[0.06]",
    ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
  };

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.span
      style={reduced ? undefined : { x: springX, y: springY }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300",
        variants[variant],
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {children}
    </motion.span>
  );

  const wrapperClass = "inline-block";

  if (href) {
    return (
      <div
        ref={ref}
        className={wrapperClass}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <a
          href={href}
          aria-label={ariaLabel}
          className="block"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={wrapperClass}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
        className="block w-full"
      >
        {inner}
      </button>
    </div>
  );
}
