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
      question: 'Can the AI recommend complete jewellery sets automatically?',
      answer: 'Yes! Our AI specializes in creating coordinated jewellery sets by analyzing design elements, metals, stones, and style compatibility. It can automatically suggest matching earrings, necklaces, rings, and bracelets that work beautifully together.'
    },
    {
      question: 'Does it support regional and cultural jewellery styles?',
      answer: 'Absolutely. Our AI is trained on diverse cultural styles including Indian bridal sets, Middle Eastern designs, European classics, and contemporary global trends. It understands cultural preferences and occasion-specific requirements.'
    },
    {
      question: 'How does the gifting recommendation system work?',
      answer: 'Our gifting AI considers the relationship (spouse, parent, friend), occasion (birthday, anniversary, graduation), recipient age and style preferences, and your budget to suggest appropriate pieces. It can even recommend gift wrapping and personalization options.'
    },
    {
      question: 'Can we customize the style quiz for our brand?',
      answer: 'Yes, the style quiz is fully customizable. You can add your own style categories, adjust questions to match your inventory, incorporate brand-specific terminology, and even add visual elements that reflect your brand aesthetic.'
    },
    {
      question: 'How accurate are the AI recommendations?',
      answer: 'Our AI achieves 85%+ recommendation accuracy through continuous learning from customer interactions. It improves over time by analyzing purchase patterns, customer feedback, and seasonal trends specific to your inventory.'
    },
    {
      question: 'What happens if a recommended item is out of stock?',
      answer: 'The AI automatically suggests similar alternatives from your inventory, maintains set coordination with substitute pieces, and can notify customers when preferred items are back in stock. It ensures recommendations are always actionable.'
    },
    {
      question: 'Can it handle different price ranges and budgets?',
      answer: 'Yes, our AI optimizes recommendations within specified budget ranges while maximizing value. It can suggest premium alternatives, budget-friendly options, and payment plan eligibility to accommodate different customer segments.'
    },
    {
      question: 'How quickly can we see results after implementation?',
      answer: 'Most jewellery stores see initial improvements within 2-3 weeks as the AI learns customer preferences. Significant results (20-30% conversion improvements) typically appear within 30-60 days of full deployment.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about our AI recommendation engine for jewellery businesses.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-2xl border border-slate-200 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-yellow-600 transition-colors duration-200 py-6">
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
              Have more questions about implementing AI for your jewellery store?
            </p>
            <a 
              href="/contact" 
              className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200"
            >
              Contact our jewellery AI specialists →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;