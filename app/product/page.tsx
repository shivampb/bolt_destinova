import { Metadata } from 'next';
import HeroSection from '@/components/product/HeroSection';
import FeaturesSection from '@/components/product/FeaturesSection';
import DemoSection from '@/components/product/DemoSection';
import TechnicalArchitecture from '@/components/product/TechnicalArchitecture';
import SecurityCompliance from '@/components/product/SecurityCompliance';

export const metadata: Metadata = {
  title: 'AI Chatbot Product Features',
  description: 'Discover Destinova AI\'s conversational recommendations, real-time personalization, multilingual support, and omnichannel deployment capabilities.',
};

export default function ProductPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TechnicalArchitecture />
      <SecurityCompliance />
    </>
  );
}