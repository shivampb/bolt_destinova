import { TrendingDown, Users, RotateCcw, ShoppingCart } from 'lucide-react';

const WhyPersonalizationSection = () => {
  const stats = [
    {
      icon: Users,
      value: '70%',
      label: 'Feel Overwhelmed',
      description: 'Of beauty shoppers feel overwhelmed with product choices and need guidance'
    },
    {
      icon: TrendingDown,
      value: '25%',
      label: 'Conversion Boost',
      description: 'Personalized skincare recommendations increase conversion rates by up to 25%'
    },
    {
      icon: RotateCcw,
      value: '40%',
      label: 'High Returns',
      description: 'Of cosmetic returns are due to wrong shade or skin type mismatch'
    },
    {
      icon: ShoppingCart,
      value: '60%',
      label: 'Abandon Carts',
      description: 'Of customers abandon their cart due to uncertainty about product suitability'
    }
  ];

  const painPoints = [
    'Wrong foundation shade matching leading to dissatisfied customers',
    'Overwhelming product catalogs with hundreds of similar items',
    'Lack of personalized guidance for different skin types and concerns',
    'High return rates due to unsuitable product recommendations',
    'Difficulty in building complete skincare routines',
    'Generic product suggestions that don\'t consider individual needs'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Cosmetic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Personalization
            </span>{' '}
            Matters
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beauty shopping is deeply personal. Generic recommendations don't work when every customer has unique skin needs, preferences, and concerns.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-pink-100 shadow-sm"
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

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200/50">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              The Solution: AI-Powered Beauty Personalization
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Our AI recommendation engine eliminates these pain points by analyzing skin type, concerns, preferences, and even facial features to deliver perfectly matched cosmetic and skincare recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPersonalizationSection;