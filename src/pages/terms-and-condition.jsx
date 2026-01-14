import { FileText, Calendar, Printer, ArrowRight } from "lucide-react";
import PageHeader from "../components/page-header";
import SectionLayout from "../components/section-layout";
import { termsData } from "../data/terms";

export default function TermsConditions() {
  const { meta, intro, sections, contact } = termsData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <PageHeader title="Terms & Conditions" breadcrumb="Legal" />

      <SectionLayout className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <FileText size={20} />
                  </div>
                  <span className="font-bold text-lg text-foreground">
                    Agreement Status
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm py-2 border-b border-border/50">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar size={14} /> Effective Date
                    </span>
                    <span className="font-semibold text-foreground">
                      {meta.lastUpdated}
                    </span>
                  </div>

                  <button
                    onClick={handlePrint}
                    className="w-full py-3 flex items-center justify-center gap-2 bg-secondary text-foreground rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Printer size={16} />
                    <span>Print Agreement</span>
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="hidden lg:block pl-2">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  Contents
                </p>
                <ul className="space-y-1">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#section-${s.id}`}
                        className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span className="text-xs font-mono text-muted-foreground/50 group-hover:text-primary">
                          0{i + 1}
                        </span>
                        <span className="truncate">{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {/* Intro */}
              <p className="text-lg leading-relaxed mb-12 text-foreground/80 font-medium border-l-4 border-primary pl-6 py-2 bg-secondary/20 rounded-r-xl">
                {intro}
              </p>

              {/* Sections Loop */}
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="mb-16 last:mb-0 scroll-mt-32 border-b border-border/50 pb-12 last:border-0"
                  id={`section-${section.id}`}
                >
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-3xl font-black text-secondary-foreground/10 select-none">
                      {index + 1}.
                    </span>
                    <h2 className="text-2xl font-bold text-foreground m-0">
                      {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <p className="leading-relaxed mb-6">{section.content}</p>
                  )}

                  {section.list && (
                    <ul className="space-y-3 pl-4">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <ArrowRight
                            size={14}
                            className="mt-2 text-primary shrink-0"
                          />
                          <span className="leading-relaxed text-foreground/80 text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <div className="mt-6 p-4 bg-amber-50 rounded-xl text-sm text-amber-900/70 italic border border-amber-100">
                      {section.footer}
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Footer */}
              <div className="mt-12 bg-white rounded-3xl p-8 border border-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Still have questions?
                  </h3>
                  <p className="text-sm">
                    Contact our legal team for clarification.
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
                  >
                    Email Us
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="px-6 py-3 bg-secondary text-foreground font-bold rounded-xl hover:bg-secondary/80 transition-all"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
