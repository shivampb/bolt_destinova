import { 
    MessageCircle, 
    Target, 
    Globe, 
    Smartphone, 
    BarChart3, 
    Settings,
    Users,
    ShoppingCart
  } from 'lucide-react';
  
  const FeaturesSection = () => {
    const features = [
      {
        icon: MessageCircle,
        title: 'Conversational Product Discovery',
        description: 'Natural language understanding that interprets complex shopping queries and guides customers through product selection with human-like conversations.',
        benefits: [
          'Multi-turn conversation handling',
          'Context-aware recommendations',
          'Intent recognition and classification',
          'Personalized dialogue flow'
        ]
      },
      {
        icon: Target,
        title: 'Real-time Personalization',
        description: 'Dynamic product recommendations that adapt instantly based on browsing behavior, purchase history, and real-time preferences.',
        benefits: [
          'Behavioral targeting',
          'Dynamic pricing optimization',
          'Cross-sell and upsell automation',
          'Seasonal trend adaptation'
        ]
      },
      {
        icon: Globe,
        title: 'Multilingual Support',
        description: 'Serve global customers in 50+ languages with automatic language detection and culturally-aware product recommendations.',
        benefits: [
          '50+ language support',
          'Automatic language detection',
          'Cultural preference understanding',
          'Localized product positioning'
        ]
      },
      {
        icon: Smartphone,
        title: 'Omnichannel Deployment',
        description: 'Seamless integration across website widgets, WhatsApp Business, Facebook Messenger, and social media platforms.',
        benefits: [
          'Website widget integration',
          'WhatsApp Business API',
          'Facebook Messenger',
          'Social media platforms'
        ]
      },
      {
        icon: BarChart3,
        title: 'Advanced Analytics Dashboard',
        description: 'Comprehensive insights into customer interactions, conversion funnels, and AI performance with actionable recommendations.',
        benefits: [
          'Real-time conversation analytics',
          'Conversion funnel tracking',
          'Customer journey mapping',
          'ROI performance metrics'
        ]
      },
      {
        icon: Settings,
        title: 'A/B Testing & Optimization',
        description: 'Built-in experimentation framework to test different conversation flows, recommendations, and optimize for maximum conversions.',
        benefits: [
          'Conversation flow testing',
          'Recommendation algorithm variants',
          'Performance comparison',
          'Automated optimization'
        ]
      },
      {
        icon: Users,
        title: 'Customer Segmentation',
        description: 'Intelligent customer profiling that creates dynamic segments based on behavior, preferences, and purchase patterns.',
        benefits: [
          'Behavioral segmentation',
          'Purchase pattern analysis',
          'Dynamic profile updates',
          'Targeted campaign triggers'
        ]
      },
      {
        icon: ShoppingCart,
        title: 'Smart Cart Management',
        description: 'Proactive cart abandonment prevention with personalized incentives and intelligent timing for re-engagement.',
        benefits: [
          'Abandonment detection',
          'Personalized incentives',
          'Optimal timing algorithms',
          'Recovery automation'
        ]
      }
    ];
  
    return (
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Complete AI Commerce Platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to transform your customer experience and boost conversions with AI-powered product recommendations.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#FF7626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-[#FF7626]" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-slate-700 text-sm">
                            <div className="w-1.5 h-1.5 bg-[#FF7626] rounded-full mr-3 flex-shrink-0"></div>
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
  
  export default FeaturesSection;