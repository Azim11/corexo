import ContactSection from "../components/contact-section";
import CTASection from "../components/cta-section";
import MapSection from "../components/map-section";
import PageHeader from "../components/page-header";
import { data } from "../data/data";

export default function Contact() {
  const { header } = data.contactPage;

  return (
    <>
      <PageHeader title={header.title} breadcrumb={header.breadcrumb} />

      {/* Main Contact Area (Form + Info) */}
      <ContactSection />

      {/* Map Visual */}
      <MapSection />
      <CTASection />
    </>
  );
}
