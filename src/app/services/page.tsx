import PageHeader from '@/components/PageHeader';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import PricingSection from '@/components/home/PricingSection';
import CTASection from '@/components/home/CTASection';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="What we do"
        index="(08) — Services"
        title="Eight services,"
        italic="one growth engine."
        blurb="Every service is fixed-fee, scope-clear, and led by a senior designer. Pick what you need à la carte, or bundle them as a Studio package."
      />
      <ServicesSection hideIntro />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
