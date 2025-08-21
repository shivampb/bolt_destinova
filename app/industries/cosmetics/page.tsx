import { Metadata } from 'next';
import HeroSection from '@/components/industries/cosmetics/HeroSection';
import WhyAISection from '@/components/industries/cosmetics/WhyAISection';
import KeyFeaturesSection from '@/components/industries/cosmetics/KeyFeaturesSection';
import UseCasesSection from '@/components/industries/cosmetics/UseCasesSection';
import BenefitsSection from '@/components/industries/cosmetics/BenefitsSection';
import CaseStudySection from '@/components/industries/cosmetics/CaseStudySection';
import FinalCTASection from '@/components/industries/cosmetics/FinalCTASection';

export const metadata: Metadata = {
  title: 'AI Solutions for the Cosmetics Industry',
  description: 'Enhance customer engagement, deliver personalized beauty experiences, and drive sales with intelligent AI chatbots designed for cosmetic brands.',
  keywords: 'AI cosmetics, beauty chatbot, personalized skincare, makeup recommendations, beauty AI assistant',
};

export default function CosmeticsIndustryPage() {
  return (
    <>
      <HeroSection />
      <WhyAISection />
      <KeyFeaturesSection />
      <UseCasesSection />
      <BenefitsSection />
      <CaseStudySection />
      <FinalCTASection />
    </>
  );
}