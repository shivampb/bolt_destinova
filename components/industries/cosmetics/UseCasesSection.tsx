import { Smartphone, Store, ShoppingBag, Globe } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Smartphone,
      title: 'Skincare Apps',
      description: 'Mobile-first beauty apps that provide personalized skincare routines and product recommendations based on AI analysis.',
      features: [
        'In-app skin analysis',
        'Personalized routine builder',
        'Progress tracking',
        'Product marketplace integration'
      ],
      results: '+45% user engagement, +30% in-app purchases',
      bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
      iconColor: 'from-pink-400 to-rose-400',
    },
    {
      icon: Store,
      title: 'Cosmetic Retailers',
      description: 'Brick-and-mortar beauty stores enhanced with AI-powered kiosks and digital consultations for personalized shopping.',
      features: [
        'In-store AI kiosks',
        'Virtual beauty consultations',
        'Shade matching technology',
        'Inventory integration'
      ],
      results: '+35% conversion rate, +50% customer satisfaction',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconColor: 'from-purple-400 to-pink-400',
    },
    {
      icon: ShoppingBag,
      title: 'D2C Beauty Brands',
      description: 'Direct-to-consumer beauty brands offering personalized product discovery and custom beauty routines online.',
      features: [
        'Custom product finder',
        'Subscription box personalization',
        'Virtual try-on experiences',
        'Loyalty program integration'
      ],
      results: '+40% repeat purchases, +25% customer lifetime value',
      bgColor: 'bg-gradient-to-br from-rose-50 to-purple-50',
      iconColor: 'from-rose-400 to-purple-400',
    },
    {
      icon: Globe,
      title: 'Beauty Marketplaces',
      description: 'Multi-brand beauty platforms that help customers navigate thousands of products with AI-powered recommendations.',
      features: [
        'Cross-brand recommendations',
        'Price comparison integration',
        'Review sentiment analysis',
        'Trend-based suggestions'
      ],
      results: '+28% marketplace conversion, +60% product discovery',
      bgColor: 'bg-gradient-to-br from-pink-50/50 to-purple-50/50',
      iconColor: 'from-pink-500 to-purple-500',
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Use Cases for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Every Beauty Business
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI recommendation engine adapts to various beauty business models, from mobile apps to retail stores and online marketplaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className={`p-8 ${useCase.bgColor} rounded-2xl border border-pink-200/30 hover:border-pink-300/50 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${useCase.iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
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
                        <li
                          key={featureIndex}
                          className="flex items-center text-slate-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
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

        {/* Industry Stats */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Beauty Industry Impact
            </h3>
            <p className="text-slate-600">
              See how AI personalization is transforming the beauty industry across all business models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">
                $532B
              </div>
              <div className="text-slate-600 text-sm">
                Global beauty market size
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                73%
              </div>
              <div className="text-slate-600 text-sm">
                Want personalized recommendations
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-600 mb-2">
                +25%
              </div>
              <div className="text-slate-600 text-sm">
                Average conversion increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">
                -40%
              </div>
              <div className="text-slate-600 text-sm">
                Reduction in returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;