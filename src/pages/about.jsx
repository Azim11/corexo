import AboutHero from "../components/about-hero";
import CTASection from "../components/cta-section";
import IdentitySection from "../components/identity-section";
import LeadershipSection from "../components/leadership";
import NarrativeSection from "../components/narrative-section";
import PageHeader from "../components/page-header";
import SuccessStoriesSection from "../components/success-section";

export default function About() {
  return (
    <>
      <PageHeader title="About Us" breadcrumb="About" />
      <AboutHero />
      <IdentitySection />
      <NarrativeSection />
      <LeadershipSection />
      <SuccessStoriesSection />
      <CTASection />
    </>
  );
}
