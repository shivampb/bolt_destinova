'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const stats = [
  { value: '500K+', label: 'Monthly Conversations', color: 'text-[#FF7626]' },
  { value: '25M+', label: 'Products Recommended', color: 'text-blue-600' },
  { value: '98.5%', label: 'Customer Satisfaction', color: 'text-green-600' },
  { value: '15s', label: 'Avg. Setup Time', color: 'text-purple-600' },
];

const clients = [
  { name: 'StyleForward', logo: 'SF', industry: 'Fashion' },
  { name: 'TechHub Store', logo: 'TH', industry: 'Electronics' },
  { name: 'BeautyBox', logo: 'BB', industry: 'Beauty' },
  { name: 'HomeCraft', logo: 'HC', industry: 'Home & Living' },
  { name: 'GourmetFresh', logo: 'GF', industry: 'Grocery' },
  { name: 'ActiveGear', logo: 'AG', industry: 'Sports' },
];

export function SocialProofSection() {
  return (
    <section className="py-16 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-8">
            Trusted by eCommerce Leaders
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-sm text-slate-600 mb-8">
            Join innovative brands already using Destinova AI
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="group cursor-pointer">
                <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-slate-700 font-bold text-lg group-hover:from-[#FF7626]/10 group-hover:to-[#FF7626]/5 group-hover:text-[#FF7626] transition-colors duration-300">
                      {client.logo}
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-slate-900 text-sm group-hover:text-[#FF7626] transition-colors duration-300">
                        {client.name}
                      </div>
                      <Badge variant="secondary" className="mt-1 text-xs bg-slate-100 text-slate-600 hover:bg-slate-100">
                        {client.industry}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}