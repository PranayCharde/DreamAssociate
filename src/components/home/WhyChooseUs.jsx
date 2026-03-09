import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3, Clock, Heart, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Expert Guidance',
    description: 'Our consultants bring decades of industry experience to help you navigate complex business challenges.',
    color: 'text-blue-500'
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'We prioritize agility and speed, ensuring your business stays ahead of market shifts.',
    color: 'text-yellow-500'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven',
    description: 'Every recommendation is backed by rigorous analysis and real-world performance metrics.',
    color: 'text-green-500'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Dedicated assistance whenever you need it, ensuring minimal downtime and maximum productivity.',
    color: 'text-purple-500'
  },
  {
    icon: Heart,
    title: 'Client Centric',
    description: 'Your success is our priority. We tailor every solution to your unique business DNA.',
    color: 'text-red-500'
  },
  {
    icon: Headphones,
    title: 'Ongoing Advice',
    description: 'We don\'t just deliver and leave; we provide continuous advisory for sustained growth.',
    color: 'text-primary'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Why Partner With Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Experience the Difference</h2>
          <p className="text-gray-500 text-lg">
            We combine strategic foresight with deep operational expertise to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100 text-left group"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className={`w-8 h-8 ${reason.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
