import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { departments } from '../constants';
import { CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col">
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
             Our Expertise
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-slate-900 leading-none"
          >
            Specialized <span className="text-primary ">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
             Providing comprehensive multi-specialty healthcare with advanced medical technology and compassionate care.
          </motion.p>
        </div>
      </section>

      {/* Services Grid with Premium Cards */}
      <section className="section-container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-20"
        >
          {departments.map((dept, idx) => (
            <motion.div 
              key={dept.id}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 aspect-video bg-white rounded-[3rem] shadow-2xl overflow-hidden group relative border border-gray-100">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />
                <div className="w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                  {dept.image ? (
                    <img 
                      src={dept.image} 
                      alt={dept.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="p-20">
                      <dept.icon size={120} className="text-primary/20 group-hover:text-primary transition-colors duration-500" />
                    </div>
                  )}
                </div>
                {/* Float Badge */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-lg border border-white">
                   <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Dept-0{idx + 1}</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black text-slate-800">{dept.name}</h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {dept.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {dept.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <CheckCircle size={18} />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                   <Link to="/contact" className="btn-primary h-14 px-10 flex items-center shadow-primary/20">
                     Book Consultation
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Banner - Premium Light Version */}
      <section className="relative py-30 mx-2 mb-10 overflow-hidden rounded-[5rem]">
        {/* Soft Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f79898] via-[#F0F7FF] to-[#f79898]" />
        
      {/* Content Container */}
    <div className="section-container relative ">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Modern Infrastructure</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900">Advanced Facilities for <br /><span className="text-primary">Better Healing.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Cashless Facility */}
            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              className="group p-12 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3.5rem] shadow-premium transition-all duration-500"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <ShieldCheck size={44} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight ">Cashless Facility</h3>
              <p className="text-slate-600 leading-relaxed font-medium">Collaborated with major TPAs and insurance providers for hassle-free treatment.</p>
            </motion.div>

            {/* 24/7 Response */}
            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ delay: 0.1 }}
              className="group p-12 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3.5rem] shadow-premium transition-all duration-500"
            >
              <div className="w-24 h-24 bg-blue-500/10 rounded-[2rem] flex items-center justify-center text-blue-600 mx-auto mb-8 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <Zap size={44} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight ">24/7 Response</h3>
              <p className="text-slate-600 leading-relaxed font-medium">Our emergency and diagnostic units are fully functional around the clock.</p>
            </motion.div>

            {/* Expert Board */}
            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ delay: 0.2 }}
              className="group p-12 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3.5rem] shadow-premium transition-all duration-500"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mx-auto mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                <ShieldCheck size={44} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight ">Expert Board</h3>
              <p className="text-slate-600 leading-relaxed font-medium">Multi-disciplinary team of highly qualified specialists for holistic care.</p>
            </motion.div>

          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 rounded-r-full blur-3xl -z-0" />
      </section>
    </div>
  );
};

export default Services;
