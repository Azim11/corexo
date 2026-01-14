import { Mail, Phone, Quote, Sparkles } from "lucide-react";
import SectionLayout from "./section-layout";
import { data } from "../data/data";

export default function LeadershipSection() {
  const { leadership } = data.about;

  return (
    <SectionLayout>
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-[var(--color-card)] to-[var(--color-secondary)]/20 rounded-3xl p-10 md:p-16 lg:p-20 shadow-2xl border-2 border-[var(--color-border)] overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent rounded-full blur-3xl" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(var(--color-border) 1px, transparent 1px),
                linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
              `,
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-secondary)]/50 to-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full backdrop-blur-sm mb-10">
              <Sparkles
                size={14}
                className="text-[var(--color-primary)] fill-[var(--color-primary)]"
              />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-foreground)]">
                Leadership
              </span>
            </div>

            {/* Avatar with Gradient Ring */}
            <div className="relative mb-10">
              {/* Pulsing outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-30 blur-xl animate-pulse-slow" />

              {/* Gradient border */}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-4xl font-extrabold text-white">
                  {leadership.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
            </div>

            {/* Name & Position */}
            <div className="space-y-3 mb-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] tracking-tight">
                {leadership.name}
              </h2>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full">
                <span className="text-lg font-bold text-[var(--color-primary)]">
                  {leadership.position}
                </span>
              </div>
            </div>

            {/* Quote Section */}
            <div className="relative max-w-3xl mx-auto mb-12 p-8 bg-[var(--color-secondary)]/30 rounded-2xl border border-[var(--color-border)]">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-lg">
                <Quote size={24} className="text-white" />
              </div>

              <blockquote className="text-xl md:text-2xl text-[var(--color-foreground)] leading-relaxed font-medium italic pt-6">
                "{leadership.bio}"
              </blockquote>

              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="h-1 w-12 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent rounded-full" />
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                <div className="h-1 w-12 bg-gradient-to-l from-transparent via-[var(--color-accent)] to-transparent rounded-full" />
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
              <a
                href={`mailto:${leadership.contact.email}`}
                className="group flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[var(--color-card)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-2 bg-[var(--color-secondary)] rounded-lg group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <Mail
                    size={20}
                    className="text-[var(--color-foreground)] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider mb-1">
                    Email
                  </div>
                  <div className="font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {leadership.contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${leadership.contact.phone}`}
                className="group flex-1 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 transition-all duration-300 hover:scale-105"
              >
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Phone size={20} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1">
                    Phone
                  </div>
                  <div className="font-bold text-white">
                    {leadership.contact.phone}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
