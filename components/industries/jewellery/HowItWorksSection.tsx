import { Palette, Calendar, Sparkles, Store } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Palette,
      step: '01',
      title: 'Tell Us Your Style',
      description: 'Choose from style preferences like minimal, modern, vintage, bridal, or bohemian to help our AI understand your aesthetic.',
      features: ['Style quiz interface', 'Visual preference selection', 'Trend analysis', 'Personal taste profiling']
    },
    {
      icon: Calendar,
      step: '02',
      title: 'Occasion & Budget',
      description: 'Specify the occasion (wedding, anniversary, daily wear, gifting) and budget range for perfectly tailored recommendations.',
      features: ['Occasion-based filtering', 'Budget optimization', 'Gift recipient profiling', 'Special event planning']
    },
    {
      icon: Sparkles,
      step: '03',
      title: 'AI Recommends',
      description: 'Our AI analyzes your preferences and suggests matching sets, trending pieces, and complete-the-look combinations.',
      features: ['Set matching algorithms', 'Trend integration', 'Style coordination', 'Quality scoring']
    },
    {
      icon: Store,
      step: '04',
      title: 'Personalized Storefront',
      description: 'Experience a curated shopping interface with your recommended pieces, similar items, and personalized collections.',
      features: ['Custom product displays', 'Personalized collections', 'Smart filtering', 'Wishlist management']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How the AI Experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
              Works
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Four simple steps to transform your jewellery shopping experience from overwhelming to delightful with AI-powered personalization.
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-xl font-bold text-lg mb-6">
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
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-yellow-50/30 rounded-2xl shadow-lg border border-yellow-200/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full"></div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-500/30 to-yellow-700/30 mx-4"></div>
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