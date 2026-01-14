import { ArrowUpRight, TrendingUp } from "lucide-react";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import { Link } from "react-router-dom";

const successStories = [
  {
    company: "TechFlow Solutions",
    industry: "SaaS Technology",
    challenge:
      "Struggling with low organic visibility and minimal lead generation despite having a great product.",
    solution:
      "Implemented comprehensive SEO strategy combined with targeted content marketing and PPC campaigns.",
    metrics: [
      { value: "245%", label: "Traffic Growth" },
      { value: "180%", label: "Lead Increase" },
      { value: "320%", label: "ROI Boost" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    company: "Urban Fitness Co",
    industry: "Health & Wellness",
    challenge:
      "Low social media engagement and difficulty reaching younger demographics in competitive market.",
    solution:
      "Developed multi-platform social strategy with influencer partnerships and community-driven content.",
    metrics: [
      { value: "500%", label: "Engagement Up" },
      { value: "12K", label: "New Followers" },
      { value: "85%", label: "Brand Recall" },
    ],
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
  },
];

export default function SuccessStoriesSection() {
  return (
    <SectionLayout className="bg-[var(--color-background)]">
      <SectionHeader
        subtitle="Case Studies"
        title="Real Impact, Real Results"
        description="We don't just promise results; we engineer them. See how we've transformed businesses similar to yours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="group relative flex flex-col bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-3xl overflow-hidden hover:border-[var(--color-primary)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Header */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={story.image}
                alt={story.company}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-foreground)]/80 via-[var(--color-primary)]/20 to-transparent" />

              {/* Floating Trend Badge */}
              <div className="absolute top-6 right-6 p-3 bg-[var(--color-card)]/95 backdrop-blur-md rounded-xl border border-[var(--color-border)] shadow-lg">
                <TrendingUp size={24} className="text-[var(--color-primary)]" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-8 lg:p-10">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-3xl font-extrabold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {story.company}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] uppercase tracking-widest font-bold">
                    {story.industry}
                  </p>
                </div>
                <div className="p-3 bg-[var(--color-secondary)]/50 rounded-full group-hover:bg-gradient-to-br group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] transition-all duration-300">
                  <ArrowUpRight
                    size={24}
                    className="text-[var(--color-foreground)] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {story.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="relative p-5 bg-gradient-to-br from-[var(--color-secondary)]/30 to-[var(--color-secondary)]/10 rounded-2xl border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/30 transition-colors duration-300 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/10 group-hover:to-[var(--color-accent)]/10 transition-all duration-300" />

                    <div className="relative z-10">
                      <div className="text-3xl font-extrabold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent mb-2">
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-[var(--color-muted-foreground)] uppercase tracking-wide">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 flex-1">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full" />
                    <span className="text-xs font-extrabold text-[var(--color-muted)] uppercase tracking-widest">
                      Challenge
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-foreground)] leading-relaxed font-medium pl-4">
                    {story.challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-primary)] rounded-full" />
                    <span className="text-xs font-extrabold text-[var(--color-muted)] uppercase tracking-widest">
                      Solution
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-foreground)] leading-relaxed font-medium pl-4">
                    {story.solution}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t-2 border-[var(--color-border)] flex items-center justify-between">
                <Link
                  to="/contact-us"
                  className="text-sm font-extrabold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 uppercase tracking-wider flex items-center gap-2 group/link"
                >
                  Read Full Case Study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-accent)]/5 transition-all duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <div className="inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-r from-[var(--color-card)] via-[var(--color-secondary)]/30 to-[var(--color-card)] rounded-3xl border-2 border-[var(--color-border)] shadow-xl">
          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-[var(--color-foreground)] mb-3">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-[var(--color-muted)] font-medium">
              Let's create results that exceed your expectations.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-[var(--color-primary-foreground)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ArrowUpRight size={22} />
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}
