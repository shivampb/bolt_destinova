import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DemoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              See Destinova AI in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch how our AI chatbot transforms the shopping experience with intelligent conversations and personalized recommendations.
            </p>
          </div>

          {/* Demo Widget Container */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 lg:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Demo Preview */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#FF7626] rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <span className="font-medium text-slate-900">Shopping Assistant</span>
                    <div className="ml-auto flex gap-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 h-64 overflow-hidden">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        👋 Hi! I'm here to help you find the perfect products. What are you looking for today?
                      </p>
                    </div>
                    
                    <div className="bg-[#FF7626] text-white rounded-lg p-3 ml-8">
                      <p className="text-sm">
                        I need a winter jacket for skiing
                      </p>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        Great choice! I can help you find the perfect ski jacket. What's your experience level and preferred temperature range?
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-3">
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-white rounded border border-slate-200 p-2 text-center">
                          <div className="w-full h-12 bg-slate-200 rounded mb-1"></div>
                          <p className="text-xs font-medium">Alpine Pro Jacket</p>
                          <p className="text-xs text-[#FF7626]">$299</p>
                        </div>
                        <div className="bg-white rounded border border-slate-200 p-2 text-center">
                          <div className="w-full h-12 bg-slate-200 rounded mb-1"></div>
                          <p className="text-xs font-medium">Summit Elite</p>
                          <p className="text-xs text-[#FF7626]">$449</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type your message..." 
                      className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm"
                      disabled
                    />
                    <button className="px-4 py-2 bg-[#FF7626] text-white rounded-lg text-sm font-medium">
                      Send
                    </button>
                  </div>
                </div>
              </div>

              {/* Demo Description */}
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  <a href="https://apps.shopify.com/desti-ai-automate-chatbot" className="hover:underline">
                    Explore Product
                  </a>
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF7626] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Natural Conversations</p>
                      <p className="text-slate-600 text-sm">Ask questions in natural language just like talking to a sales expert</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF7626] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Smart Recommendations</p>
                      <p className="text-slate-600 text-sm">Get personalized product suggestions based on your specific needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#FF7626] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Guided Purchase</p>
                      <p className="text-slate-600 text-sm">Seamlessly move from discovery to purchase with AI guidance</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-[#FF7626] hover:bg-[#e6651f] text-white">
                    <Link href="https://apps.shopify.com/desti-ai-automate-chatbot" className="flex items-center gap-2">
                      <Play size={16} />
                      Try Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-slate-300">
                    <Link href="/demo-form" className="flex items-center gap-2">
                      Book Live Demo
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;