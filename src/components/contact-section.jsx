import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";
import { Send, CheckCircle2, Users } from "lucide-react";
import { data } from "../data/data";

export default function ContactSection() {
  const { section, info } = data.contactPage;

  return (
    <SectionLayout className="bg-[var(--color-background)]">
      <SectionHeader
        subtitle={section.subtitle}
        title={section.title}
        description={section.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Contact Info Column */}
        <div className="lg:col-span-1 space-y-6">
          {info.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                className="group flex items-start p-6 lg:p-8 bg-[var(--color-card)] rounded-3xl border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl hover:shadow-[var(--color-primary)]/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center">
                    {/* Gradient border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300" />
                    {/* Inner background */}
                    <div className="relative w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-2xl bg-[var(--color-card)] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] transition-all duration-300">
                      <Icon
                        size={24}
                        className="text-[var(--color-primary)] group-hover:text-white transition-colors duration-300"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Index badge */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white text-xs font-extrabold shadow-lg border-2 border-[var(--color-card)]">
                    {index + 1}
                  </div>
                </div>

                <div className="ml-5 flex-1">
                  <h3 className="font-extrabold text-[var(--color-foreground)] text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-primary)] font-bold mb-2 break-all">
                    {item.value}
                  </p>
                  <p className="text-sm text-[var(--color-muted)] font-medium">
                    {item.subtext}
                  </p>
                </div>
              </a>
            );
          })}

          {/* Trust Badge */}
          <div className="mt-8 p-8 lg:p-10 bg-gradient-to-br from-[var(--color-foreground)] to-[var(--color-foreground)]/90 rounded-3xl text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[var(--color-primary)]/30 to-transparent rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <Users size={24} className="text-white" />
              </div>

              <h4 className="font-extrabold text-2xl mb-3">Grow with Us</h4>
              <p className="text-white/80 text-sm mb-6 leading-relaxed font-medium">
                Join 500+ companies scaling with our solutions.
              </p>

              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary)]/50 border-4 border-[var(--color-foreground)] flex items-center justify-center text-sm font-bold text-[var(--color-foreground)] shadow-lg"
                  >
                    {i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] border-4 border-[var(--color-foreground)] flex items-center justify-center text-sm font-bold text-white shadow-lg">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
          <form className="bg-[var(--color-card)] rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[var(--color-border)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
              {/* Input Fields */}
              {[
                {
                  label: "Full Name",
                  type: "text",
                  placeholder: "John Doe",
                  required: true,
                },
                {
                  label: "Email Address",
                  type: "email",
                  placeholder: "john@company.com",
                  required: true,
                },
                {
                  label: "Phone (Optional)",
                  type: "tel",
                  placeholder: "+1 (555) 000-0000",
                  required: false,
                },
                {
                  label: "Subject",
                  type: "select",
                  options: [
                    "General Inquiry",
                    "Project Proposal",
                    "Career Opportunity",
                    "Other",
                  ],
                  required: true,
                },
              ].map((field, i) => (
                <div key={i} className="space-y-3">
                  <label className="text-sm font-extrabold text-[var(--color-foreground)] uppercase tracking-wide flex items-center gap-2">
                    {field.label}
                    {field.required && (
                      <span className="text-[var(--color-primary)]">*</span>
                    )}
                  </label>
                  {field.type === "select" ? (
                    <div className="relative">
                      <select className="w-full px-5 py-4 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-foreground)] font-medium focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all outline-none appearance-none cursor-pointer">
                        {field.options.map((opt, idx) => (
                          <option key={idx}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--color-muted)]">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-5 py-4 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-foreground)] font-medium focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all outline-none placeholder:text-[var(--color-muted)]/50"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
              <div className="space-y-3">
                <label className="text-sm font-extrabold text-[var(--color-foreground)] uppercase tracking-wide">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-5 py-4 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-foreground)] font-medium focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all outline-none"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-extrabold text-[var(--color-foreground)] uppercase tracking-wide">
                  Company Size
                </label>
                <select className="w-full px-5 py-4 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-foreground)] font-medium focus:border-[var(--color-primary)] outline-none appearance-none">
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>50+</option>
                </select>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <label className="text-sm font-extrabold text-[var(--color-foreground)] uppercase tracking-wide">
                Services Interested
              </label>
              <select className="w-full px-5 py-4 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-foreground)] font-medium focus:border-[var(--color-primary)] outline-none appearance-none">
                {data.services.map((s, i) => (
                  <option key={i}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3 mb-10">
              <label className="text-sm font-extrabold text-[var(--color-foreground)] uppercase tracking-wide flex items-center gap-2">
                Message
                <span className="text-[var(--color-primary)]">*</span>
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full px-5 py-4 rounded-2xl bg-[var(--color-background)] border-2 border-[var(--color-border)] text-[var(--color-foreground)] font-medium focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all outline-none resize-none placeholder:text-[var(--color-muted)]/50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full md:w-auto px-12 py-5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white font-extrabold rounded-2xl hover:shadow-2xl hover:shadow-[var(--color-primary)]/40 transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Send Message</span>
              <Send
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2.5}
              />
            </button>
          </form>
        </div>
      </div>
    </SectionLayout>
  );
}
