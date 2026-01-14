import SectionHeader from "./section-header";
import {
  Award,
  Users,
  TrendingUp,
  Target,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectionLayout from "./section-layout";

const whyUs = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "10+ years delivering campaigns that don't just meet expectations—they shatter them.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A powerhouse crew of strategists, creatives, and analysts who live and breathe digital.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Results",
    description:
      "Every decision backed by analytics. Every campaign optimized for maximum impact and ROI.",
  },
  {
    icon: Target,
    title: "Custom Strategy",
    description:
      "No cookie-cutter solutions. Every strategy is built specifically for your goals and market.",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description:
      "Real-time reporting and complete visibility into every metric that matters to your business.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description:
      "We leverage the latest tools and platforms to keep you ahead of the competition.",
  },
];

export default function WhyUsSection() {
  return (
    <SectionLayout className="relative">
      {/* Background Image Section */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=1200&fit=crop"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] via-transparent to-[var(--color-background)]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column - Header & Stats */}
        <div className="space-y-12">
          <SectionHeader
            centered={false}
            subtitle="Why Choose Us"
            title="Excellence Is Our Standard"
            description="We don't just execute campaigns—we build growth engines that compound results over time."
          />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                label: "Projects Completed",
                value: "850+",
                icon: CheckCircle2,
              },
              { label: "Client Satisfaction", value: "98%", icon: Sparkles },
              { label: "Years of Excellence", value: "10+", icon: Award },
              { label: "Expert Team", value: "45+", icon: Users },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="group relative p-8 bg-[var(--color-card)] rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-lg">
                    <Icon size={20} className="text-white" />
                  </div>

                  <div className="text-4xl lg:text-5xl font-extrabold text-[var(--color-primary)] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[var(--color-muted-foreground)] uppercase tracking-wide">
                    {stat.label}
                  </div>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-accent)]/5 transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--color-border)] h-64 lg:h-80">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Our team in action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-foreground)]/80 via-[var(--color-primary)]/20 to-transparent" />

            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 p-4 bg-[var(--color-card)]/95 backdrop-blur-md rounded-2xl border border-[var(--color-border)]">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-[var(--color-foreground)]">
                    +347%
                  </p>
                  <p className="text-xs font-bold text-[var(--color-muted)] uppercase">
                    Avg ROI Growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Feature Cards */}
        <div className="space-y-6">
          {whyUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex gap-6 p-8 bg-[var(--color-card)] rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-x-2"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
                    {/* Inner white background */}
                    <div className="relative w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl bg-[var(--color-card)] flex items-center justify-center">
                      <Icon
                        size={28}
                        className="text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl lg:text-2xl font-extrabold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-muted)] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-accent)]/5 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Quote Banner */}
      <div className="relative mt-24 p-12 lg:p-16 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm">
            <Sparkles size={32} className="text-white fill-white" />
          </div>

          <blockquote className="text-2xl lg:text-4xl font-extrabold text-white leading-tight">
            "We don't just follow trends—we create them. Your success is our
            obsession."
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-white/40 rounded-full" />
            <p className="text-lg font-bold text-white/90">CEO & Founder</p>
            <div className="h-1 w-12 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
