import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '../constants';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Premium Header */}
      <section className="relative pt-25 pb-15 overflow-hidden bg-accent-light">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f79898] via-[#F0F7FF] to-[#f79898]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary-light)_0%,_transparent_70%)] opacity-5" />
        <div className="section-container relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em]"
          >
             Connect With Us
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-slate-900 leading-none"
          >
            Get in <span className="text-primary ">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
             Have a specific health concern? Or need to book an appointment with our experts? Our team is available to provide you with medical support.
          </motion.p>
        </div>
      </section>

      <div className="section-container pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">Phone Number</h4>
                  <p className="text-slate-600 font-medium">{contactInfo.phones[0]}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">Email Address</h4>
                  <p className="text-slate-600 font-medium">{contactInfo.email}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900">Our Location</h4>
                  <p className="text-slate-600 font-medium leading-tight max-w-xs">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="pt-8 border-t border-slate-200">
              <div className="flex items-start gap-4">
                <div className="text-slate-900 mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-sm text-slate-500">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-xs text-primary font-bold mt-2 uppercase tracking-wider">Emergency 24/7</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2.5rem] shadow-premium p-6 md:p-12 border border-slate-100 relative overflow-hidden"
          >
            {submitted ? (
              <div className="py-20 text-center space-y-6">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-heading font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">First Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. John" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Last Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Doe" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-secondary-dark focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-secondary-dark focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we help you?" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-[1.5rem] px-5 py-4 text-secondary-dark focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 relative h-[500px] w-full bg-slate-200 overflow-hidden"
      >
        {/* Google Map Embed */}
        <iframe 
          title="Hospital Location"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.234!2d72.8!3d21.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05e5d3d4ec7ef%3A0xe5a1b5d1a5b1a5b1!2s${encodeURIComponent(contactInfo.address)}!5e0!3m2!1sen!2sin!4v1710650000000!5m2!1sen!2sin`}
          className="w-full h-full border-0 grayscale opacity-80"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Map Overlay Card */}
        <div className="absolute top-8 left-4 md:left-10 lg:left-20 z-10 max-w-[calc(100%-2rem)] md:max-w-sm">
          <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold text-secondary-dark leading-tight">
                Visit Our Hospital
              </h3>
            </div>
            
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {contactInfo.address}
            </p>

            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-slate-50 hover:bg-slate-100 p-4 rounded-xl transition-colors group"
            >
              <span className="text-slate-900 font-bold text-sm">Launch Navigation</span>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                <Send size={16} />
              </div>
            </a>
          </div>
        </div>

        {/* Visual Overlay to blend colors */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default Contact;
