import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { Card } from '@/components/ui/card'; // Assuming you have a Card component
import {
  Lightbulb,
  Bot,
  ShoppingCart,
  Rocket,
  Scale,
  TrendingUp,
} from 'lucide-react'; // Assuming you have lucide-react for icons

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Building the Future of AI in Digital Commerce 🚀
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            From our first step in 2023 to empowering 50+ online stores today,
            Destinova AI Labs is redefining how brands connect with customers.
          </p>
          {/* Add AI-inspired abstract graphic here */}
          {/* Example: <div className="absolute inset-0 z-0 opacity-20"></div> */}
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Journey
          </h2>
          <div className="relative wrap overflow-hidden px-10 h-full">
            {/* Horizontal Line */}
            <div className="absolute border-2 border-gray-300 h-0 w-full left-0 top-1/2 transform -translate-y-1/2 hidden md:block"></div>

            {/* Timeline Items - Using flexbox for horizontal layout on desktop */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Timeline Item 1: 2023 */}
              <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3 relative">
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-xl mb-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl px-6 py-4 max-w-sm">
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    October 2023 – The Beginning
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-700">
                    Destinova AI Labs was founded with a vision to build
                    AI-powered solutions that transform digital commerce.
                  </p>
                </div>
                {/* Connector line (for mobile vertical layout) */}
                <div className="absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[calc(100%+1rem)] h-8 w-0.5 bg-gray-300 md:hidden"></div>
              </div>

              {/* Timeline Item 2: 2024 */}
              <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3 relative">
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white shadow-xl mb-4">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl px-6 py-4 max-w-sm">
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    2024 – The First Milestone
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-700">
                    Launched our AI Chatbot for smarter customer support.
                    Introduced our eCommerce Product Recommendation Engine for
                    cosmetics, jewellery, and apparel.
                  </p>
                </div>
                {/* Connector line (for mobile vertical layout) */}
                <div className="absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[calc(100%+1rem)] h-8 w-0.5 bg-gray-300 md:hidden"></div>
              </div>

              {/* Timeline Item 3: Today */}
              <div className="flex flex-col items-center text-center md:w-1/3 relative">
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-xl mb-4">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute bottom-0 right-0 bg-yellow-400 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded-full transform translate-x-1/4 translate-y-1/4 shadow">
                    50+ Live
                  </span>
                </div>
                <div className="order-1 bg-white rounded-lg shadow-xl px-6 py-4 max-w-sm">
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    Today – Trusted by 50+ Online Stores
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-700">
                    We are proud to be live with 50+ online stores and clients
                    who rely on our Chatbots & Recommendation Engine to boost
                    conversions, enhance engagement, and grow their businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Our Vision & Values
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-700">
            We believe in making AI practical, scalable, and impactful for
            businesses of all sizes. Our mission is to simplify digital
            commerce through intelligent automation.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Value Card 1: Innovation */}
            <Card className="w-full sm:w-64 p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <Rocket className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Innovation
              </h3>
              <p className="text-sm text-gray-600">
                Continuously pushing the boundaries of AI in digital commerce.
              </p>
            </Card>
            {/* Value Card 2: Scalability */}
            <Card className="w-full sm:w-64 p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <Scale className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">
                Scalability
              </h3>
              <p className="text-sm text-gray-600">
                Building solutions that grow with your business.
              </p>
            </Card>
            {/* Value Card 3: Impact */}
            <Card className="w-full sm:w-64 p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Impact</h3>
              <p className="text-sm text-gray-600">
                Delivering tangible results that boost conversions and growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Section (Call to Action) */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Build Smarter Commerce with AI?
          </h2>
          <Button
            asChild
            className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="/contact">Get Started with Destinova AI Labs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
