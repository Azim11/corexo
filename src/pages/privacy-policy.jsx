import { ShieldCheck, Mail, Phone, MapPin, Calendar } from "lucide-react";
import PageHeader from "../components/page-header";
import SectionLayout from "../components/section-layout";
import { privacyData } from "../data/privacy";

export default function PrivacyPolicy() {
  const { meta, sections, contact } = privacyData;

  return (
    <>
      <PageHeader title="Privacy Policy" breadcrumb="Legal" />

      <SectionLayout className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Sidebar / Meta Info */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-border shadow-lg shadow-primary/5">
                <div className="flex items-center gap-3 text-primary mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="font-bold text-lg text-foreground">
                    Legal Document
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar size={14} /> Last Updated
                    </span>
                    <span className="font-semibold text-foreground bg-secondary px-2 py-1 rounded">
                      {meta.lastUpdated}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-border/50 my-6"></div>

                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  Please read this policy carefully to understand our policies
                  and practices regarding your information and how we will treat
                  it.
                </p>
              </div>

              {/* Quick Contact Widget */}
              <div className="bg-foreground text-background rounded-3xl p-8 hidden lg:block">
                <h4 className="font-bold text-lg mb-4">Have questions?</h4>
                <p className="text-sm text-white/70 mb-6">
                  Our legal team is available to clarify any points.
                </p>
                <a
                  href={`mailto:${contact.details.email}`}
                  className="text-sm font-semibold text-white border-b border-primary hover:text-primary transition-colors pb-0.5"
                >
                  Contact Legal Team
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
              {/* Loop through sections */}
              {sections.map((section) => (
                <div key={section.id} className="mb-16 last:mb-0 group">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-sm font-bold text-primary/50">
                      0{section.id}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground m-0">
                      {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <p className="text-lg leading-relaxed mb-6 text-muted-foreground/90">
                      {section.content}
                    </p>
                  )}

                  {/* Render List if exists */}
                  {section.list && (
                    <ul className="grid gap-3 mt-6">
                      {section.list.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/60 transition-colors"
                        >
                          <span className="mt-2 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          <span className="leading-relaxed text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Contact Section Specifics */}
              <div className="mt-20 p-8 md:p-12 bg-white rounded-3xl border border-border shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {contact.sectionTitle}
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl">
                    {contact.intro}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Mail size={20} />
                      </div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${contact.details.email}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {contact.details.email}
                      </a>
                    </div>

                    <div className="group">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Phone size={20} />
                      </div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${contact.details.phone}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {contact.details.phone}
                      </a>
                    </div>

                    <div className="group">
                      <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                        <MapPin size={20} />
                      </div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                        Office
                      </p>
                      <p className="font-medium text-foreground text-sm">
                        {contact.details.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
