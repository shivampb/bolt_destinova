import { Shirt, Smartphone, Sparkles, Home, Car, Gamepad2 } from 'lucide-react';

const IndustrySpecific = () => {
  const industries = [
    {
      icon: Shirt,
      name: 'Fashion & Apparel',
      description: 'Style recommendations based on trends, fit preferences, and personal taste',
      features: [
        'Size and fit recommendations',
        'Style matching algorithms',
        'Seasonal trend integration',
        'Color and pattern coordination'
      ],
      results: '+42% conversion rate, +38% AOV'
    },
    {
      icon: Smartphone,
      name: 'Electronics & Tech',
      description: 'Technical product matching based on specifications and use cases',
      features: [
        'Compatibility checking',
        'Performance comparisons',
        'Technical specification matching',
        'Accessory recommendations'
      ],
      results: '+35% conversion rate, +45% cross-sell'
    },
    {
      icon: Sparkles,
      name: 'Beauty & Cosmetics',
      description: 'Personalized beauty recommendations based on skin type and preferences',
      features: [
        'Skin tone matching',
        'Ingredient compatibility',
        'Routine building',
        'Seasonal product suggestions'
      ],
      results: '+48% conversion rate, +32% repeat purchases'
    },
    {
      icon: Home,
      name: 'Home & Living',
      description: 'Interior design and home improvement product recommendations',
      features: [
        'Room-based suggestions',
        'Style coordination',
        'Size and space optimization',
        'Complementary product bundles'
      ],
      results: '+29% conversion rate, +55% bundle sales'
    },
    {
      icon: Car,
      name: 'Automotive',
      description: 'Vehicle parts and accessories based on make, model, and usage',
      features: [
        'Vehicle compatibility',
        'Performance upgrades',
        'Maintenance scheduling',
        'Seasonal product alerts'
      ],
      results: '+31% conversion rate, +40% customer retention'
    },
    {
      icon: Gamepad2,
      name: 'Sports & Recreation',
      description: 'Equipment and gear recommendations based on activity and skill level',
      features: [
        'Skill level matching',
        'Activity-specific gear',
        'Performance optimization',
        'Seasonal sport recommendations'
      ],
      results: '+36% conversion rate, +43% upsell success'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI adapts to your industry's unique requirements, understanding product nuances and customer behaviors specific to your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FF7626]/10 rounded-xl flex items-center justify-center mb-6">
                  <IconComponent size={24} className="text-[#FF7626]" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#FF7626] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-medium text-[#FF7626]">
                    Typical Results: {industry.results}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrySpecific;