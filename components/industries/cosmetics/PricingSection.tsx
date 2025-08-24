import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const PricingSection = () => {
  const plans = [
    {
      name: "Forever Free",
      description:
        "Unlock the power of AI at no cost, perfect for getting started.",
      price: "Free",
      period: "",
      features: [
        "Unlimited conversations/month",
        "Unlimited AI Product Sync",
        "Unlimited Knowledge Train",
        "Require to setup openAI Key & database",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Starter",
      description:
        "Ideal for growing businesses looking to expand their AI capabilities.",
      price: "$9",
      period: "/ month",
      features: [
        "Unlimited conversations/month",
        "Train up to 5,000 products (auto-sync)",
        "Unlimited AI chats",
        "Learns FAQs, policies, files, Website",
        "Remove “Destinova AI” branding",
        "Third Party Integration",
        "Product Page AI Summery popup & Upsell",
        "Access to all future AI features",
        "14-day free trial",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Growth",
      description:
        "Comprehensive features for established businesses with advanced needs.",
      price: "$29",
      period: "/ month",
      features: [
        "Unlimited conversations/month",
        "Everything in Starter, plus",
        "Train up to 15,000 products",
        "Learns from discount & chat history",
        "Priority customer support",
        "Real-time AI sales pop-ups",
        "integration with meta & custom API",
        "Support for headless storefronts",
        "14-day free trial",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "White Label",
      description:
        "For agencies and large enterprises needing a fully branded solution.",
      price: "Custom",
      period: "",
      features: [
        "All Growth features",
        "Full white-label branding",
        "Dedicated infrastructure",
        "SLA and priority support",
        "Custom integrations",
        "Account management",
        "On-premise deployment options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Pricing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800">
              Plans
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your cosmetics business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg flex flex-col h-full ${
                plan.popular
                  ? "border-purple-500 bg-purple-50/50 hover:bg-purple-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-green-500 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                <Link
                  href={plan.cta === 'Contact Sales' ? '/demo-form' : 'https://apps.shopify.com/desti-ai-automate-chatbot'}
                  className="flex items-center justify-center gap-2"
                >
                  {plan.cta}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Some plans include a 14-day free trial. Setup fees may apply for certain configurations.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ SOC 2 Certified</span>
            <span>✓ GDPR Compliant</span>
            <span>✓ 99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
