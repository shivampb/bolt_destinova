import { 
    MessageSquare, 
    Target, 
    TrendingUp, 
    Users, 
    ShoppingCart, 
    BarChart3,
    Zap,
    Globe
  } from 'lucide-react';
  
  const SolutionsOverview = () => {
    const solutions = [
      {
        icon: MessageSquare,
        title: 'Personalized Product Recommendations',
        description: 'AI-driven recommendations that understand individual customer preferences and shopping behavior to suggest the most relevant products.',
        benefits: [
          'Increase conversion rates by up to 35%',
          'Boost average order value by 28%',
          'Reduce product discovery time by 60%',
          'Improve customer satisfaction scores'
        ],
        color: 'bg-blue-50 text-blue-600'
      },
      {
        icon: Users,
        title: 'Enhanced Customer Engagement',
        description: 'Interactive conversational experiences that keep customers engaged throughout their shopping journey with proactive assistance.',
        benefits: [
          'Reduce bounce rates by 45%',
          'Increase session duration by 40%',
          'Improve customer retention by 25%',
          'Generate 3x more qualified leads'
        ],
        color: 'bg-green-50 text-green-600'
      },
      {
        icon: TrendingUp,
        title: 'Higher Conversion Rates',
        description: 'Intelligent sales assistance that guides customers from browsing to purchase with personalized incentives and recommendations.',
        benefits: [
          'Convert 28% more visitors to customers',
          'Reduce cart abandonment by 35%',
          'Increase repeat purchase rate by 30%',
          'Boost revenue per visitor by 42%'
        ],
        color: 'bg-purple-50 text-purple-600'
      },
      {
        icon: ShoppingCart,
        title: 'Smart Cart Optimization',
        description: 'Proactive cart management with intelligent upselling, cross-selling, and abandonment recovery to maximize order value.',
        benefits: [
          'Increase average order value by 32%',
          'Recover 40% of abandoned carts',
          'Boost cross-sell success by 55%',
          'Improve checkout completion rates'
        ],
        color: 'bg-orange-50 text-orange-600'
      },
      {
        icon: BarChart3,
        title: 'Advanced Analytics & Insights',
        description: 'Comprehensive data analysis that provides actionable insights into customer behavior, preferences, and purchasing patterns.',
        benefits: [
          'Identify top-performing products',
          'Understand customer journey patterns',
          'Optimize inventory based on demand',
          'Track ROI and performance metrics'
        ],
        color: 'bg-indigo-50 text-indigo-600'
      },
      {
        icon: Zap,
        title: 'Real-Time Personalization',
        description: 'Dynamic content and product suggestions that adapt instantly based on customer interactions and real-time behavior.',
        benefits: [
          'Deliver relevant content instantly',
          'Adapt to changing preferences',
          'Optimize for seasonal trends',
          'Personalize across all touchpoints'
        ],
        color: 'bg-yellow-50 text-yellow-600'
      },
      {
        icon: Globe,
        title: 'Omnichannel Deployment',
        description: 'Seamless integration across all customer touchpoints including website, mobile app, social media, and messaging platforms.',
        benefits: [
          'Consistent experience across channels',
          'Unified customer data and insights',
          'Increased reach and accessibility',
          'Higher customer lifetime value'
        ],
        color: 'bg-teal-50 text-teal-600'
      },
      {
        icon: Target,
        title: 'Customer Segmentation',
        description: 'Intelligent customer profiling and segmentation for targeted marketing campaigns and personalized experiences.',
        benefits: [
          'Improve campaign effectiveness by 50%',
          'Increase email open rates by 35%',
          'Boost targeted offer conversion by 45%',
          'Enhance customer lifetime value'
        ],
        color: 'bg-red-50 text-red-600'
      }
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Complete AI Commerce Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered solutions addresses every aspect of the customer journey, from discovery to purchase and beyond.
            </p>
          </div>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${solution.color}`}>
                      <IconComponent size={24} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
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
  
  export default SolutionsOverview;