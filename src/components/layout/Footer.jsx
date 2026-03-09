import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Dream Associate</h3>
            <p className="text-gray-400 leading-relaxed">
              We provide comprehensive business solutions to help you grow and succeed in today's competitive market.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Consulting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Finance</a></li>
            </ul>
          </div>

          {/* Contact */}
           <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>47 Bakery Street, London, UK</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+44 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@Dream  Associate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
             <p className="text-gray-400 mb-6">Subscribe for latest updates.</p>
             <div className="flex">
               <input 
                 type="email" 
                 placeholder="Email address" 
                 className="bg-slate-800 border-none p-3 rounded-l-lg w-full focus:ring-2 focus:ring-primary text-white outline-none" 
               />
               <button className="bg-primary hover:bg-primary-dark text-white px-6 rounded-r-lg font-medium transition-colors">
                 Go
               </button>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 Dream Associate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
