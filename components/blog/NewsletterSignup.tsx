import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowRight } from 'lucide-react';

const NewsletterSignup = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-[#FF7626]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={32} className="text-[#FF7626]" />
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated on AI Commerce Trends
          </h2>
          
          <p className="text-lg text-slate-600 mb-8">
            Get the latest insights on AI chatbots, eCommerce optimization, and conversion strategies delivered to your inbox weekly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1"
            />
            <Button className="bg-[#FF7626] hover:bg-[#e6651f] text-white">
              <span className="flex items-center gap-2">
                Subscribe
                <ArrowRight size={16} />
              </span>
            </Button>
          </div>
          
          <p className="text-sm text-slate-500">
            Join 5,000+ eCommerce professionals. Unsubscribe anytime.
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-400">
            <span>✓ Weekly AI insights</span>
            <span>✓ Case studies & results</span>
            <span>✓ Industry best practices</span>
            <span>✓ No spam, ever</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;