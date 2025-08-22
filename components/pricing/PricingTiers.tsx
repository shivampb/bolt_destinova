import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const PricingTiers = () => {
  const plans = [
    {
      name: 'Forever Free',
      description: 'Unlock the power of AI at no cost, perfect for getting started.',
      price: 'Free',
      period: '',
      yearlyPrice: null,
      conversations: 'Unlimited',
      features: [
        'Unlimited AI Product Sync',
        'Unlimited Knowledge Train',
        'Require to setup openAI Key & database'
      ],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Starter',
      description: 'Ideal for growing businesses looking to expand their AI capabilities.',
      price: '$9',
      period: '/ month',
      yearlyPrice: null, // User did not provide yearly price, so keeping it null
      conversations: 'Unlimited', // Based on "Unlimited AI chats"
      features: [
        'Train up to 5,000 products (auto-sync)',
        'Unlimited AI chats',
        'Learns FAQs, policies, files, Website',
        'Remove “Destinova AI” branding',
        'Third Party Integration',
        'Product Page AI Summery popup & Upsell',
        'Access to all future AI features',
        '14-day free trial'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Growth',
      description: 'Comprehensive features for established businesses with advanced needs.',
      price: '$29',
      period: '/ month',
      yearlyPrice: null, // User did not provide yearly price, so keeping it null
      conversations: 'Unlimited', // Inherited from Starter, assuming it's unlimited
      features: [
        'Everything in Starter, plus',
        'Train up to 15,000 products',
        'Learns from discount & chat history',
        'Priority customer support',
        'Real-time AI sales pop-ups',
        'integration with meta & custom API',
        'Support for headless storefronts',
        '14-day free trial'
      ],
      cta: 'Start Free Trial',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. All plans include a 14-day free trial and can be cancelled anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? 'border-[#FF7626] bg-[#FF7626]/5 hover:bg-[#FF7626]/10'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#FF7626] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 ml-2">
                    {plan.period}
                  </span>
                </div>

                {plan.yearlyPrice && (
                  <p className="text-sm text-green-600 font-medium">
                    {plan.yearlyPrice} annually (20% off)
                  </p>
                )}

                <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <span className="font-medium">{plan.conversations}</span> conversations/month
                  </p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? 'bg-[#FF7626] hover:bg-[#e6651f] text-white'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <Link
                  href={plan.cta === 'Contact Sales' ? '/contact' : 'https://apps.shopify.com/desti-ai-automate-chatbot'}
                  className="flex items-center justify-center gap-2"
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ SOC 2 Type II Certified</span>
            <span>✓ GDPR Compliant</span>
            <span>✓ 99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;