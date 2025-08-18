import { Calendar, User, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Blog Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>By Destinova AI Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>8 min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Best Chatbot for Product Recommendation{' '}
            <span className="text-[#FF7626]">2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-12">
            Discover why Destinova AI is the leading chatbot for product recommendations in 2025. Compare features, benefits, and see why we outperform the competition.
          </p>

          {/* Featured Image Placeholder */}
          <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF7626] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
                <p className="text-slate-600 font-medium">
                  AI Chatbot Comparison 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;