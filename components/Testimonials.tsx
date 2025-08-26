// @/components/Testimonials.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  clientName: string;
  quote: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start mb-4">
            <Quote className="w-8 h-8 text-blue-500 mr-3 flex-shrink-0" />
            <blockquote className="text-gray-700 italic text-sm leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
          </div>
          <cite className="text-gray-600 font-medium text-sm not-italic">
            — {testimonial.clientName}
          </cite>
        </Card>
      ))}
    </div>
  );
};

export default Testimonials;