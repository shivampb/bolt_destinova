import { Metadata } from "next";
import IndustryFeaturesSection from "@/components/industries/IndustryFeaturesSection";
import { MessageCircle, Target, ShoppingCart, Users, Gem, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Jewelry Industry Solutions",
  description: "Explore our AI solutions tailored for the jewelry industry.",
};

const jewelryFeatures = [
  {
    icon: Gem,
    title: "AI-Powered Jewelry Design & Curation",
    description: "Leverage AI to generate unique jewelry designs, predict popular trends, and curate personalized collections for customers.",
    benefits: [
      "Accelerated design process and innovation",
      "Data-driven trend forecasting",
      "Personalized product assortments",
      "Reduced time-to-market for new designs"
    ]
  },
  {
    icon: Sparkles,
    title: "Virtual Try-On and Visualization",
    description: "Offer immersive virtual try-on experiences for rings, necklaces, and other jewelry using AR/VR, enhancing online shopping.",
    benefits: [
      "Increased customer engagement and confidence",
      "Reduced return rates due to better visualization",
      "Unique and memorable shopping experience",
      "Accessibility for remote customers"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Optimized Inventory of Precious Materials",
    description: "AI-driven inventory management for precious metals and gemstones, minimizing holding costs and ensuring availability.",
    benefits: [
      "Precise demand forecasting for valuable materials",
      "Minimized capital tied up in inventory",
      "Reduced risk of theft and loss",
      "Streamlined sourcing and procurement"
    ]
  },
  {
    icon: Target,
    title: "Authenticity Verification & Counterfeit Detection",
    description: "Employ AI to analyze product images and data for authenticity verification, protecting your brand and customers from counterfeits.",
    benefits: [
      "Enhanced brand reputation and trust",
      "Protection against fraudulent products",
      "Automated identification of suspicious items",
      "Reduced financial losses from counterfeits"
    ]
  },
  {
    icon: Users,
    title: "Personalized Customer Engagement",
    description: "Deliver tailored recommendations and marketing messages based on customer preferences, purchase history, and lifestyle.",
    benefits: [
      "Higher customer retention and loyalty",
      "Increased average order value",
      "More effective marketing campaigns",
      "Deepened understanding of customer segments"
    ]
  }
];

export default function JewelryPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
          AI Solutions for the Jewelry Industry
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Revolutionize your jewelry business with our advanced AI solutions,
          enhancing design, manufacturing, and customer engagement.
        </p>
      </div>
      <IndustryFeaturesSection 
        title="Key AI Features for Jewelry Businesses"
        description="Transform your jewelry operations with AI, from exquisite design to secure and personalized customer experiences."
        features={jewelryFeatures}
      />
    </div>
  );
}
