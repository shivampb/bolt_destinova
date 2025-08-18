import { Metadata } from 'next';
import HeroSection from '@/components/pricing/HeroSection';
import PricingTiers from '@/components/pricing/PricingTiers';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import CTASection from '@/components/pricing/CTASection';

export const metadata: Metadata = {
  title: 'Transparent Pricing Plans',
  description: 'Choose the perfect plan for your business. Transparent pricing with no hidden fees. Start with our free trial and scale as you grow.',
};

export default function PricingPage() {
  return (
    <>
      <HeroSection />
      <PricingTiers />
      <FeatureComparison />
      <PricingFAQ />
      <CTASection />
    </>
  );
}