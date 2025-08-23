import { Clock, TrendingUp, Search, Gift } from 'lucide-react';

const WhyPersonalizationSection = () => {
  const stats = [
    {
      icon: Clock,
      value: '2-3x',
      label: 'Longer Decision Time',
      description: 'Customers spend significantly more time choosing jewellery compared to other products'
    },
    {
      icon: TrendingUp,
      value: '+30%',
      label: 'Conversion Boost',
      description: 'Personalized recommendations increase conversion rates by up to 30%'
    },
    {
      icon: Search,
      value: '78%',
      label: 'Feel Overwhelmed',
      description: 'Of customers report feeling overwhelmed by large jewellery catalogues'
    },
    {
      icon: Gift,
      value: '65%',
      label: 'Gifting Confusion',
      description: 'Of gift buyers struggle to choose the right piece for recipients'
    }
  ];

  const painPoints = [
    'Overwhelming product catalogues with hundreds of similar-looking pieces',
    'Difficulty matching earrings, necklaces, and rings into cohesive sets',
    'Confusion when buying gifts without knowing recipient preferences',
    'Lack of guidance on occasion-appropriate jewellery choices',
    'Uncertainty about quality, authenticity, and value for money'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Personalization Matters in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
              Jewellery
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Jewellery shopping is deeply personal and emotional. Generic product displays don't work when every customer has unique style preferences and special occasions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pain Points */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Common Customer Pain Points
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((painPoint, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {painPoint}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-50 to-yellow-100/50 rounded-2xl border border-yellow-200/50">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              The Solution: AI-Powered Personalization
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Our AI recommendation engine eliminates these pain points by understanding individual style preferences, 
              occasion requirements, and budget constraints to deliver perfectly curated jewellery suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPersonalizationSection;