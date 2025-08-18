import { CheckCircle, Star } from 'lucide-react';

const HeroSection = () => {
  const benefits = [
    '14-day free trial',
    'No setup fees',
    'Cancel anytime',
    'SOC 2 certified'
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-8">
            <Star size={16} className="mr-2" />
            Transparent Pricing • No Hidden Fees
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Simple, Transparent{' '}
            <span className="text-[#FF7626]">Pricing</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start with our free trial and scale as you grow. No surprises, no hidden costs.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-700">
                <CheckCircle size={20} className="text-green-500" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;