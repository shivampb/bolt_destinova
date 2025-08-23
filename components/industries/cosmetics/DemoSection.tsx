'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Sparkles, Camera, Heart } from 'lucide-react';

const DemoSection = () => {
  const [selectedSkinType, setSelectedSkinType] = useState('');
  const [selectedConcern, setSelectedConcern] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleTryDemo = () => {
    if (selectedSkinType && selectedConcern) {
      setShowRecommendations(true);
    }
  };

  const getRecommendations = () => {
    const recommendations = {
      'oily-acne': {
        title: 'Acne-Fighting Routine for Oily Skin',
        items: [
          { name: 'Salicylic Acid Cleanser', price: '$24', description: 'Deep pore cleansing' },
          { name: 'Niacinamide Serum', price: '$18', description: 'Oil control & pore refining' },
          { name: 'Oil-Free Moisturizer', price: '$22', description: 'Lightweight hydration' }
        ]
      },
      'dry-aging': {
        title: 'Anti-Aging Routine for Dry Skin',
        items: [
          { name: 'Hydrating Cleanser', price: '$28', description: 'Gentle, moisture-rich' },
          { name: 'Retinol Serum', price: '$45', description: 'Anti-aging powerhouse' },
          { name: 'Rich Night Cream', price: '$38', description: 'Intensive overnight repair' }
        ]
      },
      'combination-sensitivity': {
        title: 'Gentle Routine for Sensitive Combination Skin',
        items: [
          { name: 'Gentle Foam Cleanser', price: '$26', description: 'Mild, balanced cleansing' },
          { name: 'Hyaluronic Acid Serum', price: '$32', description: 'Hydrating without irritation' },
          { name: 'Barrier Repair Cream', price: '$35', description: 'Strengthens skin barrier' }
        ]
      }
    };

    const key = `${selectedSkinType}-${selectedConcern}` as keyof typeof recommendations;
    return recommendations[key] || recommendations['combination-sensitivity'];
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Try It Live:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                AI Beauty Recommendations
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Experience how our AI creates personalized skincare recommendations based on your skin profile.
            </p>
          </div>

          {/* Interactive Demo */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Tell us about your skin:
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What's your skin type?
                  </label>
                  <Select onValueChange={setSelectedSkinType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your skin type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oily">Oily</SelectItem>
                      <SelectItem value="dry">Dry</SelectItem>
                      <SelectItem value="combination">Combination</SelectItem>
                      <SelectItem value="sensitive">Sensitive</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Main skin concern?
                  </label>
                  <Select onValueChange={setSelectedConcern}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your main concern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acne">Acne & Breakouts</SelectItem>
                      <SelectItem value="aging">Anti-Aging</SelectItem>
                      <SelectItem value="sensitivity">Sensitivity</SelectItem>
                      <SelectItem value="pigmentation">Dark Spots</SelectItem>
                      <SelectItem value="dryness">Dryness</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-pink-200/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Camera size={20} className="text-pink-500" />
                    <span className="text-sm font-medium text-slate-700">Optional: Upload Photo</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    For more accurate shade matching and skin analysis
                  </p>
                </div>

                <Button 
                  onClick={handleTryDemo}
                  disabled={!selectedSkinType || !selectedConcern}
                  className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-300 hover:to-purple-300 text-white font-semibold"
                >
                  <Sparkles size={20} className="mr-2" />
                  Get My Recommendations
                </Button>
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-xl p-6 border border-pink-200/50">
                {showRecommendations ? (
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">
                      {getRecommendations().title}
                    </h4>
                    <div className="space-y-4">
                      {getRecommendations().items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg flex items-center justify-center">
                            {index === 0 && <span className="text-pink-600 text-xl">🧴</span>}
                            {index === 1 && <span className="text-purple-600 text-xl">✨</span>}
                            {index === 2 && <Heart size={20} className="text-rose-600" />}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium text-slate-900">{item.name}</h5>
                            <p className="text-sm text-slate-600">{item.description}</p>
                            <p className="text-pink-600 font-bold">{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-green-700 font-medium">
                        ✨ Perfect match! This routine is specifically designed for your {selectedSkinType} skin with {selectedConcern} concerns.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Sparkles size={32} className="text-pink-400" />
                    </div>
                    <p className="text-slate-500">
                      Select your skin type and concern to see AI recommendations
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Demo CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              This is just a preview. The full AI engine offers advanced image analysis, ingredient compatibility checking, and real-time learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-300 hover:to-purple-300 text-white">
                <a href="/demo-form" className="flex items-center gap-2">
                  Book Full Demo
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50">
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