import { motion } from 'framer-motion';
import { User, Mail, Phone, ArrowRight, Instagram, Facebook, Twitter, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. K. Rathore",
      specialty: "General Physician & Critical Care",
      education: "MBBS, MD",
      experience: "15+ Years",
      days: "Mon - Sat",
      time: "10:00 AM - 08:00 PM"
    },
    {
      name: "Dr. S. Rathore",
      specialty: "Gynecology & Obstetrics",
      education: "MBBS, MS",
      experience: "12+ Years",
      days: "Mon - Sat",
      time: "11:00 AM - 07:00 PM"
    },
    {
      name: "Dr. Specialist",
      specialty: "Orthopedic Surgeon",
      education: "MBBS, MS (Ortho)",
      experience: "10+ Years",
      days: "By Appointment",
      time: "Call for Schedule"
    },
    {
      name: "Dr. Specialist",
      specialty: "Pediatrician",
      education: "MBBS, DCH",
      experience: "8+ Years",
      days: "Mon - Sat",
      time: "09:00 AM - 02:00 PM"
    }
  ];

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
             Excellence Since 2010
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black text-slate-900 leading-none"
          >
            Medical <span className="text-primary ">Board</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
             Meet the experts behind our compassionate healthcare services.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Profile Image Area */}
              <div className="relative aspect-[3/4] bg-accent rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white group-hover:-translate-y-4 transition-all duration-500">
                <div className="w-full h-full flex items-center justify-center bg-accent-light p-12">
                   <User size={120} className="text-primary/10 group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform">
                      <Instagram size={24} />
                   </a>
                   <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary hover:scale-110 transition-transform">
                      <Twitter size={24} />
                    </a>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl border border-white shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Award size={14} className="text-primary" />
                      <span className="text-[10px] font-black uppercase text-slate-500">Expert</span>
                    </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="mt-8 text-center space-y-2">
                <h3 className="text-2xl font-black text-slate-800 group-hover:text-primary transition-colors">{doc.name}</h3>
                <p className="text-sm font-bold text-primary italic uppercase tracking-widest">{doc.specialty}</p>
                
                <div className="pt-4 flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-4 text-xs font-bold text-slate-500 bg-accent px-6 py-2 rounded-full uppercase tracking-tighter">
                      <span className="flex items-center"><Star size={12} className="mr-1 text-primary" /> 4.9 Rating</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span>{doc.experience}</span>
                  </div>
                  <Link to="/contact" className="btn-primary h-12 px-8 flex items-center !shadow-none group-hover:!shadow-lg transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500">
                      Book Visit
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recruitment Banner */}
      <section className="section-container !pt-40">
        <div className="relative rounded-[4rem] overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 bg-accent-light -z-10" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight">Join Our Team of Specialists</h2>
              <p className="text-lg text-slate-600">Aklera Hospital is always looking for passionate medical professionals to grow with us.</p>
              <Link to="/contact" className="btn-outline h-16 px-12 flex items-center justify-center mx-auto bg-white border-transparent hover:border-primary !shadow-xl">
                  Career Opportunities <ArrowRight className="ml-2" />
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
