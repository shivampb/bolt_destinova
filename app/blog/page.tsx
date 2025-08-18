import { Metadata } from 'next';
import HeroSection from '@/components/blog/HeroSection';
import BlogContent from '@/components/blog/BlogContent';
import RelatedPosts from '@/components/blog/RelatedPosts';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Best Chatbot for Product Recommendation 2025',
  description: 'Discover why Destinova AI is the leading chatbot for product recommendations in 2025. Compare features, benefits, and see why we outperform the competition.',
};

export default function BlogPage() {
  return (
    <>
      <HeroSection />
      <BlogContent />
      <RelatedPosts />
      <NewsletterSignup />
    </>
  );
}