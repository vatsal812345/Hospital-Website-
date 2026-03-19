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
      <section className="relative pt-25 pb-15 overflow-hidden bg-accent-light">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f79898] via-[#F0F7FF] to-[#f79898]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary-light)_0%,_transparent_70%)] opacity-5" />
        <div className="section-container relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-xs font-black uppercase tracking-[0.3em]"
          >
             Our History & Values
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-slate-900 leading-none"
          >
            A Legacy of <span className="text-primary ">Trust</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
             "Serving Surat with compassion and medical excellence since 2010"
          </motion.p>
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
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight">Leading The Way In <br /><span className="text-primary ">Modern Care.</span></h2>
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
            <div className="aspect-[4/5] bg-accent rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-red-300 group relative">
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
                <img 
                  src="/8.jpg" 
                  alt="Modern Care" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
               
               {/* Stats Overlay */}
                <div className="absolute -bottom-10 -left-15 glass-card p-10 rounded-[3rem] shadow-2xl border-red-300 border-[8px] animate-float">
                  <div className="text-5xl font-black text-primary mb-2">10+</div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-500 leading-none">Years Of excellence</div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="section-container pb-40">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Our <span className="text-primary ">Leadership Team</span></h2>
          <p className="text-xl text-slate-600 font-medium whitespace-pre-line leading-relaxed">Expert guidance and visionary leadership driving our hospital forward.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "S. Raju", role: "Director", img: "/9 (2).jpeg" },
            { name: "P. Chandu Patel", role: "Director", img: "/9(4).jpeg" },
            { name: "Dr. Ramakrishna Anumandla", role: "CEO", img: "/9 (3).jpeg" },
            { name: "Adarsh Tiwari", role: "Admin", img: "/9 (1)(1).jpeg" },
          
          ].map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] mb-8 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white group-hover:border-primary/10 transition-all duration-500">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="space-y-2 h-24 flex flex-col justify-start">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight px-4">{member.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mt-auto">{member.role}</p>
              </div>
            </motion.div>
          ))}
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
