import React from "react";
import { Link } from "react-router-dom";
import { Check, Zap, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";
import { data } from "../data/data";

export default function PricingSection() {
  const { header, tiers } = data.pricing;

  return (
    <SectionLayout className="bg-gradient-to-b from-[var(--color-background)] via-[var(--color-secondary)]/10 to-[var(--color-background)]">
      <SectionHeader
        subtitle={header.subtitle}
        title={header.title}
        description={header.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-16">
        {tiers.map((tier) => {
          const isPopular = tier.isPopular;
          return (
            <div
              key={tier.id}
              className={`
                relative flex flex-col rounded-3xl transition-all duration-500 h-full
                ${
                  isPopular
                    ? "bg-gradient-to-br from-[var(--color-card)] to-[var(--color-secondary)]/20 border-2 border-[var(--color-primary)] shadow-2xl shadow-[var(--color-primary)]/30 scale-105 lg:scale-110 z-10"
                    : "bg-[var(--color-card)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary)]/50 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 hover:-translate-y-2"
                }
              `}
            >
              {/* Decorative gradient blob */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 ${
                  isPopular
                    ? "bg-gradient-to-bl from-[var(--color-primary)]/20"
                    : "bg-gradient-to-bl from-[var(--color-secondary)]"
                } to-transparent rounded-full blur-2xl`}
              />

              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white rounded-full shadow-lg border-4 border-[var(--color-background)]">
                    <Sparkles size={14} className="fill-white" />
                    <span className="text-sm font-extrabold uppercase tracking-widest">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
                {/* Header */}
                <div className="mb-8 pb-8 border-b-2 border-[var(--color-border)]">
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-[var(--color-foreground)] mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)] mb-8 min-h-[40px] font-medium">
                    {tier.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-1">
                    {tier.price !== "Custom" && (
                      <span className="text-3xl font-bold text-[var(--color-muted)]">
                        $
                      </span>
                    )}
                    <span
                      className={`text-5xl lg:text-6xl font-extrabold ${
                        isPopular
                          ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent"
                          : "text-[var(--color-foreground)]"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="ml-2 text-base font-bold text-[var(--color-muted)]">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                            isPopular
                              ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]"
                              : "bg-[var(--color-secondary)]"
                          }`}
                        >
                          <Check
                            size={14}
                            className={
                              isPopular
                                ? "text-white"
                                : "text-[var(--color-primary)]"
                            }
                            strokeWidth={3}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-[var(--color-foreground)] font-medium leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to="/contact-us"
                  className={`
                    group w-full py-5 rounded-2xl font-extrabold text-center transition-all duration-300 flex items-center justify-center gap-2
                    ${
                      isPopular
                        ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 hover:scale-105"
                        : "bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] hover:shadow-xl"
                    }
                  `}
                >
                  {tier.buttonText}
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>

              {/* Hover gradient overlay */}
              {!isPopular && (
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--color-primary)]/0 to-[var(--color-accent)]/0 hover:from-[var(--color-primary)]/5 hover:to-[var(--color-accent)]/5 transition-all duration-500 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* Trust Footer */}
      <div className="mt-24 pt-12 border-t-2 border-[var(--color-border)]">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-[var(--color-secondary)]/30 border border-[var(--color-border)] rounded-full">
            <ShieldCheck size={20} className="text-[var(--color-primary)]" />
            <span className="text-sm font-bold text-[var(--color-foreground)]">
              Trusted by Industry Leaders
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-50 hover:opacity-100 transition-all duration-500">
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
      </div>
    </SectionLayout>
  );
}
