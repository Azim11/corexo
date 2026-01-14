import {
  ArrowUpRight,
  Target,
  TrendingUp,
  Users,
  Megaphone,
  BarChart3,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";

const services = [
  {
    id: 1,
    title: "SEO Optimization",
    description:
      "Dominate search rankings and capture high-intent organic traffic with data-driven SEO strategies.",
    icon: TrendingUp,
    features: [
      "Keyword Research",
      "Technical SEO",
      "Link Building",
      "Content Optimization",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and amplify your brand across every social platform that matters.",
    icon: Users,
    features: [
      "Content Strategy",
      "Community Growth",
      "Paid Social Ads",
      "Influencer Campaigns",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "PPC Advertising",
    description:
      "Turn ad spend into revenue with precision-targeted campaigns optimized for maximum ROI.",
    icon: Target,
    features: [
      "Google Ads",
      "Meta Advertising",
      "Conversion Optimization",
      "Budget Scaling",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Content Marketing",
    description:
      "Craft compelling narratives that educate, engage, and convert your target audience.",
    icon: Megaphone,
    features: [
      "Blog Strategy",
      "Video Marketing",
      "Email Campaigns",
      "Content Distribution",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Analytics & Insights",
    description:
      "Transform raw data into actionable intelligence that drives strategic decision-making.",
    icon: BarChart3,
    features: [
      "Performance Tracking",
      "Custom Reporting",
      "Competitor Intelligence",
      "Predictive Analytics",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Brand Strategy",
    description:
      "Build a distinctive brand identity that cuts through the noise and resonates deeply.",
    icon: Zap,
    features: [
      "Brand Positioning",
      "Visual Identity",
      "Brand Guidelines",
      "Market Differentiation",
    ],
    color: "from-pink-500 to-rose-500",
  },
];

export default function ServicesSection() {
  return (
    <SectionLayout className="bg-gradient-to-b from-transparent via-[var(--color-secondary)]/20 to-transparent">
      <SectionHeader
        subtitle="What We Do"
        title="Comprehensive Digital Solutions"
        description="End-to-end marketing services designed to accelerate growth and maximize your digital presence."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="group relative">
              {/* Card */}
              <div className="relative h-full flex flex-col p-8 lg:p-10 bg-[var(--color-card)] rounded-3xl border-2 border-[var(--color-border)] transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-2xl hover:shadow-[var(--color-primary)]/20 hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className="relative mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className="w-full h-full bg-[var(--color-card)] rounded-2xl flex items-center justify-center">
                      <Icon
                        size={32}
                        className="text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Index Number */}
                  <span className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center text-xs font-extrabold text-[var(--color-primary)] bg-[var(--color-secondary)] border-2 border-[var(--color-border)] rounded-full">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-[var(--color-foreground)] mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[var(--color-muted)] leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium text-[var(--color-muted-foreground)]"
                      >
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t-2 border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-sm font-bold text-[var(--color-muted)] uppercase tracking-wider">
                    Learn More
                  </span>
                  <Link
                    to="/service"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] border-2 border-[var(--color-border)] group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-primary-foreground)] group-hover:border-[var(--color-primary)] group-hover:scale-110 transition-all duration-300"
                  >
                    <ArrowUpRight size={22} strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 group-hover:from-[var(--color-primary)]/5 group-hover:to-[var(--color-accent)]/5 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <Link
          to="/service"
          className="inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-[var(--color-primary-foreground)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 hover:scale-105 transition-all duration-300"
        >
          View All Services
          <ArrowUpRight size={22} />
        </Link>
      </div>
    </SectionLayout>
  );
}
