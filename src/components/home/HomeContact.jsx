import React from 'react';
import { ContactForm } from '../contact/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export function HomeContact() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skewed-bg hidden lg:block" style={{ transform: 'skewX(-20deg) translateX(20%)' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
             <div>
               <span className="text-sm font-bold tracking-wider text-primary uppercase">Request a Callback</span>
               <h2 className="text-4xl font-bold mt-2 leading-tight">
                 We are always ready <br />
                 to <span className="text-primary">hear from you</span>
               </h2>
               <p className="text-gray-400 mt-4 text-lg">
                 Have a project in mind or need expert advice? Fill out the form, and our team will get back to you within 24 hours to discuss your needs.
               </p>
             </div>

             <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us Anytime</h4>
                    <p className="text-gray-400">+44 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Send Email</h4>
                    <p className="text-gray-400">info@Dream  Associate.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-gray-400">47 Bakery Street, London, UK</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get a Free Consultation</h3>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
