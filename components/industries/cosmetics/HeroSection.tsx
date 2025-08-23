"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with beauty gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50/30 to-rose-50"></div>
      
      {/* Floating beauty elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rose-200/40 rounded-full blur-lg animate-pulse delay-500"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-sm font-medium mb-8 border border-pink-200/50">
            <Sparkles size={16} className="mr-2" />
            AI-Powered Beauty Personalization
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Personalized Skincare Recommendations{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto text-slate-600">
            Help your shoppers find the right cosmetic products based on their skin type, concerns, and preferences — just like an in-store beauty consultant.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white text-lg px-10 py-4 h-auto rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Link href="#demo" className="flex items-center gap-3">
                See How It Works
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-pink-300 text-pink-600 hover:bg-pink-50 hover:text-pink-700 text-lg px-10 py-4 h-auto bg-white/80 backdrop-blur-sm font-semibold rounded-2xl"
            >
              <Link href="/demo-form" className="flex items-center gap-3">
                <Play size={20} />
                Book a Demo
              </Link>
            </Button>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md mx-auto">
                <div className="text-slate-900 text-left">
                  {/* Phone header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <h3 className="text-lg font-semibold">Skin Analysis</h3>
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                  </div>

                  {/* Q&A Section */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-slate-700 mb-2">What's your main skin concern?</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">Acne</span>
                        <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-xs">✓ Aging</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">Dryness</span>
                      </div>
                    </div>

                    {/* Photo upload area */}
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6 text-center border-2 border-dashed border-pink-200">
                      <div className="w-12 h-12 bg-pink-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-pink-600 text-xl">📸</span>
                      </div>
                      <p className="text-sm text-slate-600">Upload your photo for AI analysis</p>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-slate-700">Recommended for you:</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                          <div className="w-full h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-2"></div>
                          <p className="text-xs font-medium">Anti-Aging Serum</p>
                          <p className="text-pink-600 font-bold text-sm">$49</p>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-lg p-3 text-center">
                          <div className="w-full h-16 bg-gradient-to-br from-purple-100 to-rose-100 rounded-lg mb-2"></div>
                          <p className="text-xs font-medium">Hydrating Cream</p>
                          <p className="text-pink-600 font-bold text-sm">$35</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    Get My Routine
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-pink-100">
              <div className="text-2xl font-bold text-pink-600">+25%</div>
              <div className="text-xs text-slate-600">Conversion Rate</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-purple-100">
              <div className="text-2xl font-bold text-purple-600">-40%</div>
              <div className="text-xs text-slate-600">Return Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;