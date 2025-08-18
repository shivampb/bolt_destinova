"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  Headphones, 
  Globe, 
  Lock,
  CheckCircle,
  Award,
  Zap
} from 'lucide-react';

const trustIndicators = [
  {
    icon: Shield,
    title: 'GDPR & Privacy Compliant',
    description: 'Full compliance with GDPR, CCPA, and international privacy regulations',
    badge: 'Certified',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Clock,
    title: '99.9% Uptime SLA',
    description: 'Enterprise-grade reliability with guaranteed uptime and performance monitoring',
    badge: 'Guaranteed',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support and customer success management',
    badge: 'Always On',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: 'Multi-region deployment with CDN for lightning-fast response times worldwide',
    badge: 'Worldwide',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
];

const securityFeatures = [
  'SOC 2 Type II Compliance',
  'End-to-end encryption',
  'Regular security audits',
  'Data residency controls',
  'Role-based access control',
  'API rate limiting',
];

const performanceStats = [
  { value: '<200ms', label: 'Average Response Time' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Expert Support' },
  { value: 'ISO 27001', label: 'Security Standard' },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Built for Enterprise Trust
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your customers' data and your business operations deserve the highest levels of 
            security, reliability, and support.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <Card key={index} className="p-8 bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${indicator.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${indicator.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {indicator.title}
                      </h3>
                      <Badge 
                        className={`${indicator.color} bg-current text-white text-xs`}
                        style={{ backgroundColor: indicator.color.replace('text-', 'var(--') + ')'}}
                      >
                        {indicator.badge}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Performance Stats */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 bg-white shadow-lg border-0 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Performance You Can Count On
              </h3>
              <p className="text-slate-600">
                Built on enterprise-grade infrastructure with global reach
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#FF7626] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="h-8 w-8 text-[#FF7626]" />
              <h3 className="text-2xl font-bold text-slate-900">
                Enterprise Security
              </h3>
            </div>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your data security is our top priority. We maintain the highest industry 
              standards and undergo regular third-party security audits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Certifications */}
            <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="h-6 w-6 text-[#FF7626]" />
                <h4 className="font-bold text-slate-900">Certifications & Compliance</h4>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>SOC 2 Type II</span>
                  <Badge variant="secondary">Verified</Badge>
                </div>
                <div className="flex justify-between">
                  <span>ISO 27001</span>
                  <Badge variant="secondary">Certified</Badge>
                </div>
                <div className="flex justify-between">
                  <span>GDPR Compliance</span>
                  <Badge variant="secondary">Compliant</Badge>
                </div>
              </div>
            </Card>

            {/* Support */}
            <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <Zap className="h-6 w-6 text-[#FF7626]" />
                <h4 className="font-bold text-slate-900">Dedicated Support</h4>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <div>✓ Dedicated customer success manager</div>
                <div>✓ Priority technical support queue</div>
                <div>✓ Implementation assistance included</div>
                <div>✓ Custom training and onboarding</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}