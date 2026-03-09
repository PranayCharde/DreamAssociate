import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const members = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    bio: 'Visionary leader with 15+ years in strategic consulting.'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Expert in market analysis and innovative growth roadmaps.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Financial Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Optimizing corporate finances and investment strategies.'
  },
  {
    name: 'David Wilson',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    bio: 'Driving operational excellence and supply chain efficiency.'
  }
];

export function Team() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Meet the Visionaries</h2>
          <p className="text-gray-500 text-lg">
            Dedicated professionals committed to transforming your business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-4">{member.role}</p>
                <p className="text-gray-500 text-sm mb-6 px-2">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
