import CTASection from "../components/cta-section";
import FeaturedServicesDeep from "../components/featured-section";
import PageHeader from "../components/page-header";
import PricingSection from "../components/pricing-section";
import ServicesSection from "../components/service-section";
import { data } from "../data/data";

export default function Service() {
  const { header } = data.servicePage;
  return (
    <>
      <PageHeader title={header.title} breadcrumb={header.breadcrumb} />
      <ServicesSection />
      <FeaturedServicesDeep />
      <PricingSection />
      <CTASection />
    </>
  );
}
