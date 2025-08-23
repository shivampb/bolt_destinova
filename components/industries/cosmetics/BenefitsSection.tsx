import { TrendingUp, RotateCcw, ShoppingCart, Heart, Target } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Boost Conversions',
      description: 'Increase conversion rates by up to 25% with personalized product recommendations that match customer needs perfectly.',
      metric: '+25%',
      color: 'text-green-600'
    },
    {
      icon: RotateCcw,
      title: 'Reduce Returns',
      description: 'Decrease return rates by 40% through accurate skin tone matching and personalized product suggestions.',
      metric: '-40%',
      color: 'text-blue-600'
    },
    {
      icon: ShoppingCart,
      title: 'Increase Average Order Value',
      description: 'Smart bundling and routine recommendations boost AOV by 35% through intelligent cross-selling.',
      metric: '+35%',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: 'Loyalty & Retention',
      description: 'Build lasting relationships with personalized experiences that increase customer lifetime value by 45%.',
      metric: '+45%',
      color: 'text-pink-600'
    },
    {
      icon: Target,
      title: 'Differentiation',
      description: 'Stand out from competitors with AI-powered beauty experiences that position your brand as innovative.',
      metric: '3x',
      color: 'text-rose-600'
    }
  ];

  const additionalBenefits = [
    'Reduce customer acquisition costs with higher conversion rates',
    'Improve customer satisfaction with accurate product matching',
    'Optimize inventory based on AI-driven demand predictions',
    'Generate valuable customer insights for marketing strategies',
    'Scale personalized service without increasing staff costs',
    'Enhance brand reputation with cutting-edge beauty technology'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Brands{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Love It
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your beauty business with measurable improvements across all key performance indicators.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-slate-900">
                        {benefit.title}
                      </h3>
                      <span className={`text-2xl font-bold ${benefit.color}`}>
                        {benefit.metric}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Additional Business Benefits
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-pink-100 hover:border-pink-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200/50 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Calculate Your Potential ROI
          </h3>
          <p className="text-slate-700 mb-6">
            Based on average improvements: +25% conversion rate, +35% AOV, -40% return rate
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-pink-100">
              <div className="text-3xl font-bold text-pink-600 mb-2">$25K</div>
              <div className="text-slate-600 text-sm">Monthly Revenue</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ $34K</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-pink-100">
              <div className="text-3xl font-bold text-pink-600 mb-2">2.8%</div>
              <div className="text-slate-600 text-sm">Conversion Rate</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ 3.5%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-pink-100">
              <div className="text-3xl font-bold text-pink-600 mb-2">$65</div>
              <div className="text-slate-600 text-sm">Average Order Value</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ $88</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;