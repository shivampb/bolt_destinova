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
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Story</span>
            </h2>
            <p className="text-xl text-slate-300">
              How a fashion retailer increased conversions by 28% with AI-powered "complete the look" recommendations
            </p>
          </div>

          {/* Case Study Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Story Content */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <Quote size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">StyleHub Fashion</h3>
                    <p className="text-slate-400">Contemporary Fashion Retailer</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">The Challenge:</h4>
                    <p className="text-slate-300 leading-relaxed">
                      StyleHub had thousands of individual clothing items but customers struggled to create complete outfits. 
                      Many visitors would add single items to cart but abandon before completing their look, resulting in low AOV and high cart abandonment.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">The AI Solution:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <p className="text-slate-300">Implemented style quiz to understand customer preferences and body type</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <p className="text-slate-300">AI learned to match tops, bottoms, shoes, and accessories into complete outfits</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <p className="text-slate-300">Integrated "complete the look" suggestions on product pages and cart</p>
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
                      <div className="text-3xl font-bold text-purple-400 mb-1">+28%</div>
                      <div className="text-slate-300 text-sm">Conversion Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">+42%</div>
                      <div className="text-slate-300 text-sm">Average Order Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">78%</div>
                      <div className="text-slate-300 text-sm">Choose Complete Outfits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">-35%</div>
                      <div className="text-slate-300 text-sm">Cart Abandonment</div>
                    </div>
                  </div>

                  <blockquote className="text-slate-300 italic">
                    "Our customers now discover complete looks effortlessly. The AI understands their style better than our personal shoppers, 
                    and our sales have never been stronger."
                  </blockquote>
                  <footer className="text-slate-400 mt-3">
                    — Sarah Martinez, eCommerce Director
                  </footer>
                </div>

                {/* Customer Journey */}
                <div className="bg-slate-800/80 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-4">Customer Journey:</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-400 font-bold">1</span>
                      </div>
                      <span className="text-slate-300">Customer browses for a casual shirt</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-400 font-bold">2</span>
                      </div>
                      <span className="text-slate-300">Takes style quiz: Casual + Minimalist + Size M</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <span className="text-purple-400 font-bold">3</span>
                      </div>
                      <span className="text-slate-300">AI shows complete outfit: Shirt + Jeans + Sneakers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                        <span className="text-green-400 font-bold">✓</span>
                      </div>
                      <span className="text-slate-300">Purchases complete outfit worth $187 in one transaction</span>
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
              className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 text-white font-semibold"
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