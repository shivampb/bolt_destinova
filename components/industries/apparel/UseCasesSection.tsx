import { ShoppingBag, Crown, Store, Globe } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: 'Online Apparel Stores',
      description: 'Boost online conversions with smart style-based filters, outfit recommendations, and personalized shopping experiences.',
      features: [
        'Style-based product filtering',
        'Complete outfit recommendations',
        'Size and fit predictions',
        'Personalized homepage curation'
      ],
      results: '+35% conversion rate, +40% AOV',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      iconColor: 'from-purple-500 to-purple-700'
    },
    {
      icon: Crown,
      title: 'D2C Fashion Brands',
      description: 'Create personalized shopping journeys that reflect your brand identity and build stronger customer relationships.',
      features: [
        'Brand-aligned style quizzes',
        'Personalized lookbooks',
        'Customer journey mapping',
        'Loyalty program integration'
      ],
      results: '+45% customer retention, +30% repeat purchases',
      bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100/50',
      iconColor: 'from-pink-500 to-pink-700'
    },
    {
      icon: Store,
      title: 'Luxury & Fast-Fashion Retail Chains',
      description: 'Deliver consistent personalized experiences across both in-store and online channels with unified AI recommendations.',
      features: [
        'Omnichannel personalization',
        'In-store kiosk integration',
        'Staff recommendation tools',
        'Inventory optimization'
      ],
      results: '+50% in-store engagement, +25% cross-channel sales',
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100/50',
      iconColor: 'from-indigo-500 to-indigo-700'
    },
    {
      icon: Globe,
      title: 'Fashion Marketplaces',
      description: 'Power AI-driven outfit discovery across multiple brands and categories with intelligent product matching and curation.',
      features: [
        'Multi-brand outfit curation',
        'Cross-category recommendations',
        'Vendor performance insights',
        'Personalized marketplace experience'
      ],
      results: '+60% product discovery, +35% marketplace GMV',
      bgColor: 'bg-gradient-to-br from-purple-50/50 to-pink-50/50',
      iconColor: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Use Cases for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Every Business Model
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI recommendation engine adapts to various apparel business models, from online retailers to luxury fashion chains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className={`p-8 ${useCase.bgColor} rounded-2xl border border-purple-200/30 hover:border-purple-300/50 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${useCase.iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      ✓ {useCase.results}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;