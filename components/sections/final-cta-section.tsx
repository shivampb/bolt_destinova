import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Calendar, Play, CheckCircle } from 'lucide-react';

const benefits = [
  'Setup in 15 minutes',
  'No long-term contracts',
  'Free migration support',
  '30-day money-back guarantee',
];

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF7626]/10 to-transparent opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#FF7626]/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to boost conversions?{' '}
            <span className="text-[#FF7626]">Let's launch your AI shopping assistant this week.</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of eCommerce brands already using Destinova AI to deliver 
            personalized shopping experiences and drive more sales.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 text-slate-300">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white px-10 py-5 text-lg font-medium group shadow-xl"
            >
              <Calendar className="mr-3 h-5 w-5" />
              Book a Live Demo
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-5 text-lg font-medium border-slate-300 text-white hover:bg-white hover:text-slate-900 group"
            >
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Try Interactive Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Card className="p-6 bg-slate-800/50 border-slate-700 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-[#FF7626] mb-2">15 min</div>
              <div className="text-slate-300">Average setup time</div>
            </Card>
            
            <Card className="p-6 bg-slate-800/50 border-slate-700 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-[#FF7626] mb-2">500+</div>
              <div className="text-slate-300">Happy customers</div>
            </Card>
            
            <Card className="p-6 bg-slate-800/50 border-slate-700 text-center backdrop-blur-sm">
              <div className="text-2xl font-bold text-[#FF7626] mb-2">24/7</div>
              <div className="text-slate-300">Expert support</div>
            </Card>
          </div>

          {/* Final Message */}
          <p className="text-sm text-slate-400 mt-8">
            No credit card required • Free trial included • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}