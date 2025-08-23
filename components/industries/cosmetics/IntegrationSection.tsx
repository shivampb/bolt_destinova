import { Code, Zap, BarChart3, Settings } from 'lucide-react';

const IntegrationSection = () => {
  const platforms = [
    {
      name: 'Shopify',
      description: 'Native app with beauty-specific features',
      features: ['Product sync', 'Skin analysis widget', 'Checkout optimization']
    },
    {
      name: 'WooCommerce',
      description: 'WordPress plugin for beauty stores',
      features: ['Custom skin questionnaire', 'Routine builder', 'Analytics dashboard']
    },
    {
      name: 'Magento',
      description: 'Enterprise solution for large beauty brands',
      features: ['Multi-store support', 'Advanced personalization', 'Custom integrations']
    },
    {
      name: 'Custom Apps',
      description: 'RESTful API for mobile and web apps',
      features: ['Image analysis API', 'Recommendation engine', 'Real-time suggestions']
    }
  ];

  const apiFeatures = [
    {
      icon: Code,
      title: 'Beauty-Specific APIs',
      description: 'Specialized endpoints for skin analysis, shade matching, and routine building with comprehensive documentation.',
      specs: ['Skin Analysis API', 'Shade Matching', 'Routine Builder', 'Image Processing']
    },
    {
      icon: Zap,
      title: 'Real-Time Recommendations',
      description: 'Lightning-fast product suggestions with sub-200ms response times and global CDN support.',
      specs: ['<200ms response', 'Global CDN', 'Real-time updates', '99.9% uptime']
    },
    {
      icon: BarChart3,
      title: 'Beauty Analytics',
      description: 'Comprehensive insights into skin concerns, product preferences, and beauty trends with actionable data.',
      specs: ['Skin trend analysis', 'Product performance', 'Customer insights', 'ROI tracking']
    },
    {
      icon: Settings,
      title: 'Customizable Experience',
      description: 'Flexible configuration for different beauty brands, skin types, and regional preferences.',
      specs: ['Brand customization', 'Regional settings', 'Skin type filters', 'Custom questionnaires']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 to-purple-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Integration &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              API Details
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seamless integration with your existing beauty platform and powerful APIs for custom implementations.
          </p>
        </div>

        {/* Platform Support */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Supported Platforms
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">
                    {platform.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {platform.name}
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  {platform.description}
                </p>
                <ul className="space-y-1">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-700 text-xs flex items-center">
                      <div className="w-1 h-1 bg-pink-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* API Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {apiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-200/50 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {feature.specs.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Timeline */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Quick Integration Timeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Day 1</h4>
              <p className="text-slate-600 text-sm">Platform connection & product catalog sync</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Day 2</h4>
              <p className="text-slate-600 text-sm">AI training & beauty questionnaire setup</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Day 3</h4>
              <p className="text-slate-600 text-sm">Testing & brand customization</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">✓</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Go Live</h4>
              <p className="text-slate-600 text-sm">Full deployment & monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;