import { ShoppingBag, Crown, Scissors, Store } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: 'E-commerce Stores',
      description: 'Transform online beauty shopping with virtual consultations, product matching, and personalized recommendations.',
      features: [
        'Virtual try-on experiences',
        'Skin tone matching',
        'Product comparison tools',
        'Personalized beauty routines'
      ],
      bgColor: 'bg-gradient-to-br from-pink-500/10 to-rose-500/10',
      iconColor: 'from-pink-500 to-rose-500'
    },
    {
      icon: Crown,
      title: 'Luxury Brands',
      description: 'Deliver premium, personalized experiences that match the exclusivity and sophistication of luxury cosmetic brands.',
      features: [
        'Exclusive product recommendations',
        'VIP customer experiences',
        'Premium consultation services',
        'Luxury brand storytelling'
      ],
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-indigo-500/10',
      iconColor: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Scissors,
      title: 'Clinics & Salons',
      description: 'Enhance in-person services with AI-powered consultations and product recommendations for professional treatments.',
      features: [
        'Treatment recommendations',
        'Skin analysis integration',
        'Appointment scheduling',
        'Follow-up care guidance'
      ],
      bgColor: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10',
      iconColor: 'from-rose-500 to-pink-500'
    },
    {
      icon: Store,
      title: 'Retail Outlets',
      description: 'Bridge online and offline experiences with AI assistants that help customers in physical beauty stores.',
      features: [
        'In-store product finding',
        'Digital beauty consultations',
        'Inventory availability',
        'Cross-channel experiences'
      ],
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-violet-500/10',
      iconColor: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-lavender-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Use <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Cases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions adapt to various cosmetic business models, from online retailers to luxury boutiques and professional beauty services.
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
                  <div className={`w-14 h-14 bg-gradient-to-br ${useCase.iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
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

export default UseCasesSection;