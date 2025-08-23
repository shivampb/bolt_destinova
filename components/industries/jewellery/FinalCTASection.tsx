import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MessageSquare, Gem } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-400/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Gem size={32} className="text-black" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Help Every Customer Find the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Perfect Jewel
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed">
            Deliver AI-driven recommendations that feel tailor-made for each customer's style, occasion, and budget. Transform browsing into buying with personalized luxury experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black text-lg px-8 py-4 h-auto font-semibold rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/demo-form" className="flex items-center gap-2">
                <Calendar size={20} />
                Request Demo
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4 h-auto bg-transparent font-semibold rounded-2xl"
            >
              <Link href="/api-docs" className="flex items-center gap-2">
                Try API
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-slate-400 text-slate-300 hover:bg-white hover:text-slate-900 text-lg px-8 py-4 h-auto bg-transparent font-semibold rounded-2xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <MessageSquare size={20} />
                Talk to Us
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                24-48h
              </div>
              <div className="text-slate-300 text-sm">
                Quick setup
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                14-day
              </div>
              <div className="text-slate-300 text-sm">
                Free trial
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                500+
              </div>
              <div className="text-slate-300 text-sm">
                Jewellery brands
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-2">
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
              Ready to Transform Your Jewellery Business?
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Join luxury jewellery brands worldwide who are already using AI to deliver exceptional customer experiences, 
              increase sales, and build lasting customer relationships. Start your transformation today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;