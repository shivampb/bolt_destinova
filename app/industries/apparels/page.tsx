import { Metadata } from "next";
import IndustryFeaturesSection from "@/components/industries/IndustryFeaturesSection";
import { MessageCircle, Target, ShoppingCart, Users, Shirt, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Apparels Industry Solutions",
  description: "Explore our AI solutions tailored for the apparels industry.",
};

const apparelsFeatures = [
  {
    icon: Sparkles,
    title: "AI-Driven Fashion Trend Forecasting",
    description: "Predict upcoming fashion trends, popular styles, and color palettes using AI to inform design and production decisions.",
    benefits: [
      "Early identification of market shifts",
      "Reduced risk in new product development",
      "Optimized collection planning",
      "Increased relevance of product offerings"
    ]
  },
  {
    icon: Shirt,
    title: "Personalized Apparel Recommendations",
    description: "Offer highly personalized clothing and accessory recommendations based on customer style, body type, purchase history, and browsing behavior.",
    benefits: [
      "Enhanced shopping experience and satisfaction",
      "Increased conversion rates and average order value",
      "Reduced product discovery time for customers",
      "Stronger customer loyalty"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Optimized Inventory and Production",
    description: "Use AI to accurately forecast demand, optimize inventory levels, and streamline production processes to minimize waste and maximize efficiency.",
    benefits: [
      "Minimized overstocking and stockouts",
      "Efficient resource allocation",
      "Reduced textile waste and environmental impact",
      "Faster fulfillment and delivery"
    ]
  },
  {
    icon: MessageCircle,
    title: "Smart Virtual Styling & Sizing",
    description: "Implement AI-powered virtual try-on and accurate sizing recommendations to reduce returns and enhance the online fitting experience.",
    benefits: [
      "Decreased return rates due to poor fit",
      "Improved customer confidence in online purchases",
      "Interactive and engaging shopping experience",
      "Reduced logistical costs associated with returns"
    ]
  },
  {
    icon: Users,
    title: "Supply Chain Visibility & Efficiency",
    description: "Gain end-to-end visibility into your apparel supply chain, from raw materials to final delivery, ensuring transparency and efficiency.",
    benefits: [
      "Proactive identification of supply chain disruptions",
      "Improved ethical sourcing and sustainability tracking",
      "Optimized logistics and transportation",
      "Enhanced collaboration with suppliers"
    ]
  }
];

export default function ApparelsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          AI Solutions for the Apparels Industry
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Transform your apparels business with our AI innovations, from design
          and production to retail and customer engagement.
        </p>
      </div>
      <IndustryFeaturesSection 
        title="Key AI Features for Apparels Businesses"
        description="Revolutionize your fashion brand with AI-driven insights, personalized experiences, and optimized operations."
        features={apparelsFeatures}
      />
    </div>
  );
}
