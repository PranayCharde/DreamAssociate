import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const backgroundImages = [
 "src/assets/135_3-1-copyright.jpg", 
 "src/assets/135_3-2-copyright.jpg",
 "src/assets/135_3-3-copyright.jpg",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Slider */}
      <AnimatePresence mode='sync'>
        <motion.div
           key={currentImage}
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 1.5 }}
           className="absolute inset-0 z-0"
        >
          <img 
            src={backgroundImages[currentImage]} 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 space-y-6 text-white"
        >
          <span className="text-sm font-bold tracking-wider text-primary uppercase">Advanced Business Consulting</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We help you <br className="hidden md:block" />
            <span className="text-white">build the future</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            We provide comprehensive solutions to help your business grow and succeed in today's competitive market.
          </p>
          
          <ul className="space-y-3">
            {['Strategy & Planning', 'Program Management', 'Investment Policy'].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-100">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 flex gap-4">
             <Link to="/about" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105 transform border-none">
               About Us
             </Link>
          </div>
        </motion.div>

        {/* Right Side Content (Optional - simplified for slider version to avoid visual clutter) */}
        {/* We can hide the static images since we have a full background now, or maybe show a floating card? 
            Let's keep it clean as per standard hero slider designs. */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex-1 hidden md:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest">Industry Leader</h4>
                <p className="text-white/80 text-sm">Certified Global Partner</p>
              </div>
            </div>
            <p className="text-white/90 italic mb-6">
              "Dream Associate transformed our operational efficiency by 40%. Their strategic approach is second to none."
            </p>
            <div className="text-sm font-bold text-primary">CEO, Tech Solutions Global</div>
          </div>
        </motion.div>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentImage ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </section>
  );
}
