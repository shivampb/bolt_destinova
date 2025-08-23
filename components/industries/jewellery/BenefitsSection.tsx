import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    'Increase sales with personalized luxury upselling and cross-selling recommendations',
    'Reduce customer drop-offs by providing instant answers to authenticity and quality questions',
    'Build trust with certification-focused AI responses and expert gemstone knowledge',
    'Provide consistent luxury experiences across online and offline touchpoints',
    'Collect valuable insights for targeted marketing and intelligent inventory planning',
    'Boost conversion rates by 45% with AI-guided luxury shopping experiences',
    'Improve customer satisfaction by 60% with 24/7 expert-level support',
    'Enhance average order value by 40% through intelligent product bundling',
    'Reduce return rates by 35% with accurate size, style, and preference matching',
    'Accelerate purchase decisions with confidence-building product education'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-yellow-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Transform Your Jewellery Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
                AI
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience measurable improvements across all key business metrics with our AI-powered luxury jewellery solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-yellow-200/30 hover:border-yellow-300/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-yellow-700/10 rounded-2xl border border-yellow-200/30">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800 mb-2">
                45%
              </div>
              <p className="text-slate-600 font-medium">Higher Conversion Rates</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-slate-500/10 to-slate-700/10 rounded-2xl border border-slate-200/30">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 mb-2">
                60%
              </div>
              <p className="text-slate-600 font-medium">Better Customer Satisfaction</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-slate-500/10 rounded-2xl border border-yellow-200/30">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-slate-700 mb-2">
                40%
              </div>
              <p className="text-slate-600 font-medium">Increased Average Order Value</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;