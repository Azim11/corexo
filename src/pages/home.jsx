import CTASection from "../components/cta-section";
import FeaturedServicesDeep from "../components/featured-section";
import HeroSection from "../components/hero-section";
import HowWeWorkSection from "../components/how-work";
import IdentitySection from "../components/identity-section";
import NarrativeSection from "../components/narrative-section";
import PricingSection from "../components/pricing-section";
import ServicesSection from "../components/service-section";
import SuccessStoriesSection from "../components/success-section";
import TestimonialSection from "../components/testimonial";
import WhyUsSection from "../components/why-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <IdentitySection />
      <NarrativeSection />
      <HowWeWorkSection />
      <FeaturedServicesDeep />
      <PricingSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
