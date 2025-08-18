'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PricingFAQ = () => {
  const faqs = [
    {
      question: 'How does the 14-day free trial work?',
      answer: 'Start with full access to all features in your chosen plan for 14 days. No credit card required to begin. You can upgrade, downgrade, or cancel anytime during or after the trial period.'
    },
    {
      question: 'What counts as a conversation?',
      answer: 'A conversation is defined as a unique interaction session between a customer and the AI chatbot. Multiple messages within the same session count as one conversation. Sessions typically last 30 minutes of inactivity.'
    },
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated. If you upgrade mid-cycle, you\'ll only pay the difference for the remaining period.'
    },
    {
      question: 'Are there any setup fees or hidden costs?',
      answer: 'No setup fees, no hidden costs. The price you see is what you pay. All plans include hosting, security, updates, and standard support. Only custom development work would incur additional charges.'
    },
    {
      question: 'What happens if I exceed my conversation limit?',
      answer: 'We\'ll notify you when you approach your limit. You can either upgrade your plan or purchase additional conversation packs. We never cut off service unexpectedly - we\'ll work with you to find the right solution.'
    },
    {
      question: 'Do you offer annual discounts?',
      answer: 'Yes! Annual plans receive a 20% discount compared to monthly billing. You can switch to annual billing at any time and receive the discount on your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and ACH transfers for enterprise customers. All payments are processed securely through Stripe.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied within the first 30 days, we\'ll provide a full refund, no questions asked.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pricing Questions?
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about our pricing and billing.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-2xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#FF7626] transition-colors duration-200 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Still have questions about pricing?
            </p>
            <a 
              href="/contact" 
              className="text-[#FF7626] hover:text-[#e6651f] font-medium transition-colors duration-200"
            >
              Contact our sales team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;