import SectionLayout from "./section-layout";
import { Users, Target, Package, Flag } from "lucide-react";
import { data } from "../data/data";

export default function IdentitySection() {
  return (
    <SectionLayout className="bg-[var(--color-background)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {data.about.identity.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative p-8 lg:p-10 bg-[var(--color-card)] rounded-3xl border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500" />
                  {/* Inner background */}
                  <div className="relative w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl bg-[var(--color-card)] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] transition-all duration-500">
                    <Icon
                      size={32}
                      className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-500"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Index badge */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white text-xs font-extrabold shadow-lg border-4 border-[var(--color-card)]">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-extrabold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Decorative line */}
                <div className="h-1 w-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full group-hover:w-full transition-all duration-700" />

                <p className="text-[var(--color-muted)] text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-accent)]/5 transition-all duration-500 pointer-events-none" />
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}
