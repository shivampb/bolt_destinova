import { Check, X } from 'lucide-react';

const FeatureComparison = () => {
  const features = [
    {
      category: 'Core Features',
      items: [
        { name: 'Website Widget Integration', starter: true, growth: true, scale: true, enterprise: true },
        { name: 'Basic Product Recommendations', starter: true, growth: true, scale: true, enterprise: true },
        { name: 'Natural Language Processing', starter: true, growth: true, scale: true, enterprise: true },
        { name: 'WhatsApp & Messenger Integration', starter: false, growth: true, scale: true, enterprise: true },
        { name: 'Advanced Personalization', starter: false, growth: true, scale: true, enterprise: true },
        { name: 'Omnichannel Deployment', starter: false, growth: false, scale: true, enterprise: true },
      ]
    },
    {
      category: 'Analytics & Optimization',
      items: [
        { name: 'Standard Analytics Dashboard', starter: true, growth: true, scale: true, enterprise: true },
        { name: 'Advanced Analytics', starter: false, growth: true, scale: true, enterprise: true },
        { name: 'A/B Testing Framework', starter: false, growth: true, scale: true, enterprise: true },
        { name: 'Customer Segmentation', starter: false, growth: true, scale: true, enterprise: true },
        { name: 'Custom Reporting', starter: false, growth: false, scale: true, enterprise: true },
        { name: 'Real-time Performance Monitoring', starter: false, growth: false, scale: true, enterprise: true },
      ]
    },
    {
      category: 'Customization & Integration',
      items: [
        { name: 'Basic Customization', starter: true, growth: true, scale: true, enterprise: true },
        { name: 'Custom Branding', starter: false, growth: true, scale: true, enterprise: true },
        { name: 'API Access', starter: false, growth: false, scale: true, enterprise: true },
        { name: 'Advanced Integrations', starter: false, growth: false, scale: true, enterprise: true },
        { name: 'White-label Options', starter: false, growth: false, scale: true, enterprise: true },
        { name: 'Custom AI Training', starter: false, growth: false, scale: true, enterprise: true },
      ]
    },
    {
      category: 'Support & Security',
      items: [
        { name: 'Email Support', starter: true, growth: true, scale: true, enterprise: true },
        { name: 'Priority Support', starter: false, growth: true, scale: true, enterprise: true },
        { name: 'Dedicated Success Manager', starter: false, growth: false, scale: true, enterprise: true },
        { name: '24/7 Phone Support', starter: false, growth: false, scale: false, enterprise: true },
        { name: 'SLA Guarantee', starter: false, growth: false, scale: true, enterprise: true },
        { name: 'Security & Compliance Reviews', starter: false, growth: false, scale: false, enterprise: true },
      ]
    }
  ];

  const plans = ['Starter', 'Growth', 'Scale', 'Enterprise'];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Compare All Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See exactly what's included in each plan and choose the one that fits your business needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <thead>
              <tr className="bg-slate-50">
                <th className="text-left p-6 font-semibold text-slate-900 min-w-[300px]">
                  Features
                </th>
                {plans.map((plan) => (
                  <th key={plan} className="text-center p-6 font-semibold text-slate-900 min-w-[120px]">
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category, categoryIndex) => (
                <>
                  <tr key={`category-${categoryIndex}`}>
                    <td colSpan={5} className="bg-slate-100 p-4 font-semibold text-slate-900 text-sm uppercase tracking-wide">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <tr key={`feature-${categoryIndex}-${featureIndex}`} className="border-t border-slate-200">
                      <td className="p-4 text-slate-700 font-medium">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center">
                        {feature.starter ? (
                          <Check size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <X size={20} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.growth ? (
                          <Check size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <X size={20} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.scale ? (
                          <Check size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <X size={20} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.enterprise ? (
                          <Check size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <X size={20} className="text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;