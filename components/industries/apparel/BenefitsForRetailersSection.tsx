import { TrendingUp, ShoppingCart, Heart, Zap, Target } from 'lucide-react';

const BenefitsForRetailersSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Boost Conversions',
      description: 'Increase conversion rates by up to 35% with fast outfit discovery and personalized style recommendations.',
      metric: '+35%',
      color: 'text-green-600'
    },
    {
      icon: ShoppingCart,
      title: 'Higher Average Order Value',
      description: 'Smart outfit building and upselling increase AOV by 40% through intelligent product bundling.',
      metric: '+40%',
      color: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Improve Customer Loyalty',
      description: 'Build lasting relationships with personalized style journeys that make customers feel understood.',
      metric: '+55%',
      color: 'text-purple-600'
    },
    {
      icon: Zap,
      title: 'Reduce Returns',
      description: 'Minimize returns with fit-aware recommendations and accurate size predictions based on body type.',
      metric: '-30%',
      color: 'text-orange-600'
    },
    {
      icon: Target,
      title: 'Differentiate Your Store',
      description: 'Stand out from competitors with premium personalization that positions your brand as innovative.',
      metric: '3x',
      color: 'text-pink-600'
    }
  ];

  const additionalBenefits = [
    'Increase customer lifetime value through personalized style experiences',
    'Optimize inventory based on AI-driven demand and trend predictions',
    'Improve customer satisfaction with instant styling guidance',
    'Scale personalized service without increasing staff costs',
    'Generate valuable customer insights for marketing strategies',
    'Reduce choice overload with curated outfit recommendations'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Benefits for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Apparel Retailers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transform your fashion business with measurable improvements across all key performance indicators.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-purple-200/30 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
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
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-purple-200/30 hover:border-purple-300/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200/50 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Calculate Your Potential ROI
          </h3>
          <p className="text-slate-700 mb-6">
            Based on average improvements: +40% AOV, +35% conversion rate, +55% customer loyalty
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-purple-200/30">
              <div className="text-3xl font-bold text-purple-600 mb-2">$75K</div>
              <div className="text-slate-600 text-sm">Monthly Revenue</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ $105K</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-purple-200/30">
              <div className="text-3xl font-bold text-purple-600 mb-2">3.2%</div>
              <div className="text-slate-600 text-sm">Conversion Rate</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ 4.3%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-purple-200/30">
              <div className="text-3xl font-bold text-purple-600 mb-2">$85</div>
              <div className="text-slate-600 text-sm">Average Order Value</div>
              <div className="text-lg font-semibold text-green-600 mt-2">→ $119</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsForRetailersSection;