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
      <section className="relative pt-40 pb-32 overflow-hidden bg-accent-light">
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
            className="text-5xl md:text-8xl font-black text-slate-900 leading-none"
          >
            Specialized <span className="text-primary italic">Services</span>
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
                <div className="w-full h-full flex items-center justify-center p-20 transform group-hover:scale-110 transition-transform duration-700">
                   <dept.icon size={120} className="text-primary/20 group-hover:text-primary transition-colors duration-500" />
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
                   <button className="flex items-center space-x-2 text-slate-600 hover:text-primary font-bold transition-colors group">
                      <span>View Gallery</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trust Banner */}
      <section className="bg-secondary-dark py-32 rounded-[5rem] mx-4 mb-20 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="space-y-6 group">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mx-auto border border-primary/20 animate-bounce-slow">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-black text-white italic">Cashless Facility</h3>
              <p className="text-gray-400">Collaborated with major TPAs and insurance providers for hassle-free treatment.</p>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mx-auto border border-primary/20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <Zap size={40} />
              </div>
              <h3 className="text-2xl font-black text-white italic">24/7 Response</h3>
              <p className="text-gray-400">Our emergency and diagnostic units are fully functional around the clock.</p>
            </div>
            <div className="space-y-6">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mx-auto border border-primary/20 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-2xl font-black text-white italic">Expert Board</h3>
              <p className="text-gray-400">Multi-disciplinary team of highly qualified specialists for holistic care.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
