import { Link } from "react-router-dom";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Rocket,
  BarChart2,
  CheckCircle2,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Discovery & Research",
    description:
      "Deep-dive analysis of your business, competitors, and target audience to uncover hidden opportunities.",
    deliverables: ["Market Analysis", "Competitor Audit", "Audience Insights"],
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description:
      "Custom roadmap with crystal-clear objectives, measurable KPIs, and tactical execution plans.",
    deliverables: ["Strategic Roadmap", "KPI Framework", "Campaign Blueprint"],
  },
  {
    icon: Rocket,
    title: "Implementation",
    description:
      "Flawless execution leveraging cutting-edge tools and battle-tested best practices for maximum impact.",
    deliverables: ["Campaign Launch", "Content Creation", "Ad Deployment"],
  },
  {
    icon: BarChart2,
    title: "Optimize & Scale",
    description:
      "Continuous performance monitoring, data-driven refinement, and aggressive scaling of winning strategies.",
    deliverables: ["Performance Reports", "A/B Testing", "Growth Scaling"],
  },
];

export default function HowWeWorkSection() {
  return (
    <SectionLayout className="bg-gradient-to-b from-[var(--color-background)] via-[var(--color-secondary)]/10 to-[var(--color-background)]">
      <SectionHeader
        subtitle="Our Process"
        title="From Vision to Victory"
        description="A proven methodology that transforms ambitious goals into measurable results, every single time."
      />

      {/* Process Timeline */}
      <div className="relative max-w-7xl mx-auto mt-20">
        {/* Connecting Line - Desktop */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {process.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="group relative">
                {/* Vertical connector - Mobile/Tablet */}
                {index < process.length - 1 && (
                  <div className="lg:hidden absolute left-12 top-24 bottom-0 w-0.5 bg-[var(--color-border)]" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="relative z-20 mb-8">
                    {/* Pulsing background */}
                    <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-20 blur-xl animate-pulse-slow" />

                    {/* Main circle */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      {/* Gradient border */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] group-hover:scale-110 transition-all duration-500" />

                      {/* Inner circle */}
                      <div className="relative w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full bg-[var(--color-card)] flex items-center justify-center shadow-xl">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary)]/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon
                            size={32}
                            className="text-[var(--color-primary)]"
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-sm font-extrabold text-white shadow-lg border-4 border-[var(--color-background)] group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="relative p-8 bg-[var(--color-card)] rounded-2xl border-2 border-[var(--color-border)] group-hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 w-full">
                    <h3 className="text-xl lg:text-2xl font-extrabold text-[var(--color-foreground)] mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6 font-medium">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 pt-6 border-t border-[var(--color-border)]">
                      <p className="text-xs font-bold text-[var(--color-muted)] uppercase tracking-wider mb-3">
                        Key Deliverables:
                      </p>
                      {step.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-[var(--color-foreground)]"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-[var(--color-primary)] flex-shrink-0"
                          />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-accent)]/5 transition-all duration-300 pointer-events-none" />
                  </div>

                  {/* Arrow connector - Desktop */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-12 -right-8 z-10">
                      <ArrowRight
                        size={24}
                        className="text-[var(--color-primary)] opacity-40 group-hover:opacity-100 transition-opacity"
                        strokeWidth={3}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative p-10 lg:p-12 bg-gradient-to-r from-[var(--color-card)] via-[var(--color-secondary)]/30 to-[var(--color-card)] rounded-3xl border-2 border-[var(--color-border)] shadow-2xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full mb-4">
                  <Rocket size={16} className="text-[var(--color-primary)]" />
                  <span className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-wide">
                    Ready to Launch?
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold text-[var(--color-foreground)] mb-3">
                  Let's Start Your Journey
                </h3>
                <p className="text-lg text-[var(--color-muted)] font-medium">
                  Schedule a free consultation and discover how we can transform
                  your digital presence.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact-us"
                className="group flex-shrink-0 inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-[var(--color-primary-foreground)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
