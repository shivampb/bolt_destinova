import { Metadata } from 'next';
import HeroSection from '@/components/industries/jewellery/HeroSection';
import WhyPersonalizationSection from '@/components/industries/jewellery/WhyPersonalizationSection';
import HowItWorksSection from '@/components/industries/jewellery/HowItWorksSection';
import CoreFeaturesSection from '@/components/industries/jewellery/CoreFeaturesSection';
import BenefitsForRetailersSection from '@/components/industries/jewellery/BenefitsForRetailersSection';
import DemoSection from '@/components/industries/jewellery/DemoSection';
import UseCasesSection from '@/components/industries/jewellery/UseCasesSection';
import CaseStudySection from '@/components/industries/jewellery/CaseStudySection';
import IntegrationSection from '@/components/industries/jewellery/IntegrationSection';
import PricingSection from '@/components/industries/jewellery/PricingSection';
import FAQSection from '@/components/industries/jewellery/FAQSection';
import FinalCTASection from '@/components/industries/jewellery/FinalCTASection';

export const metadata: Metadata = {
  title: 'AI Recommendation Engine for Jewellery eCommerce',
  description: 'AI-powered jewellery recommendations that sparkle with personalization. Help shoppers discover the perfect piece by style, occasion, and taste.',
  keywords: 'AI jewellery recommendations, personalized jewellery, jewellery ecommerce AI, diamond recommendations, luxury retail AI',
};

export default function JewelleryIndustryPage() {
  return (
    <>
      <HeroSection />
      <WhyPersonalizationSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <BenefitsForRetailersSection />
      <DemoSection />
      <UseCasesSection />
      <CaseStudySection />
      <IntegrationSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}