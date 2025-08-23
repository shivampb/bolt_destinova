import { MessageSquare, Camera, Sparkles, ShoppingBag } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: '01',
      title: 'Answer Skin Questions',
      description: 'Customers complete a personalized questionnaire about their skin type, concerns, preferences, and beauty goals.',
      features: ['Skin type assessment', 'Concern identification', 'Preference mapping', 'Goal setting']
    },
    {
      icon: Camera,
      step: '02',
      title: 'Upload a Face Photo',
      description: 'Optional AI-powered image analysis provides deeper insights into skin tone, texture, and specific areas of concern.',
      features: ['Skin tone analysis', 'Texture assessment', 'Concern detection', 'Feature mapping']
    },
    {
      icon: Sparkles,
      step: '03',
      title: 'Get Personalized Product Matches',
      description: 'Our AI analyzes all inputs and matches customers with the most suitable products from your catalog.',
      features: ['Smart product matching', 'Ingredient compatibility', 'Shade recommendations', 'Routine suggestions']
    },
    {
      icon: ShoppingBag,
      step: '04',
      title: 'Seamless Checkout',
      description: 'Customers can easily add recommended products to their cart and complete their purchase with confidence.',
      features: ['One-click add to cart', 'Bundle recommendations', 'Routine packages', 'Reorder reminders']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How the AI Experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Works
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A simple 4-step journey that transforms overwhelming product choices into personalized beauty recommendations.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-xl font-bold text-lg mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-slate-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <div className="aspect-square bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg border border-pink-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={40} className="text-white" />
                      </div>
                      <div className="text-slate-600 text-sm font-medium">
                        Step {step.step}: {step.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow Indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;