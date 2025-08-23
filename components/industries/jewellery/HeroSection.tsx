"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Gem } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-blue-900/80 to-black/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16 sm:pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm text-yellow-300 text-sm font-medium mb-8 border border-yellow-400/30">
            <Gem size={16} className="mr-2" />
            AI-Powered Luxury Recommendations
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            AI-Powered Jewellery Recommendations That{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Sparkle with Personalization
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto text-slate-200">
            Help shoppers discover the perfect piece — by style, occasion, and
            taste — through intelligent product recommendations that understand
            luxury preferences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-black text-lg px-10 py-4 h-auto rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Link href="/demo-form" className="flex items-center gap-3">
                See a Demo
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-10 py-4 h-auto bg-transparent font-semibold rounded-2xl"
            >
              <Link href="/contact" className="flex items-center gap-3">
                <Play size={20} />
                Book a Call
              </Link>
            </Button>
          </div>

          {/* Jewellery eCommerce Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-2xl">
                <div className="text-slate-900 text-left">
                  <h3 className="text-lg font-semibold mb-4">
                    Recommended Matching Set
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-3 flex items-center justify-center">
                        <Gem size={32} className="text-yellow-600" />
                      </div>
                      <p className="font-medium text-sm">Diamond Earrings</p>
                      <p className="text-yellow-600 font-bold">$2,499</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-3 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-yellow-600 rounded-full"></div>
                      </div>
                      <p className="font-medium text-sm">Matching Necklace</p>
                      <p className="text-yellow-600 font-bold">$3,299</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="w-full h-24 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-3 flex items-center justify-center">
                        <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
                      </div>
                      <p className="font-medium text-sm">Elegant Ring</p>
                      <p className="text-yellow-600 font-bold">$1,899</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-slate-600 mb-2">
                      Complete Set Discount: Save $300
                    </p>
                    <p className="text-lg font-bold text-yellow-600">
                      Total: $7,397
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-600/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
