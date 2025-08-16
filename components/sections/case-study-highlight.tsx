import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, ShoppingCart, Clock } from 'lucide-react';

const caseStudy = {
  company: 'StyleForward',
  industry: 'Fashion & Apparel',
  challenge: 'High bounce rate and low product discovery',
  logo: 'SF',
  results: [
    { metric: 'Conversion Rate', before: '2.1%', after: '3.8%', improvement: '+81%', icon: TrendingUp, color: 'text-green-600' },
    { metric: 'Avg. Order Value', before: '$89', after: '$127', improvement: '+43%', icon: ShoppingCart, color: 'text-blue-600' },
    { metric: 'Time to Purchase', before: '12.3 min', after: '6.7 min', improvement: '-46%', icon: Clock, color: 'text-purple-600' },
    { metric: 'Customer Satisfaction', before: '3.2/5', after: '4.7/5', improvement: '+47%', icon: Users, color: 'text-orange-600' },
  ],
  quote: "Destinova AI transformed our customer experience. The AI understands our fashion catalog better than our own sales team, and customers love the personalized recommendations. It's like having a personal stylist for every visitor.",
  author: "Sarah Chen",
  role: "Head of eCommerce",
  timeline: "Results achieved in 6 weeks",
};

export function CaseStudyHighlight() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#FF7626] hover:bg-[#FF7626]/90">
            Case Study Spotlight
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See how StyleForward increased conversions by 81% with intelligent product discovery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Company Info */}
          <div>
            <Card className="p-8 bg-slate-800 border-slate-700 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  {caseStudy.logo}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{caseStudy.company}</h3>
                  <Badge variant="secondary" className="mt-1 bg-slate-700 text-slate-300">
                    {caseStudy.industry}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-slate-300 mb-2">Challenge:</h4>
                  <p className="text-slate-400">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-300 mb-2">Timeline:</h4>
                  <p className="text-[#FF7626] font-medium">{caseStudy.timeline}</p>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              >
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          {/* Results Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {caseStudy.results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <Card key={index} className="p-6 bg-slate-800 border-slate-700 text-white hover:bg-slate-750 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={`h-6 w-6 ${result.color}`} />
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {result.improvement}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-slate-300 text-sm mb-3">
                      {result.metric}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-400">
                          {result.before}
                        </div>
                        <div className="text-xs text-slate-500">Before</div>
                      </div>
                      
                      <ArrowRight className="h-4 w-4 text-slate-500" />
                      
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#FF7626]">
                          {result.after}
                        </div>
                        <div className="text-xs text-slate-500">After</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Testimonial */}
            <Card className="p-8 bg-slate-800 border-slate-700 text-white">
              <blockquote className="text-lg leading-relaxed mb-6 italic">
                "{caseStudy.quote}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {caseStudy.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{caseStudy.author}</div>
                  <div className="text-slate-400 text-sm">{caseStudy.role}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* More Case Studies CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 mb-6">
            Join 500+ brands already seeing similar results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white px-8 py-4"
            >
              View More Case Studies
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4"
            >
              Get Your Free Analysis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}