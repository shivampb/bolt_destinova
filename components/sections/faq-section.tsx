'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How quickly can we get started with Destinova AI?',
    answer: 'Most stores are up and running within 15 minutes. Our one-click integrations with Shopify, WooCommerce, and other platforms make setup incredibly fast. We handle the technical configuration while you focus on customizing the conversation flow to match your brand.',
    category: 'Getting Started',
  },
  {
    question: 'What eCommerce platforms do you support?',
    answer: 'We support all major eCommerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and more. Our API-first approach also allows custom integrations with headless commerce solutions and proprietary platforms.',
    category: 'Integrations',
  },
  {
    question: 'How does the AI understand our product catalog?',
    answer: 'Our AI automatically analyzes your product data, descriptions, categories, and customer behavior patterns. It builds a comprehensive understanding of your inventory and customer preferences, continuously learning from each interaction to improve recommendations.',
    category: 'AI Technology',
  },
  {
    question: 'Can we customize the chatbot\'s personality and responses?',
    answer: 'Absolutely! You can customize the chatbot\'s tone, personality, and responses to match your brand voice. We provide templates for different industries and use cases, plus the ability to create custom conversation flows.',
    category: 'Customization',
  },
  {
    question: 'What kind of results can we expect?',
    answer: 'Our clients typically see 10-30% increases in conversion rates, 8-20% improvements in average order value, and 15-40% reduction in product search time. Results vary by industry and implementation, but most see significant improvements within the first month.',
    category: 'Performance',
  },
  {
    question: 'How do you ensure data privacy and security?',
    answer: 'We\'re GDPR, CCPA, and SOC 2 compliant with end-to-end encryption and regular security audits. Customer data is processed securely and can be configured for data residency requirements. We never share or sell customer data.',
    category: 'Security',
  },
  {
    question: 'What does the pricing look like?',
    answer: 'We offer transparent, usage-based pricing starting from $99/month. Pricing scales with your conversation volume and includes all core features. Enterprise customers get custom pricing with dedicated support and advanced features.',
    category: 'Pricing',
  },
  {
    question: 'Do you provide support during implementation?',
    answer: 'Yes! Every customer gets dedicated onboarding support, implementation assistance, and training. Our customer success team helps optimize your setup and provides ongoing support to maximize your results.',
    category: 'Support',
  },
];

const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Destinova AI. Can't find what you're looking for? 
              We're here to help.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category 
                    ? 'bg-[#FF7626] hover:bg-[#FF7626]/90 text-white' 
                    : 'text-slate-600 hover:text-[#FF7626] hover:border-[#FF7626]'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {faq.question}
                    </h3>
                    <div className="text-sm text-[#FF7626] font-medium">
                      {faq.category}
                    </div>
                  </div>
                  
                  <div className="ml-4 flex-shrink-0">
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    )}
                  </div>
                </button>

                {activeIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-slate-50 border-0 rounded-2xl inline-block">
              <MessageCircle className="h-8 w-8 text-[#FF7626] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Our team is here to help you get the most out of Destinova AI
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white">
                  Schedule a Call
                </Button>
                <Button variant="outline" className="text-slate-600 hover:text-[#FF7626] hover:border-[#FF7626]">
                  Contact Support
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}