import { Phone, Calendar } from 'lucide-react';
import { contactInfo } from '../constants';
import { motion } from 'framer-motion';

const FixedContactButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end space-y-4">
      {/* Book Appointment Pulsing Badge */}
      <motion.a
        href="/contact"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, y: -3 }}
        className="flex items-center bg-secondary-dark text-white px-5 py-3 rounded-full shadow-xl shadow-secondary-dark/30 group border-[4px] border-white"
      >
        <Calendar size={18} className="mr-2.5 text-primary animate-pulse" />
        <div className="flex flex-col">
          <span className="text-[8px] uppercase font-bold tracking-[0.2em] leading-none mb-0.5 opacity-60">Schedule</span>
          <span className="text-xs font-black whitespace-nowrap leading-none">Visit Now</span>
        </div>
      </motion.a>

      {/* Emergency Call Badge */}
      <motion.a
        href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, y: -3 }}
        className="flex items-center bg-primary text-white px-5 py-3 rounded-full shadow-xl shadow-primary/40 group border-[4px] border-white relative"
      >
        <div className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white flex items-center justify-center border border-primary/10">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        </div>
        <Phone size={18} className="mr-2.5 animate-bounce" />
        <div className="flex flex-col">
          <span className="text-[8px] uppercase font-bold tracking-[0.2em] leading-none mb-0.5 opacity-70">24/7 Hotline</span>
          <span className="text-xs font-black whitespace-nowrap leading-none">Emergency</span>
        </div>
      </motion.a>
    </div>
  );
};

export default FixedContactButton;
