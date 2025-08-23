import { 
    HelpCircle, 
    Calendar, 
    Gem, 
    TrendingUp, 
    Gift,
    Smartphone
  } from 'lucide-react';
  
  const CoreFeaturesSection = () => {
    const features = [
      {
        icon: HelpCircle,
        title: 'Style Finder Quiz',
        description: 'Interactive quiz that identifies customer style preferences through visual selections and lifestyle questions.',
        benefits: [
          'Visual style assessment',
          'Lifestyle-based recommendations',
          'Preference learning algorithm',
          'Style evolution tracking'
        ],
        gradient: 'from-yellow-500 to-yellow-700'
      },
      {
        icon: Calendar,
        title: 'Occasion-Based Recommendations',
        description: 'Smart suggestions tailored to specific events like weddings, anniversaries, graduations, or everyday wear.',
        benefits: [
          'Event-specific collections',
          'Cultural occasion awareness',
          'Seasonal trend integration',
          'Milestone celebration focus'
        ],
        gradient: 'from-slate-600 to-slate-800'
      },
      {
        icon: Gem,
        title: 'Set Matching Engine',
        description: 'Advanced AI that creates perfectly coordinated jewellery sets by matching metals, stones, and design elements.',
        benefits: [
          'Metal compatibility matching',
          'Stone coordination',
          'Design harmony analysis',
          'Complete look curation'
        ],
        gradient: 'from-yellow-600 to-yellow-800'
      },
      {
        icon: TrendingUp,
        title: 'Upsell & Cross-Sell',
        description: 'Intelligent suggestions for complementary pieces and premium alternatives that enhance the customer\'s selection.',
        benefits: [
          'Complementary piece suggestions',
          'Premium upgrade recommendations',
          'Bundle optimization',
          'Value-based positioning'
        ],
        gradient: 'from-slate-500 to-slate-700'
      },
      {
        icon: Gift,
        title: 'Smart Gifting Suggestions',
        description: 'Personalized gift recommendations based on recipient profiles, relationships, and special occasions.',
        benefits: [
          'Recipient profiling',
          'Relationship-based suggestions',
          'Gift wrapping coordination',
          'Surprise element optimization'
        ],
        gradient: 'from-yellow-500 to-yellow-600'
      },
      {
        icon: Smartphone,
        title: 'Mobile & Store Integration',
        description: 'Seamless integration with Shopify, Magento, WooCommerce, and in-store systems for unified experiences.',
        benefits: [
          'Platform-native integration',
          'Real-time inventory sync',
          'Cross-channel consistency',
          'Mobile-optimized interface'
        ],
        gradient: 'from-slate-600 to-yellow-700'
      }
    ];
  
    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Core Features for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Jewellery Brands
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI-powered features designed specifically for the unique needs of jewellery retailers and luxury brands.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 hover:shadow-xl transition-all duration-300"
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
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
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