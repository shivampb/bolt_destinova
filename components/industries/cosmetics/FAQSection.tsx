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
      question: 'How accurate is the AI skin analysis?',
      answer: 'Our AI skin analysis achieves 92% accuracy in skin type identification and 88% accuracy in concern detection. The system is trained on diverse datasets including different skin tones, ages, and conditions. Accuracy improves over time as the AI learns from customer feedback and purchase behavior.'
    },
    {
      question: 'Can we customize the questionnaire for our brand?',
      answer: 'Yes, the questionnaire is fully customizable. You can add brand-specific questions, modify existing ones, adjust the flow based on your product categories, and even incorporate your brand voice and terminology. We provide templates for different beauty verticals.'
    },
    {
      question: 'How secure are customer photos and data?',
      answer: 'We take data security seriously. All photos are encrypted during transmission and storage, processed in secure environments, and automatically deleted after analysis unless customers opt-in to save them. We\'re GDPR compliant and follow strict data protection protocols.'
    },
    {
      question: 'Does it work for all skin tones and conditions?',
      answer: 'Yes, our AI is trained on diverse datasets representing all skin tones, ethnicities, ages, and common skin conditions. We continuously update our models to ensure inclusive and accurate recommendations for everyone.'
    },
    {
      question: 'How does shade matching work?',
      answer: 'Our shade matching uses advanced color analysis to identify undertones, skin depth, and surface tone. It considers lighting conditions, camera variations, and cross-references with your product shade ranges to provide the most accurate matches.'
    },
    {
      question: 'Can customers build complete routines?',
      answer: 'Absolutely! Our routine builder creates personalized morning and evening skincare routines, suggests product layering order, provides usage instructions, and can adapt routines based on seasonal changes or skin improvements.'
    },
    {
      question: 'What if we have limited product data?',
      answer: 'Our AI works with basic product information and improves recommendations as more data becomes available. We can help enrich your product data with ingredient analysis, skin type suitability, and concern targeting to maximize recommendation accuracy.'
    },
    {
      question: 'How quickly do we see results?',
      answer: 'Most beauty brands see initial improvements within 2-3 weeks as customers begin using the personalization features. Significant results (20-30% conversion improvements) typically appear within 30-45 days of full deployment.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about our AI recommendation engine for beauty and cosmetics.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-pink-50/50 rounded-2xl border border-pink-200/50 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-pink-600 transition-colors duration-200 py-6">
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
              Have more questions about implementing AI for your beauty brand?
            </p>
            <a 
              href="/contact" 
              className="text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200"
            >
              Contact our beauty AI specialists →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;