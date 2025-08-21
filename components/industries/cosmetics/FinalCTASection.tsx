import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
            <Heart size={40} className="text-pink-200" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Ready to revolutionize your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
              cosmetic brand
            </span>{' '}
            with AI?
          </h2>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl text-pink-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join leading beauty brands who are already transforming their customer experiences and boosting sales with our AI-powered solutions.
          </p>

          {/* CTA Button */}
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-pink-50 text-lg px-10 py-4 h-auto rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Link href="/book-demo" className="flex items-center gap-3">
              <Sparkles size={20} />
              Get a Free Demo
              <ArrowRight size={20} />
            </Link>
          </Button>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-pink-200 mb-2">
                24-48 hours
              </div>
              <div className="text-pink-100 text-sm">
                Quick setup time
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-200 mb-2">
                No commitment
              </div>
              <div className="text-pink-100 text-sm">
                Free consultation
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-200 mb-2">
                Beauty experts
              </div>
              <div className="text-pink-100 text-sm">
                Industry specialists
              </div>
            </div>
          </div>

          {/* Additional CTA text */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-pink-100 text-sm">
              💄 <strong>Special for Beauty Brands:</strong> Get a personalized demo with your actual product catalog and see instant results in just 30 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;