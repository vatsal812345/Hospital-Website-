import { motion } from 'framer-motion';
import { ArrowRight, Shield, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../constants';

const CTASection = () => {
  return (
    <section className="section-container !pb-32">
      <div className="relative bg-gradient-to-br from-[#FDF2F2] via-[#F0F7FF] to-[#FDF2F2] rounded-[3rem] md:rounded-[5rem] p-12 md:p-24 text-center overflow-hidden border border-white/50 shadow-soft">
        
        {/* Decorative Wavy Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
           <svg viewBox="0 0 1440 320" className="absolute -top-20 -left-10 w-[120%] opacity-20">
             <path fill="#D32F2F" fillOpacity="0.1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
           </svg>
           <svg viewBox="0 0 1440 320" className="absolute -bottom-20 -right-10 w-[120%] opacity-20 rotate-180">
             <path fill="#1e3a8a" fillOpacity="0.05" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
           </svg>
        </div>

        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-12 md:bottom-20 md:left-24 z-20"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-premium flex items-center justify-center text-[#3b82f6] transform -rotate-12">
            <Shield size={48} className="md:w-12 md:h-12 w-8 h-8 drop-shadow-lg" />
            <div className="absolute inset-0 bg-blue-400/10 rounded-3xl animate-pulse" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 right-12 md:bottom-32 md:right-24 z-20"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-premium flex items-center justify-center text-primary-light transform rotate-12">
            <Mail size={48} className="md:w-12 md:h-12 w-8 h-8 drop-shadow-lg" />
            <div className="absolute inset-0 bg-primary/5 rounded-3xl animate-pulse" />
          </div>
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-secondary-dark leading-tight tracking-tight px-4"
          >
            Ready to priority your health journey with us?
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 px-4"
          >
            <Link 
              to="/contact" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-3xl font-black text-xl flex items-center gap-3 shadow-[0_20px_40px_-10px_rgba(211,47,47,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Book Visit Now</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href={`mailto:${contactInfo.email}`}
              className="bg-white/80 backdrop-blur-md border border-gray-100 text-primary px-8 py-4 rounded-3xl font-black text-xl flex items-center justify-center min-w-[200px] shadow-premium transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Email Support
            </a>
          </motion.div>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] -z-0" />
      </div>
    </section>
  );
};

export default CTASection;
