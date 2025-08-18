import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const PricingTiers = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small stores testing AI recommendations',
      price: '$299',
      period: 'per month',
      yearlyPrice: '$2,390',
      conversations: '5,000',
      features: [
        'Website widget integration',
        'Basic product recommendations',
        'Email support',
        'Standard analytics dashboard',
        'Up to 10,000 products',
        '2 team members',
        'Basic customization'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Growth',
      description: 'Best for growing eCommerce businesses',
      price: '$699',
      period: 'per month',
      yearlyPrice: '$5,592',
      conversations: '25,000',
      features: [
        'Everything in Starter',
        'WhatsApp & Messenger integration',
        'Advanced personalization',
        'A/B testing framework',
        'Priority support',
        'Up to 100,000 products',
        '10 team members',
        'Custom branding',
        'Advanced analytics',
        'Customer segmentation'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Scale',
      description: 'For high-volume retailers and enterprises',
      price: '$1,499',
      period: 'per month',
      yearlyPrice: '$11,992',
      conversations: '100,000',
      features: [
        'Everything in Growth',
        'Omnichannel deployment',
        'Custom AI training',
        'Dedicated success manager',
        'White-label options',
        'Unlimited products',
        'Unlimited team members',
        'API access',
        'Advanced integrations',
        'Custom reporting',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large-scale operations',
      price: 'Custom',
      period: 'pricing',
      conversations: 'Unlimited',
      features: [
        'Everything in Scale',
        'On-premise deployment options',
        'Custom AI model development',
        '24/7 phone support',
        'Dedicated infrastructure',
        'Security & compliance reviews',
        'Custom integrations',
        'Training & workshops',
        'Multi-brand management'
      ],
      cta: 'Contact Sales',
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
                  href={plan.cta === 'Contact Sales' ? '/contact' : '/book-demo'}
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