'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Can the AI recommend complete outfits automatically?',
      answer: 'Yes! Our AI specializes in creating complete outfits by analyzing style compatibility, color coordination, and fashion rules. It can automatically suggest matching tops, bottoms, shoes, and accessories that work together harmoniously.'
    },
    {
      question: 'Does it handle different body types and fit preferences?',
      answer: 'Absolutely. Our AI considers body type, fit preferences (slim, regular, oversized), and size history to recommend clothing that will fit well and flatter each customer\'s unique body shape and style preferences.'
    },
    {
      question: 'Can we customize the style quizzes for our brand?',
      answer: 'Yes, the style quiz is fully customizable. You can add your own style categories, adjust questions to match your brand aesthetic, incorporate seasonal collections, and even add visual elements that reflect your brand identity.'
    },
    {
      question: 'Does it adapt to seasonal trends and fashion changes?',
      answer: 'Our AI continuously learns from fashion trends, seasonal changes, and social media influences. It automatically adapts recommendations to include trending styles, seasonal colors, and current fashion movements relevant to your inventory.'
    },
    {
      question: 'How accurate are the size recommendations?',
      answer: 'Our size prediction accuracy is over 85% based on customer feedback and return data. The AI learns from purchase history, return patterns, and customer feedback to continuously improve size recommendations for each brand and product type.'
    },
    {
      question: 'What happens if recommended items are out of stock?',
      answer: 'The AI automatically suggests similar alternatives from your inventory, maintains outfit coordination with substitute items, and can notify customers when preferred items are back in stock. It ensures recommendations are always actionable.'
    },
    {
      question: 'Can it handle different price ranges and budgets?',
      answer: 'Yes, our AI optimizes recommendations within specified budget ranges while maximizing style value. It can suggest premium alternatives, budget-friendly options, and mix high/low pieces to create great looks at any price point.'
    },
    {
      question: 'How quickly can we see results after implementation?',
      answer: 'Most apparel stores see initial improvements within 2-3 weeks as the AI learns customer preferences. Significant results (25-35% conversion improvements) typically appear within 30-60 days of full deployment.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about our AI recommendation engine for apparel businesses.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-2xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-purple-600 transition-colors duration-200 py-6">
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
              Have more questions about implementing AI for your apparel store?
            </p>
            <a 
              href="/contact" 
              className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
            >
              Contact our fashion AI specialists →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;