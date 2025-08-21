'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/80 via-purple-600/70 to-purple-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/30">
            <Sparkles size={16} className="mr-2" />
            AI-Powered Beauty Solutions
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            AI Solutions for the{' '}
            <span className="bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
              Cosmetics Industry
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl sm:text-2xl leading-relaxed mb-12 max-w-3xl mx-auto text-pink-50">
            Enhance customer engagement, deliver personalized beauty experiences, and drive sales with intelligent AI chatbots designed for cosmetic brands.
          </p>

          {/* CTA Button */}
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-lg px-10 py-4 h-auto rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
          >
            <Link href="/book-demo" className="flex items-center gap-3">
              Book a Demo
              <ArrowRight size={20} />
            </Link>
          </Button>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;