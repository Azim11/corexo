import { Sparkles } from "lucide-react";

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
}) {
  return (
    <div
      className={`mb-16 md:mb-24 space-y-6 ${
        centered ? "text-center mx-auto max-w-4xl" : "max-w-3xl"
      }`}
    >
      {subtitle && (
        <div
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-secondary)]/50 to-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 backdrop-blur-sm ${
            centered ? "mx-auto" : ""
          }`}
        >
          <Sparkles
            size={16}
            className="text-[var(--color-primary)] fill-[var(--color-primary)]"
          />
          <span className="text-sm font-extrabold uppercase tracking-widest text-[var(--color-foreground)]">
            {subtitle}
          </span>
        </div>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[var(--color-foreground)] leading-[1.05] text-balance">
        {title}
      </h2>

      {description && (
        <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-muted)] leading-relaxed font-medium max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
