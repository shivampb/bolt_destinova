import { TrendingUp, ShoppingCart, Heart, Zap, Target } from 'lucide-react';

const BenefitsForRetailersSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Boost Conversions',
      description: 'Increase conversion rates by up to 45% with personalized recommendations that match customer preferences perfectly.',
      metric: '+45%',
      color: 'text-green-600'
    },
    {
      icon: ShoppingCart,
      title: 'Higher Average Order Value',
      description: 'Smart upselling and set recommendations increase AOV by 40% through intelligent product bundling.',
      metric: '+40%',
      color: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Enhanced Customer Loyalty',
      description: 'Build lasting relationships with personalized experiences that make customers feel understood and valued.',
      metric: '+60%',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Reduce Choice Overload',
      description: 'Eliminate decision paralysis by presenting curated selections that match specific customer needs and preferences.',
      metric: '-65%',
      color: 'text-orange-600'
    },
    {
      icon: Target,
      title: 'Differentiate Your Store',
      description: 'Stand out from competitors with AI-powered luxury experiences that position your brand as innovative and customer-centric.',
      metric: '3x',
      color: 'text-yellow-600'
    }
  ];

  const additionalBenefits = [
    'Reduce return rates with accurate style and preference matching',
    'Increase customer lifetime value through personalized experiences',
    'Optimize inventory based on AI-driven demand predictions',
    'Improve customer satisfaction with instant expert guidance',
    'Scale personalized service without increasing staff costs',
    'Generate valuable customer insights for marketing strategies'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-yellow-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Benefits for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
              Retailers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your jewellery business with measurable improvements across all key performance indicators.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-yellow-200/30 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center flex-shrink-0">
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
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-yellow-200/30 hover:border-yellow-300/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100/50 rounded-2xl p-8 border border-yellow-200/50 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Calculate Your Potential ROI
          </h3>
          <p className="text-slate-700 mb-6">
            Based on average improvements: +40% AOV, +45% conversion rate, +60% customer satisfaction
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-yellow-200/30">
              <div className="text-3xl font-bold text-yellow-600 mb-2">$50K</div>
              <div className="text-slate-600 text-sm">Monthly Revenue</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ $72K</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-yellow-200/30">
              <div className="text-3xl font-bold text-yellow-600 mb-2">2.5%</div>
              <div className="text-slate-600 text-sm">Conversion Rate</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ 3.6%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-yellow-200/30">
              <div className="text-3xl font-bold text-yellow-600 mb-2">$180</div>
              <div className="text-slate-600 text-sm">Average Order Value</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ $252</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsForRetailersSection;