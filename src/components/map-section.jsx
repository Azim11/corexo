import { MapPin, Navigation, Sparkles } from "lucide-react";

export default function MapSection() {
  return (
    <div className="w-full h-[600px] relative overflow-hidden bg-[var(--color-secondary)]">
      {/* Map with Grayscale Filter */}
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="Office Location"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(VoxElite)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="relative z-0 opacity-70"
        style={{ filter: "grayscale(100%) contrast(1.2) brightness(0.9)" }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 via-transparent to-[var(--color-accent)]/10 pointer-events-none" />

      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Info Card */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-10">
        <div className="relative bg-[var(--color-card)]/95 backdrop-blur-glass p-8 lg:p-10 rounded-3xl shadow-2xl border-2 border-[var(--color-border)] overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Icon Container */}
            <div className="flex-shrink-0">
              <div className="relative w-16 h-16">
                {/* Pulsing background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-20 blur-xl animate-pulse-slow" />

                {/* Icon */}
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center shadow-lg">
                  <MapPin size={32} className="text-white" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-3">
                <Sparkles
                  size={16}
                  className="text-[var(--color-primary)] fill-[var(--color-primary)]"
                />
                <h4 className="font-extrabold text-[var(--color-foreground)] text-2xl">
                  Our Headquarters
                </h4>
              </div>

              <p className="text-[var(--color-muted)] text-base mb-6 leading-relaxed font-medium">
                123 Digital Avenue, Tech District
                <br />
                New York, NY 10012, United States
              </p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-[var(--color-primary)]/40 transition-all duration-300 hover:scale-105 group"
              >
                <Navigation
                  size={20}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-[var(--color-primary)] opacity-50 animate-pulse" />
      <div
        className="absolute top-20 right-20 w-2 h-2 rounded-full bg-[var(--color-accent)] opacity-50 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-50 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
