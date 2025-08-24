import { 
  HelpCircle, 
  User, 
  Shirt, 
  TrendingUp, 
  Calendar,
  Smartphone
} from 'lucide-react';

const CoreFeaturesSection = () => {
  const features = [
    {
      icon: HelpCircle,
      title: 'Style Quiz',
      description: 'Interactive quiz that identifies customer style preferences through visual selections and lifestyle questions.',
      benefits: [
        'Visual style assessment',
        'Lifestyle-based recommendations',
        'Brand preference learning',
        'Color palette identification'
      ],
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      icon: User,
      title: 'Body & Fit Recommendations',
      description: 'AI suggests optimal sizes and fits based on body type, preferences, and historical purchase data.',
      benefits: [
        'Size prediction accuracy',
        'Fit preference matching',
        'Body type considerations',
        'Return rate reduction'
      ],
      gradient: 'from-pink-500 to-pink-700'
    },
    {
      icon: Shirt,
      title: 'Outfit Builder',
      description: 'Advanced AI that creates complete outfits by pairing tops, bottoms, shoes, and accessories harmoniously.',
      benefits: [
        'Complete look curation',
        'Color coordination',
        'Style consistency',
        'Occasion appropriateness'
      ],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Cross-Sell / Upsell',
      description: 'Intelligent suggestions for complementary items and premium alternatives that enhance the customer\'s outfit.',
      benefits: [
        'Accessory recommendations',
        'Premium upgrade suggestions',
        'Bundle optimization',
        'Value-based positioning'
      ],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Calendar,
      title: 'Seasonal & Trend-Based Suggestions',
      description: 'Stay current with fashion trends and seasonal preferences through AI-powered trend analysis and forecasting.',
      benefits: [
        'Trend integration',
        'Seasonal adaptation',
        'Fashion week insights',
        'Social media trend tracking'
      ],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Store Integration',
      description: 'Seamless integration with Shopify, WooCommerce, Magento, and in-store systems for unified experiences.',
      benefits: [
        'Platform-native integration',
        'Real-time inventory sync',
        'Cross-channel consistency',
        'Mobile-optimized interface'
      ],
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Core Features for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Apparel Brands
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI-powered features designed specifically for the unique needs of fashion retailers and apparel brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-slate-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
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

export default CoreFeaturesSection;