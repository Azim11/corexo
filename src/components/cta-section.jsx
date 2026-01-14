import { ArrowRight, Mail, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLayout from "./section-layout";

export default function CTASection() {
  return (
    <SectionLayout className="py-0 sm:py-0">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
        {/* Main Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl animate-pulse-slow" />
          <div
            className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-white blur-3xl animate-pulse-slow"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute -bottom-32 left-1/3 w-64 h-64 rounded-full bg-black blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(white 2px, transparent 2px),
              linear-gradient(90deg, white 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal Lines Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 37px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-8 py-20 sm:px-16 sm:py-28 lg:py-32 text-center">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
              <Sparkles size={16} className="text-white fill-white" />
              <span className="text-sm font-extrabold uppercase tracking-widest text-white">
                Let's Get Started
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Ready to Transform Your
              <span className="block mt-2">Digital Presence?</span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
              Join 500+ successful companies who have scaled their business with
              our data-driven strategies and expert execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                to="/contact-us"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-extrabold text-[var(--color-primary)] bg-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={3}
                />
              </Link>

              <Link
                to="/service"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-extrabold text-white border-2 border-white/40 rounded-full hover:bg-white/20 hover:border-white backdrop-blur-sm transition-all duration-300"
              >
                <Mail size={22} strokeWidth={2.5} />
                Schedule a Call
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Zap size={20} className="text-white" />
                </div>
                <span className="text-sm font-bold">Free Consultation</span>
              </div>

              <div className="hidden sm:block h-8 w-px bg-white/30" />

              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold">
                  No Credit Card Required
                </span>
              </div>

              <div className="hidden sm:block h-8 w-px bg-white/30" />

              <div className="flex items-center gap-3 text-white/90">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold">24/7 Expert Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </SectionLayout>
  );
}
