import {
  RefreshCcw,
  Clock,
  Printer,
  AlertCircle,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import PageHeader from "../components/page-header";
import SectionLayout from "../components/section-layout";
import { refundData } from "../data/refund";

export default function RefundPolicy() {
  const { meta, intro, importantNotice, sections, contact } = refundData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <PageHeader title="Refund Policy" breadcrumb="Legal" />

      <SectionLayout className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="lg:sticky lg:top-32">
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm">
                <div className="flex items-center gap-3 text-foreground mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <RefreshCcw size={24} />
                  </div>
                  <span className="font-bold text-xl">Policy Status</span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between text-sm p-3 bg-secondary/50 rounded-xl">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock size={16} /> Last Updated
                    </span>
                    <span className="font-bold text-primary">
                      {meta.lastUpdated}
                    </span>
                  </div>

                  <button
                    onClick={handlePrint}
                    className="w-full py-4 flex items-center justify-center gap-2 border border-border rounded-xl text-foreground font-semibold hover:bg-foreground hover:text-white transition-all duration-300"
                  >
                    <Printer size={18} />
                    <span>Print Policy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              {/* Intro */}
              <p className="text-xl leading-relaxed mb-10 text-foreground font-medium">
                {intro}
              </p>

              {/* Important Notice Alert */}
              <div className="bg-amber-50 border border-amber-100 p-8 rounded-2xl mb-12 flex flex-col md:flex-row gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                    <AlertCircle size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">
                    Important Notice
                  </h4>
                  <p className="text-amber-800/80 text-base leading-relaxed m-0">
                    {importantNotice}
                  </p>
                </div>
              </div>

              {/* Sections Loop */}
              {sections.map((section) => (
                <div key={section.id} className="mb-16 last:mb-0">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="leading-relaxed mb-6">{section.content}</p>
                  )}

                  {/* Complex List */}
                  {section.list && (
                    <ul className="grid gap-4 mt-6">
                      {section.list.map((item, index) => (
                        <li
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center bg-white p-5 rounded-2xl border border-border hover:border-primary/30 transition-colors shadow-sm"
                        >
                          <div className="flex items-center mb-2 sm:mb-0 sm:w-1/3 shrink-0">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 shrink-0"></div>
                            <span className="font-bold text-foreground text-sm uppercase tracking-wide">
                              {item.label}
                            </span>
                          </div>
                          <span className="text-sm sm:pl-6 text-muted-foreground border-l-0 sm:border-l border-border/50">
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Simple List */}
                  {section.simpleList && (
                    <ul className="space-y-3 mt-4 ml-4">
                      {section.simpleList.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-green-500 mt-1 shrink-0"
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Contact Box */}
              <div className="mt-20 bg-foreground text-background rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px]"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">{contact.title}</h3>
                  <p className="text-white/70 mb-10 max-w-xl text-lg">
                    {contact.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    <div className="flex gap-4">
                      <div className="p-3 bg-white/10 rounded-xl h-fit">
                        <Mail size={24} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">
                          Email Support
                        </span>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-xl font-bold hover:text-primary transition-colors"
                        >
                          {contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="p-3 bg-white/10 rounded-xl h-fit">
                        <Phone size={24} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">
                          Phone Support
                        </span>
                        <a
                          href={`tel:${contact.phone}`}
                          className="text-xl font-bold hover:text-primary transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4 md:col-span-2 pt-8 border-t border-white/10">
                      <div className="p-3 bg-white/10 rounded-xl h-fit">
                        <MapPin size={24} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-1">
                          Mailing Address
                        </span>
                        <p className="text-white/90 leading-relaxed font-medium">
                          {contact.address}
                        </p>
                      </div>
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
