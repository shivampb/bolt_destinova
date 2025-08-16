import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Database, 
  Brain, 
  MessageCircle, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Database,
    title: 'Connect Your Store & Data',
    description: 'Seamlessly integrate with your eCommerce platform and import your product catalog, customer data, and preferences.',
    details: [
      'One-click Shopify/WooCommerce integration',
      'Automatic product catalog sync',
      'Customer behavior tracking setup',
      'API connections in 5 minutes'
    ],
    color: 'text-[#FF7626]',
    bgColor: 'bg-[#FF7626]/10',
  },
  {
    step: '02',
    icon: Brain,
    title: 'Understand Shopper Intent',
    description: 'Our agentic AI analyzes customer queries, preferences, and behavior to understand exactly what they\'re looking for.',
    details: [
      'Natural language processing',
      'Intent recognition & context',
      'Preference learning algorithms',
      'Real-time personalization'
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    step: '03',
    icon: MessageCircle,
    title: 'Recommend & Convert',
    description: 'Deliver perfectly matched product recommendations through conversational experiences that guide customers to purchase.',
    details: [
      'Contextual product suggestions',
      'Conversational shopping flow',
      'Cross-sell & upsell opportunities',
      'Seamless checkout integration'
    ],
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From setup to sale—our AI handles the complexity while you enjoy the results. 
            Get up and running in minutes, not months.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:gap-16' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl font-bold text-slate-200">
                      {step.step}
                    </div>
                    <div className={`inline-flex p-3 rounded-xl ${step.bgColor}`}>
                      <Icon className={`h-6 w-6 ${step.color}`} />
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${isEven ? 'lg:order-1' : ''}`}>
                  <Card className="p-8 bg-white shadow-lg border-0 rounded-2xl">
                    <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl flex items-center justify-center">
                      <Icon className={`h-16 w-16 ${step.color}`} />
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="mt-20">
          <Card className="p-8 lg:p-12 bg-white shadow-lg border-0 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                The Complete AI Pipeline
              </h3>
              <p className="text-slate-600">
                Continuous learning and optimization for maximum performance
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-4">
              {[
                'Data Sources',
                'AI Understanding', 
                'Smart Ranking',
                'Conversation',
                'Analytics Loop'
              ].map((stage, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-[#FF7626]/10 text-[#FF7626] px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    {stage}
                  </div>
                  {index < 4 && (
                    <ArrowRight className="h-5 w-5 text-slate-400 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white px-8 py-4 text-lg font-medium group"
          >
            See It in Action
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-slate-500 mt-3">
            Book a personalized demo • No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}