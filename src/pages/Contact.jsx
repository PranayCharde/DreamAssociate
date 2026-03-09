import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '../components/contact/ContactForm';

export function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="flex justify-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
             <Link to="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <span className="text-primary">Contact</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <span className="text-sm font-bold tracking-wider text-primary uppercase">Get in Touch</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-4">
                  Let's start a conversation
                </h2>
                <p className="text-gray-600">
                  Have questions about our services or need expert advice? Reach out to us, and we'll be happy to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-md text-primary">
                     <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Our Location</h4>
                     <p className="text-gray-600">47 Bakery Street, London, UK</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-md text-primary">
                     <Phone className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Phone Number</h4>
                     <p className="text-gray-600">+44 123 456 7890</p>
                   </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-md text-primary">
                     <Mail className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Email Address</h4>
                     <p className="text-gray-600">info@Dream  Associate.com</p>
                   </div>
                </div>
                 
                 <div className="flex items-start gap-4">
                   <div className="bg-white p-3 rounded-lg shadow-md text-primary">
                     <Clock className="w-6 h-6" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">Working Hours</h4>
                     <p className="text-gray-600">Mon - Fri: 8:00 - 18:00</p>
                     <p className="text-gray-600">Sat - Sun: Closed</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
               <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 w-full bg-slate-200">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120612666014!3d51.528558241632786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1707923412344!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen="" 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           title="Google Map"
         ></iframe>
      </section>
    </div>
  );
}
