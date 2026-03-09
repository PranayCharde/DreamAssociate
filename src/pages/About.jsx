import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="flex justify-center gap-2 text-gray-400 text-sm font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1">
               <div className="relative">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                   alt="Our Team" 
                   className="rounded-lg shadow-2xl relative z-10"
                 />
                 <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-0"></div>
                 <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-0"></div>
               </div>
             </div>
             
             <div className="flex-1 space-y-6">
               <span className="text-sm font-bold tracking-wider text-primary uppercase">Who We Are</span>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                 We are specific about <br />
                 <span className="text-primary">what we do</span>
               </h2>
               <p className="text-gray-600 text-lg">
                 Founded in 2010, Dream Associate has grown from a small consulting firm to a global leader in business solutions. We believe in the power of data, strategy, and people to transform organizations.
               </p>
               <p className="text-gray-600">
                 Our mission is to empower businesses to achieve effective and sustainable growth. We work closely with our clients to understand their unique challenges and deliver tailored solutions that drive results.
               </p>
               
               <div className="grid grid-cols-2 gap-6 pt-4">
                 {[
                   { icon: <Award className="w-8 h-8 text-primary" />, title: "Award Winning", desc: "Recognized for excellence" },
                   { icon: <Users className="w-8 h-8 text-primary" />, title: "Expert Team", desc: "Industry veterans" },
                   { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "Proven Results", desc: "Consistent growth" },
                   { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: "Client Focus", desc: "Dedicated support" }
                 ].map((item, idx) => (
                   <div key={idx} className="flex flex-col gap-2">
                     {item.icon}
                     <h4 className="font-bold text-slate-900">{item.title}</h4>
                     <p className="text-sm text-gray-500">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-slate-50 text-center">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet the minds behind our success</h2>
           <p className="text-gray-600 max-w-2xl mx-auto mb-10">
             Our team is composed of dedicated professionals with diverse backgrounds and extensive experience in their respective fields.
           </p>
           <Link to="/contacts" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded font-bold transition-all">
             Contact Our Team
           </Link>
         </div>
      </section>
    </div>
  );
}
