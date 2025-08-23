import { Crown, Shield, Heart, Zap } from 'lucide-react';

const WhyAISection = () => {
  const benefits = [
    {
      icon: Crown,
      title: 'Exclusive Personalized Experiences',
      description: 'Jewellery buyers expect luxury treatment. AI delivers personalized recommendations based on style preferences, budget, and special occasions, creating an exclusive shopping experience for every customer.'
    },
    {
      icon: Shield,
      title: 'Trust & Confidence Building',
      description: 'Customers want trust and guidance when making significant jewellery purchases. AI provides instant answers about authenticity, certifications, warranties, and care instructions to build confidence.'
    },
    {
      icon: Heart,
      title: 'Emotional Purchase Support',
      description: 'Luxury jewellery often involves big emotional decisions like engagements or anniversaries. AI helps customers feel confident by understanding the significance and guiding them to perfect choices.'
    },
    {
      icon: Zap,
      title: 'Instant Product Discovery',
      description: 'Online jewellery stores need sophisticated product discovery. AI understands complex queries about metals, gemstones, styles, and occasions to help customers find exactly what they envision.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-yellow-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why AI for <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">Jewellery?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The luxury jewellery industry demands exceptional customer experiences. AI-powered solutions help jewellery brands deliver the personalized, trustworthy service that discerning customers expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-yellow-200/50 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
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