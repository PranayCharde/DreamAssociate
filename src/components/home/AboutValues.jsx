import React from 'react';

export function AboutValues() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          Driving innovation through <br />
          collaborative <span className="text-primary">intelligence!</span> Our core <br />
          focus is <span className="underline decoration-primary decoration-4 underline-offset-4">excellence.</span>
        </h2>
        <p className="text-gray-500 font-medium">
          Piter Bowman <br />
          <span className="text-sm text-primary">Creative Director</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
           <img 
             src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
             alt="Team Puzzle" 
             className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
           />
           <img 
             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
             alt="Happy Team" 
             className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
           />
           <img 
             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" 
             alt="Analytics" 
             className="w-full h-80 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
           />
        </div>
      </div>
    </section>
  );
}
