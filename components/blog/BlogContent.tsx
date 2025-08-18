import { CheckCircle, XCircle, Star, TrendingUp } from 'lucide-react';

const BlogContent = () => {
  const competitorComparison = [
    {
      feature: 'Natural Language Understanding',
      destinova: true,
      competitor1: true,
      competitor2: false,
      competitor3: true
    },
    {
      feature: 'Real-time Personalization',
      destinova: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'Omnichannel Deployment',
      destinova: true,
      competitor1: false,
      competitor2: false,
      competitor3: true
    },
    {
      feature: 'Advanced Analytics',
      destinova: true,
      competitor1: true,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'Industry-Specific Training',
      destinova: true,
      competitor1: false,
      competitor2: false,
      competitor3: false
    },
    {
      feature: 'A/B Testing Framework',
      destinova: true,
      competitor1: false,
      competitor2: true,
      competitor3: false
    },
    {
      feature: 'Enterprise Security',
      destinova: true,
      competitor1: true,
      competitor2: false,
      competitor3: true
    }
  ];

  const keyDifferentiators = [
    {
      title: 'Agentic AI Technology',
      description: 'Unlike basic chatbots that simply respond to queries, Destinova AI proactively guides customers through their shopping journey with intelligent recommendations and personalized experiences.'
    },
    {
      title: 'Industry-Specific Intelligence',
      description: 'Our AI is trained on industry-specific data and understands the nuances of different product categories, from fashion sizing to technical specifications.'
    },
    {
      title: 'Real-Time Learning',
      description: 'The system continuously learns from customer interactions and adapts recommendations in real-time, ensuring optimal performance as your business grows.'
    },
    {
      title: 'Seamless Integration',
      description: 'Deploy across all customer touchpoints with native integrations for major eCommerce platforms and messaging channels.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              The eCommerce landscape in 2025 is more competitive than ever. With customers expecting personalized experiences and instant gratification, businesses need AI-powered solutions that go beyond basic chatbots. After extensive research and testing, we've identified why Destinova AI stands out as the best chatbot for product recommendations in 2025.
            </p>
          </div>

          {/* What Makes a Great Product Recommendation Chatbot */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What Makes a Great Product Recommendation Chatbot?
            </h2>
            
            <div className="bg-slate-50 p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Essential Features for 2025:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Advanced Natural Language Processing:</strong> Understanding complex queries and context</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Real-time Personalization:</strong> Adapting recommendations based on behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Omnichannel Capabilities:</strong> Consistent experience across all touchpoints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Analytics and Insights:</strong> Actionable data to optimize performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Enterprise Security:</strong> SOC 2 compliance and data protection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Destinova AI Leads the Market */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Why Destinova AI Leads the Market
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {keyDifferentiators.map((differentiator, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {differentiator.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {differentiator.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Comparison */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              How We Compare to the Competition
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                    <th className="text-center p-4 font-semibold text-[#FF7626]">Destinova AI</th>
                    <th className="text-center p-4 font-semibold text-slate-600">Competitor A</th>
                    <th className="text-center p-4 font-semibold text-slate-600">Competitor B</th>
                    <th className="text-center p-4 font-semibold text-slate-600">Competitor C</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorComparison.map((row, index) => (
                    <tr key={index} className="border-t border-slate-200">
                      <td className="p-4 font-medium text-slate-900">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.destinova ? (
                          <CheckCircle size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <XCircle size={20} className="text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.competitor1 ? (
                          <CheckCircle size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <XCircle size={20} className="text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.competitor2 ? (
                          <CheckCircle size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <XCircle size={20} className="text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.competitor3 ? (
                          <CheckCircle size={20} className="text-green-500 mx-auto" />
                        ) : (
                          <XCircle size={20} className="text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Real Results */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Real Results from Real Customers
            </h2>
            
            <div className="bg-gradient-to-br from-[#FF7626]/5 to-[#FF7626]/10 p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#FF7626] mb-2">+35%</div>
                  <div className="text-slate-700 font-medium">Average Conversion Rate Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF7626] mb-2">+28%</div>
                  <div className="text-slate-700 font-medium">Higher Average Order Value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF7626] mb-2">-60%</div>
                  <div className="text-slate-700 font-medium">Reduced Search Time</div>
                </div>
              </div>
            </div>

            <blockquote className="bg-white p-8 rounded-2xl border-l-4 border-[#FF7626] shadow-sm">
              <p className="text-lg text-slate-700 italic mb-4">
                "We tested three different AI chatbot solutions before choosing Destinova AI. The difference in performance was remarkable - our conversion rate increased by 42% in the first month alone."
              </p>
              <footer className="text-slate-600">
                <strong>Sarah Chen</strong>, eCommerce Director at FashionForward
              </footer>
            </blockquote>
          </div>

          {/* Getting Started */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Getting Started with Destinova AI
            </h2>
            
            <p className="text-lg text-slate-600 mb-6">
              Implementation is surprisingly simple. Most customers are up and running within 24-48 hours with our plug-and-play integrations for major eCommerce platforms.
            </p>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Quick Setup Process:
              </h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#FF7626] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span>Connect your eCommerce platform (Shopify, WooCommerce, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#FF7626] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span>Import your product catalog and customer data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#FF7626] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span>Customize the chatbot appearance and behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#FF7626] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span>Launch and start seeing results immediately</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              The Verdict: Why Destinova AI Wins in 2025
            </h2>
            
            <p className="text-lg text-slate-600 mb-6">
              While there are several chatbot solutions available, Destinova AI stands out for its combination of advanced AI technology, industry-specific intelligence, and proven results. The platform's ability to understand complex customer queries and provide truly personalized recommendations sets it apart from generic chatbot solutions.
            </p>

            <div className="bg-[#FF7626]/10 p-8 rounded-2xl border border-[#FF7626]/20">
              <div className="flex items-start gap-4">
                <Star size={24} className="text-[#FF7626] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Ready to see the difference?
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Join 500+ eCommerce brands already using Destinova AI to boost conversions and delight customers. Book a demo today and see why we're the #1 choice for product recommendation chatbots in 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;