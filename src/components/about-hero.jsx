import SectionLayout from "./section-layout";
import { Zap, Activity, TrendingUp, Award } from "lucide-react";
import contactInfo from "../data/contactInfo";

export default function AboutHero() {
  const hero = {
    title: "reshaping the digital landscape",
    subtitle: `About ${contactInfo.companyNameShort}`,
    description:
      "Founded on the belief that data and creativity are not mutually exclusive, we build digital ecosystems that allow businesses to thrive in an ever-changing world.",
  };

  return (
    <SectionLayout className="bg-gradient-to-b from-[var(--color-card)] via-transparent to-[var(--color-background)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <div className="relative z-10 space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-secondary)]/50 to-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full backdrop-blur-sm">
            <Activity
              size={16}
              className="text-[var(--color-primary)]"
              strokeWidth={2.5}
            />
            <span className="text-[var(--color-foreground)] font-extrabold text-xs uppercase tracking-widest">
              {hero.subtitle}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[var(--color-foreground)] leading-[1.05] tracking-tight">
            We are{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              {contactInfo.companyNameShort}
            </span>
            , {hero.title}
          </h2>

          {/* Description */}
          <p className="text-xl text-[var(--color-muted)] leading-relaxed max-w-2xl font-medium">
            {hero.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            {[
              { icon: TrendingUp, value: "10+", label: "Years Experience" },
              { icon: Award, value: "500+", label: "Projects Delivered" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="group relative p-6 bg-[var(--color-card)] rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-1"
                >
                  {/* Icon Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-lg">
                    <Icon size={20} className="text-white" />
                  </div>

                  <div className="text-4xl lg:text-5xl font-extrabold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[var(--color-muted)] uppercase tracking-wide">
                    {stat.label}
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-accent)]/5 transition-all duration-300 pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Grid */}
        <div className="relative">
          {/* Decorative Background Blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-accent)]/10 to-transparent blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-2 gap-4 lg:gap-6 relative z-10">
            {/* Column 1 */}
            <div className="space-y-4 lg:space-y-6 mt-12 lg:mt-16">
              <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                  alt="Team collaboration"
                  className="w-full h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-foreground)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                  alt="Strategic planning"
                  className="w-full h-40 lg:h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-4 lg:space-y-6">
              <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                  alt="Modern workspace"
                  className="w-full h-40 lg:h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                  alt="Team meeting"
                  className="w-full h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-foreground)]/80 via-[var(--color-primary)]/20 to-transparent" />

                {/* Overlay CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-8 py-4 bg-white/95 backdrop-blur-md rounded-full shadow-2xl border-2 border-[var(--color-primary)]">
                    <div className="flex items-center gap-3">
                      <Zap
                        size={24}
                        className="text-[var(--color-primary)] fill-[var(--color-primary)]"
                      />
                      <span className="text-lg font-extrabold text-[var(--color-foreground)]">
                        Join Our Team
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 lg:-left-10 z-20 p-6 lg:p-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-3xl shadow-2xl animate-float">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Award size={28} className="text-white" />
              </div>
              <div className="text-white">
                <div className="text-3xl font-extrabold leading-none mb-1">
                  98%
                </div>
                <div className="text-sm font-bold opacity-90 uppercase tracking-wide">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
