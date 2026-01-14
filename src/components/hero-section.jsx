import SectionLayout from "./section-layout";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, TrendingUp, Zap, Target } from "lucide-react";
import contactInfo from "../data/contactInfo";

export default function HeroSection() {
  const { tagline, description } = contactInfo;

  return (
    <SectionLayout className="pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh]">
        {/* Left Column: Bold Typography & CTA */}
        <div className="space-y-8 lg:pr-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-primary)]/20 rounded-full backdrop-blur-sm">
            <Zap
              size={16}
              className="text-[var(--color-primary)] fill-current"
            />
            <span className="text-sm font-bold text-[var(--color-foreground)] uppercase tracking-wider">
              #1 Digital Marketing Agency
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl  font-extrabold tracking-tight text-[var(--color-foreground)] leading-[0.95] text-balance">
              {tagline}
              <span className="block mt-3 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] bg-clip-text text-transparent animate-gradient">
                Digital Excellence.
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-[var(--color-muted)] max-w-xl leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/contact-us"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[var(--color-primary-foreground)] bg-[var(--color-primary)] rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/service"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[var(--color-foreground)] bg-[var(--color-card)] border-2 border-[var(--color-border)] rounded-full hover:border-[var(--color-primary)] hover:bg-[var(--color-secondary)]/30 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5 fill-current text-[var(--color-primary)]" />
              Explore Services
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap items-center gap-8 pt-8 border-t-2 border-[var(--color-border)]">
            {/* Client Avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-[var(--color-background)] bg-[var(--color-secondary)] overflow-hidden ring-2 ring-[var(--color-primary)]/20"
                  >
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-0.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                    />
                  ))}
                </div>
                <p className="text-sm font-bold text-[var(--color-foreground)]">
                  Rated 4.9/5 by 500+ clients
                </p>
              </div>
            </div>

            {/* Stat Badge */}
            <div className="flex items-center gap-3 px-5 py-3 bg-[var(--color-card)] border border-[var(--color-border)] rounded-full shadow-lg">
              <TrendingUp className="text-[var(--color-primary)]" size={24} />
              <div>
                <p className="text-2xl font-bold text-[var(--color-foreground)]">
                  2.5M+
                </p>
                <p className="text-xs text-[var(--color-muted)] font-medium">
                  Leads Generated
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Image with Floating Elements */}
        <div className="relative lg:h-[700px] w-full flex items-center justify-center">
          {/* Main Hero Image */}
          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=1400&fit=crop"
              alt="Digital Marketing Team"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-foreground)]/60 via-[var(--color-primary)]/20 to-transparent" />

            {/* Overlay Content */}
            <div className="absolute bottom-8 left-8 right-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-card)]/90 backdrop-blur-md rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-[var(--color-foreground)]">
                  Live Campaign Active
                </span>
              </div>
            </div>
          </div>

          {/* Floating Card 1 - Top Right */}
          <div className="absolute -top-4 -right-4 lg:right-0 z-20 p-6 bg-[var(--color-card)] rounded-2xl shadow-2xl border border-[var(--color-border)] animate-float max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-[var(--color-muted)] uppercase tracking-wide">
                ROI Growth
              </span>
              <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp size={20} className="text-green-600" />
              </div>
            </div>
            <p className="text-4xl font-extrabold text-[var(--color-foreground)] mb-1">
              +347%
            </p>
            <p className="text-sm text-[var(--color-muted)] font-medium">
              Average client increase
            </p>
          </div>

          {/* Floating Card 2 - Bottom Left */}
          <div
            className="absolute -bottom-4 -left-4 lg:left-0 z-20 p-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl shadow-2xl max-w-xs"
            style={{ animationDelay: "1s" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-white" size={28} />
              <div>
                <p className="text-3xl font-extrabold text-white">98%</p>
                <p className="text-sm text-white/80 font-medium">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[var(--color-primary)]/30 via-[var(--color-accent)]/20 to-transparent rounded-full blur-3xl opacity-60 scale-110" />
        </div>
      </div>

      {/* Bottom Trust Indicators */}
      <div className="mt-20 pt-12 border-t-2 border-[var(--color-border)]">
        <p className="text-center text-sm text-[var(--color-muted)] font-semibold uppercase tracking-wider mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {["ACME Corp", "GlobalTech", "Nebula", "Circle"].map((brand, i) => (
            <div
              key={i}
              className="group px-8 py-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300"
            >
              <span className="text-2xl font-extrabold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
