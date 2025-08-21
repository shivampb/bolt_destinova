import { Check } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    'Increase customer engagement by 65% with personalized beauty consultations',
    'Boost conversion rates by 40% through intelligent product recommendations',
    'Reduce return rates by 30% with accurate skin tone and product matching',
    'Improve customer satisfaction scores by 50% with 24/7 beauty support',
    'Enhance average order value by 35% through smart upselling and cross-selling',
    'Decrease customer acquisition costs by 25% with improved retention',
    'Accelerate product discovery time by 60% with AI-powered search',
    'Build stronger brand loyalty through personalized beauty journeys',
    'Optimize inventory management with demand prediction analytics',
    'Scale beauty expertise across unlimited customer interactions'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Beauty Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                AI
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience measurable improvements across all key business metrics with our AI-powered cosmetics solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-pink-50/50 to-purple-50/50 rounded-xl border border-pink-200/30 hover:border-pink-300/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">
                65%
              </div>
              <p className="text-gray-600 font-medium">Higher Customer Engagement</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-2">
                40%
              </div>
              <p className="text-gray-600 font-medium">Increased Conversion Rates</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-2xl">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 mb-2">
                50%
              </div>
              <p className="text-gray-600 font-medium">Better Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;