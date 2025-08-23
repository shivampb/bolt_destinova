'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Sparkles, Heart, Crown } from 'lucide-react';

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
      'engagement-modern': {
        title: 'Modern Engagement Collection',
        items: [
          { name: 'Solitaire Diamond Ring', price: '$3,299', description: '1.2ct Round Cut Diamond' },
          { name: 'Matching Wedding Band', price: '$899', description: 'Platinum Pavé Setting' },
          { name: 'Diamond Earrings', price: '$1,599', description: 'Complementary Studs' }
        ]
      },
      'anniversary-vintage': {
        title: 'Vintage Anniversary Set',
        items: [
          { name: 'Art Deco Necklace', price: '$2,499', description: 'Emerald & Diamond' },
          { name: 'Vintage Earrings', price: '$1,299', description: 'Matching Design' },
          { name: 'Cocktail Ring', price: '$1,899', description: 'Statement Piece' }
        ]
      },
      'daily-minimal': {
        title: 'Minimal Daily Wear',
        items: [
          { name: 'Delicate Gold Chain', price: '$399', description: '14K Gold, 18"' },
          { name: 'Simple Stud Earrings', price: '$299', description: 'Gold & Diamond' },
          { name: 'Thin Band Ring', price: '$199', description: 'Stackable Design' }
        ]
      }
    };

    const key = `${selectedOccasion}-${selectedStyle}` as keyof typeof recommendations;
    return recommendations[key] || recommendations['daily-minimal'];
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Try It Live:{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
                AI Recommendations
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Experience how our AI creates personalized jewellery recommendations based on your preferences.
            </p>
          </div>

          {/* Interactive Demo */}
          <div className="bg-gradient-to-br from-slate-50 to-yellow-50/30 rounded-2xl p-8 border border-yellow-200/30">
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
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="daily">Daily Wear</SelectItem>
                      <SelectItem value="gifting">Gifting</SelectItem>
                      <SelectItem value="special">Special Event</SelectItem>
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
                      <SelectItem value="modern">Modern & Contemporary</SelectItem>
                      <SelectItem value="vintage">Vintage & Classic</SelectItem>
                      <SelectItem value="minimal">Minimal & Delicate</SelectItem>
                      <SelectItem value="bold">Bold & Statement</SelectItem>
                      <SelectItem value="romantic">Romantic & Feminine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleTryDemo}
                  disabled={!selectedOccasion || !selectedStyle}
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 text-white font-semibold"
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
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                            {index === 0 && <Crown size={20} className="text-yellow-600" />}
                            {index === 1 && <Heart size={20} className="text-yellow-600" />}
                            {index === 2 && <Sparkles size={20} className="text-yellow-600" />}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-slate-900">{item.name}</h5>
                            <p className="text-sm text-slate-600">{item.description}</p>
                            <p className="text-yellow-600 font-bold">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700 font-medium">
                        ✨ Perfect match! This set coordinates beautifully and suits your {selectedStyle} style for {selectedOccasion} occasions.
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
              <Button asChild className="bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 text-white">
                <a href="/demo-form" className="flex items-center gap-2">
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