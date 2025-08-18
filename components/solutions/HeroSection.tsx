import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, Users } from 'lucide-react';

const HeroSection = () => {
  const keyMetrics = [
    {
      icon: Target,
      value: '+28%',
      label: 'Conversion Rate Increase'
    },
    {
      icon: TrendingUp,
      value: '+35%',
      label: 'Average Order Value'
    },
    {
      icon: Users,
      value: '92%',
      label: 'Customer Satisfaction'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF7626]/10 text-[#FF7626] text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#FF7626] rounded-full mr-2"></span>
            Complete AI Commerce Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Transform Your eCommerce with{' '}
            <span className="text-[#FF7626]">AI-Powered Solutions</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            From personalized recommendations to intelligent customer engagement, discover how our AI chatbot solutions drive measurable results across every aspect of your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#FF7626] hover:bg-[#e6651f] text-white text-lg px-8 py-3 h-auto"
            >
              <Link href="/book-demo" className="flex items-center gap-2">
                See Solutions in Action
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-3 h-auto"
            >
              <Link href="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-[#FF7626]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-[#FF7626]" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;