import { Check, X } from 'lucide-react';

const FeatureComparison = () => {
  const features = [
    {
      category: 'Core Functionality',
      items: [
        { name: 'Unlimited AI Product Sync', foreverFree: true, starter: true, growth: true },
        { name: 'Unlimited Knowledge Train', foreverFree: true, starter: true, growth: true },
        { name: 'Require to setup openAI Key & database', foreverFree: true, starter: false, growth: false },
        { name: 'Train up to 5,000 products (auto-sync)', foreverFree: false, starter: true, growth: true },
        { name: 'Unlimited AI chats', foreverFree: false, starter: true, growth: true },
        { name: 'Learns FAQs, policies, files, Website', foreverFree: false, starter: true, growth: true },
        { name: 'Remove “Destinova AI” branding', foreverFree: false, starter: true, growth: true },
        { name: 'Third Party Integration', foreverFree: false, starter: true, growth: true },
        { name: 'Product Page AI Summery popup & Upsell', foreverFree: false, starter: true, growth: true },
        { name: 'Access to all future AI features', foreverFree: false, starter: true, growth: true },
      ]
    },
    {
      category: 'Advanced Capabilities',
      items: [
        { name: 'Train up to 15,000 products', foreverFree: false, starter: false, growth: true },
        { name: 'Learns from discount & chat history', foreverFree: false, starter: false, growth: true },
        { name: 'Real-time AI sales pop-ups', foreverFree: false, starter: false, growth: true },
        { name: 'Integration with Meta & Custom API', foreverFree: false, starter: false, growth: true },
        { name: 'Support for headless storefronts', foreverFree: false, starter: false, growth: true },
      ]
    },
    {
      category: 'Support & Trials',
      items: [
        { name: '14-day free trial', foreverFree: false, starter: true, growth: true },
        { name: 'Priority customer support', foreverFree: false, starter: false, growth: true },
      ]
    }
  ];

  const plans = ['Forever Free', 'Starter', 'Growth'];

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
                    <td colSpan={plans.length + 1} className="bg-slate-100 p-4 font-semibold text-slate-900 text-sm uppercase tracking-wide">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature, featureIndex) => (
                    <tr key={`feature-${categoryIndex}-${featureIndex}`} className="border-t border-slate-200">
                      <td className="p-4 text-slate-700 font-medium">
                        {feature.name}
                      </td>
                      <td className="p-4 text-center">
                        {feature.foreverFree ? (
                          <Check size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <X size={20} className="text-slate-300 mx-auto" />
                        )}
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