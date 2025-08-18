"use client";

import { Card } from '@/components/ui/card';
import { 
  Target, 
  TrendingUp, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Shield 
} from 'lucide-react';

const valueProps = [
  {
    icon: Target,
    title: 'Smart Product Match',
    description: 'Understands shoppers and your catalog instantly with advanced AI that learns from every interaction.',
    color: 'text-[#FF7626]',
    bgColor: 'bg-[#FF7626]/10',
  },
  {
    icon: TrendingUp,
    title: 'Higher Conversions',
    description: 'Reduce friction and guide customers to the right SKU fast with personalized recommendations.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Ready',
    description: 'Deploy across website widgets, WhatsApp, Facebook Messenger, and more platforms.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Zap,
    title: 'No Heavy Lift',
    description: 'Plug-and-play integration with Shopify, WooCommerce, Magento, and BigCommerce.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description: 'See what users ask, buy, and where they drop off with comprehensive analytics.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade',
    description: 'Secure, scalable, and GDPR-ready infrastructure with 99.9% uptime guarantee.',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
];

export function ValuePropsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Why Choose Destinova AI?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Transform your eCommerce experience with AI that understands both your products and customers, 
            delivering the right recommendations at the perfect moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <Card 
                key={index} 
                className="p-8 bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105 rounded-2xl"
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-xl ${prop.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${prop.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#FF7626] transition-colors duration-300">
                    {prop.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live support available • Setup in 15 minutes • Free trial included</span>
          </div>
        </div>
      </div>
    </section>
  );
}