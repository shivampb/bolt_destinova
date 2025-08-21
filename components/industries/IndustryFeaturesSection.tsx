import { MessageCircle, Target, ShoppingCart, Users, Gem, Sparkles, Shirt, Palette } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  benefits: string[];
}

interface IndustryFeaturesSectionProps {
  features: Feature[];
  title: string;
  description: string;
}

const IndustryFeaturesSection: React.FC<IndustryFeaturesSectionProps> = ({ features, title, description }) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#FF7626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent size={24} className="text-[#FF7626]" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
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

export default IndustryFeaturesSection;
