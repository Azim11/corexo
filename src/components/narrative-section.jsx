import SectionLayout from "./section-layout";
import SectionHeader from "./section-header";
import { data } from "../data/data";
import contactInfo from "../data/contactInfo";

export default function NarrativeSection() {
  return (
    <SectionLayout className="bg-[var(--color-background)] relative overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <SectionHeader
        subtitle="The Big Picture"
        title="Driving Future Growth"
        description="We don't just follow trends; we set the pace for what's next in digital marketing."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mt-20">
        {data.about.narrative.map((item, index) => (
          <div key={index} className="group relative flex flex-col h-full">
            {/* Connector Line (Desktop only) */}
            {index !== data.about.narrative.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-[var(--color-border)] z-0" />
            )}

            <div className="relative flex-1 bg-[var(--color-card)] rounded-[2rem] p-8 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--color-primary)]/10 overflow-hidden flex flex-col justify-between">
              {/* Giant Index Number */}
              <div
                className="absolute -right-2 -top-10 text-[180px] font-black text-transparent stroke-text opacity-10 group-hover:opacity-20 transition-opacity select-none pointer-events-none"
                style={{ WebkitTextStroke: "2px var(--color-foreground)" }}
              >
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-secondary)]/30 flex items-center justify-center text-[var(--color-foreground)] font-bold text-xl mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300 border border-[var(--color-border)]">
                  0{index + 1}
                </div>

                <h3 className="text-3xl font-bold text-[var(--color-foreground)] mb-6 tracking-tight group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>

                <p className="text-lg text-[var(--color-muted-foreground)] leading-relaxed font-medium">
                  {item.title === "Our Story" && (
                    <span className="text-[var(--color-foreground)] font-bold border-b-2 border-[var(--color-primary)] mr-1">
                      {contactInfo.companyNameShort}
                    </span>
                  )}
                  {item.content}
                </p>
              </div>

              {/* Decorative bottom bar */}
              <div className="w-full h-1.5 bg-[var(--color-secondary)]/50 mt-8 rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-primary)] w-0 group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
