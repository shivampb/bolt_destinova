import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageSquare, Sparkles } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Sparkles size={32} className="text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Help Your Customers Feel Confident{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              with Every Purchase
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed">
            Power your beauty store with AI-driven cosmetic recommendations that understand skin types, concerns, and preferences. Transform uncertain shoppers into confident customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-300 hover:to-purple-300 text-white text-lg px-8 py-4 h-auto font-semibold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/demo-form" className="flex items-center gap-2">
                <Calendar size={20} />
                Book Demo
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white text-lg px-8 py-4 h-auto bg-transparent font-semibold rounded-2xl"
            >
              <Link href="/api-docs" className="flex items-center gap-2">
                Request API Access
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-white hover:text-slate-900 text-lg px-8 py-4 h-auto bg-transparent font-semibold rounded-2xl"
            >
              <Link href="#demo" className="flex items-center gap-2">
                <MessageSquare size={20} />
                Try It Now
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-2">
                24-48h
              </div>
              <div className="text-slate-300 text-sm">
                Quick setup
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-2">
                14-day
              </div>
              <div className="text-slate-300 text-sm">
                Free trial
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-2">
                200+
              </div>
              <div className="text-slate-300 text-sm">
                Beauty brands
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400 mb-2">
                99.9%
              </div>
              <div className="text-slate-300 text-sm">
                Uptime SLA
              </div>
            </div>
          </div>

          {/* Final Value Proposition */}
          <div className="mt-16 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Beauty Business?
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Join beauty brands worldwide who are already using AI to deliver personalized shopping experiences, 
              reduce returns, and build lasting customer relationships. Start your transformation today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;