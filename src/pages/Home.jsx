import { motion } from 'framer-motion';
import { Phone, ArrowRight, Activity, ShieldCheck, Heart, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { departments, contactInfo, quickStats } from '../constants';
import doctorHero from '../assets/doctor_hero.png';
import CTASection from '../components/CTASection';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 lg:pt-28 pb-16 lg:pb-0 overflow-hidden bg-gradient-to-br from-white to-[#F0F7FF]">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[20rem] -z-0 hidden lg:block" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0" />
        
        <div className="section-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-3 px-5 py-2 bg-white rounded-full shadow-md border border-primary/10">
                <span className="flex h-3 w-3 rounded-full bg-primary animate-ping" />
                <span className="text-sm font-bold text-slate-800 uppercase tracking-[0.2em]">Excellence in Care Since 2010</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-black leading-tight tracking-tight drop-shadow-sm"
              >
                Modern <span className="text-primary">Healthcare,</span> <br />
                Trusted <span className="text-black">Excellence.</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-slate-700 leading-relaxed max-w-xl opacity-90">
                Experience world-class healthcare with expert physicians and advanced medical technology. We provide specialized maternity and multi-specialty services tailored to your needs.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 pt-4">
                <Link to="/contact" className="btn-primary flex items-center space-x-3 h-18 px-12 group transition-all duration-500">
                  <span className="text-xl">Book Appointment</span>
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/services" className="btn-outline flex items-center space-x-3 h-18 px-12 bg-white/50 backdrop-blur-sm">
                  <span className="text-xl">Our Services</span>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-8 pt-10 border-t border-gray-200/60 w-fit">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-white shadow-xl overflow-hidden bg-accent flex items-center justify-center">
                        <Star size={18} className="text-primary opacity-30" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-800 font-heading">10k+</span>
                  <span className="text-sm font-bold text-slate-500 tracking-wide">Satisfied Patients</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative hidden lg:flex justify-end"
            >
              <div className="relative group">
                {/* Floating Experience Badge */}
                <div className="absolute -top-6 -left-6 z-20 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-primary/10 animate-bounce-slow">
                   <div className="text-center">
                      <div className="text-3xl font-black text-primary leading-none">15+</div>
                       <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Years Exp.</div>
                   </div>
                </div>

                <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(30,58,138,0.25)] border-[16px] border-white max-w-lg transition-transform duration-700 group-hover:scale-[1.02]">
                  <img 
                    src={doctorHero} 
                    alt="Professional Doctor" 
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>
                
                {/* Float Badge Bottom */}
                <div className="absolute -bottom-10 -right-10 z-20 glass-card p-8 rounded-[3rem] shadow-2xl border border-white/50 animate-float">
                   <div className="flex items-center space-x-5">
                     <div className="w-16 h-16 bg-primary rounded-[1.5rem] flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <ShieldCheck size={32} />
                     </div>
                     <div>
                       <div className="text-xl font-black text-slate-800 leading-none">ISO Certified</div>
                       <div className="text-sm font-bold text-slate-500 mt-1">Global Standards</div>
                     </div>
                   </div>
                </div>

                {/* Background Shapes */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-primary/5 rounded-[6rem] -z-10 rotate-12" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Stats Floating Section */}
      <section className="relative z-20 -mt-16">
        <div className="section-container !py-0">
          <div className="bg-white p-2 rounded-[3rem] shadow-2xl border border-gray-50 flex flex-wrap lg:flex-nowrap">
            {quickStats.map((stat, idx) => (
              <div key={idx} className={`flex-1 min-w-[200px] p-10 flex flex-col items-center justify-center text-center border-b border-gray-100 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0`}>
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 
      Emergency Strip */}
      {/* <section className="py-24 overflow-hidden relative">
        <div className="section-container">
          <div className="bg-secondary-dark rounded-[1.5rem] md:rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between text-white border-8 border-white shadow-2xl">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-primary -z-10 skew-x-12 transform translate-x-20" />
             <div className="max-w-xl text-center md:text-left space-y-4">
               <h2 className="text-4xl md:text-5xl font-black italic">Emergency?</h2>
               <p className="text-xl text-gray-300">We are open 24/7 for all critical healthcare needs and maternity emergencies.</p>
             </div>
             <a href={`tel:${contactInfo.phones[0]}`} className="mt-10 md:mt-0 flex flex-col items-center group">
                <span className="text-lg font-bold uppercase tracking-[0.3em] mb-4 text-primary">Call Now</span>
                <span className="text-4xl md:text-6xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                  {contactInfo.phones[0].split(' ')[1]} {contactInfo.phones[0].split(' ')[2]}
                </span>
             </a>
          </div>
        </div>
      </section> */}

      {/* Departments Grid */}
      <section className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0 text-center md:text-left">
          <div className="max-w-2xl space-y-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Expert Solutions</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-800">Modern Medical Specialities</h2>
          </div>
          <Link to="/services" className="btn-outline px-12 h-14 flex items-center mx-auto md:mx-0">
             View All Departments
          </Link>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {departments.map((dept) => (
            <motion.div key={dept.id} variants={fadeInUp} className="premium-card group cursor-pointer flex flex-col h-full">
              <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg]">
                <dept.icon size={40} />
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-slate-800">{dept.name}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 opacity-90">
                {dept.description}
              </p>
              <Link to="/services" className="flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform duration-300 whitespace-nowrap mt-auto">
                <span>Explore Department</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Final */}
      <CTASection />
    </div>
  );
};

export default Home;
