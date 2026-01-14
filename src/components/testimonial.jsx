import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./section-header";
import SectionLayout from "./section-layout";
import contactInfo from "../data/contactInfo";

const testimonials = [
  {
    quote: `${contactInfo.companyNameShort} transformed our digital presence completely. Their strategic approach and dedication resulted in a 300% increase in qualified leads within just six months.`,
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechFlow Solutions",
  },
  {
    quote: `Working with ${contactInfo.companyNameShort} has been a game-changer. Their team's expertise in social media marketing helped us build an engaged community of over 50K followers.`,
    author: "Michael Chen",
    position: "CEO",
    company: "Urban Fitness Co",
  },
  {
    quote: `The ROI we've seen from our campaigns with ${contactInfo.companyNameShort} is incredible. They truly understand how to drive results that matter to our bottom line.`,
    author: "Emily Rodriguez",
    position: "Founder",
    company: "GreenLeaf Organics",
  },
  {
    quote: `Professional, responsive, and results-driven. ${contactInfo.companyNameShort} exceeded our expectations in every way. Highly recommend their services!`,
    author: "David Park",
    position: "VP of Marketing",
    company: "FinanceHub",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <SectionLayout className="bg-gradient-to-b from-[var(--color-secondary)]/20 via-transparent to-[var(--color-secondary)]/20">
      <SectionHeader
        subtitle="Client Testimonials"
        title="What Our Partners Say"
        description="Don't just take our word for it—hear directly from the businesses we've helped transform."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Main Quote Display - Spans 7 cols */}
        <div className="lg:col-span-7">
          <div className="relative bg-gradient-to-br from-[var(--color-card)] to-[var(--color-secondary)]/20 p-10 md:p-14 lg:p-16 rounded-3xl shadow-2xl border-2 border-[var(--color-border)] overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-[var(--color-primary)]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[var(--color-accent)]/10 to-transparent rounded-full blur-3xl" />

            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 border border-[var(--color-primary)]/20">
              <Quote
                className="text-[var(--color-primary)]"
                size={40}
                strokeWidth={2}
              />
            </div>

            <div className="relative z-10 space-y-8">
              {/* Stars */}
              <div className="flex gap-1 pt-16">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-foreground)] leading-snug tracking-tight">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-5 pt-8 border-t-2 border-[var(--color-border)]">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-2xl font-extrabold text-white shadow-lg">
                  {testimonials[current].author.charAt(0)}
                </div>
                <div>
                  <div className="font-extrabold text-lg text-[var(--color-foreground)] mb-1">
                    {testimonials[current].author}
                  </div>
                  <div className="text-sm text-[var(--color-muted)] font-medium">
                    {testimonials[current].position} •{" "}
                    {testimonials[current].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="relative z-10 flex gap-3 mt-10 md:absolute md:bottom-10 md:right-10 md:mt-0">
              <button
                onClick={prev}
                className="p-4 rounded-full bg-[var(--color-card)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-foreground)] transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                onClick={next}
                className="p-4 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] border-2 border-transparent hover:shadow-xl hover:shadow-[var(--color-primary)]/30 text-white transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial List - Spans 5 cols */}
        <div className="lg:col-span-5 space-y-4">
          <div className="mb-6">
            <p className="text-sm font-bold text-[var(--color-muted)] uppercase tracking-widest">
              All Testimonials
            </p>
          </div>

          {testimonials.map((item, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2
                ${
                  current === index
                    ? "bg-[var(--color-card)] border-[var(--color-primary)] shadow-xl shadow-[var(--color-primary)]/20 translate-x-2"
                    : "bg-transparent border-transparent hover:bg-[var(--color-card)]/50 hover:border-[var(--color-border)] opacity-60 hover:opacity-100"
                }
              `}
            >
              {/* Active indicator */}
              {current === index && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-1 h-12 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full" />
              )}

              <div className="flex items-start gap-4">
                <div
                  className={`
                  flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-extrabold shadow-lg transition-all duration-300
                  ${
                    current === index
                      ? "bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white scale-110"
                      : "bg-[var(--color-secondary)] text-[var(--color-foreground)]"
                  }
                `}
                >
                  {item.author.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  <div
                    className={`
                    text-sm font-bold mb-1 transition-colors duration-300
                    ${
                      current === index
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-foreground)]"
                    }
                  `}
                  >
                    {item.company}
                  </div>
                  <p className="text-sm text-[var(--color-muted)] line-clamp-2 font-medium leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badge Banner */}
      <div className="mt-20 p-8 lg:p-10 bg-gradient-to-r from-[var(--color-card)] via-[var(--color-secondary)]/30 to-[var(--color-card)] rounded-3xl border-2 border-[var(--color-border)] shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-[var(--color-foreground)] mb-2">
              Join 500+ Happy Clients
            </h3>
            <p className="text-[var(--color-muted)] font-medium">
              Experience the same transformative results for your business.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-[var(--color-primary)]">
                4.9
              </div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--color-primary)] text-[var(--color-primary)]"
                  />
                ))}
              </div>
            </div>
            <div className="h-16 w-px bg-[var(--color-border)]" />
            <div className="text-center">
              <div className="text-4xl font-extrabold text-[var(--color-foreground)]">
                98%
              </div>
              <div className="text-sm text-[var(--color-muted)] font-bold uppercase tracking-wide mt-2">
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
