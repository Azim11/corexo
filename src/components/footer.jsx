import { data } from "../data/data";
import contactInfo from "../data/contactInfo";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[var(--color-primary)]/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-accent)]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              {/* Placeholder Logo */}
              <img
                src="logo.png"
                alt="logo"
                className="w-auto h-20 rounded-xl"
              />
            </div>
            <p className="text-white leading-relaxed max-w-sm">
              {contactInfo.description}
            </p>
            <div className="flex gap-4 pt-4">{/* Social placeholders */}</div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-bold text-lg mb-6 text-white">Explore</h3>
            <ul className="space-y-4">
              {data.navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-white hover:text-primary transition-colors flex items-center gap-1 group w-fit"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {data.footer.quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-white hover:text-primary transition-colors w-fit block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-white">
              <li>{contactInfo.companyName}</li>
              <li>{contactInfo.contactPerson}</li>
              <li>{contactInfo.address}</li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {contactInfo.companyNameShort}.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-white text-xs uppercase tracking-wider">
              Secure Payment
            </span>
            <div className="flex gap-2">
              {[
                { name: "Visa", image: "visa.svg" },
                { name: "Mastercard", image: "mastercard.svg" },
              ].map((card) => (
                <div
                  key={card.name}
                  className="px-2 py-1 bg-card border border-border rounded text-[10px] font-bold text-white uppercase tracking-wider"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-5 w-auto "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
