import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Play } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FF7626]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7626]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your eCommerce?
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed">
            Join 500+ brands already using Destinova AI to boost conversions and delight customers. See results in your first week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#FF7626] hover:bg-[#e6651f] text-white text-lg px-8 py-4 h-auto"
            >
              <Link href="/book-demo" className="flex items-center gap-2">
                <Calendar size={20} />
                Book a Live Demo
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4 h-auto bg-transparent"
            >
              <Link href="/interactive-demo" className="flex items-center gap-2">
                <Play size={20} />
                Try Interactive Demo
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[#FF7626] mb-2">
                24-48 hours
              </div>
              <div className="text-slate-300 text-sm">
                Average setup time
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FF7626] mb-2">
                14-day trial
              </div>
              <div className="text-slate-300 text-sm">
                Risk-free evaluation
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FF7626] mb-2">
                99.9% uptime
              </div>
              <div className="text-slate-300 text-sm">
                Reliability guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;