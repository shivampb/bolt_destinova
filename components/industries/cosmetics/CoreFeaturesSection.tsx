import { 
    HelpCircle, 
    Camera, 
    Target, 
    Layers, 
    Gift,
    Smartphone
  } from 'lucide-react';
  
  const CoreFeaturesSection = () => {
    const features = [
      {
        icon: HelpCircle,
        title: 'Skin Concern Questionnaire',
        description: 'Comprehensive questionnaire that identifies skin type, concerns, preferences, and beauty goals for accurate recommendations.',
        benefits: [
          'Customizable question sets',
          'Multi-language support',
          'Progressive profiling',
          'Preference learning'
        ],
        gradient: 'from-pink-400 to-rose-400'
      },
      {
        icon: Camera,
        title: 'AI-Powered Image Analysis',
        description: 'Advanced computer vision technology analyzes facial photos to determine skin tone, texture, and specific concerns.',
        benefits: [
          'Skin tone matching',
          'Texture analysis',
          'Concern detection',
          'Shade recommendations'
        ],
        gradient: 'from-purple-400 to-pink-400'
      },
      {
        icon: Target,
        title: 'Smart Product Recommendations',
        description: 'Intelligent matching algorithm that considers skin analysis, preferences, and product compatibility for perfect suggestions.',
        benefits: [
          'Ingredient compatibility',
          'Skin type matching',
          'Concern-based filtering',
          'Preference alignment'
        ],
        gradient: 'from-rose-400 to-purple-400'
      },
      {
        icon: Layers,
        title: 'Routine Builder',
        description: 'Creates complete skincare routines with step-by-step guidance and product layering recommendations.',
        benefits: [
          'Morning/evening routines',
          'Product layering order',
          'Usage instructions',
          'Routine customization'
        ],
        gradient: 'from-pink-500 to-purple-500'
      },
      {
        icon: Gift,
        title: 'Cross-Sell Bundles',
        description: 'Intelligent bundling that suggests complementary products and complete beauty sets for higher order values.',
        benefits: [
          'Complementary products',
          'Routine bundles',
          'Seasonal collections',
          'Gift set suggestions'
        ],
        gradient: 'from-purple-500 to-rose-500'
      },
      {
        icon: Smartphone,
        title: 'Mobile App Integration',
        description: 'Seamless integration with mobile apps, websites, and in-store kiosks for consistent omnichannel experiences.',
        benefits: [
          'Native app integration',
          'Web widget support',
          'In-store kiosks',
          'Social media integration'
        ],
        gradient: 'from-rose-500 to-pink-500'
      }
    ];
  
    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Core Features for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Cosmetic Brands
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI-powered features designed specifically for the beauty and cosmetics industry.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-pink-500/50 hover:shadow-xl transition-all duration-300"
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
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 flex-shrink-0"></div>
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