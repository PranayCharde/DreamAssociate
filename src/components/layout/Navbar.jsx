import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0'}`}>
      {/* Top Bar - Hidden on scroll to save space */}
      <div className={`bg-slate-900 text-gray-300 text-xs hidden md:block transition-all duration-300 ${isScrolled ? 'max-h-0 opacity-0 overflow-hidden py-0' : 'max-h-10 opacity-100 py-2'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-primary" />
              <span>Mon – Fri 8:00 – 18:00 / Sunday 8:00 – 14:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-primary" />
              <span>1-800-458-56987</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-primary" />
              <span>47 Bakery Street, London, UK</span>
            </div>
          </div>
          <div className="flex gap-4">
             {/* Social placeholders */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Dream  Associate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center gap-8 font-medium transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link to="/contacts" className="hover:text-primary transition-colors">Contacts</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg absolute w-full left-0 top-full text-gray-800">
            <Link to="/" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Our Services</Link>
            <Link to="/blog" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contacts" className="hover:text-primary block py-2" onClick={() => setIsOpen(false)}>Contacts</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
