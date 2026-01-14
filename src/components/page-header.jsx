import { ChevronRight, Home, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-b from-[var(--color-background)] to-transparent overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-t from-[var(--color-secondary)]/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial Dots Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--color-card)]/80 backdrop-blur-glass border-2 border-[var(--color-border)] rounded-full shadow-lg mb-10 animate-fade-in-up">
            <Link
              to="/"
              className="group flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              <div className="p-1.5 bg-[var(--color-secondary)]/50 rounded-lg group-hover:bg-[var(--color-primary)]/10 transition-colors duration-300">
                <Home size={14} strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider">
                Home
              </span>
            </Link>

            <ChevronRight
              size={16}
              className="text-[var(--color-border)]"
              strokeWidth={2.5}
            />

            <div className="flex items-center gap-2">
              <Sparkles
                size={14}
                className="text-[var(--color-primary)] fill-[var(--color-primary)]"
              />
              <span className="text-sm font-extrabold text-[var(--color-primary)] uppercase tracking-wider">
                {breadcrumb || title}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[var(--color-foreground)] tracking-tight leading-[0.95] mb-8 max-w-5xl">
            {title}
          </h1>

          {/* Decorative Element */}
          <div className="relative flex items-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-[var(--color-primary)] rounded-full" />
            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] shadow-lg shadow-[var(--color-primary)]/50 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-l from-transparent via-[var(--color-accent)] to-[var(--color-accent)] rounded-full" />
          </div>

          {/* Optional Description Area */}
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-secondary)]/30 border border-[var(--color-border)] rounded-full">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-sm text-[var(--color-muted)] font-medium">
                Scroll to explore
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent pointer-events-none" />
    </div>
  );
}
