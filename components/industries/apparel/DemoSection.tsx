'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Sparkles, Shirt, User } from 'lucide-react';

const DemoSection = () => {
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleTryDemo = () => {
    if (selectedOccasion && selectedStyle) {
      setShowRecommendations(true);
    }
  };

  const getRecommendations = () => {
    const recommendations = {
      'work-minimalist': {
        title: 'Professional Minimalist Outfit',
        items: [
          { name: 'Tailored Blazer', price: '$129', description: 'Navy Blue, Slim Fit' },
          { name: 'Dress Shirt', price: '$59', description: 'White Cotton Blend' },
          { name: 'Dress Pants', price: '$89', description: 'Charcoal Gray' }
        ]
      },
      'casual-bold': {
        title: 'Bold Casual Look',
        items: [
          { name: 'Graphic T-Shirt', price: '$35', description: 'Vintage Print' },
          { name: 'Distressed Jeans', price: '$79', description: 'Relaxed Fit' },
          { name: 'Statement Sneakers', price: '$149', description: 'Limited Edition' }
        ]
      },
      'party-classic': {
        title: 'Classic Party Ensemble',
        items: [
          { name: 'Silk Blouse', price: '$95', description: 'Emerald Green' },
          { name: 'High-Waist Skirt', price: '$75', description: 'Black A-Line' },
          { name: 'Heeled Boots', price: '$159', description: 'Leather Ankle Boots' }
        ]
      }
    };

    const key = `${selectedOccasion}-${selectedStyle}` as keyof typeof recommendations;
    return recommendations[key] || recommendations['casual-bold'];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Try It Live:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                AI Outfit Recommendations
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Experience how our AI creates personalized outfit recommendations based on your preferences.
            </p>
          </div>

          {/* Interactive Demo */}
          <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl p-8 border border-purple-200/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Tell us your preferences:
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Occasion
                  </label>
                  <Select onValueChange={setSelectedOccasion}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="party">Party</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="date">Date Night</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Style Preference
                  </label>
                  <Select onValueChange={setSelectedStyle}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimalist">Minimalist</SelectItem>
                      <SelectItem value="bold">Bold</SelectItem>
                      <SelectItem value="classic">Classic</SelectItem>
                      <SelectItem value="trendy">Trendy</SelectItem>
                      <SelectItem value="bohemian">Bohemian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleTryDemo}
                  disabled={!selectedOccasion || !selectedStyle}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-semibold"
                >
                  <Sparkles size={20} className="mr-2" />
                  Get AI Recommendations
                </Button>
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                {showRecommendations ? (
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">
                      {getRecommendations().title}
                    </h4>
                    <div className="space-y-4">
                      {getRecommendations().items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                            {index === 0 && <Shirt size={20} className="text-purple-600" />}
                            {index === 1 && <User size={20} className="text-purple-600" />}
                            {index === 2 && <Sparkles size={20} className="text-purple-600" />}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-slate-900">{item.name}</h5>
                            <p className="text-sm text-slate-600">{item.description}</p>
                            <p className="text-purple-600 font-bold">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700 font-medium">
                        ✨ Perfect match! This outfit suits your {selectedStyle} style for {selectedOccasion} occasions.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles size={32} className="text-slate-400" />
                    </div>
                    <p className="text-slate-500">
                      Select your preferences above to see AI recommendations
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Demo CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              This is just a preview. The full AI engine offers advanced personalization, inventory integration, and real-time learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white">
                <a href="/book-demo" className="flex items-center gap-2">
                  Book Full Demo
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-slate-300">
                <a href="/contact">
                  Talk to Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;