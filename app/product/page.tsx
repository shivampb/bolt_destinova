import type { NextPage } from 'next';
import Head from 'next/head';

const ProductPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-20"> {/* Added padding top equal to header height */}
      <Head>
        <title>AI ChatBOT For Ecommerce | Destinova AI</title>
        <meta
          name="description"
          content="Learn about the capabilities of our Agentic AI Ecommerce Chatbot including AI product recommendations, personalized shopping, and automated support."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-96 bg-[#f87936] flex items-center justify-center text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Agentic AI Ecommerce Chatbot
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Revolutionize Your Online Store with Intelligent Conversations
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#f87936] mb-14">
            Key Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature Card */}
            {[
              {
                title: "AI Product Recommendations",
                desc: "Analyzes customer behavior and preferences in real-time to provide highly relevant product suggestions, boosting conversions.",
              },
              {
                title: "Personalized Shopping Journeys",
                desc: "Greets customers by name and remembers past interactions to create a truly unique shopping experience.",
              },
              {
                title: "Automated Support & Engagement",
                desc: "Handle customer queries 24/7, automate FAQs, and proactively guide visitors through the sales funnel.",
              },
              {
                title: "Advanced Chatbot Capabilities",
                desc: "Natural language understanding, sentiment analysis, lead qualification, and seamless handover to human agents.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f87936] text-white mb-6 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f87936] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Ecommerce Experience?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Discover how our Agentic AI Chatbot can boost sales and customer satisfaction.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#f87936] font-semibold py-3 px-8 rounded-full text-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Book a Live Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
