"use client";

import { ShoppingBag, Crown, Store, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const UseCasesSection = () => {
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleTryDemo = () => {
    setShowRecommendations(true);
  };

  const getRecommendations = () => {
    return {
      title: "Personalized Recommendations",
      items: [
        {
          name: "Diamond Solitaire Ring",
          description: "Classic elegance",
          price: "$1,999",
        },
        {
          name: "Pearl Earrings",
          description: "Timeless beauty",
          price: "$599",
        },
        {
          name: "Gold Bracelet",
          description: "Modern design",
          price: "$899",
        },
      ],
    };
  };
  const useCases = [
    {
      icon: ShoppingBag,
      title: "Online Jewellery Stores",
      description:
        "Boost online conversions with AI-powered product discovery, virtual consultations, and personalized shopping experiences.",
      features: [
        "Personalized product recommendations",
        "Virtual try-on experiences",
        "Style quiz integration",
        "Abandoned cart recovery",
      ],
      results: "+45% conversion rate, +40% AOV",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100/50",
      iconColor: "from-yellow-500 to-yellow-700",
    },
    {
      icon: Crown,
      title: "Luxury Jewellery Brands",
      description:
        "Offer VIP concierge experiences that match the exclusivity and prestige of high-end luxury jewellery brands.",
      features: [
        "VIP customer experiences",
        "Exclusive collection access",
        "Personal shopper services",
        "Heritage brand storytelling",
      ],
      results: "+60% customer satisfaction, +35% loyalty",
      bgColor: "bg-gradient-to-br from-slate-50 to-slate-100/50",
      iconColor: "from-slate-600 to-slate-800",
    },
    {
      icon: Store,
      title: "Retail Showrooms",
      description:
        "Enhance in-store experiences with AI kiosks and digital assistants that provide expert product guidance.",
      features: [
        "Interactive product displays",
        "Expert knowledge access",
        "Inventory availability checks",
        "Appointment scheduling",
      ],
      results: "+50% in-store engagement, +25% sales",
      bgColor: "bg-gradient-to-br from-yellow-50/50 to-slate-50",
      iconColor: "from-yellow-600 to-slate-600",
    },
    {
      icon: Heart,
      title: "Wedding & Gifting Stores",
      description:
        "Provide smart recommendations for special occasions with emotional intelligence and occasion-specific guidance.",
      features: [
        "Occasion-based recommendations",
        "Budget-conscious suggestions",
        "Romantic storytelling",
        "Gift recipient profiling",
      ],
      results: "+55% gift conversion, +30% repeat customers",
      bgColor: "bg-gradient-to-br from-slate-50/50 to-yellow-50/50",
      iconColor: "from-slate-500 to-yellow-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Use Cases for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
              Every Business Model
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our AI recommendation engine adapts to various jewellery business
            models, from online luxury retailers to specialized occasion stores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className={`p-8 ${useCase.bgColor} rounded-2xl border border-yellow-200/30 hover:border-yellow-300/50 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${useCase.iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent size={28} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {useCase.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-slate-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                      ✓ {useCase.results}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Demo Preview */}
        <div className="mt-16 bg-gradient-to-br from-slate-50 to-yellow-50/30 rounded-2xl p-8 border border-yellow-200/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Try Our AI Recommendation Engine
            </h3>
            <p className="text-slate-600">
              Select your preferences to see how our AI creates personalized
              jewellery recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Occasion
              </label>
              <Select onValueChange={setSelectedOccasion}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose occasion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="daily">Daily Wear</SelectItem>
                  <SelectItem value="gifting">Gifting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Style
              </label>
              <Select onValueChange={setSelectedStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="vintage">Vintage</SelectItem>
                  <SelectItem value="minimal">Minimal</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center mb-8">
            <Button
              onClick={handleTryDemo}
              disabled={!selectedOccasion || !selectedStyle}
              className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 text-white px-8 py-3"
            >
              <Sparkles size={20} className="mr-2" />
              Generate Recommendations
            </Button>
          </div>

          {/* Demo Results */}
          {showRecommendations && (
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                {getRecommendations().title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {getRecommendations().items.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="w-full h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg mb-3 flex items-center justify-center">
                      {index === 0 && (
                        <Crown size={24} className="text-yellow-600" />
                      )}
                      {index === 1 && (
                        <Heart size={24} className="text-yellow-600" />
                      )}
                      {index === 2 && (
                        <Sparkles size={24} className="text-yellow-600" />
                      )}
                    </div>
                    <h5 className="font-medium text-slate-900 mb-1">
                      {item.name}
                    </h5>
                    <p className="text-xs text-slate-600 mb-2">
                      {item.description}
                    </p>
                    <p className="text-yellow-600 font-bold">{item.price}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-green-600 font-medium">
                  ✨ Perfect coordination! This set matches your {selectedStyle}{" "}
                  style for {selectedOccasion} occasions.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
