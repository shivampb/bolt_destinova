import Head from 'next/head';
import { RocketIcon, LightbulbIcon, ZapIcon, SmileIcon, MessageSquareIcon } from 'lucide-react';
import { SparklesIcon, ShoppingCartIcon, TagIcon } from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Answering FAQs',
      description:
        'Our chatbot is trained on your knowledge base to provide instant, accurate answers to FAQs, freeing up your support staff.',
      icon: LightbulbIcon,
    },
    {
      title: 'Personalized Product Recommendations',
      description:
        'Leveraging AI, the chatbot analyzes customer behavior and preferences to offer highly relevant product suggestions, increasing conversion rates.',
      icon: SparklesIcon,
    },
    {
      title: 'Lead Generation',
      description:
        'Engage visitors proactively, qualify leads through targeted questions, and capture contact info for your sales team.',
      icon: RocketIcon,
    },
    {
      title: 'Improving Customer Satisfaction',
      description:
        'Provide 24/7 immediate support and personalized interactions, leading to happier customers and stronger loyalty.',
      icon: SmileIcon,
    },
    {
      title: 'Handling Customer Queries Efficiently',
      description:
        'Automate responses to common inquiries and route complex issues to human agents, streamlining support operations.',
      icon: MessageSquareIcon,
    },
    {
      title: 'Reducing Cart Abandonment',
      description:
        'Engage customers on the checkout page with offers or assistance to overcome objections and complete purchases.',
      icon: ShoppingCartIcon,
    },
    {
      title: 'Upselling & Cross-selling',
      description:
        'Intelligently suggest complementary or premium products based on customer behavior, increasing order value.',
      icon: TagIcon,
    },
  ];

  return (
    <>
      <Head>
        <title>Solutions - Destinova AI</title>
        <meta
          name="description"
          content="Discover how Destinova AI Chatbot solves key problems in ecommerce: FAQs, product recommendations, lead generation, customer satisfaction, and more."
        />
      </Head>

      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-20 bg-[#f87936] text-white text-center relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Problems We Solve
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Discover how our Agentic AI Chatbot transforms ecommerce businesses
              with smarter, faster, and more human-like interactions.
            </p>
          </div>
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f87936] to-orange-500 opacity-70 blur-3xl"></div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-8 flex flex-col items-center text-center border border-gray-100 hover:-translate-y-2"
                >
                  <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-[#f87936] text-white group-hover:scale-110 transition duration-300">
                    <solution.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#f87936] transition">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-20 bg-[#f87936] text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Solve These Problems for Your Store?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">
              Let our AI Chatbot handle support, boost sales, and keep customers happy — while you focus on growing your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#f87936] font-semibold py-3 px-8 rounded-full text-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
