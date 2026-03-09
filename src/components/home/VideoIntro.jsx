import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export function VideoIntro() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect could go here, for now static */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Video Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg group transition-all duration-300"
        >
           <Play className="w-8 h-8 text-primary ml-1 fill-current group-hover:text-primary-dark" />
        </motion.button> */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-8 tracking-wide">
          View our <span className="text-primary-light">Promo Video</span>
        </h2>
      </div>
    </section>
  );
}
