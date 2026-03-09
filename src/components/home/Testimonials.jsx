import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Dream Associate transformed our business strategy. Their expertise in financial planning and operational efficiency helped us double our revenue in just one year.",
    author: "James Wilson",
    role: "CEO, TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "The team's dedication and deep industry knowledge are unmatched. They truly understand what it takes to scale a business in today's competitive market.",
    author: "Sarah Jenkins",
    role: "Director, Creative Solutions",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    text: "Professional, insightful, and results-driven. Working with Dream Associate was one of the best decisions we made for our company's future.",
    author: "Robert Chen",
    role: "Founder, Innovation Labs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-primary uppercase">Testimonials</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">"{item.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{item.author}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
