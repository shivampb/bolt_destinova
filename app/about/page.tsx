import { Metadata } from 'next';
import { 
  Rocket, 
  Lightbulb, 
  Globe, 
  Handshake, 
  Users, 
  Zap,
  Calendar,
  Target,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Destinova AI Labs',
  description: 'Learn about Destinova AI Labs - an AI innovation company transforming digital commerce with intelligent chatbots, recommendation engines, and agentic AI workflows.',
  keywords: ['AI company', 'eCommerce AI', 'chatbots', 'recommendation engines', 'artificial intelligence'],
};

export default function AboutPage() {
  const timeline = [
    {
      date: 'October 2023',
      title: 'The Beginning',
      description: 'Destinova AI Labs was founded to build AI-powered solutions that transform digital commerce.',
      icon: Rocket,
      color: 'from-blue-500 to-purple-500'
    },
    {
      date: '2024',
      title: 'The First Milestone',
      description: 'Launched AI Chatbot for smarter, faster, always-available customer support. Introduced AI Product Recommendation Engine for cosmetics, jewellery, and apparel brands.',
      icon: Target,
      color: 'from-[#FF7626] to-orange-600'
    },
    {
      date: '2025',
      title: 'Scaling Up',
      description: 'Expanding beyond chatbots into agentic AI workflows and next-gen personalization engines.',
      icon: Zap,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: 'Smart AI Chatbots',
      description: '24/7 customer engagement assistants that understand, respond, and convert.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Sparkles,
      title: 'AI Recommendation Engines',
      description: 'Personalized suggestions for jewellery, apparel, cosmetics, and more.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Agentic AI Workflows',
      description: 'Custom business automation that thinks and acts intelligently.',
      color: 'from-[#FF7626] to-orange-600'
    },
    {
      icon: Globe,
      title: 'Seamless Integrations',
      description: 'Shopify, WooCommerce, Magento, and enterprise app connections.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const clientTypes = [
    {
      icon: ShoppingBag,
      title: 'eCommerce Brands',
      description: 'Jewellery, Apparel, Cosmetics brands seeking personalized customer experiences.',
      stats: '500+ brands served'
    },
    {
      icon: Globe,
      title: 'Marketplaces & Retail Chains',
      description: 'Large-scale platforms needing intelligent product discovery and recommendations.',
      stats: '50+ marketplaces'
    },
    {
      icon: Rocket,
      title: 'D2C Startups',
      description: 'Direct-to-consumer brands scaling with AI-powered growth strategies.',
      stats: '200+ startups'
    },
    {
      icon: Users,
      title: 'Enterprises',
      description: 'Large organizations adopting automation-first strategies for digital transformation.',
      stats: '25+ enterprises'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              About{' '}
              <span className="text-[#FF7626]">Destinova AI Labs</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-8">
              Innovating AI, Empowering Commerce
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF7626] to-orange-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF7626]/10 text-[#FF7626] text-sm font-medium mb-6">
              <Rocket size={16} className="mr-2" />
              Our Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              From Vision to Reality
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every great innovation starts with a simple idea. Here's how we've grown from concept to industry leader.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-sm font-semibold text-[#FF7626] mb-2">
                        {milestone.date}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <Lightbulb size={16} className="mr-2" />
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                AI Innovation Meets Human-Centered Design
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We are an AI innovation company blending cutting-edge technology with human-centered design. 
                  Our team of engineers, designers, and AI researchers work together to create solutions that 
                  don't just automate—they elevate.
                </p>
                
                <Card className="p-6 bg-gradient-to-r from-[#FF7626]/5 to-orange-50 border-[#FF7626]/20">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Mission</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Empower eCommerce and enterprises with AI solutions that boost conversions, 
                    enhance customer loyalty, and create unforgettable experiences.
                  </p>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Innovation First</h4>
                    <p className="text-slate-600">Pushing the boundaries of what's possible with AI technology.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Customer Obsessed</h4>
                    <p className="text-slate-600">Every solution is designed with the end customer experience in mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Results Driven</h4>
                    <p className="text-slate-600">We measure success by the tangible impact we create for businesses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
              <Globe size={16} className="mr-2" />
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              AI Solutions That Transform Commerce
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From intelligent chatbots to personalized recommendations, we build AI that works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Target size={16} className="mr-2" />
              Our Vision
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The Future of Commerce is{' '}
              <span className="text-[#FF7626]">AI-Driven</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The future of commerce is personalized, conversational, and AI-driven. 
              We help businesses move from transactions to relationships using deep learning, 
              NLP, and recommendation intelligence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF7626] mb-2">Personalized</div>
                <p className="text-slate-300">Every interaction tailored to individual preferences</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF7626] mb-2">Conversational</div>
                <p className="text-slate-300">Natural, human-like AI interactions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF7626] mb-2">Intelligent</div>
                <p className="text-slate-300">AI that learns, adapts, and improves continuously</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium mb-6">
              <Handshake size={16} className="mr-2" />
              Who We Work With
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From startups to enterprises, we partner with businesses ready to embrace the AI revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <Card key={index} className="p-6 bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={24} className="text-slate-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {client.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {client.description}
                  </p>
                  <div className="text-sm font-medium text-[#FF7626]">
                    {client.stats}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Road Ahead */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF7626]/10 text-[#FF7626] text-sm font-medium mb-6">
              <Zap size={16} className="mr-2" />
              The Road Ahead
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Shaping Tomorrow's Commerce
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-white border-0 shadow-sm">
                <Target size={32} className="text-[#FF7626] mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Goal</h3>
                <p className="text-slate-600 leading-relaxed">
                  Make AI accessible, trustworthy, and transformative for all businesses, 
                  regardless of size or industry.
                </p>
              </Card>
              
              <Card className="p-8 bg-white border-0 shadow-sm">
                <Handshake size={32} className="text-[#FF7626] mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Commitment</h3>
                <p className="text-slate-600 leading-relaxed">
                  Shape the future of intelligent commerce with every innovation, 
                  always putting customer success first.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#FF7626] to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-orange-100 leading-relaxed mb-12">
              Whether you're a startup or enterprise, Destinova AI Labs is your partner in AI-driven growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[#FF7626] hover:bg-orange-50 text-lg px-8 py-4 h-auto font-semibold"
              >
                <Link href="/demo-form" className="flex items-center gap-2">
                  Request a Demo
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#FF7626] text-lg px-8 py-4 h-auto font-semibold bg-transparent"
              >
                <Link href="/contact">
                  Talk to Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Tagline */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl font-medium">
              <span className="text-[#FF7626]">Destinova AI Labs</span> — Innovating AI, Empowering Commerce.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}