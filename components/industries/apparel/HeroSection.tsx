'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shirt } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-purple-900/80 to-pink-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm text-purple-200 text-sm font-medium mb-8 border border-purple-400/30">
            <Shirt size={16} className="mr-2" />
            AI-Powered Fashion Intelligence
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            AI-Powered Apparel Recommendations{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tailored to Your Style
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto text-slate-200">
            Help shoppers discover outfits that fit their personality, body type, and occasion — with
            intelligent product recommendations that understand fashion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white text-lg px-10 py-4 h-auto rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Link href="/book-demo">
                <span className="flex items-center gap-3">
                  See a Demo
                  <ArrowRight size={20} />
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white text-lg px-10 py-4 h-auto bg-transparent font-semibold rounded-2xl"
            >
              <Link href="/contact">
                <span className="flex items-center gap-3">
                  <Play size={20} />
                  Book a Call
                </span>
              </Link>
            </Button>
          </div>

          {/* Apparel eCommerce Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="text-slate-900 text-left">
                  <h3 className="text-lg font-semibold mb-4">Complete Outfit Recommendation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Casual Shirt */}
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-3 flex items-center justify-center">
                        <Shirt size={32} className="text-purple-600" />
                      </div>
                      <p className="font-medium text-sm">Casual Shirt</p>
                      <p className="text-purple-600 font-bold">$49</p>
                    </div>

                    {/* Slim Fit Jeans */}
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-3 flex items-center justify-center">
                        <div className="w-8 h-12 bg-blue-600 rounded-sm"></div>
                      </div>
                      <p className="font-medium text-sm">Slim Fit Jeans</p>
                      <p className="text-purple-600 font-bold">$79</p>
                    </div>

                    {/* Sneakers */}
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3 flex items-center justify-center">
                        <div className="w-10 h-6 bg-gray-600 rounded-full"></div>
                      </div>
                      <p className="font-medium text-sm">Casual Sneakers</p>
                      <p className="text-purple-600 font-bold">$89</p>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-slate-600 mb-2">Complete Look Discount: Save $15</p>
                    <p className="text-lg font-bold text-purple-600">Total: $202</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
