import { Metadata } from 'next';
import HeroSection from '@/components/industries/apparel/HeroSection';
import WhyPersonalizationSection from '@/components/industries/apparel/WhyPersonalizationSection';
import HowItWorksSection from '@/components/industries/apparel/HowItWorksSection';
import CoreFeaturesSection from '@/components/industries/apparel/CoreFeaturesSection';
import BenefitsForRetailersSection from '@/components/industries/apparel/BenefitsForRetailersSection';
import DemoSection from '@/components/industries/apparel/DemoSection';
import UseCasesSection from '@/components/industries/apparel/UseCasesSection';
import CaseStudySection from '@/components/industries/apparel/CaseStudySection';
import IntegrationSection from '@/components/industries/apparel/IntegrationSection';
import PricingSection from '@/components/industries/apparel/PricingSection';
import FAQSection from '@/components/industries/apparel/FAQSection';
import FinalCTASection from '@/components/industries/apparel/FinalCTASection';

export const metadata: Metadata = {
  title: 'AI Recommendation Engine for Apparel eCommerce',
  description: 'AI-powered apparel recommendations tailored to your style. Help shoppers discover outfits that fit their personality, body type, and occasion.',
  keywords: 'AI apparel recommendations, fashion AI, outfit recommendations, apparel ecommerce AI, style recommendations',
};

export default function ApparelIndustryPage() {
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