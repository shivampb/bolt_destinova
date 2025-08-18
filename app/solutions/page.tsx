import { Metadata } from 'next';
import HeroSection from '@/components/solutions/HeroSection';
import SolutionsOverview from '@/components/solutions/SolutionsOverview';
import IndustrySpecific from '@/components/solutions/IndustrySpecific';
import UseCases from '@/components/solutions/UseCases';
import ResultsSection from '@/components/solutions/ResultsSection';
import CTASection from '@/components/solutions/CTASection';

export const metadata: Metadata = {
  title: 'AI Chatbot Solutions for eCommerce',
  description: 'Discover how Destinova AI transforms eCommerce with personalized recommendations, improved customer engagement, and higher conversion rates across all industries.',
};

export default function SolutionsPage() {
  return (
    <>
      <HeroSection />
      <SolutionsOverview />
      <IndustrySpecific />
      <UseCases />
      <ResultsSection />
      <CTASection />
    </>
  );
}