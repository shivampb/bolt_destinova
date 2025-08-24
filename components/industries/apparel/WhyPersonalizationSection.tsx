import { Clock, TrendingUp, Search, ShoppingBag } from 'lucide-react';

const WhyPersonalizationSection = () => {
  const stats = [
    {
      icon: Clock,
      value: '67%',
      label: 'Cart Abandonment Rate',
      description: 'Shoppers abandon carts due to choice overload and sizing confusion'
    },
    {
      icon: TrendingUp,
      value: '+25%',
      label: 'Sales Boost',
      description: 'Personalization can increase apparel sales by up to 25%'
    },
    {
      icon: Search,
      value: '8 mins',
      label: 'Average Browse Time',
      description: 'Time spent searching for the right outfit before giving up'
    },
    {
      icon: ShoppingBag,
      value: '73%',
      label: 'Want Style Help',
      description: 'Of shoppers want personalized styling recommendations'
    }
  ];

  const painPoints = [
    'Size confusion leading to high return rates and customer frustration',
    'Difficulty styling complete outfits from individual product pages',
    'Overwhelming product catalogues with thousands of similar items',
    'Lack of body type and fit guidance for different clothing styles',
    'No seasonal or trend-based recommendations for style-conscious shoppers'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Personalization Matters in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Apparel
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fashion is deeply personal. Generic product displays fail when every customer has unique style preferences, body types, and lifestyle needs.
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
            <h4 className="text-xl font-semibold text-slate-900 mb-3">
              The Solution: AI-Powered Style Intelligence
            </h4>
            <p className="text-slate-700 leading-relaxed">
              Our AI recommendation engine eliminates these pain points by understanding individual style preferences, 
              body types, and occasions to deliver perfectly curated outfit suggestions that customers love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPersonalizationSection;