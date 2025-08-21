import { MessageCircle, ArrowRight } from 'lucide-react';

const CaseStudySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real Customer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                Success Story
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              See how our AI transforms the beauty shopping experience
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-200/50 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Beauty AI Assistant</h3>
                  <p className="text-gray-600 text-sm">Personalized Lipstick Consultation</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Customer Message */}
                <div className="flex justify-end">
                  <div className="max-w-md bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-2xl rounded-br-md">
                    <p className="text-sm">
                      "Hi! I'm looking for a long-lasting lipstick for my wedding. I have warm undertones and prefer matte finishes. Any recommendations?"
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-lg bg-gray-100 p-4 rounded-2xl rounded-bl-md">
                    <p className="text-sm text-gray-800 mb-4">
                      "Congratulations on your upcoming wedding! 💕 Based on your warm undertones and preference for matte finishes, I have perfect recommendations for you."
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white p-3 rounded-lg border border-pink-200">
                        <div className="w-full h-16 bg-gradient-to-r from-rose-300 to-pink-400 rounded mb-2"></div>
                        <p className="text-xs font-medium text-gray-900">Bridal Rose Matte</p>
                        <p className="text-xs text-pink-600">Perfect for warm tones</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-pink-200">
                        <div className="w-full h-16 bg-gradient-to-r from-red-400 to-rose-500 rounded mb-2"></div>
                        <p className="text-xs font-medium text-gray-900">Classic Red Velvet</p>
                        <p className="text-xs text-pink-600">Long-lasting formula</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-800">
                      "Both shades complement warm undertones beautifully and offer 12+ hour wear. Would you like to see application tips or explore matching lip liners?"
                    </p>
                  </div>
                </div>

                {/* Follow-up */}
                <div className="flex justify-end">
                  <div className="max-w-md bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-2xl rounded-br-md">
                    <p className="text-sm">
                      "The Bridal Rose looks perfect! Can you show me the matching lip liner and suggest a complementary blush?"
                    </p>
                  </div>
                </div>

                {/* Final AI Response */}
                <div className="flex justify-start">
                  <div className="max-w-lg bg-gray-100 p-4 rounded-2xl rounded-bl-md">
                    <p className="text-sm text-gray-800">
                      "Excellent choice! I've added the matching lip liner to your cart. For blush, I recommend our 'Warm Peach Glow' - it will create a beautiful, cohesive bridal look. 
                      <br/><br/>
                      💄 <strong>Your Wedding Look Bundle:</strong> Bridal Rose Matte Lipstick + Matching Liner + Warm Peach Blush
                      <br/>
                      <strong>Total: $89</strong> (Save $15 with bundle discount!)"
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200/50">
                <h4 className="font-semibold text-gray-900 mb-4">Results from this interaction:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                      3x
                    </div>
                    <p className="text-sm text-gray-600">Higher AOV with bundle</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                      95%
                    </div>
                    <p className="text-sm text-gray-600">Customer satisfaction</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                      2min
                    </div>
                    <p className="text-sm text-gray-600">Time to purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;