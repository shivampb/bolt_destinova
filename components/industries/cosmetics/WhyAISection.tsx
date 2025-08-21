import { Heart, TrendingUp, Users, Zap } from 'lucide-react';

const WhyAISection = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Personalized Beauty Experiences',
      description: 'AI understands individual skin types, preferences, and beauty goals to deliver tailored product recommendations that resonate with each customer.'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Loyalty',
      description: 'Build deeper relationships with customers through personalized consultations and ongoing beauty advice that keeps them coming back.'
    },
    {
      icon: TrendingUp,
      title: 'Accelerated E-commerce Growth',
      description: 'Boost online sales with intelligent product discovery, virtual try-ons, and seamless shopping experiences that convert browsers into buyers.'
    },
    {
      icon: Zap,
      title: 'Instant Beauty Expertise',
      description: 'Provide expert-level beauty advice 24/7, helping customers make confident purchasing decisions without waiting for human consultants.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Cosmetics?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The beauty industry is evolving rapidly. AI-powered solutions help cosmetic brands deliver the personalized, expert-level experiences that modern customers expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;