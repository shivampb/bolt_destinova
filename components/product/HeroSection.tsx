import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Brain, Zap } from 'lucide-react';

const HeroSection = () => {
  const keyFeatures = [
    {
      icon: MessageSquare,
      title: 'Conversational Commerce',
      description: 'Natural dialogue that guides customers to perfect products'
    },
    {
      icon: Brain,
      title: 'Agentic AI',
      description: 'Proactive recommendations that increase cart value'
    },
    {
      icon: Zap,
      title: 'Real-time Learning',
      description: 'Continuously optimizes based on customer interactions'
    }
  ];

  return (
    <section className="relative bg-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF7626]/10 text-[#FF7626] text-sm font-medium mb-8">
            <Brain size={16} className="mr-2" />
            Powered by Advanced Agentic AI
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            The AI Chatbot that{' '}
            <span className="text-[#FF7626]">Actually Sells</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-10">
            Go beyond basic Q&A. Our agentic AI understands shopping intent, recommends products, and actively guides customers to purchase—across all your channels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#FF7626] hover:bg-[#e6651f] text-white text-lg px-8 py-3 h-auto"
            >
              <Link href="/demo-form" className="flex items-center gap-2">
                Book Live Demo
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-3 h-auto"
            >
              <Link href="https://apps.shopify.com/desti-ai-automate-chatbot">
                Explore product
              </Link>
            </Button>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {keyFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-200"
              >
                <div className="w-12 h-12 bg-[#FF7626]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={24} className="text-[#FF7626]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;