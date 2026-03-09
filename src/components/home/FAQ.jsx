import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer: 'We provide consulting services across various sectors including technology, finance, retail, and manufacturing, adapting our strategies to unique market challenges.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project duration varies depending on the scope. A standard assessment takes 4-6 weeks, while large-scale implementations can span several months.'
  },
  {
    question: 'Do you offer customized solutions?',
    answer: 'Absolutely. We believe every business is unique. All our strategies and solutions are custom-built to match your specific goals and constraints.'
  },
  {
    question: 'How do we track project progress?',
    answer: 'We provide weekly status reports and maintain a dedicated portal where clients can track milestones, KPIs, and deliverables in real-time.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about our services and methodology. 
                Can't find what you're looking for? Reach out to our team.
              </p>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-bold text-slate-800">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
