import { 
    Crown, 
    Clock, 
    Target, 
    Calendar, 
    Share2,
    Gem
  } from 'lucide-react';
  
  const KeyFeaturesSection = () => {
    const features = [
      {
        icon: Crown,
        title: 'Virtual Jewellery Consultant',
        description: 'AI-powered luxury consultant that helps customers choose the perfect diamond, gold, gemstone, or design based on their preferences, budget, and occasion.',
        gradient: 'from-yellow-500 to-yellow-700'
      },
      {
        icon: Clock,
        title: '24/7 Luxury Support',
        description: 'Round-the-clock premium assistance for questions about authenticity, certifications, warranty, care instructions, and product specifications.',
        gradient: 'from-slate-600 to-slate-800'
      },
      {
        icon: Target,
        title: 'Luxury Product Recommendations',
        description: 'Sophisticated suggestions based on style preferences, budget range, special occasions, and personal taste for truly personalized luxury experiences.',
        gradient: 'from-yellow-600 to-yellow-800'
      },
      {
        icon: Calendar,
        title: 'Appointment Booking',
        description: 'Seamless scheduling for in-store visits, private consultations, or video calls with jewellery experts for personalized service.',
        gradient: 'from-slate-500 to-slate-700'
      },
      {
        icon: Share2,
        title: 'Social Commerce Integration',
        description: 'AI assistants on WhatsApp, Instagram, and other platforms for direct luxury selling and personalized customer engagement.',
        gradient: 'from-yellow-500 to-yellow-600'
      },
      {
        icon: Gem,
        title: 'Gemstone & Metal Expertise',
        description: 'Deep knowledge of diamonds, precious stones, metals, and certifications to provide expert-level guidance and education to customers.',
        gradient: 'from-slate-600 to-yellow-700'
      }
    ];
  
    return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Features</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform offers sophisticated features designed specifically for the luxury jewellery industry, delivering exceptional customer experiences.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
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