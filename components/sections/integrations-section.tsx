"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle, Zap } from 'lucide-react';

const platformIntegrations = [
  {
    name: 'Shopify',
    logo: 'S',
    description: 'Native integration with Shopify stores',
    features: ['Product sync', 'Customer data', 'Order tracking', 'Checkout integration'],
    setupTime: '5 min',
    popularity: 'Most Popular',
    color: 'bg-green-600',
  },
  {
    name: 'WooCommerce',
    logo: 'W',
    description: 'WordPress eCommerce solution',
    features: ['Plugin installation', 'Product catalog', 'User profiles', 'Payment flow'],
    setupTime: '10 min',
    popularity: 'Popular',
    color: 'bg-purple-600',
  },
  {
    name: 'Magento',
    logo: 'M',
    description: 'Enterprise eCommerce platform',
    features: ['Module integration', 'Multi-store', 'B2B features', 'Advanced catalog'],
    setupTime: '15 min',
    popularity: 'Enterprise',
    color: 'bg-orange-600',
  },
  {
    name: 'BigCommerce',
    logo: 'BC',
    description: 'Cloud-based eCommerce platform',
    features: ['App installation', 'API integration', 'Multi-channel', 'Storefront API'],
    setupTime: '8 min',
    popularity: 'Growing',
    color: 'bg-blue-600',
  },
];

const additionalIntegrations = [
  { name: 'Klaviyo', category: 'Email Marketing', logo: 'K', color: 'bg-indigo-600' },
  { name: 'WhatsApp Business', category: 'Messaging', logo: 'WA', color: 'bg-green-600' },
  { name: 'Facebook Messenger', category: 'Social Chat', logo: 'FB', color: 'bg-blue-600' },
  { name: 'Google Analytics 4', category: 'Analytics', logo: 'GA', color: 'bg-orange-600' },
  { name: 'Segment', category: 'Customer Data', logo: 'S', color: 'bg-teal-600' },
  { name: 'Zendesk', category: 'Support', logo: 'Z', color: 'bg-purple-600' },
];

export function IntegrationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Integrations That Just Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connect with your existing tech stack in minutes. No complex setup, 
            no migration headaches—just seamless integration.
          </p>
        </div>

        {/* Main Platform Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center lg:text-left">
            eCommerce Platforms
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {platformIntegrations.map((platform, index) => (
              <Card key={index} className="p-6 lg:p-8 bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-[1.02] rounded-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                      {platform.logo}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#FF7626] transition-colors duration-300">
                        {platform.name}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge 
                      variant={platform.popularity === 'Most Popular' ? 'default' : 'secondary'}
                      className={`mb-2 ${platform.popularity === 'Most Popular' ? 'bg-[#FF7626] hover:bg-[#FF7626]/90' : ''}`}
                    >
                      {platform.popularity}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-slate-500">
                      <Zap className="h-3 w-3" />
                      <span>{platform.setupTime} setup</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {platform.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-[#FF7626] group-hover:text-white group-hover:border-[#FF7626] transition-colors duration-300"
                >
                  View Integration Guide
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Integrations */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center lg:text-left">
            Marketing & Support Tools
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalIntegrations.map((integration, index) => (
              <Card key={index} className="p-4 bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 group hover:scale-105 rounded-2xl">
                <div className="text-center space-y-3">
                  <div className={`w-10 h-10 ${integration.color} rounded-lg flex items-center justify-center text-white font-bold text-sm mx-auto`}>
                    {integration.logo}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm group-hover:text-[#FF7626] transition-colors duration-300">
                      {integration.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {integration.category}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="mt-16">
          <Card className="p-8 lg:p-12 bg-gradient-to-r from-slate-50 to-white shadow-lg border-0 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Connect Your Stack?
                </h3>
                <p className="text-slate-600 mb-6">
                  Our integration team will help you connect all your tools and ensure 
                  everything works seamlessly together. No technical expertise required.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Free integration support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>No downtime deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>24/7 technical support</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <Button 
                  size="lg" 
                  className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white px-8 py-4 text-lg font-medium"
                >
                  Get Integration Help
                </Button>
                <p className="text-sm text-slate-500 mt-2">
                  Talk to our integration specialists
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}