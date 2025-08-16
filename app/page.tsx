import { HeroSection } from '@/components/sections/hero-section';
import { SocialProofSection } from '@/components/sections/social-proof-section';
import { ValuePropsSection } from '@/components/sections/value-props-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { IntegrationsSection } from '@/components/sections/integrations-section';
import { CaseStudyHighlight } from '@/components/sections/case-study-highlight';
import { TrustSection } from '@/components/sections/trust-section';
import { FAQSection } from '@/components/sections/faq-section';
import { FinalCTASection } from '@/components/sections/final-cta-section';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Destinova AI Labs | AI Chatbots for eCommerce',
    description: 'Boost eCommerce conversions with agentic AI chatbots that provide personalized product recommendations.',
    url: 'https://destinova-ai.com',
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'Destinova AI Chatbot',
      applicationCategory: 'BusinessApplication',
      description: 'AI-powered chatbot for eCommerce product recommendations',
      operatingSystem: 'Web-based',
      offers: {
        '@type': 'Offer',
        category: 'SaaS',
        availability: 'https://schema.org/InStock'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <HeroSection />
      <SocialProofSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <CaseStudyHighlight />
      <TrustSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}