import { Phone, Calendar } from 'lucide-react';
import { contactInfo } from '../constants';
import { motion } from 'framer-motion';

const FixedContactButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end space-y-6">
      {/* Book Appointment Pulsing Badge */}
      <motion.a
        href="/contact"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="flex items-center bg-secondary-dark text-white px-8 py-5 rounded-full shadow-2xl shadow-secondary-dark/30 group border-[6px] border-white"
      >
        <Calendar size={22} className="mr-3 text-primary animate-pulse" />
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] leading-none mb-1 opacity-60">Schedule</span>
          <span className="text-sm font-black whitespace-nowrap">Visit Now</span>
        </div>
      </motion.a>

      {/* Emergency Call Badge */}
      <motion.a
        href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        className="flex items-center bg-primary text-white px-8 py-5 rounded-full shadow-2xl shadow-primary/40 group border-[6px] border-white relative"
      >
        <div className="absolute -top-1 -right-1 flex h-6 w-6">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
          <span className="relative inline-flex rounded-full h-6 w-6 bg-white flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        </div>
        <Phone size={22} className="mr-3 animate-bounce" />
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] leading-none mb-1 opacity-70">24/7 Hotline</span>
          <span className="text-sm font-black whitespace-nowrap">Emergency</span>
        </div>
      </motion.a>
    </div>
  );
};

export default FixedContactButton;
