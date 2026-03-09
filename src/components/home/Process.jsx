import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your business needs and identify growth opportunities.',
    color: 'bg-blue-500'
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Our experts craft a bespoke roadmap tailored to your vision.',
    color: 'bg-purple-500'
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'We create intuitive solutions focused on user experience.',
    color: 'bg-pink-500'
  },
  {
    icon: Rocket,
    title: 'Delivery',
    description: 'Seamless implementation with ongoing support for long-term success.',
    color: 'bg-primary'
  }
];

export function Process() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">How We Bring Your Vision To Life</h2>
          <p className="text-gray-400 text-lg">
            A proven 4-step process designed to ensure precision, transparency, and outstanding results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl h-full hover:border-primary/50 transition-all duration-300">
                <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                <div className="absolute -bottom-2 -right-2 text-7xl font-bold text-white/5 select-none">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
