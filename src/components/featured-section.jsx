import {
  Check,
  ArrowUpRight,
  BarChart3,
  PieChart,
  Activity,
  Sparkles,
} from "lucide-react";
import SectionLayout from "./section-layout";

const featuredServices = [
  {
    category: "Search Engine Optimization",
    title: "Dominate Search Rankings",
    description:
      "Our comprehensive SEO strategies help you rank higher, attract more qualified traffic, and convert visitors into customers. We focus on sustainable, white-hat techniques that deliver long-term results.",
    benefits: [
      {
        title: "Technical SEO Excellence",
        description:
          "Optimize site structure, speed, and mobile responsiveness for better search performance.",
      },
      {
        title: "Content Optimization",
        description:
          "Create and optimize compelling content that ranks well and engages your audience.",
      },
      {
        title: "Authority Building",
        description:
          "Build high-quality backlinks and establish your brand as an industry authority.",
      },
    ],
    stat: { value: "3.2x", label: "Average Traffic Increase" },
  },
  {
    category: "Social Media Marketing",
    title: "Build Meaningful Connections",
    description:
      "Transform your social media presence into a powerful business asset. We create engaging content, build communities, and drive real business results across all major platforms.",
    benefits: [
      {
        title: "Strategic Content Planning",
        description:
          "Develop content calendars that resonate with your audience and align with business goals.",
      },
      {
        title: "Community Engagement",
        description:
          "Foster authentic relationships and turn followers into brand advocates.",
      },
      {
        title: "Performance Analytics",
        description:
          "Track metrics that matter and continuously optimize for better results.",
      },
    ],
    stat: { value: "450%", label: "Avg Engagement Boost" },
  },
];

export default function FeaturedServicesDeep() {
  return (
    <SectionLayout className="bg-gradient-to-b from-transparent via-[var(--color-secondary)]/20 to-transparent">
      <div className="space-y-32 lg:space-y-40">
        {featuredServices.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)]/10 via-[var(--color-secondary)]/50 to-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 backdrop-blur-sm">
                  <Sparkles
                    size={14}
                    className="text-[var(--color-primary)] fill-[var(--color-primary)]"
                  />
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-foreground)]">
                    {service.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-foreground)] leading-[1.05] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-xl text-[var(--color-muted)] leading-relaxed font-medium max-w-xl">
                    {service.description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 pt-4">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="group flex gap-5 p-6 rounded-2xl bg-[var(--color-card)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-all duration-300 hover:-translate-x-2"
                    >
                      <div className="flex-shrink-0">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                          {/* Gradient border */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
                          {/* Inner background */}
                          <div className="relative w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-xl bg-[var(--color-card)] flex items-center justify-center">
                            <Check
                              size={20}
                              className="text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300"
                              strokeWidth={3}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-extrabold text-lg text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed font-medium">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side - Stats Card */}
              <div className="flex-1 w-full">
                <div className="relative aspect-square lg:aspect-[4/3] bg-gradient-to-br from-[var(--color-card)] to-[var(--color-secondary)]/30 rounded-3xl shadow-2xl border-2 border-[var(--color-border)] p-8 lg:p-10 overflow-hidden group hover:border-[var(--color-primary)] transition-all duration-500 hover:shadow-[var(--color-primary)]/20">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent rounded-full blur-3xl" />

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

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    {/* Header with Icon and Stat */}
                    <div className="flex justify-between items-start">
                      <div className="p-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {index === 0 ? (
                          <BarChart3 className="text-white" size={32} />
                        ) : index === 1 ? (
                          <PieChart className="text-white" size={32} />
                        ) : (
                          <Activity className="text-white" size={32} />
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent mb-2">
                          {service.stat.value}
                        </div>
                        <div className="text-sm font-bold text-[var(--color-muted)] uppercase tracking-wide">
                          {service.stat.label}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-5 mt-12">
                      {[...Array(3)].map((_, i) => {
                        const percentage = 80 + i * 5;
                        return (
                          <div key={i} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-wide">
                                Metric {String.fromCharCode(65 + i)}
                              </span>
                              <span className="text-sm font-extrabold text-[var(--color-primary)]">
                                {percentage}%
                              </span>
                            </div>
                            <div className="h-3 w-full bg-[var(--color-secondary)] rounded-full overflow-hidden shadow-inner">
                              <div
                                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full transition-all duration-1000 group-hover:scale-x-105 origin-left shadow-lg"
                                style={{
                                  width: `${percentage}%`,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Floating Action Badge */}
                    <div className="absolute bottom-0 right-0 bg-gradient-to-r from-[var(--color-foreground)] to-[var(--color-foreground)]/90 text-[var(--color-background)] px-8 py-4 rounded-tl-3xl shadow-2xl flex items-center gap-3 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-sm font-extrabold uppercase tracking-wider">
                        Explore More
                      </span>
                      <ArrowUpRight size={20} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}
