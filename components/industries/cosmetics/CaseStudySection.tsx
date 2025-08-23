import { Quote, Star, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CaseStudySection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Story</span>
            </h2>
            <p className="text-xl text-slate-300">
              How DermaCare increased revenue by 28% with AI-powered skincare recommendations
            </p>
          </div>

          {/* Case Study Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Story Content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center">
                    <Quote size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">DermaCare</h3>
                    <p className="text-slate-400">Premium Skincare Brand</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">The Challenge:</h4>
                    <p className="text-slate-300 leading-relaxed">
                      DermaCare had a comprehensive skincare line but customers were confused about which products to use together. 
                      High return rates and low customer satisfaction were impacting growth.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">The AI Solution:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-black text-xs font-bold">1</span>
                        </div>
                        <p className="text-slate-300">Implemented comprehensive skin analysis questionnaire</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-black text-xs font-bold">2</span>
                        </div>
                        <p className="text-slate-300">Added AI-powered routine builder for personalized skincare regimens</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-black text-xs font-bold">3</span>
                        </div>
                        <p className="text-slate-300">Integrated smart bundling for complete skincare solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-xl p-6 border border-green-700/30 mb-8">
                  <h4 className="text-lg font-semibold text-green-400 mb-4">The Results:</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-1">+28%</div>
                      <div className="text-slate-300 text-sm">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-1">+35%</div>
                      <div className="text-slate-300 text-sm">Average Order Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-1">-45%</div>
                      <div className="text-slate-300 text-sm">Return Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-1">+60%</div>
                      <div className="text-slate-300 text-sm">Customer Satisfaction</div>
                    </div>
                  </div>

                  <blockquote className="text-slate-300 italic">
                    "Our customers finally understand which products work best for their skin. The AI recommendations have transformed our business and customer relationships."
                  </blockquote>
                  <footer className="text-slate-400 mt-3">
                    — Sarah Johnson, Founder & CEO
                  </footer>
                </div>

                {/* Customer Journey */}
                <div className="bg-slate-800/80 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-pink-400 mb-4">Customer Journey:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-400/20 rounded-full flex items-center justify-center">
                        <span className="text-pink-400 font-bold">1</span>
                      </div>
                      <span className="text-slate-300">Customer visits website with skin concerns</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-400/20 rounded-full flex items-center justify-center">
                        <span className="text-pink-400 font-bold">2</span>
                      </div>
                      <span className="text-slate-300">Completes skin analysis: Dry + Sensitive + Anti-aging</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-400/20 rounded-full flex items-center justify-center">
                        <span className="text-pink-400 font-bold">3</span>
                      </div>
                      <span className="text-slate-300">AI creates personalized 4-step routine</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                        <span className="text-green-400 font-bold">✓</span>
                      </div>
                      <span className="text-slate-300">Purchases complete routine bundle worth $120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-300 hover:to-purple-300 text-white font-semibold"
            >
              <Link href="/case-studies" className="flex items-center gap-2">
                View More Success Stories
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;