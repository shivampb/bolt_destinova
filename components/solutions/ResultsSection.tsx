import { TrendingUp, Users, ShoppingCart, Clock } from 'lucide-react';

const ResultsSection = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: '+35%',
      title: 'Average Conversion Rate Increase',
      description: 'Customers who interact with our AI are 35% more likely to make a purchase'
    },
    {
      icon: ShoppingCart,
      metric: '+28%',
      title: 'Higher Average Order Value',
      description: 'Smart recommendations and upselling increase basket size significantly'
    },
    {
      icon: Users,
      metric: '92%',
      title: 'Customer Satisfaction Score',
      description: 'Customers love the personalized shopping experience our AI provides'
    },
    {
      icon: Clock,
      metric: '-60%',
      title: 'Reduced Search Time',
      description: 'Customers find what they need faster with intelligent product matching'
    }
  ];

  const testimonials = [
    {
      quote: "Destinova AI transformed our customer experience. We saw a 42% increase in conversions within the first month.",
      author: "Sarah Chen",
      role: "eCommerce Director",
      company: "FashionForward",
      results: "+42% conversions, +38% AOV"
    },
    {
      quote: "The AI understands our technical products better than most of our sales team. It's incredible.",
      author: "Marcus Rodriguez",
      role: "VP of Sales",
      company: "TechGear Pro",
      results: "+35% conversions, +45% cross-sell"
    },
    {
      quote: "Our customers love how quickly they find exactly what they're looking for. Support tickets dropped by 70%.",
      author: "Emily Watson",
      role: "Customer Success Manager",
      company: "Beauty Essentials",
      results: "+48% conversions, -70% support tickets"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI solutions deliver measurable improvements in key business metrics, backed by real customer success stories.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#FF7626]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent size={24} className="text-[#FF7626]" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {result.metric}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {result.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Customer Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <blockquote className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-slate-600">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium text-green-700">
                    Results: {testimonial.results}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;