import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description:
        "Perfect for small jewellery stores testing AI recommendations",
      price: "$399",
      period: "per month",
      features: [
        "Style quiz integration",
        "Basic product recommendations",
        "Up to 5,000 products",
        "Email support",
        "Standard analytics",
        "Mobile responsive",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      description: "Best for growing jewellery businesses",
      price: "$899",
      period: "per month",
      features: [
        "Everything in Starter",
        "Occasion-based recommendations",
        "Complete set matching engine",
        "Advanced analytics dashboard",
        "A/B testing framework",
        "Priority support",
        "Custom branding",
        "Up to 50,000 products",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Full personalization suite for luxury brands",
      price: "Custom",
      period: "pricing",
      features: [
        "Everything in Growth",
        "Dedicated success manager",
        "Custom AI training",
        "White-label options",
        "API access",
        "Unlimited products",
        "Multi-brand management",
        "Custom integrations",
        "SLA guarantee",
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
              Plans
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your jewellery business. All plans
            include a 14-day free trial with no setup fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-yellow-500 bg-yellow-50/50 hover:bg-yellow-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
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

              <ul className="space-y-4 mb-8">
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
                    ? "bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 text-white"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                <Link
                  href={
                    plan.cta === "Contact Sales" ? "/contact" : "/book-demo"
                  }
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
            All plans include 14-day free trial • No setup fees • Cancel anytime
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
