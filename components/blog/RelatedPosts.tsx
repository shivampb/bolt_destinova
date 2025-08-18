import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

const RelatedPosts = () => {
  const relatedPosts = [
    {
      title: 'How AI Chatbots Increase eCommerce Conversion Rates',
      excerpt: 'Discover the proven strategies and techniques that AI chatbots use to convert more visitors into customers.',
      date: 'January 10, 2025',
      readTime: '6 min read',
      slug: 'ai-chatbots-increase-conversion-rates'
    },
    {
      title: 'The Future of Personalized Shopping Experiences',
      excerpt: 'Explore how AI-powered personalization is reshaping the way customers discover and purchase products online.',
      date: 'January 8, 2025',
      readTime: '7 min read',
      slug: 'future-personalized-shopping-experiences'
    },
    {
      title: 'Implementing AI Chatbots: A Complete Guide for eCommerce',
      excerpt: 'Step-by-step guide to successfully implementing AI chatbots in your eCommerce business for maximum ROI.',
      date: 'January 5, 2025',
      readTime: '10 min read',
      slug: 'implementing-ai-chatbots-complete-guide'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#FF7626] hover:text-[#e6651f] font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;