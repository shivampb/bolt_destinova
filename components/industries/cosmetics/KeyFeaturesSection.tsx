import { 
    Palette, 
    Clock, 
    Target, 
    Share2, 
    Search,
    Sparkles
  } from 'lucide-react';
  
  const KeyFeaturesSection = () => {
    const features = [
      {
        icon: Palette,
        title: 'Virtual Beauty Advisor',
        description: 'AI-powered beauty consultant that analyzes skin tone, face shape, and personal style to recommend perfect products and looks.',
        gradient: 'from-pink-500 to-rose-500'
      },
      {
        icon: Clock,
        title: '24/7 Beauty Support',
        description: 'Round-the-clock assistance for beauty questions, product inquiries, and personalized skincare routines.',
        gradient: 'from-purple-500 to-indigo-500'
      },
      {
        icon: Target,
        title: 'Personalized Recommendations',
        description: 'Smart product suggestions based on skin type, concerns, preferences, and previous purchases for truly personalized experiences.',
        gradient: 'from-pink-500 to-purple-500'
      },
      {
        icon: Share2,
        title: 'Social Media Integration',
        description: 'Seamless integration with Instagram, TikTok, and other platforms for beauty inspiration and product discovery.',
        gradient: 'from-rose-500 to-pink-500'
      },
      {
        icon: Search,
        title: 'Product Discovery AI',
        description: 'Intelligent search that understands beauty terminology, ingredient preferences, and specific skin concerns.',
        gradient: 'from-purple-500 to-violet-500'
      },
      {
        icon: Sparkles,
        title: 'Trend Analysis',
        description: 'Stay ahead of beauty trends with AI that analyzes social media, runway shows, and celebrity looks to suggest trending products.',
        gradient: 'from-pink-500 to-purple-600'
      }
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform offers comprehensive features designed specifically for the unique needs of cosmetic brands and beauty retailers.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-2xl border border-pink-200/30 hover:border-pink-300/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default KeyFeaturesSection;