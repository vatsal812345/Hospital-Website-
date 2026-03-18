import { motion } from 'framer-motion';
import { Target, Eye, Award, Heart, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col">
      {/* Premium Header */}
      <section className="pt-48 pb-32 bg-secondary-dark relative overflow-hidden rounded-b-[5rem]">
         <div className="absolute top-0 left-0 w-full h-full bg-primary/5 skew-y-6 transform origin-top-left translate-y-20" />
         <div className="section-container relative z-10 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full text-[10px] font-black italic text-primary uppercase tracking-[0.3em]"
            >
              Our History & Values
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none">A Legacy of <span className="text-primary italic">Trust</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto italic">"Serving Surat with compassion and medical excellence since 2010"</p>
         </div>
      </section>

      {/* Modern Story Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Welcome to Aklera</span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">Leading The Way In <br /><span className="text-primary italic">Modern Care.</span></h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Founded over a decade ago, Aklera Hospital and Maternity Home has evolved into a cornerstone of healthcare in Surat. We blend traditional compassion with cutting-edge medical technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                "24/7 ICU & Emergency",
                "Advanced Labor Room",
                "Modern OT Facility",
                "Expert Specialists",
                "Digital X-Ray Center",
                "In-house Pharmacy"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-4 p-4 bg-accent/50 rounded-2xl border border-white hover:bg-white hover:shadow-lg transition-all duration-300 group">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle size={16} />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-accent rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white group relative">
               <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
               <div className="w-full h-full flex items-center justify-center bg-accent-light">
                 <ShieldCheck size={160} className="text-primary/10 animate-bounce-slow" />
               </div>
               
               {/* Stats Overlay */}
               <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-[3rem] shadow-2xl border-white border-[8px] animate-float">
                  <div className="text-5xl font-black text-primary mb-2">10+</div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-500 leading-none">Years Of excellence</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section with Glassmorphism */}
      <section className="bg-accent-light py-40 rounded-[6rem] mx-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full -z-0" />
        <div className="section-container relative z-10">
          <div className="text-center mb-24 space-y-4">
             <h2 className="text-4xl md:text-6xl font-black text-slate-900">Our Mission & <span className="text-primary italic">Vision</span></h2>
             <p className="text-xl text-slate-600 max-w-xl mx-auto">Defined by our commitment to patient well-being and clinical precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="premium-card bg-white p-16 space-y-8"
            >
              <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary/30">
                <Target size={48} />
              </div>
              <h3 className="text-4xl font-black text-slate-800 underline decoration-primary/20 decoration-8 underline-offset-8">Core Mission</h3>
              <p className="text-xl text-slate-600 leading-relaxed font-medium italic">
                "To deliver compassionate, world-class medical services that are patient-centered, technologically advanced, and ethically grounded."
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="premium-card bg-secondary-dark p-16 space-y-8 border-none"
            >
              <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center text-white border border-white/20">
                <Eye size={48} />
              </div>
              <h3 className="text-4xl font-black text-white underline decoration-white/10 decoration-8 underline-offset-8">Future Vision</h3>
              <p className="text-xl text-gray-400 leading-relaxed font-medium italic">
                "To remain the healthcare benchmark in our region, continuously evolving through innovation and dedicated clinical excellence."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Redefined */}
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Proven Experience</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900">Why Patients Trust Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: Award, title: "Board Certified", text: "Quality care from highly qualified and experienced medical specialists." },
            { icon: Heart, title: "Compassionate", text: "Treating every patient with dignity, respect, and personalized attention." },
            { icon: ShieldCheck, title: "State-Of-The-Art", text: "Equipped with latest medical technology for precise diagnosis and treatment." }
          ].map((item, idx) => (
            <div key={idx} className="group text-center space-y-8 p-10 rounded-[3rem] hover:bg-white hover:shadow-premium transition-all duration-500">
              <div className="w-24 h-24 bg-accent rounded-[2rem] flex items-center justify-center mx-auto text-primary border-4 border-white shadow-soft group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-[15deg]">
                <item.icon size={44} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.text}</p>
              </div>
              <button className="text-primary font-bold uppercase tracking-widest text-[10px] flex items-center mx-auto opacity-0 group-hover:opacity-100 transition-opacity">
                 Learn Standards <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
