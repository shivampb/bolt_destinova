import { Metadata } from 'next';
import HeroSection from '@/components/industries/cosmetics/HeroSection';
import WhyPersonalizationSection from '@/components/industries/cosmetics/WhyPersonalizationSection';
import HowItWorksSection from '@/components/industries/cosmetics/HowItWorksSection';
import CoreFeaturesSection from '@/components/industries/cosmetics/CoreFeaturesSection';
import BenefitsSection from '@/components/industries/cosmetics/BenefitsSection';
import DemoSection from '@/components/industries/cosmetics/DemoSection';
import UseCasesSection from '@/components/industries/cosmetics/UseCasesSection';
import CaseStudySection from '@/components/industries/cosmetics/CaseStudySection';
import IntegrationSection from '@/components/industries/cosmetics/IntegrationSection';
import PricingSection from '@/components/industries/cosmetics/PricingSection';
import FAQSection from '@/components/industries/cosmetics/FAQSection';
import FinalCTASection from '@/components/industries/cosmetics/FinalCTASection';

export const metadata: Metadata = {
  title: 'AI Recommendation Engine for Cosmetics & Skincare',
  description: 'Personalized skincare recommendations powered by AI. Help shoppers find the right cosmetic products based on their skin type, concerns, and preferences.',
  keywords: 'AI cosmetics recommendations, skincare personalization, beauty tech AI, cosmetic ecommerce AI, skin analysis AI',
};

export default function CosmeticsIndustryPage() {
  return (
    <>
      <HeroSection />
      <WhyPersonalizationSection />
      <HowItWorksSection />
      <CoreFeaturesSection />
      <BenefitsSection />
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