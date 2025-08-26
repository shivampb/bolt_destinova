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
                                                                                                                                                                                                                                                                                              