"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-white pt-16 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF7626]/5 to-transparent opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF7626]/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#FF7626]/10 text-[#FF7626] px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Product Discovery</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                AI Chatbots For{" "}
                <span className="text-[#FF7626] relative">
                  sell
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#FF7626]/20"
                    viewBox="0 0 100 10"
                    fill="currentColor"
                  >
                    <path d="M0,8 Q50,0 100,8 L100,10 L0,10 Z" />
                  </svg>
                </span>
                product Recommendation in seconds.
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Destinova AI Labs helps eCommerce brands lift conversions with
                conversational product discovery—on web and chat. Turn every
                visitor into a buyer with intelligent recommendations.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#FF7626] hover:bg-[#FF7626]/90 text-white px-8 py-4 text-lg font-medium group"
              >
                Book a Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium border-slate-300 text-slate-700 hover:bg-slate-50 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Try Interactive Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-[#FF7626]">+28%</div>
                <div className="text-sm text-slate-600">
                  Average Order Value
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-[#FF7626]">+19%</div>
                <div className="text-sm text-slate-600">Conversion Rate</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-[#FF7626]">-35%</div>
                <div className="text-sm text-slate-600">Support Tickets</div>
              </div>
            </div>
          </div>

          {/* Demo/Visual */}
          <div className="relative">
            <Card className="p-6 bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
              {/* Mockup Chat Interface */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#FF7626] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">D</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Destinova AI
                      </div>
                      <div className="text-xs text-green-500 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        Online
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">Just now</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#FF7626] rounded-full flex items-center justify-center text-xs text-white font-bold">
                      D
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-lg px-4 py-3 max-w-xs">
                      <p className="text-sm text-slate-800">
                        Hi! I'm here to help you find the perfect product. What
                        are you looking for today?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-[#FF7626] text-white rounded-2xl rounded-tr-lg px-4 py-3 max-w-xs">
                      <p className="text-sm">
                        I need a laptop for graphic design work
                      </p>
                    </div>
                    <div className="w-6 h-6 bg-slate-300 rounded-full flex items-center justify-center text-xs font-bold">
                      U
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#FF7626] rounded-full flex items-center justify-center text-xs text-white font-bold">
                      D
                    </div>
                    <div className="bg-slate-100 rounded-2xl rounded-tl-lg px-4 py-3 max-w-xs">
                      <p className="text-sm text-slate-800 mb-2">
                        Perfect! Based on your needs, I recommend the MacBook
                        Pro 16". Here's why:
                      </p>
                      <div className="bg-white rounded-lg p-3 border">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-slate-200 rounded-lg"></div>
                          <div>
                            <div className="font-medium text-sm">
                              MacBook Pro 16"
                            </div>
                            <div className="text-xs text-slate-600">
                              M3 Pro, 18GB RAM
                            </div>
                            <div className="text-sm font-bold text-[#FF7626]">
                              $2,499
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center pt-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#FF7626] rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-[#FF7626] rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-[#FF7626] rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              +32% Conversion
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              2.3s Response
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
