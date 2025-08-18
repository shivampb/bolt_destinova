import { Search, ShoppingBag, MessageCircle, TrendingUp } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Search,
      title: 'Product Discovery',
      scenario: 'Customer: "I need a winter jacket for skiing"',
      solution: 'AI understands the specific use case and recommends appropriate ski jackets based on weather conditions, skill level, and style preferences.',
      outcome: '65% faster product discovery, 40% higher satisfaction'
    },
    {
      icon: ShoppingBag,
      title: 'Cross-Selling & Upselling',
      scenario: 'Customer adds a camera to cart',
      solution: 'AI proactively suggests complementary items like memory cards, cases, and lenses, explaining why each item enhances the camera experience.',
      outcome: '55% increase in cross-sell success, +32% average order value'
    },
    {
      icon: MessageCircle,
      title: 'Customer Support',
      scenario: 'Customer: "This dress doesn\'t fit right"',
      solution: 'AI provides sizing guidance, suggests alternative sizes or styles, and offers easy exchange options while maintaining the conversation flow.',
      outcome: '70% reduction in support tickets, 85% self-service resolution'
    },
    {
      icon: TrendingUp,
      title: 'Abandoned Cart Recovery',
      scenario: 'Customer leaves items in cart for 2 hours',
      solution: 'AI sends personalized message highlighting product benefits, offers limited-time discount, and suggests similar items if original is out of stock.',
      outcome: '40% cart recovery rate, 25% conversion to purchase'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Real-World Use Cases
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how our AI chatbot handles common eCommerce scenarios and delivers measurable results for businesses like yours.
          </p>
        </div>

        <div className="space-y-12">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF7626]/10 rounded-xl mb-6">
                    <IconComponent size={24} className="text-[#FF7626]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {useCase.title}
                  </h3>
                  
                  <div className="bg-slate-50 p-6 rounded-xl mb-6">
                    <p className="text-slate-700 italic">
                      "{useCase.scenario}"
                    </p>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {useCase.solution}
                  </p>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    ✓ {useCase.outcome}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md">
                  <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-[#FF7626]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent size={40} className="text-[#FF7626]" />
                      </div>
                      <div className="text-slate-500 text-sm font-medium">
                        {useCase.title} Flow
                      </div>
                    </div>
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

export default UseCases;